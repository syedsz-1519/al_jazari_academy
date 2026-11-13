# Al-Jazari Academy Website — Task Breakdown

## Overview

This document breaks down the build into granular, sequential tasks. Each task includes acceptance criteria and should be verified before moving to the next task.

---

## Phase 1: Project Setup & Infrastructure (Days 1–2)

### Task 1.1: Initialize Vite + React + TypeScript Project
**Description:** Set up a new Vite project with React, TypeScript, and required dependencies.

**Steps:**
1. Create new Vite project: `npm create vite@latest aljazari-academy -- --template react-ts`
2. Install dependencies:
   ```bash
   npm install
   npm install react-router-dom
   npm install tailwindcss @tailwindcss/vite
   npm install -D typescript postcss
   npm install framer-motion
   npm install react-hook-form zod @hookform/resolvers
   npm install lucide-react
   npm install clsx
   ```
3. Update `vite.config.ts`:
   ```typescript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import tailwindcss from '@tailwindcss/vite'

   export default defineConfig({
     plugins: [react(), tailwindcss()],
   })
   ```

**Acceptance Criteria:**
- [ ] `npm run dev` starts without errors
- [ ] All dependencies listed in package.json
- [ ] Vite config includes Tailwind plugin
- [ ] TypeScript compilation works

---

### Task 1.2: Configure Tailwind CSS v4 with Design Tokens (@theme block)
**Description:** Set up Tailwind v4 with all design tokens defined in `@theme {}` block (no @apply).

**Steps:**
1. Create `src/index.css`:
   ```css
   @import "tailwindcss";

   @theme {
     --color-primary: #001B4F;
     --color-primary-container: #D6E3FF;
     --color-on-primary: #FFFFFF;
     --color-secondary: #775A17;
     --color-secondary-container: #FED486;
     --color-on-secondary: #FFFFFF;
     --color-tertiary: #002514;
     --color-tertiary-container: #8DF8BD;
     --color-on-tertiary: #FFFFFF;
     --color-surface: #F7F9FD;
     --color-surface-container: #FFFFFF;
     --color-surface-variant: #E0E3E6;
     --color-on-surface: #181C1F;
     --color-on-surface-variant: #444650;
     --color-outline: #E1E6F2;
     --color-error: #BA1A1A;
     --color-error-container: #FFDAD6;
     --color-success: #2E9E6B;
     --color-success-container: #E8F6ED;
     --color-warning: #E0A030;
     --color-warning-container: #FFF3E0;

     --spacing-xs: 0.25rem;
     --spacing-sm: 0.5rem;
     --spacing-md: 1rem;
     --spacing-lg: 1.5rem;
     --spacing-xl: 2rem;
     --spacing-2xl: 3rem;
     --spacing-3xl: 4rem;

     --radius-xs: 4px;
     --radius-sm: 8px;
     --radius-md: 12px;
     --radius-lg: 16px;
     --radius-xl: 24px;
     --radius-full: 999px;

     --font-display: "Poppins";
     --font-body: "Inter";
     --font-arabic: "Amiri";

     --shadow-subtle: 0 2px 8px rgba(0, 27, 79, 0.08);
     --shadow-card: 0 6px 20px rgba(0, 27, 79, 0.10);
     --shadow-lifted: 0 12px 28px rgba(0, 27, 79, 0.12);
     --shadow-modal: 0 16px 40px rgba(0, 27, 79, 0.16);
   }

   @layer base {
     body {
       @apply bg-surface text-on-surface font-body leading-relaxed;
     }

     h1, h2, h3, h4, h5, h6 {
       @apply font-display;
     }

     h1 {
       @apply text-4xl md:text-5xl font-bold leading-tight tracking-tight;
     }

     h2 {
       @apply text-3xl md:text-4xl font-bold leading-snug tracking-tight;
     }

     h3 {
       @apply text-2xl md:text-3xl font-semibold leading-snug;
     }

     h4 {
       @apply text-xl md:text-2xl font-semibold;
     }
   }
   ```

2. Update `src/main.tsx` to import CSS:
   ```typescript
   import './index.css'
   ```

3. Import Google Fonts in `index.html`:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500;600&family=Amiri:wght@400;700&display=swap" rel="stylesheet">
   ```

**Acceptance Criteria:**
- [ ] Tailwind CSS compiles without errors
- [ ] All color tokens available as `bg-primary`, `text-secondary`, etc.
- [ ] Spacing tokens work (p-lg, gap-xl, etc.)
- [ ] Border radius tokens work (rounded-md, rounded-xl, etc.)
- [ ] Font families load correctly

---

### Task 1.3: Set Up React Router
**Description:** Configure client-side routing for all 12 pages.

**Steps:**
1. Create `src/App.tsx`:
   ```typescript
   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
   import Home from './pages/Home'
   import Courses from './pages/Courses'
   import CourseDetail from './pages/CourseDetail'
   import IlmHub from './pages/IlmHub'
   import Achievements from './pages/Achievements'
   import About from './pages/About'
   import Enroll from './pages/Enroll'
   import Contact from './pages/Contact'
   import FaqFees from './pages/FaqFees'
   import Portal from './pages/Portal'
   import Privacy from './pages/Privacy'
   import Terms from './pages/Terms'
   import NotFound from './pages/NotFound'

   export default function App() {
     return (
       <Router>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/courses" element={<Courses />} />
           <Route path="/courses/:slug" element={<CourseDetail />} />
           <Route path="/ilm-hub" element={<IlmHub />} />
           <Route path="/achievements" element={<Achievements />} />
           <Route path="/about" element={<About />} />
           <Route path="/enroll" element={<Enroll />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/faq-fees" element={<FaqFees />} />
           <Route path="/portal" element={<Portal />} />
           <Route path="/privacy" element={<Privacy />} />
           <Route path="/terms" element={<Terms />} />
           <Route path="*" element={<NotFound />} />
         </Routes>
       </Router>
     )
   }
   ```

2. Update `src/main.tsx`:
   ```typescript
   import React from 'react'
   import ReactDOM from 'react-dom/client'
   import App from './App.tsx'
   import './index.css'

   ReactDOM.createRoot(document.getElementById('root')!).render(
     <React.StrictMode>
       <App />
     </React.StrictMode>,
   )
   ```

3. Create placeholder page files in `src/pages/`

**Acceptance Criteria:**
- [ ] All routes navigate without errors
- [ ] Page components load (even if empty)
- [ ] Back/forward navigation works
- [ ] URL updates on navigation

---

### Task 1.4: Set Up Project Structure & Config
**Description:** Create folder structure and centralized configuration file.

**Steps:**
1. Create folders:
   ```
   src/
     ├── components/
     │   ├── ui/
     │   ├── layout/
     │   └── features/
     ├── pages/
     ├── data/
     ├── lib/
     ├── config/
     └── hooks/
   ```

2. Create `src/config/site.ts`:
   ```typescript
   export const siteConfig = {
     name: 'Al-Jazari Academy',
     description: 'Learn Quran, Hifz, Tajweed & Tafseer Online',
     url: process.env.VITE_SITE_URL || 'https://aljazari.academy',
     
     contact: {
       phone: '+91 9591250910',
       whatsapp: '+91 9591250910',
       email: '[PLACEHOLDER: academy email]',
       address: '[PLACEHOLDER: Bangalore address]',
       instagram: '@al_jazari_educational_academy',
       instagramUrl: 'https://instagram.com/al_jazari_educational_academy',
     },

     form: {
       endpoint: process.env.VITE_FORM_ENDPOINT || '[PLACEHOLDER: form endpoint]',
     },

     nav: {
       items: [
         { label: 'Home', href: '/' },
         { label: 'Courses', href: '/courses' },
         { label: 'Ilm Hub', href: '/ilm-hub' },
         { label: 'Enroll', href: '/enroll' },
         { label: 'Contact', href: '/contact' },
       ],
     },
   }
   ```

3. Create `src/lib/classNames.ts`:
   ```typescript
   export function classNames(...classes: (string | undefined | null | false)[]): string {
     return classes.filter(Boolean).join(' ')
   }
   ```

**Acceptance Criteria:**
- [ ] All folders created and organized
- [ ] `siteConfig` exports without errors
- [ ] Config values centralized (no hardcoding in components)

---

## Phase 2: Component Library (Days 3–5)

### Task 2.1: Build UI Component Library — Button, Card, Chip
**Description:** Create reusable UI components with proper TypeScript types.

**Steps:**
1. Create `src/components/ui/Button.tsx`
2. Create `src/components/ui/Card.tsx`
3. Create `src/components/ui/Chip.tsx`
4. Create `src/components/ui/Badge.tsx`
5. Export from `src/components/ui/index.ts`

**Acceptance Criteria:**
- [ ] Components render without errors
- [ ] Props properly typed (TypeScript)
- [ ] Tailwind classes applied correctly
- [ ] Components work on 360px, 768px, 1280px

---

### Task 2.2: Build Form Components — FormField, Stepper
**Description:** Create form-related components.

**Steps:**
1. Create `src/components/ui/FormField.tsx` (text, select, radio, checkbox)
2. Create `src/components/ui/Stepper.tsx` (4-step progress indicator)
3. Create `src/components/ui/Accordion.tsx`
4. Create `src/components/ui/Tabs.tsx`

**Acceptance Criteria:**
- [ ] FormField supports all input types (text, email, select, radio, checkbox, textarea)
- [ ] Stepper shows progress and navigation
- [ ] Accordion expands/collapses smoothly
- [ ] Tabs switch panels on click

---

### Task 2.3: Build Overlay Components — Modal, BottomSheet, Toast
**Description:** Create overlay and notification components.

**Steps:**
1. Create `src/components/ui/Modal.tsx`
2. Create `src/components/ui/BottomSheet.tsx`
3. Create `src/components/ui/Toast.tsx`
4. Create `src/components/ui/ProgressRing.tsx`

**Acceptance Criteria:**
- [ ] Modal renders backdrop, title, content, close button
- [ ] BottomSheet slides up from bottom on mobile
- [ ] Toast auto-dismisses after 3–5 seconds
- [ ] ProgressRing displays percentage as circular indicator

---

### Task 2.4: Build Layout Components — TopAppBar, BottomTabBar, Drawer, Footer
**Description:** Create navigation and layout shell components.

**Steps:**
1. Create `src/components/layout/TopAppBar.tsx`
2. Create `src/components/layout/BottomTabBar.tsx`
3. Create `src/components/layout/Drawer.tsx`
4. Create `src/components/layout/Footer.tsx`
5. Create `src/components/layout/FloatingWhatsApp.tsx`
6. Create `src/components/layout/PageLayout.tsx` (wrapper)

**Acceptance Criteria:**
- [ ] TopAppBar sticky on desktop
- [ ] BottomTabBar fixed on mobile
- [ ] Drawer slides in on button click
- [ ] Footer appears on all pages
- [ ] FloatingWhatsApp button links to WhatsApp

---

### Task 2.5: Build Feature Components
**Description:** Create feature-specific components.

**Steps:**
1. Create `src/components/features/HifzCalculator.tsx` (slider → result)
2. Create `src/components/features/MakhrajDiagram.tsx` (interactive diagram)
3. Create `src/components/features/CourseCard.tsx`
4. Create `src/components/features/StatCard.tsx`
5. Create `src/components/features/AyahCard.tsx`

**Acceptance Criteria:**
- [ ] Calculator updates result on slider change
- [ ] Makhraj diagram responds to clicks
- [ ] Cards display content and CTAs properly

---

## Phase 3: Data Layer (Days 5–6)

### Task 3.1: Create Typed Data Files
**Description:** Define TypeScript types and sample data.

**Steps:**
1. Create `src/data/types.ts` with all interfaces:
   ```typescript
   export interface Course {
     id: string
     slug: string
     title: string
     description: string
     level: 'Beginner' | 'Intermediate' | 'Advanced'
     duration: string
     price: number
     currency: 'INR' | 'USD'
     image: string
     featured: boolean
   }

   export interface FAQ {
     id: string
     question: string
     answer: string
     category: string
   }

   export interface TeamMember {
     id: string
     name: string
     role: string
     image: string
     bio?: string
   }

   export interface IlmHubItem {
     id: string
     title: string
     excerpt: string
     type: 'article' | 'video' | 'download'
     image?: string
     url?: string
   }
   ```

2. Create `src/data/courses.ts` with sample courses
3. Create `src/data/faqs.ts` with sample FAQs
4. Create `src/data/team.ts` with sample team members
5. Create `src/data/ilmHub.ts` with sample resources
6. Create `src/data/hifzDuration.ts` with calculator table
7. Create `src/data/makhraj.ts` with diagram regions

**Acceptance Criteria:**
- [ ] All data files export typed objects
- [ ] No hardcoded data in components
- [ ] Sample data reasonable and placeholders marked

---

## Phase 4: Core Pages (Days 7–9)

### Task 4.1: Build Home Page
**Description:** Hero, stats, featured courses, CTA section.

**Steps:**
1. Create `src/pages/Home.tsx`
2. Implement:
   - Hero banner with headline + CTA
   - Stats grid (using StatCard component)
   - Featured courses carousel (or grid)
   - Testimonials section (placeholder)
   - CTA banner (WhatsApp + phone)
3. Import `PageLayout` wrapper

**Acceptance Criteria:**
- [ ] Hero is responsive (360px, 768px, 1280px)
- [ ] Stats display correctly
- [ ] Courses linked to `/courses/:slug`
- [ ] Enroll CTA links to `/enroll`

---

### Task 4.2: Build Courses Page
**Description:** Course grid with filter tabs and search.

**Steps:**
1. Create `src/pages/Courses.tsx`
2. Implement:
   - Filter tabs (All, Hifz, Tajweed, Recitation, Islamic Studies)
   - Search bar (client-side filter)
   - Course grid (CourseCard component)
   - Pagination or all courses visible

**Acceptance Criteria:**
- [ ] Filter tabs work (update URL query params)
- [ ] Search filters courses by title/description
- [ ] Course cards navigate to detail page
- [ ] Responsive grid on all breakpoints

---

### Task 4.3: Build Course Detail Page
**Description:** Course hero, tabs (Overview, Syllabus, Schedule, Fees, FAQ), sticky enroll card.

**Steps:**
1. Create `src/pages/CourseDetail.tsx`
2. Use `useParams()` to get `:slug`
3. Implement:
   - Course hero (title, price, level, rating)
   - Tabs component (5 tabs)
   - Tab content (placeholder text for each)
   - Sticky enroll card (right sidebar on desktop, bottom on mobile)
4. Handle course not found (404)

**Acceptance Criteria:**
- [ ] Dynamic route works with `:slug`
- [ ] Tabs switch content
- [ ] Enroll card is sticky on desktop
- [ ] Mobile shows bottom CTA

---

### Task 4.4: Build About Page
**Description:** Mission, team grid, timeline.

**Steps:**
1. Create `src/pages/About.tsx`
2. Implement:
   - Mission/vision section
   - Timeline (milestones)
   - Team grid (team cards with photos, bios)
   - Values section

**Acceptance Criteria:**
- [ ] Team photos displayed (placeholder)
- [ ] Timeline readable
- [ ] Content organized logically

---

### Task 4.5: Build Contact Page
**Description:** Contact form, info cards, map, social links.

**Steps:**
1. Create `src/pages/Contact.tsx`
2. Implement:
   - Contact info cards (phone, email, Instagram, address)
   - Inquiry form (Name, Email, Subject, Message)
   - Google Maps embed (iframe)
   - WhatsApp and call buttons

**Acceptance Criteria:**
- [ ] Form validates on submit
- [ ] Map embeds correctly
- [ ] Phone/WhatsApp links work
- [ ] Responsive layout

---

## Phase 5: Interactive & Complex Pages (Days 10–12)

### Task 5.1: Build Enrollment Form (Multi-Step)
**Description:** 4-step form with validation, localStorage draft, submission handling.

**Steps:**
1. Create `src/pages/Enroll.tsx`
2. Create form schema in `src/lib/validation.ts` using Zod:
   ```typescript
   const enrollmentSchema = z.object({
     fullName: z.string().min(3),
     place: z.string().min(2),
     contactNumber: z.string().regex(/^\+?[0-9]{10,}$/),
     // ... more fields
   })
   ```
3. Implement:
   - Step 1: Student Details
   - Step 2: Course & Timing
   - Step 3: Background
   - Step 4: Review & Submit
   - Stepper component showing progress
   - Next/Back/Submit buttons
   - Form state saved to localStorage
   - Form submission to endpoint
   - Success screen with WhatsApp fallback

**Acceptance Criteria:**
- [ ] All fields validate correctly
- [ ] Form state persists on page reload
- [ ] Form submits to endpoint (or error handling works)
- [ ] Success screen displays with WhatsApp button
- [ ] Mobile responsive

---

### Task 5.2: Build Ilm Hub Page
**Description:** Calculator, Makhraj diagram, Ayah card, articles grid.

**Steps:**
1. Create `src/pages/IlmHub.tsx`
2. Implement:
   - Hifz Duration Calculator section
   - Makhraj Interactive Diagram section
   - Daily Ayah Reminder card
   - Revision Tracker (localStorage)
   - Articles/Resources grid (tabs: Articles, Videos, Downloads, Q&A)

**Acceptance Criteria:**
- [ ] Calculator shows estimated completion time
- [ ] Makhraj diagram interactive (tap shows letters)
- [ ] Ayah card displays verse
- [ ] Revision tracker logs entries
- [ ] Tabs filter resources

---

### Task 5.3: Build Achievements Page
**Description:** Masonry gallery, filter chips, lightbox, events.

**Steps:**
1. Create `src/pages/Achievements.tsx`
2. Implement:
   - Masonry gallery of achievements (photos)
   - Filter chips (Certificates, Events, Competitions)
   - Lightbox for full image view
   - Featured event card (Qirat & Nazam Competition 2026)
   - Event details section

**Acceptance Criteria:**
- [ ] Masonry layout responsive
- [ ] Filter chips toggle gallery
- [ ] Lightbox opens on image click
- [ ] Event card prominent

---

### Task 5.4: Build FAQ & Fees Page
**Description:** Accordion FAQ, pricing plans, plan comparison.

**Steps:**
1. Create `src/pages/FaqFees.tsx`
2. Implement:
   - Accordion FAQ (by category: Enrollment, Fees, Schedule, General)
   - Pricing plans section
   - Monthly/Quarterly toggle
   - Plan cards (features, price, CTA)
   - Optional: comparison table

**Acceptance Criteria:**
- [ ] Accordion expands/collapses
- [ ] Plans toggle visibility
- [ ] Prices update on toggle
- [ ] CTA links to enrollment

---

### Task 5.5: Build Portal Page (UI Mock)
**Description:** Login screen + dashboard mock (no real auth).

**Steps:**
1. Create `src/pages/Portal.tsx`
2. Implement:
   - Login screen (OTP input, fake submit)
   - Dashboard mock with:
     - Enrolled courses (with ProgressRing)
     - Upcoming sessions
     - Certificates section
   - Clearly marked as "Demo Data"

**Acceptance Criteria:**
- [ ] Login screen clickable (no validation needed)
- [ ] Dashboard shows sample data
- [ ] Demo data clearly marked
- [ ] Responsive layout

---

### Task 5.6: Build Legal Pages
**Description:** Privacy Policy and Terms & Conditions placeholders.

**Steps:**
1. Create `src/pages/Privacy.tsx`
2. Create `src/pages/Terms.tsx`
3. Use simple markdown or HTML content
4. Mark content as placeholder

**Acceptance Criteria:**
- [ ] Pages render without errors
- [ ] Content is placeholder/partial
- [ ] Navigation links work

---

## Phase 6: Quality & Optimization (Days 13–14)

### Task 6.1: Accessibility Audit & Fixes
**Description:** Ensure WCAG AA compliance.

**Steps:**
1. Add semantic HTML (header, nav, main, footer, article, section)
2. Add alt text to all images
3. Add visible focus rings to all interactive elements
4. Link form labels to inputs
5. Add ARIA labels where needed
6. Test keyboard navigation (Tab, Enter, Escape, Arrow keys)
7. Check color contrast ratios (using Axe DevTools or similar)
8. Verify screen reader experience (optional, manual)

**Acceptance Criteria:**
- [ ] Axe DevTools shows 0 violations
- [ ] All inputs have associated labels
- [ ] Focus rings visible on all buttons
- [ ] Keyboard navigation works
- [ ] Color contrast: 4.5:1 for body text

---

### Task 6.2: Performance Optimization
**Description:** Achieve Lighthouse 90+ scores.

**Steps:**
1. Optimize images (lazy-load, WebP format if available)
2. Code-split routes (React Router lazy loading)
3. Minify CSS/JS
4. Remove unused CSS
5. Optimize fonts (font-display: swap)
6. Check Cumulative Layout Shift (CLS)
7. Run Lighthouse audit

**Acceptance Criteria:**
- [ ] Lighthouse Performance: 90+
- [ ] Lighthouse Accessibility: 95+
- [ ] Lighthouse Best Practices: 90+
- [ ] Lighthouse SEO: 90+

---

### Task 6.3: Mobile Responsiveness Testing
**Description:** Test on actual mobile devices and emulators.

**Steps:**
1. Test on Chrome DevTools (360px, 768px, 1280px)
2. Test on actual devices (iOS, Android)
3. Check:
   - Touch targets (44x44px minimum)
   - Spacing on mobile
   - Bottom tab bar usability
   - Drawer menu swipe-friendly
   - Form input sizing

**Acceptance Criteria:**
- [ ] No layout shift on viewport resize
- [ ] Touch targets adequate
- [ ] Mobile interactions responsive
- [ ] Bottom nav usable

---

### Task 6.4: SEO Implementation
**Description:** Add SEO metadata and structured data.

**Steps:**
1. Create `src/lib/seo.ts` with helper functions
2. Add page titles and meta descriptions per page
3. Add Open Graph tags (og:title, og:description, og:image, og:url)
4. Add Twitter Card tags (optional)
5. Generate `public/sitemap.xml`
6. Generate `public/robots.txt`
7. Add JSON-LD schema for EducationalOrganization

**Acceptance Criteria:**
- [ ] Each page has unique title and description
- [ ] OG tags populated
- [ ] sitemap.xml lists all pages
- [ ] robots.txt allows all, references sitemap
- [ ] JSON-LD schema valid (test with Google Structured Data Tester)

---

### Task 6.5: Deployment Configuration
**Description:** Prepare for Vercel deployment.

**Steps:**
1. Create `vercel.json`:
   ```json
   {
     "rewrites": [
       { "source": "/(.*)", "destination": "/index.html" }
     ]
   }
   ```

2. Create `.env.example` file documenting all env vars
3. Add `build` script to package.json: `vite build`
4. Test `npm run build` and verify no errors/warnings

**Acceptance Criteria:**
- [ ] `npm run build` succeeds with zero errors
- [ ] `vercel.json` correctly configured for SPA
- [ ] Env variables documented

---

## Phase 7: Documentation & Delivery (Day 15)

### Task 7.1: Create README.md
**Description:** Setup, deployment, and content editing guide.

**Content:**
- Project overview
- Setup instructions (npm install, npm run dev)
- Environment variables (.env.local template)
- Build & deployment steps (Vercel)
- How to edit content (data files, config/site.ts)
- Directory structure explanation
- Component usage examples

---

### Task 7.2: Create Placeholder List
**Description:** Document all placeholders to be filled by client.

**Content:**
- Academy email address
- Physical address (Bangalore)
- Google Maps embed URL
- Course images and descriptions
- Team member names and photos
- Pricing/fee values
- Testimonials
- Hifz duration calculator table values
- Form submission endpoint URL
- Tutors list with qualifications

---

### Task 7.3: Create QA Checklist
**Description:** Document what was tested and verified.

**Checklist:**
- [ ] All 12 pages render without errors
- [ ] Navigation works on all pages
- [ ] Enrollment form validates and submits
- [ ] Mobile responsiveness (360px, 768px, 1280px)
- [ ] Lighthouse audit passes (90+)
- [ ] Accessibility scan (Axe) shows 0 violations
- [ ] SEO metadata present on all pages
- [ ] Images optimize and lazy-load
- [ ] Bottom tab bar and drawer work on mobile
- [ ] Contact info links work (phone, WhatsApp, email)
- [ ] All CTA buttons navigate correctly
- [ ] Form submission endpoint configured
- [ ] Vercel deployment successful
- [ ] Domain configured (if applicable)

---

### Task 7.4: Code Review & Cleanup
**Description:** Final code review and cleanup.

**Steps:**
1. Remove console.log statements
2. Fix any TypeScript warnings
3. Ensure consistent code style (Prettier, ESLint optional)
4. Add JSDoc comments to complex functions
5. Verify no hardcoded values in components

**Acceptance Criteria:**
- [ ] No console.log in production code
- [ ] No TypeScript errors or warnings
- [ ] Code is clean and readable
- [ ] No hardcoded URLs, emails, phone numbers

---

## Task Completion Tracking

### Phase 1: Project Setup & Infrastructure
- [ ] Task 1.1: Vite + React + TypeScript
- [ ] Task 1.2: Tailwind CSS v4 Configuration
- [ ] Task 1.3: React Router Setup
- [ ] Task 1.4: Project Structure & Config

### Phase 2: Component Library
- [ ] Task 2.1: UI Components (Button, Card, Chip, Badge)
- [ ] Task 2.2: Form Components (FormField, Stepper, Accordion, Tabs)
- [ ] Task 2.3: Overlay Components (Modal, BottomSheet, Toast, ProgressRing)
- [ ] Task 2.4: Layout Components (TopAppBar, BottomTabBar, Drawer, Footer)
- [ ] Task 2.5: Feature Components (Calculator, Makhraj, CourseCard, etc.)

### Phase 3: Data Layer
- [ ] Task 3.1: Typed Data Files & Sample Data

### Phase 4: Core Pages
- [ ] Task 4.1: Home Page
- [ ] Task 4.2: Courses Page
- [ ] Task 4.3: Course Detail Page
- [ ] Task 4.4: About Page
- [ ] Task 4.5: Contact Page

### Phase 5: Interactive Pages
- [ ] Task 5.1: Enrollment Form
- [ ] Task 5.2: Ilm Hub Page
- [ ] Task 5.3: Achievements Page
- [ ] Task 5.4: FAQ & Fees Page
- [ ] Task 5.5: Portal Page (Mock)
- [ ] Task 5.6: Legal Pages

### Phase 6: Quality & Optimization
- [ ] Task 6.1: Accessibility Audit
- [ ] Task 6.2: Performance Optimization
- [ ] Task 6.3: Mobile Responsiveness Testing
- [ ] Task 6.4: SEO Implementation
- [ ] Task 6.5: Deployment Configuration

### Phase 7: Documentation & Delivery
- [ ] Task 7.1: Create README.md
- [ ] Task 7.2: Create Placeholder List
- [ ] Task 7.3: Create QA Checklist
- [ ] Task 7.4: Code Review & Cleanup

---

## Notes

- Each task builds on previous ones
- After each task, run `npm run build` to verify no errors
- Test on mobile (360px), tablet (768px), and desktop (1280px)
- All text content must come from data files, never hardcoded
- Follow design spec for colors, typography, spacing

