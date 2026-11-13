# Al-Jazari Academy Website — Requirements Document

## Overview

Build a production-ready, mobile-first website for Al-Jazari Educational Academy (online Quran, Hifz, Tajweed, Tafseer academy based in Bangalore, India).

**Vision:** Professional, minimal, app-like interface that matches Stitch design prototypes pixel-faithfully while maintaining exceptional performance and accessibility.

---

## Project Goals

1. **Pixel-Faithful Design:** Match HTML/CSS from Stitch exports exactly (colors, typography, spacing, radii, shadows, layout).
2. **Mobile-First:** Responsive at 360px, 768px, 1280px+ with zero layout shift.
3. **Performance:** Lighthouse 90+, lazy-loaded routes, optimized images.
4. **Accessibility:** WCAG AA, semantic HTML, visible focus, keyboard-navigable.
5. **Content Management:** All content in typed data files (`src/data/`) + config (`src/config/site.ts`).
6. **SEO:** Per-page title/description, OG tags, sitemap, robots.txt, JSON-LD.
7. **User Engagement:** Multi-step form, calculator, filters, lightbox, interactive features.

---

## Scope

### In Scope
- 12 pages (routes) with full responsive designs
- Enrollment form with validation and submission handling
- Interactive features (calculator, diagram, filters, accordion)
- Form submission to external endpoint (Google Apps Script, Formspree, etc.)
- WhatsApp integration (chat button, prefilled messages)
- Mobile drawer menu + bottom tab navigation
- Component library (Button, Card, Accordion, Modal, etc.)
- Deployment configuration (Vercel SPA rewrite)
- SEO, accessibility, performance optimizations

### Out of Scope
- User authentication / student portal login (UI mock only)
- Backend API (form submission via external service)
- CMS integration
- Payment processing
- Real-time notifications
- Analytics (setup stubs only)
- Dark mode (light mode only)

---

## Target Audience

- Students aged 5+ (beginners to advanced Quran learners)
- Parents and guardians
- Professionals seeking Quran/Tajweed training
- Device range: mobile (360px+), tablet (768px+), desktop (1280px+)
- Geographic: India-focused (Bangalore base), global reach

---

## Pages & Features

### 1. Home `/`
- Hero section with CTA ("Enroll Now", "Explore Courses")
- Quick stats (students, tutors, countries)
- Featured courses carousel (3–4 courses)
- Testimonials / social proof
- FAQ quick preview
- Call-to-action banner (WhatsApp, phone)

### 2. Courses `/courses`
- Course grid with filter tabs (All, Hifz, Tajweed, Recitation, Islamic Studies)
- Search bar (client-side filter by title/description)
- Course card: image, title, level, duration, price, "Learn More" + "Enroll" CTAs
- Pagination or infinite scroll (TBD, mock data for now)

### 3. Course Detail `/courses/:slug`
- Course hero (title, level, price, rating)
- Tabs: Overview, Syllabus, Schedule, Fees, FAQ
- Syllabus: curriculum as accordion by Surah/chapter
- Schedule: time slots, batch timings
- Fees: pricing options, discounts, payment info
- FAQ: common questions for this course
- Sticky CTA: "Enroll in Course" (desktop right sidebar, mobile bottom)

### 4. Enrollment `/enroll`
- 4-step form with visual stepper:
  - **Step 1:** Student Details (Name*, Place*, Gender, Date of Birth)
  - **Step 2:** Course & Timing (Course*, Preferred Timings*, Current Progress, Start Date)
  - **Step 3:** Background (Student Status*, Contact Number*, Email, Preferred Contact)
  - **Step 4:** Review & Submit (summary + consent checkbox + submit)
- Form state persisted to localStorage (draft mode)
- Validation using Zod schema
- Success screen with WhatsApp fallback button
- Error handling and retry logic

### 5. Ilm Hub `/ilm-hub`
- **Hifz Duration Calculator:** Verse/Juz slider → estimated completion time (data from table)
- **Makhraj Interactive Diagram:** Tap throat region → show Arabic letters + pronunciation guide
- **Daily Ayah Reminder:** Card showing today's featured verse (static or rotation)
- **Revision Tracker:** Log daily revision + streak counter (localStorage)
- **Articles/Resources:** Grid of Ilm Hub cards (articles, videos, downloads)
- Tabs: Articles, Videos, Downloads, Q&A

### 6. Achievements `/achievements`
- Masonry gallery of student achievements (photos, certificates, events)
- Filter chips: certificates, events, competitions
- Lightbox for full image view
- Featured event card: "Qirat and Nazam Competition 2026"
- Event details: date, registration link, winners gallery

### 7. About `/about`
- Mission & vision statement
- Timeline: key milestones (founding, first students, certifications, etc.)
- Team section: founder/tutors (cards with photos, bios, qualifications)
- Values section
- Testimonials carousel

### 8. Contact `/contact`
- Contact info cards: phone, email, Instagram, address
- Inquiry form (Name, Email, Subject, Message) with validation
- Map embed (Google Maps iframe if possible)
- Social media links
- WhatsApp and call buttons (sticky or inline)

### 9. FAQ & Fees `/faq-fees`
- FAQ accordion by category (Enrollment, Fees, Schedule, General, Technical)
- Pricing plans: monthly vs. quarterly toggle
- Plan cards: price, features, "Enroll" CTA
- Comparison table (optional)

### 10. Ilm Hub Resources Page — TBD / Merged with `/ilm-hub`
- Or create `/ilm-hub/resources` for cleaner IA

### 11. Portal `/portal`
- **UI Mock (Demo Data)**
  - Login screen: "Enter OTP" (non-functional, shows dummy data on submit)
  - Dashboard: enrolled courses, progress rings, upcoming sessions, certificates
  - Clearly marked: "This is a demo. Real login will be added post-launch."

### 12. Legal Pages
- `/privacy` — Privacy Policy (placeholder)
- `/terms` — Terms & Conditions (placeholder)

### 13. 404 Page `*`
- Custom 404 with navigation links

---

## Design System

### Colors (from DESIGN.md & HTML)
| Token | Value | Usage |
|---|---|---|
| primary | `#001B4F` | Buttons, headings, nav |
| secondary | `#775A17` | Accents, gold highlights |
| tertiary | `#002514` | Green accents, footer |
| surface | `#F7F9FD` | Main background |
| surface-container | `#FFFFFF` | Cards, elevated surfaces |
| on-surface | `#181C1F` | Primary text |
| on-surface-variant | `#444650` | Secondary text, disabled |
| error | `#BA1A1A` | Error states |
| success | `#2E9E6B` | Success states |
| outline | `#E1E6F2` | Borders, dividers |

### Typography
| Token | Family | Weight | Size (Desktop) | Size (Mobile) | Usage |
|---|---|---|---|---|---|
| headline-xl | Poppins | 700 | 48px | 36px | Page titles |
| headline-lg | Poppins | 700 | 36px | 28px | Section titles |
| headline-md | Poppins | 600 | 24px | 22px | Card titles |
| headline-sm | Poppins | 600 | 18px | 18px | Subheadings |
| body-lg | Inter | 400 | 18px | 16px | Rich text |
| body-md | Inter | 400 | 16px | 14px | Body text (default) |
| body-sm | Inter | 400 | 14px | 13px | Secondary text |
| label | Inter | 500 | 14px | 13px | Labels, buttons |
| arabic | Amiri | 400 | 24px+ | 20px+ | Quranic verses (RTL) |

### Spacing
- xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, 2xl: 48px
- Section padding: 48px (mobile), 80px (desktop)
- Gutter: 16px (mobile), 24px (desktop)

### Border Radius
- Buttons: 12px
- Cards: 16px
- Inputs: 8px
- Pills/Chips: 999px
- Modals: 24px

### Shadows
- Subtle: `0 2px 8px rgba(0, 27, 79, 0.08)`
- Card: `0 6px 20px rgba(0, 27, 79, 0.10)`
- Lifted: `0 12px 28px rgba(0, 27, 79, 0.12)`
- Modal: `0 16px 40px rgba(0, 27, 79, 0.16)`

### Responsive Breakpoints
- Mobile: 320px–767px
- Tablet: 768px–1023px
- Desktop: 1024px–1279px
- Wide: 1280px+

---

## Technical Requirements

### Frontend Framework
- **Vite** (build tool, fast HMR)
- **React 18+** (UI framework)
- **TypeScript** (type safety)
- **React Router v6** (client-side routing)
- **Tailwind CSS v4** (styling with @theme block, no @apply)
- **lucide-react** (icons, Material Symbols fallback)
- **Framer Motion** (light animations, fade-up on scroll)
- **React Hook Form** + **Zod** (form handling + validation)

### Fonts
- **Poppins** (headings, Google Fonts)
- **Inter** (body, Google Fonts)
- **Amiri** (Arabic, full tashkeel support, Google Fonts)

### Build & Deployment
- **Vercel** (recommended hosting)
- **vercel.json** with SPA rewrite (all routes → index.html)
- **Environment variables** (.env.local):
  - `VITE_FORM_ENDPOINT` — form submission URL
  - `VITE_WHATSAPP_NUMBER` — WhatsApp contact number
  - Other config as needed

### Code Structure
```
src/
  ├── components/
  │   ├── ui/                    # Reusable UI components
  │   │   ├── Button.tsx
  │   │   ├── Card.tsx
  │   │   ├── Accordion.tsx
  │   │   ├── Tabs.tsx
  │   │   ├── Stepper.tsx
  │   │   ├── FormField.tsx
  │   │   ├── Modal.tsx
  │   │   ├── BottomSheet.tsx
  │   │   ├── Toast.tsx
  │   │   ├── ProgressRing.tsx
  │   │   └── [more UI components]
  │   ├── layout/                # Layout components
  │   │   ├── TopAppBar.tsx
  │   │   ├── BottomTabBar.tsx
  │   │   ├── Drawer.tsx
  │   │   ├── Footer.tsx
  │   │   ├── FloatingWhatsApp.tsx
  │   │   └── PageLayout.tsx
  │   └── features/              # Feature components
  │       ├── HifzCalculator.tsx
  │       ├── MakhrajDiagram.tsx
  │       └── [feature components]
  ├── pages/                     # Page components (routes)
  │   ├── Home.tsx
  │   ├── Courses.tsx
  │   ├── CourseDetail.tsx
  │   ├── IlmHub.tsx
  │   ├── Enroll.tsx
  │   ├── Contact.tsx
  │   ├── [more pages]
  │   └── NotFound.tsx
  ├── data/                      # Typed data files
  │   ├── courses.ts
  │   ├── faqs.ts
  │   ├── team.ts
  │   ├── ilmHub.ts
  │   ├── hifzDuration.ts
  │   ├── achievements.ts
  │   ├── makhraj.ts
  │   └── [more data files]
  ├── lib/                       # Utilities
  │   ├── classNames.ts
  │   ├── validation.ts
  │   ├── api.ts
  │   └── utils.ts
  ├── config/
  │   └── site.ts               # Central config: contact, links, endpoints
  ├── hooks/                     # Custom hooks
  │   ├── useMediaQuery.ts
  │   ├── useScrollLock.ts
  │   └── useLocalStorage.ts
  ├── App.tsx                    # Main app + routing
  ├── main.tsx                   # Vite entry point
  └── index.css                  # Global styles + Tailwind imports
```

### Environment Variables
```
VITE_FORM_ENDPOINT=https://script.google.com/macros/s/[ID]/usercoderun
VITE_WHATSAPP_NUMBER=919591250910
VITE_SITE_URL=https://aljazari.academy
```

---

## Content Requirements

### Text Content
- All text must come from `src/data/` and `src/config/site.ts`
- No hardcoded strings in components (except UI text like "Next", "Close", etc.)
- Placeholder content clearly marked (e.g., `[PLACEHOLDER: Tutor names]`)

### Data Files (TypeScript)
- `courses.ts` — Course[]
- `faqs.ts` — FAQ[]
- `team.ts` — TeamMember[]
- `achievements.ts` — Achievement[]
- `ilmHub.ts` — IlmHubItem[]
- `hifzDuration.ts` — HifzDurationRow[] (verses/day → estimated months)
- `makhraj.ts` — MakhrajRegion[] (throat anatomy + letters)

### Images & Media
- Logo (SVG or PNG, from Stitch design)
- Placeholder avatars (stock images or placeholder service)
- Placeholder course images
- Placeholder achievement/certificate images

### Contact Information
- Phone: `+91 9591250910`
- Instagram: `@al_jazari_educational_academy`
- Email: `[PLACEHOLDER]`
- Address: `[PLACEHOLDER]`
- WhatsApp: Same as phone (default)

---

## Functional Requirements

### Form Submission (Enrollment)
1. User fills 4-step form
2. On "Submit":
   - Validate all fields via Zod
   - POST to `VITE_FORM_ENDPOINT` with JSON body
   - Show loading state
   - On success: show success screen with WhatsApp fallback button
   - On error: show error message + retry button
3. Fallback: If endpoint fails, offer prefilled WhatsApp message: *"Hi, I'd like to enroll in [Course]. My details: Name: [name], Contact: [phone], Current Progress: [progress]"*

### Calculator (Hifz Duration)
- User adjusts slider: verses per day (0–10)
- Lookup in `hifzDuration.ts` table
- Display result: *"Estimated completion: X–Y months"*
- Show progress ring based on current Juz (if applicable)

### Makhraj Diagram
- SVG with clickable regions (lips, teeth, alveolus, palate, uvula, throat, etc.)
- On tap: highlight region + show Arabic letters for that articulation
- On desktop: sidebar panel with details; on mobile: BottomSheet
- Audio pronunciation (optional, can skip if not provided)

### Revision Tracker
- LocalStorage key: `alJazari_revisionTracker`
- Track: date, Juz number, verses reviewed
- Display streak counter + calendar heatmap (optional)
- Show last 30 days

### Filter & Search
- Courses page: filter by category (tabs), search by title
- Ilm Hub: filter by type (tabs), search by keyword
- Updates URL query params for bookmarkable links

### Responsive Behavior
- **Mobile (360px):** Single-column, stacked cards, bottom CTA buttons, drawer menu for nav
- **Tablet (768px):** 2-column grids, adjusted spacing
- **Desktop (1280px):** 3–4 column grids, sticky sidebars, expanded nav

---

## Non-Functional Requirements

### Performance
- Lighthouse score: 90+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint (FCP): < 2s
- Largest Contentful Paint (LCP): < 3s
- Cumulative Layout Shift (CLS): < 0.1
- Images: lazy-loaded, optimized (WebP, AVIF where possible)
- Routes: code-split via React Router

### Accessibility (WCAG 2.1 AA)
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, etc.)
- Alt text on all images
- Visible focus rings (2px, offset)
- Color contrast: 4.5:1 for body text, 3:1 for large text
- Keyboard navigation: Tab, Enter, Escape, Arrow keys where applicable
- ARIA labels on buttons, modals, dialogs
- Form labels linked to inputs via `htmlFor`
- `aria-live` regions for dynamic content (toasts, form errors)
- Prefers reduced motion respected

### SEO
- Page titles: `<title>` per page (e.g., "Learn Quran & Hifz Online | Al-Jazari Academy")
- Meta descriptions (160 chars)
- Open Graph tags (og:title, og:description, og:image, og:url)
- Twitter Card tags (optional)
- Sitemap.xml (generated at build time or static)
- robots.txt (allow all, sitemap reference)
- JSON-LD for EducationalOrganization, CourseOffering, Event (optional)
- Favicon (from logo)
- Canonical links (if needed)

### Browser Support
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest, iOS 14+)
- Edge (latest)
- No IE11 support required

---

## Success Criteria

- [ ] All 12 pages built and responsive at 360px, 768px, 1280px
- [ ] Enrollment form submits successfully to external endpoint
- [ ] Lighthouse audit: 90+ on Performance, Accessibility, Best Practices
- [ ] All text/links/data from typed files (no hardcoding)
- [ ] Form validation working correctly
- [ ] Mobile drawer menu + bottom tab bar functional
- [ ] Pixel-faithful match to Stitch designs (colors, spacing, typography)
- [ ] Zero build errors and warnings
- [ ] README with setup, deployment, placeholder list, QA checklist

---

## Deliverables

1. **Codebase:** Ready-to-run Vite project (`npm install && npm run dev`)
2. **Build:** Zero errors/warnings on `npm run build`
3. **Deployment:** Vercel SPA rewrite configured (vercel.json)
4. **Documentation:**
   - README.md (setup, env vars, content editing)
   - Placeholder list (fees, tutors, email, etc.)
   - QA checklist (what was tested)
5. **Code Review:** Code is clean, well-commented, follows TypeScript best practices

---

## Timeline (Estimated)

- Week 1: Setup, UI components library, layout components
- Week 2: Core pages (Home, Courses, About, Contact)
- Week 3: Detail pages (Course Detail, Ilm Hub, Achievements)
- Week 4: Enrollment form, Portal mock, Legal pages
- Week 5: Forms, validation, submission handling
- Week 6: Mobile responsiveness, accessibility audit, performance optimization
- Week 7: Deployment, documentation, QA

---

## Assumptions

1. All content text can be managed in TypeScript data files (no CMS needed for MVP).
2. Form submissions go to external service (Google Apps Script, Formspree, etc.) — backend not built here.
3. Student names, tutor photos, testimonials are placeholders (marked clearly).
4. Fees and pricing are placeholders (to be filled by client).
5. No real authentication — Portal is UI mock only.
6. Single language UI for MVP (Urdu/Hindi labels can be added later via i18n).
7. Images are sourced externally or use placeholder service.
8. Mobile drawer and bottom tab bar are the main mobile nav (no hamburger menu on desktop tablet).

