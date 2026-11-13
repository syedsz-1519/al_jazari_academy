web application/stitch/projects/15978960411647255188/screens/ede134f667164150a817d978de8e51bc
# Product Requirements Document (PRD) & Design Brief
## Al-Jazari Educational Academy

**Version:** 1.0.0  
**Status:** Approved & Live Prototype  
**Target Viewports:** Responsive Web (Desktop 1280px+ & Mobile 360px–390px)  
**Primary Brand Anchor:** Bangalore, India • Global Online Reach  
**Design System Reference:** `Al-Jazari Academy Design System` (`#17316B` Deep Navy, `#CBA35A` Soft Gold)

---

## 1. Executive Summary & Vision

### 1.1 Mission & Value Proposition
**Al-Jazari Educational Academy** is an authentic, premier online Quran, Hifz, Tajweed, and Islamic sciences learning institution based in Bangalore, Karnataka, India. Guided by the institutional motto **"Knowledge That Inspires Real Change"**, the academy bridges traditional Islamic pedagogical excellence with modern, intuitive, friction-free digital experiences.

Unlike generic ed-tech platforms or unvetted private tutors, Al-Jazari Academy guarantees:
1. **Unbroken Chain of Oral Transmission (Sanad Muttasil & Ijazah)**: Instruction led by certified Huffaz, Qari'at, and scholars tracing chains of transmission back to the Prophet ﷺ through Cairo and Medina traditions.
2. **Strict One-to-One Personalization**: 100% focused private video classrooms (Google Meet) without group pace discrepancies.
3. **Dedicated Autonomous Sisters Wing**: Complete privacy safeguards, verified female faculty (Mu'allimat / Qari'at), optional video mode, and female coordinators.
4. **Transparent, Trustworthy Admissions**: Direct WhatsApp integration (`+91 9591250910`), free 15-minute diagnostic evaluations without credit card lock-ins, and flexible month-to-month tuition.

---

## 2. Target Personas & User Journeys

| Persona | Demographics & Context | Core Needs & Goals | Key Platform Touchpoints |
| :--- | :--- | :--- | :--- |
| **P1: Working Professional (Adult Learner)** | 24–45 yrs; Bangalore, GCC (UAE/Saudi), UK, US | Reconnect with Quran recitation, correct childhood Tajweed errors, evening/weekend slots | Quick WhatsApp diagnosis, Course Detail, Flexible Rescheduling Policy |
| **P2: Mindful Parent** | 30–50 yrs; NRI or Urban Indian family | Structured Hifz or Nazira for kids (age 5–16), structured homework log, child safety & vetting | Parent Co-Access terms, Progress Report preview, Assessment bottom sheet |
| **P3: Sister Seeking Modest Study** | Any age; seeking verified female scholarship | 100% female tutor pairing, audio-only recitation flexibility, zero male access | Sisters Wing Privacy guarantee, Dedicated Mu'allimah tags on Courses & Fees |
| **P4: Multilingual Community Member** | Native Urdu or Hindi speaker in India/Subcontinent | Intuitive access in native language, clear phone/WhatsApp admissions | 3-way language toggle in drawer menu (English, हिन्दी, اردو RTL) |

---

## 3. Product Architecture & Page Directory

The academy's interface is structured around a synchronized dual-tier system (Web Desktop 1280px + Native-feeling Mobile 360px Web App):

```
Al-Jazari Educational Academy
├── 1. Home (Landing Page)
│   ├── Scholarly Hero & Trust Badges (Sanad Certified, 1-on-1, Bangalore Desk)
│   ├── 4 Core Learning Disciplines Bento Grid
│   ├── Pedagogical Methodology (Makhraj, Sabak/Sabki/Manzil, Ijazah)
│   ├── Interactive Fee Estimator & Student Testimonials
│   └── Bangalore Studio Campus Map & Global Hours
├── 2. Curriculum & Courses Directory
│   ├── Track Filtering (Hifz, Tajweed, Nazira, Daur, Arabic)
│   ├── Track Cards with Hours, Pacing, and Prerequisites
│   └── 3-Way Methodology Comparison Matrix (1-on-1 vs Group vs Revision)
├── 3. Course Detail: Essential Hifz Track
│   ├── Classical 3-Tier Memorisation Cycle breakdown (Sabak, Sabki, Manzil)
│   ├── Curriculum Timeline & Milestone Roadmap
│   ├── Faculty Credential Dossier (Sanad Credentials)
│   └── Sticky Enrollment CTA Drawer / Bar
├── 4. Ilm Hub (Student Knowledge Base & Free Tools)
│   ├── Interactive Tajweed Audio Pronunciation & Makhraj Diagram
│   ├── Daily Quranic Reflection & Ayah Audio Player
│   ├── Downloadable Mushaf Worksheets & Surah Memorisation Checklists
│   └── WhatsApp Broadcast & Community Telegram Join Channel
├── 5. Institutional About Screen
│   ├── Scholarly Heritage & Al-Jazari Lineage (Ibn al-Jazari tradition)
│   ├── Academic Council & Bangalore Recording Studio Profile
│   └── Institutional Governance & Academic Integrity Code
├── 6. Transparent Fees & Comprehensive FAQ
│   ├── Monthly vs. Quarterly (-15%) Billing Frequency Toggle
│   ├── 3 Tuition Tiers: Essential (₹1,999), Standard (₹3,499), Intensive (₹5,999)
│   ├── Universal Inclusions Strip (Sanad, 1-on-1, Bi-weekly reports, Counselling)
│   └── 10-Question Comprehensive Admission Accordion
├── 7. App-Style Interactive Enrollment Flow
│   ├── Multi-Step Wizard: Student Profile ➔ Track Selection ➔ Slot Preference
│   └── Instant Diagnostic Booking with Google Meet Auto-Link
├── 8. Contact & Admissions Concierge
│   ├── Dual Fast Actions: Direct WhatsApp (<15m) & Direct Phone Line
│   ├── Interactive Bangalore Campus Locator (Koramangala Studio)
│   └── Rapid Inquiry Form with Preferred Call Slot Selector
└── 9. Core System Overlays & Utility States
    ├── Mobile Shell Navigation (Persistent 5-Tab Bar + Slide-in Drawer)
    ├── Localized Drawer Menus: Urdu (RTL) & Hindi (LTR)
    ├── 15-Minute Diagnostic Assessment Bottom Sheet Modal
    ├── Branded Splash Screen & Shimmer Skeleton Loading States
    ├── Post-Inquiry Thank You & Onboarding Roadmap (#AJ-2026-8941)
    ├── Realigned 404 Error Screen with Flat Rehal Vector Illustration
    └── Bottom Cookie Notice & Floating Green WhatsApp Launcher
```

---

## 4. Key Functional Requirements

### 4.1 Navigation & Shell Architecture
- **Desktop**: Pinned top navigation bar containing brand emblem, primary routes (`Home`, `Courses`, `Ilm Hub`, `Achievements`, `About`, `Fees & FAQ`, `Contact`), direct phone indicator, and high-visibility `Enroll Now` button. Deep navy persistent footer with comprehensive sitemap and institutional compliance notes.
- **Mobile Bottom Tab Bar**: Fixed 5-key tactile dock (`Home`, `Courses`, `Ilm Hub`, `Enroll`, `Contact`) utilizing an active pill indicator (`rounded-full`) and standard thumb ergonomics.
- **Mobile Drawer Menu**: Accessible via top hamburger; incorporates a 3-way language switch (`English`, `हिन्दी`, `اردو`), Quranic calligraphy header, curriculum tracks badges, and persistent Bangalore desk hotline.

### 4.2 Lead Generation & WhatsApp Funnel
- WhatsApp is positioned as the primary low-barrier conversion engine.
- WhatsApp number `+91 9591250910` is consistently surfaced in:
  - Header quick chips
  - Floating action bubble on every mobile screen
  - Bottom sheet and thank-you states for instant counselor handoff
  - Operating SLA guarantees (*under 15-minute response during 7:00 AM – 8:30 PM IST*).

### 4.3 Multilingual & Localization Support
- **Urdu Localization**: Full Right-to-Left (RTL) layout support, mirrored directional icons (chevrons pointing left), and specialized typography using `Noto Nastaliq Urdu` and `Amiri`.
- **Hindi Localization**: Left-to-Right (LTR) layout with `Noto Sans Devanagari` and appropriate cultural terminology (e.g., *शुल्क व सामान्य प्रश्न*, *सनद व इजाज़त सत्यापन*).

### 4.4 Data Protection & Student Safeguards (Privacy Policy)
- Explicit adherence to the **Indian Digital Personal Data Protection Act (DPDP Act 2023)** and **GDPR**.
- **Child Privacy**: Zero marketing or profiling on student records; mandatory parental co-access accounts.
- **Classroom Security**: Strict zero-recording policy without Dean approval; encrypted Google Meet conduits.

---

## 5. Design System Tokens & Brand Standards

### 5.1 Color Palette
- **Primary Navy (`#17316B`)**: Represents institutional authority, reverence, and scholarly depth.
- **Midnight Accent (`#0B1938`)**: For hero backgrounds, mobile splash gradients, and deep footers.
- **Secondary Sand / Soft Gold (`#CBA35A`)**: Accents, highlight badges, "Most Popular" plan indicator, star motifs.
- **Emerald Green (`#25D366` / `#16A34A`)**: WhatsApp triggers, confirmed status badges, verified checkmarks.
- **Light Surface Foundations**: Surface background (`#F7F9FD`), Card containers (`#FFFFFF`), Inactive borders (`#E2E8F0`).

### 5.2 Typography System
- **Latin Headings & UI Elements**: `Plus Jakarta Sans` (Weights: 400, 500, 600, 700, 800).
- **Sacred Qur'anic Verses & Arabic Titles**: `Amiri` / `Amiri Quran` with traditional vocalized diacritics (Tashkeel).
- **Urdu Nastaliq Text**: `Noto Nastaliq Urdu` (Optimized line height `2.2` to prevent diacritic clipping).
- **Devanagari UI Text**: `Noto Sans Devanagari` (Weights: 400, 500, 600).

### 5.3 Iconography & Art Direction
- **Strict Prohibition**: No human portraits, facial renderings, or photographic stock models of teachers or children.
- **Permitted Imagery**: Flat Islamic geometric vectors, stylized 8-point rub el hizb stars, geometric carved wooden rehal (bookstand) vectors, clean typography badges, and architectural arch frames.

---

## 6. Implementation Milestones & Screen Status

| Deliverable | Status | Target Device | Placeholder / Artifact ID |
| :--- | :--- | :--- | :--- |
| **Brand Identity & Redesign Sheet** | Completed | Vector / Assets | `{{DATA:IMAGE:IMAGE_59}}` |
| **Design System & Theme Tokens** | Completed | Global Token Set | `{{DATA:DESIGN_SYSTEM:DESIGN_SYSTEM_1}}` |
| **Home Screen (Desktop & Mobile)** | Completed | Desktop & Mobile | `{{DATA:SCREEN:SCREEN_55}}`, `{{DATA:SCREEN:SCREEN_57}}` |
| **Courses Hub (Desktop & Mobile)** | Completed | Desktop & Mobile | `{{DATA:SCREEN:SCREEN_53}}`, `{{DATA:SCREEN:SCREEN_51}}` |
| **Course Detail: Hifz (Desktop & Mobile)**| Completed | Desktop & Mobile | `{{DATA:SCREEN:SCREEN_49}}`, `{{DATA:SCREEN:SCREEN_47}}` |
| **Ilm Hub (Desktop & Mobile)** | Completed | Desktop & Mobile | `{{DATA:SCREEN:SCREEN_45}}`, `{{DATA:SCREEN:SCREEN_43}}` |
| **About Screen (Desktop & Mobile)** | Completed | Desktop & Mobile | `{{DATA:SCREEN:SCREEN_39}}`, `{{DATA:SCREEN:SCREEN_41}}` |
| **Enroll Multi-step (Desktop & Mobile)**| Completed | Desktop & Mobile | `{{DATA:SCREEN:SCREEN_37}}`, `{{DATA:SCREEN:SCREEN_35}}` |
| **Contact Screen (Desktop & Mobile)** | Completed | Desktop & Mobile | `{{DATA:SCREEN:SCREEN_33}}`, `{{DATA:SCREEN:SCREEN_31}}` |
| **Fees & FAQ Screen (Desktop & Mobile)** | Completed | Desktop & Mobile | `{{DATA:SCREEN:SCREEN_29}}`, `{{DATA:SCREEN:SCREEN_27}}` |
| **Privacy & Terms (Desktop & Mobile)** | Completed | Desktop & Mobile | `{{DATA:SCREEN:SCREEN_25}}`, `{{DATA:SCREEN:SCREEN_23}}` |
| **404 Error Screen (Desktop & Mobile)** | Completed | Desktop & Mobile | `{{DATA:SCREEN:SCREEN_21}}`, `{{DATA:SCREEN:SCREEN_19}}` |
| **Contact Thank-You (Desktop & Mobile)** | Completed | Desktop & Mobile | `{{DATA:SCREEN:SCREEN_17}}`, `{{DATA:SCREEN:SCREEN_15}}` |
| **Mobile App Shell: Drawer, Tab, Modals**| Completed | Mobile 360px | `{{DATA:SCREEN:SCREEN_13}}`, `{{DATA:SCREEN:SCREEN_11}}`, `{{DATA:SCREEN:SCREEN_9}}`, `{{DATA:SCREEN:SCREEN_7}}`, `{{DATA:SCREEN:SCREEN_4}}` |
| **Localized Drawers (Hindi & Urdu)** | Completed | Mobile / Desktop | `{{DATA:SCREEN:SCREEN_2}}`, `{{DATA:SCREEN:SCREEN_3}}` |

---

## 7. Success Metrics & Verification Rubric

1. **Admissions Conversion Velocity**: Time from landing page visit to scheduled 15-minute diagnostic assessment via WhatsApp or booking bottom sheet (< 2 minutes).
2. **Mobile Navigability**: Zero layout displacement across 360px viewport, persistent thumb tab ergonomics, clean drawer slide transitions.
3. **Scholarly Authenticity & Trust Rating**: 100% compliance with non-human graphic guidelines, correct Arabic Tashkeel rendering in Amiri, clear Sanad accreditation display.
4. **Localization Usability**: Flawless RTL alignment for Urdu readers and clean Devanagari typography for Hindi users.

