# Technical Requirements Document (TRD) & Engineering Architecture Brief
## Al-Jazari Educational Academy

**Version:** 1.0.0  
**Status:** Approved for Engineering Implementation  
**Architecture:** Distributed Web Application & Hybrid Mobile PWA  
**Primary Brand Anchor:** Bangalore, India • Global Distributed Infrastructure  
**Companion Documents:** Project PRD (`{{DATA:DOCUMENT:DOCUMENT_2}}`), Design System (`{{DATA:DESIGN_SYSTEM:DESIGN_SYSTEM_1}}`)

---

## 1. System Overview & Technical Goals

### 1.1 Technical Mission
The **Al-Jazari Educational Academy** software platform is an enterprise-grade, high-availability educational ecosystem designed to support high-fidelity real-time Quranic audio, low-latency live scheduling, multilingual internationalization (with seamless Right-to-Left bi-directional rendering), and automated admissions funnels.

### 1.2 Core Architectural Principles
1. **Low-Latency Global Reach**: Edge-cached static content via multi-region CDN (Cloudflare / AWS CloudFront) to cater to urban India (Bangalore hub), the GCC (UAE/Saudi Arabia), the UK, and North America.
2. **Deterministic Data Privacy & Compliance**: Strict enforcement of the Indian Digital Personal Data Protection Act (DPDP Act 2023) and GDPR Article 8 (Children's Online Privacy), featuring automated zero-knowledge data retention for underage students.
3. **Graceful Degradation & Network Resilience**: Sub-3-second load times on 3G/4G connections across rural and suburban Indian networks; offline PWA caching for Ilm Hub static audio and worksheets.
4. **Bi-directional Internationalization (BiDi i18n)**: Native RTL layout mirroring for Urdu Nastaliq script without layout shifts (CLS < 0.05).

---

## 2. System Architecture & Tech Stack

```
+-----------------------------------------------------------------------------------+
|                                Client Applications                                |
|  - Next.js 14+ App Router (Desktop Web & Mobile Viewports)                        |
|  - Progressive Web App (PWA) with Service Worker Offline Cache                    |
|  - Tailwind CSS + CSS Logical Properties (BiDi RTL/LTR)                           |
+------------------------------------------+----------------------------------------+
                                           | HTTPS / WSS / gRPC-Web
                                           v
+-----------------------------------------------------------------------------------+
|                        API Gateway & Edge Orchestration (Cloudflare)              |
|  - Geo-Routing & WAF (DDoS Mitigation & Bot Management)                           |
|  - Localization Resolver (GeoIP & Accept-Language fallback)                       |
|  - TLS 1.3 Termination & HTTP/3 Support                                          |
+------------------------------------------+----------------------------------------+
                                           |
                   +-----------------------+-----------------------+
                   v                                               v
+------------------------------------+           +----------------------------------+
|      Core Backend Services         |           |       Live Media Conduits        |
|  - NestJS / Node.js Microservices  |           |  - Google Meet API Integration   |
|  - Auth & IAM (OAuth2 / OTP)       |           |  - WebRTC Audio Telemetry Check  |
|  - Course & Curriculum Engine      |           |  - Web Audio API (Makhraj Visual)|
|  - WhatsApp Business Cloud API     |           |  - CDN Audio Streaming (Quran)   |
+------------------+-----------------+           +----------------------------------+
                   |
                   v
+-----------------------------------------------------------------------------------+
|                             Persistence & Storage Layer                           |
|  - PostgreSQL 16 (Relational Master with Row-Level Security for Sisters Wing)     |
|  - Redis Cluster (Session Cache, Rate Limiting & Diagnostic Booking Semaphores)    |
|  - AWS S3 / Cloudflare R2 (Encrypted Worksheets, Audio Samples, No Session Video) |
+-----------------------------------------------------------------------------------+
```

### 2.1 Technology Matrix

| Layer | Recommended Technology | Technical Justification |
| :--- | :--- | :--- |
| **Frontend Framework** | **Next.js 14+ (App Router, React 18/19, TypeScript)** | Server-side rendering (SSR) for scholarly SEO; Incremental Static Regeneration (ISR) for Course & Ilm Hub pages; React Server Components (RSC) to minimize client bundle size (< 90KB initial JS). |
| **Styling & Design Tokens** | **Tailwind CSS v3.4+ / PostCSS** | Tokenized design system matching `{{DATA:DESIGN_SYSTEM:DESIGN_SYSTEM_1}}`. Uses CSS logical properties (`start-`, `end-`, `ms-`, `me-`) for zero-CSS RTL/LTR switching. |
| **Typography Engines** | **Next/Font (Google Fonts Hosted)** | Zero layout-shift self-hosted font optimization: `Plus Jakarta Sans`, `Amiri Quran` (with full Tashkeel vocalization), `Noto Nastaliq Urdu`, and `Noto Sans Devanagari`. |
| **Backend Services** | **Node.js (NestJS / TypeScript) or Go** | Type-safe REST and GraphQL APIs, event-driven scheduling architecture, robust error boundaries. |
| **Database** | **PostgreSQL 16 (AWS RDS / Supabase Enterprise)** | ACID compliance for billing and enrollment; strict Row-Level Security (RLS) guaranteeing that Sisters Wing data is inaccessible to unauthorized roles. |
| **Caching & Queues** | **Redis v7 (ElastiCache / Upstash)** | Sub-millisecond session validation, distributed lock manager for slot bookings, BullMQ background worker queue for WhatsApp notifications. |
| **Storage (Object)** | **Cloudflare R2 / AWS S3** | Zero-egress fee encrypted storage for Ilm Hub PDF worksheets, audio clips, and Sanad verification certificates. |
| **Real-time / Comms** | **WhatsApp Business Cloud API (Meta Graph API v19+)** | Primary conversion engine; automated webhook processing for immediate counselor routing under 15 minutes. |
| **Video Conduits** | **Google Meet Enterprise REST API / Google Calendar API** | Automated generation of encrypted, invite-only Google Meet rooms with host admission controls and server-side recording block policies. |

---

## 3. Data Models & Database Schema

The database relies on PostgreSQL with strict referential integrity, UUID primary keys, and timestamp audit trails.

```sql
-- Enums
CREATE TYPE user_role AS ENUM ('student', 'guardian', 'teacher', 'admin', 'coordinator');
CREATE TYPE gender_category AS ENUM ('male', 'female', 'child_unspecified');
CREATE TYPE track_type AS ENUM ('tajweed_makhraj', 'essential_hifz', 'nazira', 'daur_revision', 'arabic');
CREATE TYPE lead_status AS ENUM ('new_inquiry', 'diagnostic_booked', 'evaluated', 'enrolled', 'inactive');
CREATE TYPE slot_time_window AS ENUM ('morning', 'afternoon', 'evening');

-- 1. Users & Guardians (Strict Minor Protection)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(120) NOT NULL,
    email VARCHAR(255) UNIQUE,
    phone_number VARCHAR(20) NOT NULL,
    country_code VARCHAR(6) DEFAULT '+91',
    whatsapp_number VARCHAR(20) NOT NULL,
    role user_role DEFAULT 'student',
    gender gender_category NOT NULL,
    is_minor BOOLEAN DEFAULT FALSE,
    guardian_id UUID REFERENCES users(id) ON DELETE SET NULL,
    timezone VARCHAR(50) DEFAULT 'Asia/Kolkata',
    preferred_locale VARCHAR(10) DEFAULT 'en', -- 'en', 'hi', 'ur'
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for phone/whatsapp queries (WhatsApp Admissions Funnel)
CREATE INDEX idx_users_whatsapp ON users(whatsapp_number);

-- 2. Admissions Inquiries & Diagnostics
CREATE TABLE admissions_leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reference_id VARCHAR(30) UNIQUE NOT NULL, -- e.g., 'AJ-2026-8941'
    student_name VARCHAR(120) NOT NULL,
    age INT,
    whatsapp_number VARCHAR(20) NOT NULL,
    course_track track_type NOT NULL,
    preferred_window slot_time_window NOT NULL,
    status lead_status DEFAULT 'new_inquiry',
    assigned_advisor_name VARCHAR(100) DEFAULT 'Ustadh Bilal Tariq',
    meet_link TEXT,
    diagnostic_notes TEXT,
    source_screen VARCHAR(50) DEFAULT 'Mobile Bottom Sheet',
    ip_hash VARCHAR(64), -- Anonymized for DPDP compliance
    created_at TIMESTAMPTZ DEFAULT NOW(),
    scheduled_at TIMESTAMPTZ
);

-- 3. Hifz & Tajweed Student Progress Logs (Sabak, Sabki, Manzil)
CREATE TABLE student_progress_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    teacher_id UUID NOT NULL REFERENCES users(id),
    session_date DATE NOT NULL DEFAULT CURRENT_DATE,
    
    -- Classical 3-Tier Memorisation Cycle Metrics
    sabak_surah INT,
    sabak_ayah_start INT,
    sabak_ayah_end INT,
    sabak_rating INT CHECK (sabak_rating BETWEEN 1 AND 5),
    
    sabki_juz INT,
    sabki_pages_reviewed INT,
    sabki_rating INT CHECK (sabki_rating BETWEEN 1 AND 5),
    
    manzil_juz INT,
    manzil_rating INT CHECK (manzil_rating BETWEEN 1 AND 5),
    
    tajweed_makhraj_notes TEXT,
    phonetic_clarity_score DECIMAL(4, 2), -- e.g. 98.50%
    is_shared_with_parent BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Sisters Wing Segregation (Row-Level Security Rule)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY sisters_wing_isolation_policy ON users
    FOR ALL
    TO authenticated
    USING (
        -- Admins have access, female staff have access to female students,
        -- male teachers are strictly blocked from female students over 10 years old.
        current_setting('app.current_user_role') = 'admin' OR
        (current_setting('app.current_user_gender') = 'female' AND gender = 'female') OR
        (current_setting('app.current_user_gender') = 'male' AND gender = 'male') OR
        (is_minor = TRUE AND current_setting('app.current_user_role') IN ('teacher', 'coordinator'))
    );
```

---

## 4. API Specifications & Integration Contracts

### 4.1 RESTful / RPC Endpoints

#### `POST /api/v1/admissions/quick-inquiry`
Receives diagnostic assessment requests from the mobile bottom sheet modal and desktop enrollment wizard.

- **Request Payload**:
```json
{
  "student_name": "Zayd Ibrahim",
  "age": 11,
  "whatsapp_number": "+919591250910",
  "track": "essential_hifz",
  "preferred_window": "afternoon",
  "locale": "en",
  "lead_source": "bottom_sheet_modal"
}
```

- **Response Payload (201 Created)**:
```json
{
  "success": true,
  "data": {
    "reference_id": "AJ-2026-8941",
    "status": "In Review • Advisor Assigned",
    "assigned_advisor": {
      "name": "Ustadh Bilal Tariq",
      "desk": "Bangalore Admissions Desk"
    },
    "sla_window": "< 15 mins on WhatsApp",
    "whatsapp_direct_deep_link": "https://wa.me/919591250910?text=Salam%2C%20I%20have%20submitted%20inquiry%20%23AJ-2026-8941%20for%20Zayd%20Ibrahim."
  }
}
```

#### `GET /api/v1/ilm-hub/resources`
Fetches audio recordings, Surah memorisation checklists, and Makhraj diagrams with edge-cached ETag headers.

- **Query Parameters**:
  - `category`: `tajweed` | `makhraj` | `hifz_tracker` | `daily_ayah`
  - `locale`: `en` | `hi` | `ur`
- **Cache-Control**: `public, s-maxage=3600, stale-while-revalidate=86400`

---

## 5. WhatsApp Conversational Funnel Engine

WhatsApp serves as the critical low-friction onboarding conduit.

```
[ User Submits Bottom Sheet / Form ]
                 |
                 v
[ Webhook Trigger: BullMQ Worker ]
                 |
                 +-------------------------------------------------+
                 |                                                 |
                 v                                                 v
   [ 1. Meta Cloud API Outbound ]                   [ 2. Internal Bangalore Desk ]
   Dispatches instant automated receipt             Alerts on-duty counselor Slack /
   with Reference ID #AJ-2026-8941                  CRM dashboard with 1-click
   and direct counselor intro.                      WhatsApp click-to-chat.
```

- **Outbound WhatsApp Payload (Template)**:
  - Template Name: `aljazari_inquiry_confirmation_v1`
  - Body: *"Assalamu Alaikum {{1}}, we have received your evaluation request (Ref: {{2}}) for {{3}}. An Academic Counselor from our Bangalore Desk will coordinate your 15-minute diagnostic Meet link within 15 minutes."*
  - Interactive Action Buttons:
    1. *"Connect Live on WhatsApp"*
    2. *"View Diagnostic Preparation Guide"*

---

## 6. Frontend Internationalization (i18n) & Typography Engineering

### 6.1 Directionality & RTL Styling Protocol
- All spatial utility classes must leverage Tailwind's CSS logical properties:
  - `margin-left` / `margin-right` $\to$ `ms-*` (margin-inline-start), `me-*` (margin-inline-end)
  - `padding-left` / `padding-right` $\to$ `ps-*`, `pe-*`
  - `text-left` / `text-right` $\to$ `text-start`, `text-end`
  - Left chevrons (`fa-chevron-right`) automatically rotate 180 degrees in RTL context (`rtl:rotate-180`).

### 6.2 Arabic & Urdu Font Loading Strategy
1. **Sacred Arabic Recitation Text**:
   - Font Family: `Amiri Quran`, `Amiri`
   - Feature Settings: `"cv01" on, "calt" on, "liga" on`
   - Line-Height: Padded to `2.4` to prevent high-vowel and Tanween diacritic clipping.
2. **Urdu Nastaliq Script**:
   - Font Family: `Noto Nastaliq Urdu`
   - Line-Height: Fixed minimum `2.2` (prevents vertical overlaps in cascading Nastaliq ligatures).
3. **Hindi Devanagari Script**:
   - Font Family: `Noto Sans Devanagari`
   - Optimized for standard Indian mobile handsets.

---

## 7. Security, Compliance & Data Protection

### 7.1 Digital Personal Data Protection Act (DPDP Act 2023) Mandates
1. **Verifiable Parental Consent (VPC)**:
   - For learners under 18 years, account creation requires adult verification via phone OTP.
   - Separate parent dashboard credentials granted with synchronized progress review privileges.
2. **Right to Erasure & Data Minimization**:
   - Audio homework submissions older than 90 days are automatically purged from S3 storage buckets.
   - Class diagnostic records anonymized after 180 days of student inactivity.
3. **Classroom Recording Prohibition**:
   - Google Meet API configuration deploys strict policies disallowing local participant screen-recording.
   - Teachers sign binding intellectual property covenants with zero student video harvesting.

---

## 8. Non-Functional Requirements (NFRs) & Performance Budgets

| Metric | Target SLA | Monitoring / Verification Method |
| :--- | :--- | :--- |
| **First Contentful Paint (FCP)** | $\le$ 1.2s | Google Lighthouse / SpeedCurve |
| **Largest Contentful Paint (LCP)** | $\le$ 2.0s on 4G | Real User Monitoring (RUM) via Cloudflare Web Analytics |
| **Cumulative Layout Shift (CLS)** | $\le$ 0.05 across LTR & RTL | Chrome DevTools Lighthouse Audit |
| **Interaction to Next Paint (INP)**| $\le$ 150ms | Vercel Analytics / Datadog APM |
| **System Uptime** | 99.95% Availability | Datadog Synthetic Monitoring across Bangalore, Dubai, London nodes |
| **WhatsApp Message Delivery SLA**| $\le$ 5 seconds | Meta Cloud API Webhook latency tracer |
| **Maximum Client Initial Bundle** | $\le$ 95 KB gzipped | Next.js Bundle Analyzer |

---

## 9. Deployment & DevOps Pipeline

- **Continuous Integration (CI)**: GitHub Actions running TypeScript typechecks, ESLint accessibility audits (a11y), RTL visual regression tests (Playwright), and unit test suites.
- **Preview Deployments**: Automated Vercel ephemeral review environments per pull request.
- **Production Edge Hosting**: Vercel Enterprise or AWS ECS Fargate with Cloudflare Enterprise CDN edge caching.
- **Disaster Recovery**: Automated nightly PostgreSQL WAL backups with 15-minute Recovery Point Objective (RPO) and 1-hour Recovery Time Objective (RTO).
