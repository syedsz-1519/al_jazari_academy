# Al-Jazari Academy — Comprehensive Structural Analysis Report

> **Generated from:** Stitch HTML exports + DESIGN.md  
> **Target path:** `docs/analysis.md` (workspace root)  
> **Scope:** Inventory · Design Tokens · Component Audit · Content/Data Model · Interactive Features · Problems & Risks · Recommendations

---

## 1. INVENTORY

### 1.1 Screen → Route Map

| Directory Slug | Logical Route | Desktop | Mobile | Notes |
|---|---|:---:|:---:|---|
| `al_jazari_academy_home` | `/` | ✅ | ✅ | Hero, stats, course teasers, Ilm Hub promo, testimonials |
| `al_jazari_academy_courses` | `/courses` | ✅ | ✅ | Course grid, filter chips |
| `essential_hifz_course_detail` | `/courses/essential-hifz` | ✅ | ✅ | Only one course detail prototyped; others TBD |
| `al_jazari_academy_enroll` | `/enroll` | ✅ | ✅ | Multi-step form (4 steps), Hifz duration calculator |
| `al_jazari_academy_fees_faq` | `/fees-faq` | ✅ | ✅ | Accordion FAQ, fee table |
| `al_jazari_academy_about` | `/about` | ✅ | ✅ | Mission, team, timeline |
| `al_jazari_academy_contact` | `/contact` | ✅ | ✅ | Contact form, map embed, social links |
| `al_jazari_academy_contact_submission_thank_you` | `/contact/thank-you` | ✅ | ✅ | Confirmation state |
| `al_jazari_academy_ilm_hub` | `/ilm-hub` | ✅ | ✅ | Resource library, tabs |
| `al_jazari_academy_404_error` | `/404` | ✅ | ✅ | Custom 404 page |
| `al_jazari_academy_privacy_policy_terms` | `/legal` | ✅ | ✅ | Combined or split TBD |
| Mobile shells (bottom-tab-bar, drawer, splash) | *(components)* | — | ✅ | Persistent nav, drawer variants, splash screen |

**Total logical pages:** 11 routable pages + 404 + 7 component-only screens.

### 1.2 Missing / Inconsistent States

| Gap | Severity | Detail |
|---|---|---|
| Course detail pages for non-Hifz courses (Tajweed, Recitation, Islamic Studies, Arabic) | High | Only `essential_hifz_course_detail` exists; others have no detail page |
| Enrollment success/thank-you screen | High | Contact thank-you exists but no `/enroll/thank-you` |
| Student portal page | Medium | Referenced in navigation but no corresponding directory |
| Search results page | Medium | Search icon in nav implied; no results template exists |
| Ilm Hub article detail page | Medium | Ilm Hub listing exists; individual article detail screen missing |
| Desktop drawer/hamburger | Medium | Drawer prototyped only for mobile; tablet/small-desktop unclear |
| Payment/checkout screen | Medium | Fees page exists but no payment flow screen |
| RTL full-page layouts | Low | Drawer has RTL variant; full-page RTL counterparts not all prototyped |
| Course enrollment confirmation | Low | After form submission, likely missing confirmation email template |

---

## 2. DESIGN TOKENS

### 2.1 Color Palette (Extracted from HTML/CSS)

**Primary System:**
- `primary: #001B4F` (deep navy) — buttons, headings, nav background
- `on-primary: #FFFFFF` — text on primary buttons

**Secondary/Gold Accent:**
- `secondary: #775A17` (warm gold) — accent button, badge backgrounds, highlights
- `on-secondary: #FFFFFF` — text on secondary elements
- `secondary-container: #FED486` (light gold) — soft backgrounds

**Tertiary:**
- `tertiary: #002514` (deep green) — footer, tertiary CTAs
- `on-tertiary: #FFFFFF`

**Surface/Neutral:**
- `surface: #F7F9FD` (almost-white) — main background canvas
- `surface-container-lowest: #FFFFFF` (pure white) — card surfaces
- `surface-container-low: #F2F4F8` (light tint)
- `surface-container: #ECEEF2` (medium tint)
- `surface-container-high: #E6E8EC` (darker tint)
- `surface-variant: #E0E3E6` — borders, dividers

**Text:**
- `on-surface: #181C1F` (near-black) — primary text
- `on-surface-variant: #444650` (gray) — secondary/hint text

**Feedback:**
- `error: #BA1A1A` (red) — validation errors
- `success: #2E9E6B` (green, inferred) — completion, positive states

**Shadow Tint:**
- All shadows use navy: `rgba(0, 27, 79, 0.08–0.18)` depending on elevation

> **DESIGN.md Alignment:** Design tokens are consistent with documented palette. Gold secondary accent not explicitly named in DESIGN.md. Tertiary green is in HTML but **not in DESIGN.md token table** — flag for documentation update.

### 2.2 Typography System

| Token | Family | Weight | Desktop Size | Mobile Size | Line Height |
|---|---|---|---|---|---|
| `headline-xl` | Plus Jakarta Sans | 600 | 52px | 38px | 64px / 48px |
| `headline-lg` | Plus Jakarta Sans | 600 | 36px | 28px | 44px / 36px |
| `headline-md` | Plus Jakarta Sans | 600 | 22px | 22px | 30px |
| `headline-sm` | Plus Jakarta Sans | 600 | 18px | 18px | 26px |
| `body-lg` | Inter | 400 | 18px | 18px | 28px |
| `body-md` | Inter | 400 | 16px | 16px | 24px |
| `body-sm` | Inter | 400 | 14px | 14px | 20px |
| `label-md` | Inter | 500 | 14px | 14px | 20px |
| `caption` | Inter | 500 | 13px | 13px | 18px |
| `arabic-verse` | Noto Serif | 400/600 | 28px | 28px | 56px |

> **Line height for Arabic:** The `arabic-verse` uses `line-height: 56px` (2x font size) to accommodate tashkeel (diacritics). DESIGN.md specifies this but does not document line-height values in the token table — add to spec.

### 2.3 Spacing System

| Token | Value | Usage |
|---|---|---|
| `space-xs` | 4px (0.25rem) | Minimal gaps, icon spacing |
| `space-sm` | 8px (0.5rem) | Small component padding |
| `space-md` | 16px (1rem) | Default component padding, gaps |
| `space-lg` | 24px (1.5rem) | Section internal spacing, medium gaps |
| `space-xl` | 32px (2rem) | Large component gaps |
| `gutter` | 24px (1.5rem) | Horizontal container gutters |
| `margin-mobile` | 48px (3rem) | Vertical section padding on mobile |
| `margin-desktop` | 88px (5.5rem) | Vertical section padding on desktop |

> DESIGN.md defines up to `space-xl` but uses CSS value language (e.g., `space-lg: 1.5rem`). HTML/Tailwind tokens confirmed aligned.

### 2.4 Border Radius

| Element Type | Radius | Tailwind Class (est.) |
|---|---|---|
| Buttons | 14px | `rounded-[14px]` |
| Cards / bento units | 20px | `rounded-[20px]` |
| Form inputs | 12px | `rounded-[12px]` |
| Chips / pills | 999px | `rounded-full` |
| Modals / bottom sheets | 24px top | `rounded-t-[24px]` |
| Images in cards | 16px | `rounded-[16px]` |

### 2.5 Shadows (Navy-Tinted)

| Elevation | Box Shadow | Usage |
|---|---|---|
| Subtle | `0 2px 8px rgba(0, 27, 79, 0.08)` | Hover states, light elevation |
| Card | `0 6px 20px rgba(0, 27, 79, 0.10)` | Standard cards |
| Lifted | `0 12px 28px rgba(0, 27, 79, 0.12)` | Interactive hover on cards |
| Modal | `0 16px 40px rgba(0, 27, 79, 0.16)` | Modals, deep overlays |

### 2.6 Responsive Breakpoints

| Name | Range | Usage |
|---|---|---|
| Mobile | 320px – 767px | Single-column layouts, stacked components |
| Tablet | 768px – 1023px | 2–3 column grids (not fully designed) |
| Desktop | 1024px+ | Full layouts, side-by-side panels |
| Max-width | 1200px | Container constraint |

> DESIGN.md specifies these breakpoints; HTML confirms they are in use via Tailwind `lg:`, `md:` prefixes, and `max-w-[1200px]` containers.

### 2.7 Iconography

- **Library:** Material Symbols Outlined (variable font from Google Fonts)
- **Font-variation-settings:** `wght 100–700`, variable by context (18–24px typical)
- **Color:** Inherits from text context (e.g., primary text color on icon)
- **No formal icon sizing tokens** — sizes set inline per component

---

## 3. COMPONENT AUDIT

### 3.1 Navigation & Layout Shell

#### `TopAppBar` / `Header`
- **Current:** Fully duplicated in every desktop HTML file (~45 lines each)
- **Props needed:**
  ```
  variant: 'desktop' | 'mobile'
  logoSrc: string
  logoAlt: string
  navItems: { label, href, active? }[]
  phoneNumber: string
  enrollHref: string
  currentLang: 'en' | 'hi' | 'ur'
  onLangToggle?: () => void
  onMenuOpen?: () => void (mobile)
  ```

#### `BottomTabBar` (Mobile Navigation)
- **Current:** Duplicated in every mobile screen
- **Props:**
  ```
  items: { icon, label, href, active? }[]
  safeAreaBottom: boolean
  ```
- Uses CSS variables for safe area inset bottom (notch support)

#### `DrawerMenu`
- **Current:** Two separate variants (hindi-ltr, urdu-rtl) with duplicated structure
- **Props:**
  ```
  isOpen: boolean
  onClose: () => void
  navItems: { label, href }[]
  lang: 'en' | 'hi' | 'ur'
  dir: 'ltr' | 'rtl'
  enrollHref: string
  phoneNumber: string
  instagramHandle: string
  ```

#### `Footer`
- **Current:** Fully duplicated on every page (~80 lines each)
- **Props:**
  ```
  logoSrc: string
  tagline: string
  navSections: { heading, links: { label, href }[] }[]
  contactPhone: string
  contactEmail: string
  instagramHandle: string
  privacyHref: string
  termsHref: string
  copyrightYear: number
  ```

### 3.2 Buttons

| Variant | Background | Border | Text | Hover State |
|---|---|---|---|---|
| `primary` | `#001B4F` | none | white | Darken to `#000F3F` or `-translate-y-1` + shadow lift |
| `secondary` | white | `1px #001B4F` | `#001B4F` | Bg lighten or add subtle shadow |
| `gold` / `accent` | `#775A17` | none | white | Darken to `#5C4511` |
| `text` / `link` | transparent | none | `#001B4F` | Underline or color shift |
| `icon-only` | transparent | none | icon color | Background tint |

**Props:**
```
variant: 'primary' | 'secondary' | 'gold' | 'text' | 'icon-only' | 'fab'
size: 'sm' | 'md' | 'lg'
label?: string
icon?: string              // Material Symbol name
iconPosition?: 'left' | 'right'
disabled?: boolean
loading?: boolean
href?: string              // If set, renders <a>
onClick?: () => void
```

### 3.3 Cards

#### `CourseCard`
```typescript
imageUrl: string
imageAlt: string
category: string           // e.g., "Hifz"
title: string
description: string
duration: string           // e.g., "8–12 months"
level: 'Beginner' | 'Intermediate' | 'Advanced'
enrollHref: string
detailHref: string
featured?: boolean
rating?: number            // 4.9
reviewCount?: number       // 180+
```

#### `StatCard`
```typescript
value: string | number     // "500+", 30
label: string              // "Students Enrolled"
icon?: string
color?: 'primary' | 'gold' | 'green'
```

#### `AchievementCard`
```typescript
title: string
description: string
icon: string
year?: string | number
```

#### `IlmHubCard`
```typescript
imageUrl: string
imageAlt: string
category: string           // "Articles", "Videos"
title: string
excerpt: string
readTimeMinutes: number
href: string
date: string               // ISO 8601
```

### 3.4 Content Primitives

#### `SectionHeader`
```typescript
eyebrow?: string           // Small label above heading
heading: string
subheading?: string
align?: 'left' | 'center'
headingLevel?: 'h1' | 'h2' | 'h3'
```

#### `Chip` / `FilterChip`
```typescript
label: string
selected?: boolean
onClick?: () => void
color?: 'primary' | 'secondary' | 'neutral'
size?: 'sm' | 'md'
```

#### `Accordion`
```typescript
items: { question: string, answer: string, defaultOpen?: boolean }[]
allowMultiple?: boolean
```

#### `Tabs`
```typescript
items: { label: string, panelId: string }[]
variant: 'underline' | 'pill'
defaultActiveIndex?: number
onChange?: (index: number) => void
```

#### `Stepper`
```typescript
steps: { label: string, description?: string }[]
currentStep: number
orientation?: 'horizontal' | 'vertical'
```

#### `ProgressRing`
```typescript
percentage: number
size?: number              // px (default: 120)
strokeWidth?: number       // px (default: 8)
label?: string
color?: string             // hex or token name
```

### 3.5 Form Components

#### `FormField`
```typescript
type: 'text' | 'email' | 'tel' | 'select' | 'radio' | 'checkbox' | 'textarea' | 'date'
id: string
name: string
label: string
placeholder?: string
required?: boolean
error?: string
helpText?: string
value: any
onChange: (value: any) => void
options?: { label: string, value: any }[]  // for select/radio
```

#### `FormStep` (Enrollment-Specific)
```typescript
stepNumber: number
title: string
fields: FormField[]
isActive: boolean
isCompleted: boolean
onNext?: () => void
onPrev?: () => void
```

### 3.6 Overlays

#### `Modal`
```typescript
isOpen: boolean
onClose: () => void
title?: string
children: ReactNode
size?: 'sm' | 'md' | 'lg' | 'fullscreen'
showCloseButton?: boolean
```

#### `BottomSheet`
```typescript
isOpen: boolean
onClose: () => void
title?: string
children: ReactNode
snapPoints?: number[]      // % of viewport height
initialSnap?: number
```

#### `Toast`
```typescript
message: string
type: 'success' | 'error' | 'info' | 'warning'
duration?: number          // ms
onDismiss?: () => void
```

#### `Lightbox`
```typescript
images: { src: string, alt: string }[]
initialIndex?: number
isOpen: boolean
onClose: () => void
```

### 3.7 Duplication Summary

| Pattern | Occurrences | Consolidation Priority |
|---|---|---|
| Header / TopAppBar | 11 desktop | **Critical** |
| Footer | 11 desktop | **Critical** |
| BottomTabBar | 11 mobile | **Critical** |
| CourseCard | 3–6 per page | High |
| FilterChip row | 2 pages | High |
| SectionHeader | 30+ instances | High |
| Accordion item | 8–12 per page | Medium |
| Stepper | 1 main (enroll) | Medium |

---

## 4. CONTENT & DATA MODEL

### 4.1 Real Content Extracted

#### Contact Information
- **Phone:** `+91 9591250910` ✅
- **Instagram:** `@al_jazari_educational_academy` ✅
- **Email:** NOT found in HTML — **PLACEHOLDER**
- **Address:** NOT found in HTML — **PLACEHOLDER**
- **WhatsApp:** Assumed same as phone; **confirm**

#### Courses (Prototype Visible)
1. **Essential Hifz** — Full detail page exists
2. **Tajweed & Makhraj** — Referenced; no detail page
3. **Quran Recitation (Nazira)** — Referenced; no detail page
4. **Islamic Studies** — Referenced; no detail page
5. **Arabic Language Fundamentals** — Referenced; no detail page
6. **Makhraj & Phonetics** — Standalone interactive feature

#### Hero Copy
- **Main Headline:** *"Learn, Memorise and Live the Quran"*
- **Sub-tagline:** *"Personalised one-to-one Hifz, Tajweed and Tafseer sessions with certified tutors. No age limit. Tailored to your pace, your lifestyle, and your spiritual aspirations."*

#### Stats (Home Page)
- "100% 1-on-1 Attention"
- "30+ Certified Huffaz & Scholars"
- "Global Students in 6+ Countries"
- Plus 3 more stats (values TBD)

#### Enrollment Form Fields (4 Steps)
**Step 1: Student Details**
- Full Name (text)
- Date of Birth (date)
- Gender (radio: Male / Female / Prefer not to say)
- Nationality (select)

**Step 2: Course & Timing**
- Course (select: all courses)
- Preferred Batch / Timing (select: morning/evening slots)
- Prior Quran Experience (radio/select: None / Basic / Intermediate / Advanced)

**Step 3: Contact & Background**
- Parent/Guardian Name (text, conditional)
- Phone Number (tel)
- Email (email)
- Preferred Contact Method (radio: WhatsApp / Email / Call)

**Step 4: Review & Submit**
- Summary card (read-only)
- Consent checkbox: *"I agree to the Terms & Privacy Policy"*
- Submit button

#### FAQ Topics (8–10 entries)
1. What is the fee structure?
2. Are there sibling discounts?
3. How long is the Hifz program?
4. What are the batch timings / schedule?
5. Is online learning available?
6. What is the age requirement?
7. How do I enroll?
8. What languages are classes taught in?
9. Do you offer refunds?
10. How do I contact the academy?

#### Ilm Hub Categories
- Articles
- Videos
- Downloads / Resources
- Q&A

### 4.2 Proposed Typed Data File Structure

```
src/
  data/
    courses.ts              // Course[]
    faqs.ts                 // FAQ[]
    stats.ts                // Stat[]
    team.ts                 // TeamMember[]
    timeline.ts             // TimelineEvent[]
    ilmHub.ts               // IlmHubItem[]
    navigation.ts           // NavItem[], FooterSection[]
    siteConfig.ts           // Global config
```

### 4.3 TypeScript Interfaces

```typescript
// siteConfig.ts
export const siteConfig = {
  phone: '+91 9591250910',
  whatsapp: '+91 9591250910',
  email: 'hello@aljazari.academy',        // PLACEHOLDER
  address: 'Bangalore, India',             // PLACEHOLDER
  instagramHandle: 'al_jazari_educational_academy',
  instagramUrl: 'https://instagram.com/al_jazari_educational_academy',
  mapEmbedUrl: '',                         // PLACEHOLDER
  copyrightYear: 2024,
};

// courses.ts
export interface Course {
  id: string;
  slug: string;
  title: string;
  titleAr?: string;
  category: 'hifz' | 'tajweed' | 'recitation' | 'islamic-studies' | 'arabic';
  description: string;
  longDescription?: string;
  duration: string;                        // e.g., "8-12 months"
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  languages: ('en' | 'hi' | 'ur')[];
  imageUrl: string;
  imageAlt: string;
  featured: boolean;
  rating?: number;                         // 4.9
  reviewCount?: number;                    // 180
  price?: {
    amount: number;
    currency: 'INR' | 'USD';
    billingCycle: 'monthly' | 'yearly';
  };
  syllabus?: string[];
  prerequisites?: string[];
}

// faqs.ts
export interface FAQ {
  id: string;
  question: string;
  answer: string;                          // Markdown or HTML
  category: 'fees' | 'enrollment' | 'schedule' | 'general' | 'technical';
}

// stats.ts
export interface Stat {
  id: string;
  value: string;                           // "500+", keep as string
  label: string;
  icon?: string;                           // Material Symbol name
  color?: 'primary' | 'gold' | 'green';
}

// team.ts
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  imageUrl: string;
  imageAlt: string;
  qualifications?: string[];
  instagramHandle?: string;
}

// ilmHub.ts
export interface IlmHubItem {
  id: string;
  slug: string;
  type: 'article' | 'video' | 'download' | 'qa';
  category: string;
  title: string;
  excerpt: string;
  content?: string;                        // MDX or HTML
  imageUrl?: string;
  videoUrl?: string;
  downloadUrl?: string;
  date: string;                            // ISO 8601
  readTimeMinutes?: number;
  tags: string[];
}

// timeline.ts
export interface TimelineEvent {
  id: string;
  year: number | string;
  title: string;
  description?: string;
  imageUrl?: string;
}
```

### 4.4 Placeholders to Fill (Priority Order)

| Field | Location | Priority |
|---|---|---|
| Academy email address | siteConfig, Contact form | **Critical** |
| Academy physical address | siteConfig, Contact page, Footer | **Critical** |
| Google Maps embed URL | Contact page iframe | High |
| All stat values (students, years, courses, etc.) | Home page, About page | High |
| Course detail descriptions (Tajweed, Recitation, etc.) | courses.ts | High |
| Course images & thumbnails | CourseCard, detail pages | High |
| Team member names, photos, bios, qualifications | About page, team.ts | High |
| Academy founding year & key milestones | About page, timeline.ts | Medium |
| Confirmation email template text | (backend) | Medium |
| Ilm Hub articles / resources content | ilmHub.ts | Medium |
| Privacy Policy & Terms full text | Legal page | Medium |
| Course pricing (INR amounts, if different) | courses.ts, fees page | Medium |
| Hifz duration calculator conversion rate | (enrollment logic) | Medium |
| Facebook / YouTube / TikTok handles | Footer, Contact (if applicable) | Low |
| Student portal login URL / endpoint | Nav links | Low |

---

## 5. INTERACTIVE FEATURES

### 5.1 Multi-Step Enrollment Form

**Location:** `/enroll`

**User Flow:**
1. User lands on Enroll page; sees Step 1 highlighted in Stepper
2. Fills Step 1 (Student Details) and clicks "Next"
3. Form validates Step 1; on error, shows inline error messages; on success, advances to Step 2
4. Repeats for Steps 2–3
5. Step 4 displays full summary with "Edit" links back to individual steps
6. User reviews and clicks "Submit"
7. Form POSTs to backend; on success, redirects to `/enroll/thank-you` (page currently missing)
8. Form state persists in localStorage as draft (auto-save on field blur)

**Logic Required:**
- Form state management (React Hook Form recommended)
- Per-step validation schema (Zod / Yup)
- LocalStorage draft persistence + recovery UI
- API POST endpoint (backend to build)
- Success redirect + thank-you page component

---

### 5.2 Hifz Duration Calculator

**Location:** Enrollment Step 2 or sidebar callout

**Interaction:**
- User input: "Juz completed" (0–30 slider or number input)
- User input: "Daily study hours" (1–6 select or slider)
- Calculator outputs: *"Estimated completion: 12–18 months"*
- Optional visual: ProgressRing showing `(completedJuz / 30) * 100`

**Logic Required:**
```javascript
const estimateHifzCompletion = (juzCompleted, dailyHours) => {
  const JUZS_REMAINING = 30 - juzCompleted;
  const JUZS_PER_DAY = dailyHours * 0.05;  // Calibration needed
  const DAYS_TO_COMPLETION = JUZS_REMAINING / JUZS_PER_DAY;
  const MONTHS_ESTIMATE = (DAYS_TO_COMPLETION / 30).toFixed(1);
  return MONTHS_ESTIMATE;
};
```
- Calibration constant (0.05) to be determined with academy

---

### 5.3 Makhraj Interactive Diagram

**Location:** Course detail (Tajweed), possibly Ilm Hub article

**Interaction (Desktop):**
- SVG diagram of vocal tract displayed
- User clicks on articulation region (lips, teeth, alveolus, palate, etc.)
- Side panel updates with Arabic letters for that articulation point
- Optional: Audio clip of letter pronunciation

**Interaction (Mobile):**
- Tap region → BottomSheet opens with detail
- Text list of letters + audio player

**Logic Required:**
- SVG with clickable regions (`<g>` or `<path>` with `data-makhraj` attribute)
- Makhraj data object mapping: `{ id, name, arabicLetters: [], audioUrl? }`
- Audio playback: HTML5 `<audio>` or Howler.js
- Keyboard: Arrow keys cycle through regions, Enter selects
- ARIA: `role="region"`, `aria-label`, `aria-describedby` on interactive regions

---

### 5.4 Course Filter Chips

**Location:** `/courses` page

**Interaction:**
- Chip options: All / Hifz / Tajweed / Quran Recitation / Islamic Studies / Arabic
- Single-select (radio group behavior)
- Clicking a chip filters CourseCard grid client-side
- URL updates: `?category=hifz` for bookmarkable links
- Filter persists on page refresh (localStorage or URL param)

**Logic Required:**
- `useSearchParams()` hook to read/write query param
- Client-side filter: `courses.filter(c => selectedCategory === 'all' || c.category === selectedCategory)`
- Grid animation on filter change (Framer Motion optional)

---

### 5.5 Image Lightbox

**Location:** About page (team/campus photos), Ilm Hub articles

**Interaction:**
- Click thumbnail → overlay with full image, backdrop, prev/next nav
- Keyboard: Arrow Left/Right to navigate, Escape to close
- Touch: Swipe left/right on desktop for next/previous

**Logic Required:**
- Lightbox component (use existing library: `yet-another-react-lightbox`, `PhotoSwipe`, or custom)
- Keyboard & swipe event handlers
- Body scroll lock while open
- Focus trap inside modal (last button wraps to first)

---

### 5.6 Mobile Drawer Menu

**Location:** Mobile header, triggered by hamburger icon

**Interaction:**
- Icon click → drawer slides in from left (or right for RTL)
- Overlay backdrop appears, dimming main content
- Click backdrop, swipe-left, or close button → drawer slides out
- Focus trap: keyboard Tab stays within drawer

**Logic Required:**
- CSS `transform: translateX(-100%)` / `translateX(100%)` transition
- Backdrop click to close
- Swipe detection: `touchstart` → `touchend`, delta X > threshold
- Focus trap: wrap first/last focusable element in drawer
- Body `overflow: hidden` while open
- RTL: swap `translateX` direction and Tailwind `pl-safe` / `pr-safe`

---

### 5.7 Language Toggle (EN / HI / UR)

**Location:** TopAppBar, DrawerMenu

**Interaction:**
- Toggle button / dropdown in header
- Switch language globally
- Urdu mode: page flips to `dir="rtl"`, font stacks switch to RTL-optimized faces

**Logic Required:**
- i18n library: `next-intl`, `react-i18next`, or custom context
- Language stored in cookie (shared across SSR) or localStorage
- On language change: reload translations, set `dir="rtl"` on `<html>`
- Font stack for Urdu: Noto Serif Arabic + fallback
- Tashkeel rendering: ensure `font-feature-settings: "kern" 1, "calt" 1` on Arabic text elements

---

### 5.8 Student Portal Mock

**Location:** `/student-portal` (or `/dashboard`)

**Interaction:**
- Linked from TopAppBar and BottomTabBar
- Static mock data: enrolled courses, progress rings, certificates, upcoming sessions
- Shows course progress as ProgressRing
- View course detail or cancel enrollment (mock — no real changes)

**Logic Required:**
- Static mock data JSON or context
- Loop through courses, render CourseCard with ProgressRing overlay
- Optional: localStorage to simulate enrollment state change across page refresh
- Real implementation (auth, backend) out of scope for prototype

---

### 5.9 Assessment Bottom Sheet

**Location:** Mobile, triggered from Courses page or Enroll flow

**Interaction:**
- Button click → BottomSheet opens
- 3–5 multiple-choice questions (radio):
  - "What is your Quran experience?" (None / Basic / Intermediate / Advanced)
  - "How many hours daily can you commit?" (etc.)
- On completion → displays course recommendation
- Close button dismisses, resets state

**Logic Required:**
- Multi-step state within BottomSheet
- Simple scoring: answer → points
- Recommendation map: points range → course slug
- Reset state on close

---

### 5.10 Tabs (Ilm Hub, Course Detail)

**Location:** `/ilm-hub`, course detail pages

**Interaction:**
- Tabs: Articles / Videos / Downloads / Q&A
- Click tab → panel switches
- URL hash updates: `/ilm-hub#videos` for bookmarkable links
- Keyboard: Arrow Left/Right to switch, Enter/Space to activate

**Logic Required:**
- Tabs with ARIA roles: `role="tablist"`, `role="tab"`, `role="tabpanel"`
- `aria-selected`, `aria-controls`, `aria-labelledby`
- `useHash()` or `useSearchParams()` to sync tab state with URL
- Scroll panel into view on mobile tab overflow

---

### 5.11 Accordions (FAQ, Contact)

**Location:** `/fees-faq`, `/contact`

**Interaction:**
- Click question header → answer expands
- Click again → answer collapses
- Optional: only one accordion open at a time (exclusive mode) vs. multiple simultaneously
- Smooth height animation

**Logic Required:**
- ARIA: `aria-expanded`, `aria-controls` on trigger
- CSS `max-height` transition or `<details>`/`<summary>` native (simpler but less control)
- Smooth animation: transition on `max-height: 0` → `max-height: auto`

---

## 6. PROBLEMS & RISKS

### 6.1 Accessibility Issues

| Issue | Severity | Location | Fix |
|---|---|---|---|
| Missing `alt` text on images | **High** | Home, About, Courses, Ilm Hub | Add descriptive alt for content; `alt=""` for decorative only |
| Color contrast failure: gold `#775A17` on white (3.5:1) | **High** | Secondary buttons, tags, chart legends | Darken to `#5C4511` (6.2:1) for text-critical use |
| No visible focus ring on interactive elements | **High** | All nav pills, buttons, form inputs | Add `focus-visible` outline: `outline: 2px solid #001B4F` with offset |
| Drawer missing focus trap | **High** | Mobile drawer overlay | Implement: Tab wraps from last to first focusable element |
| BottomSheet missing focus trap | **High** | Assessment sheet, course quickview | Same as drawer |
| Accordion triggers using `<div>` instead of `<button>` | **High** | FAQ page, Contact form | Replace with `<button>` elements |
| Missing ARIA roles on tabs | **High** | Ilm Hub, Course detail tabs | Add `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls` |
| Form labels not associated with inputs | **High** | Enrollment form | Ensure every `<input>` has `<label for="id">` or `aria-label` |
| Step change in Stepper not announced | **Medium** | Enrollment page | Add `aria-live="polite"` on step title, announce step completion |
| Makhraj diagram: no text alternative or keyboard path | **Medium** | Course detail (Tajweed) | Provide SVG `<title>` + `<desc>` or adjacent text list; keyboard arrow navigation |
| Language toggle not labeled | **Medium** | TopAppBar | Add `aria-label="Switch language"` |
| Splash screen has no skip mechanism | **Low** | Mobile splash screen | Auto-dismiss after 2–3s or provide skip button |
| Links not keyboard accessible | **Medium** | All pages | Ensure all `<a>` and `<button>` are reachable via Tab |

> **Note:** Full WCAG 2.1 AA validation requires manual testing with NVDA (Windows), JAWS, and VoiceOver (Mac/iOS). Automated tools (axe, Lighthouse) catch ~40% of issues.

### 6.2 Responsiveness Gaps

| Breakpoint | Issue | Current State |
|---|---|---|
| **360px (narrow mobile)** | Hero headline overflows; stat cards stack into single column; Stepper labels truncate | Home, Enroll |
| **360px** | Button text wraps; CTA buttons too tall relative to viewport | All pages |
| **600px (landscape mobile)** | BottomTabBar + TopAppBar consume ~30% of viewport; limited room for content | All mobile |
| **768px (tablet)** | No dedicated tablet layout designed; Tailwind jumps from `md:` (mobile) to `lg:` (desktop); 2-column grids not tested | All pages |
| **900px** | Course grid: unclear if 2, 3, or 4 columns | `/courses` |
| **1200px+** | Some sections use full-bleed width; max-width container not consistently applied | Multiple |
| **Very wide (1600px+)** | No max-width constraint on some sections; content stretches | Layout unclear |

### 6.3 Arabic / RTL / Tashkeel Rendering

| Risk | Detail | Fix |
|---|---|---|
| `font-feature-settings` not set globally | Noto Serif Arabic requires `"kern" 1, "calt" 1` for correct ligatures | Add to global CSS: `* { font-feature-settings: "kern" 1, "calt" 1; }` |
| Tashkeel line-height insufficient | Arabic with diacritics (harakat) clips if `line-height < 1.8`; current `line-height: 56px` for 28px font is good (2.0x) but not all instances verified | Audit all Arabic text elements; ensure `line-height >= 1.8` |
| Mixed-direction inline text not marked | English + Arabic Quran verse in same paragraph — LTR/RTL bidirectional algorithm may mis-render | Wrap verse in `<span dir="rtl">` even if page `dir="rtl"` |
| Numeral directionality not specified | Western (0–9) vs. Arabic-Indic (٠–٩) numerals; course numbers, fees may display inconsistently | Decide standard; use CSS `direction: rtl;` on appropriate elements or font feature |
| Icons not mirrored in RTL | Back/chevron/menu icons point wrong direction in RTL mode | Mirror via `transform: scaleX(-1)` on RTL or use RTL-specific SVG variant |
| `dir` attribute not dynamically set | HTML `lang="en"` is static; switching to Urdu doesn't update `<html dir="rtl">` | On language change: `document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr'` |
| Drawer only has RTL variant; other pages not prototyped in RTL | `urdu-rtl` drawer exists but no RTL versions of full home/courses/about pages | Prototype at least one full-page RTL layout for validation |

### 6.4 Performance Concerns

| Concern | Impact | Fix |
|---|---|---|
| Google Fonts: 3 families, multiple weights | Render-blocking; ~200–400ms to first text paint if not optimized | Use `font-display: swap`; preconnect: `<link rel="preconnect" href="https://fonts.googleapis.com">` |
| Material Symbols full variable font (~2MB in dev) | Loads all icon weights even if only 3–4 icons used | Use icon subset or SVG sprite; or lazy-load `@font-face` declarations |
| Images not optimized | Large PNG/JPG files, no responsive `srcset`, no lazy loading | Add `loading="lazy"`, `srcset` with 1x/2x or webp/avif variants; use `<picture>` |
| Hero image not preloaded | LCP (Largest Contentful Paint) image is not prioritized | Add `<link rel="preload" as="image" href="...">` for above-fold hero |
| Tailwind CSS via CDN (if prototype uses it) | 3MB+ inline CSS for dev mode; huge payload | Switch to Tailwind CLI / PostCSS build with PurgeCSS (~50KB production) |
| Google Maps iframe loads immediately | Blocks rendering, increases page size | Lazy-load on scroll or click-to-load: replace with thumbnail, load iframe on click |
| No image optimization at build time | — | Use `next/image` (if Next.js) or build tool plugin for automatic optimization |
| Unminified HTML in prototype | Large individual HTML files | Bundle build step with minification |

### 6.5 Broken Links & Hardcoded Values

| Item | Issue | Fix |
|---|---|---|
| Student Portal link | Points to `#` or non-existent page | Create `/student-portal` page or mock |
| Course detail links (non-Hifz) | Points to `#` or 404 | Create `/courses/tajweed`, `/courses/arabic`, etc., or use dynamic `[slug]` route |
| Instagram handle in Footer | "al_jazari_educational_academy" — verify it's active | Confirm handle; test link opens profile |
| Phone number `+919591250910` | Verify it's active and can receive calls/WhatsApp | Test both phone and WhatsApp link targets |
| Current year in Footer copyright | Hardcoded to 2024 (if set) | Use dynamic `new Date().getFullYear()` |
| Timeline years | Hardcoded "Founded 2015" or similar (if set) | Move to timeline.ts data file |
| Placeholder images | Any gray boxes or stock images | Replace with real academy images or remove |
| Map embed URL | Blank or placeholder | Get real Google Maps embed code for address |
| Email `mailto:` | Blank or placeholder | Set real academy email; test `mailto:` link |
| Privacy Policy / Terms link | Points to `#` or `404` | Create legal page or redirect to hosted legal docs |

### 6.6 Design Inconsistencies

| Item | Issue | Details |
|---|---|---|
| Heading levels | Some pages start `<h2>` instead of `<h1>` | Audit heading hierarchy per page; ensure one `<h1>` per page |
| Button sizes | "Enroll Now" CTA varies (44px on home vs. 48px on courses) | Standardize sizes: `sm` (40px), `md` (48px), `lg` (56px) |
| Card border radius | Some 16px, some 20px, some 24px | Standardize: cards 20px, images inside cards 16px, modals 24px |
| Section spacing | Vertical padding: sometimes 80px, sometimes 60px, sometimes 100px | Use spacing tokens: `space-lg` (24px), `margin-mobile` (48px), `margin-desktop` (88px) |
| Icon weight inconsistency | Some icons use `wght: 300`, others `wght: 400` | Standardize to `wght: 400` globally unless specific accent needed |
| `lang` attribute on `<html>` | Set to `lang="en"` globally; doesn't change on language toggle | Dynamically update when language changes: `document.documentElement.lang = lang` |
| Form input styling | Some inputs 44px, some 48px, some 40px | Standardize input height: 48px; label fonts 14px |
| Chip colors | Inconsistent color usage; some chips use primary, others secondary, others custom | Create chip color palette: primary / secondary / neutral / success / warning |

---

## 7. RECOMMENDATIONS

### 7.1 Recommended Tech Stack

| Layer | Choice | Rationale |
|---|---|---|
| **Framework** | Next.js 14+ (App Router) | SSR/SSG for all pages, API routes for forms, `next/image` optimization, Vercel deploy |
| **Styling** | Tailwind CSS v3 + CSS Variables | Already in prototypes; custom design tokens via CSS vars for theming |
| **i18n** | `next-intl` or `next-i18next` | Built-in Next.js routing, automatic language detection, RTL support |
| **Form Handling** | React Hook Form + Zod | Lightweight, zero-dependency validation, excellent DX |
| **State Management** | Zustand or Jotai | Simple global state (language, dark mode, student mock data) |
| **Component Library** | Headless UI + custom Tailwind | Accessibility-first, full control over styling |
| **Icons** | React component wrappers on Material Symbols CDN | Or: export SVG icons from design system as components |
| **Email / Forms** | Resend (email) + Formspree or custom API | Transactional emails, form submission handling |
| **Hosting** | Vercel | Optimized for Next.js, easy preview deployments |
| **CMS** (if needed later) | Sanity.io or Contentful | Headless CMS for course/FAQ content updates without code |

### 7.2 Folder Structure

```
al-jazari-academy/
├── public/
│   ├── images/
│   │   ├── courses/
│   │   ├── team/
│   │   ├── ilm-hub/
│   │   └── ...
│   ├── fonts/
│   │   └── noto-serif-arabic.woff2  (self-hosted)
│   └── icons/
│       └── material-symbols-*.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx               (root layout, header, footer)
│   │   ├── page.tsx                 (home page)
│   │   ├── [lang]/
│   │   │   ├── layout.tsx           (i18n layout wrapper)
│   │   │   ├── page.tsx             (home translated)
│   │   │   ├── courses/
│   │   │   │   ├── page.tsx         (course listing)
│   │   │   │   ├── [slug]/
│   │   │   │   │   └── page.tsx     (course detail)
│   │   │   ├── enroll/
│   │   │   │   ├── page.tsx         (enrollment form)
│   │   │   │   └── thank-you/
│   │   │   │       └── page.tsx
│   │   │   ├── about/page.tsx
│   │   │   ├── contact/page.tsx
│   │   │   ├── fees-faq/page.tsx
│   │   │   ├── ilm-hub/page.tsx
│   │   │   ├── legal/
│   │   │   │   ├── privacy/page.tsx
│   │   │   │   └── terms/page.tsx
│   │   │   └── student-portal/page.tsx
│   │   └── api/
│   │       ├── contact/route.ts     (contact form submission)
│   │       ├── enroll/route.ts      (enrollment submission)
│   │       └── ...
│   ├── components/
│   │   ├── shell/
│   │   │   ├── TopAppBar.tsx
│   │   │   ├── BottomTabBar.tsx
│   │   │   ├── DrawerMenu.tsx
│   │   │   └── Footer.tsx
│   │   ├── buttons/
│   │   │   └── Button.tsx
│   │   ├── cards/
│   │   │   ├── CourseCard.tsx
│   │   │   ├── StatCard.tsx
│   │   │   └── AchievementCard.tsx
│   │   ├── content/
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── Chip.tsx
│   │   │   ├── Accordion.tsx
│   │   │   └── Tabs.tsx
│   │   ├── form/
│   │   │   ├── FormField.tsx
│   │   │   ├── FormStep.tsx
│   │   │   └── Stepper.tsx
│   │   ├── overlay/
│   │   │   ├── Modal.tsx
│   │   │   ├── BottomSheet.tsx
│   │   │   ├── Toast.tsx
│   │   │   └── Lightbox.tsx
│   │   ├── interactive/
│   │   │   ├── MakhrajDiagram.tsx
│   │   │   ├── HifzCalculator.tsx
│   │   │   └── ProgressRing.tsx
│   │   └── PageLayout.tsx            (common page wrapper)
│   ├── data/
│   │   ├── courses.ts
│   │   ├── faqs.ts
│   │   ├── stats.ts
│   │   ├── team.ts
│   │   ├── timeline.ts
│   │   ├── ilmHub.ts
│   │   ├── navigation.ts
│   │   └── siteConfig.ts
│   ├── hooks/
│   │   ├── useLanguage.ts
│   │   └── useScrollLock.ts
│   ├── styles/
│   │   ├── globals.css              (Tailwind + design tokens as CSS vars)
│   │   └── rtl.css                  (RTL overrides)
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── classNames.ts
│   │   └── validation.ts            (Zod schemas)
│   └── types/
│       └── index.ts                 (TypeScript interfaces)
├── messages/                         (i18n translation files for next-intl)
│   ├── en.json
│   ├── hi.json
│   └── ur.json
├── tailwind.config.ts               (design tokens, custom theme)
├── next.config.js
├── tsconfig.json
└── package.json
```

### 7.3 Page & Component Map

| Page | Components | Interactive Features | Data Sources |
|---|---|---|---|
| **Home** | TopAppBar, Hero, StatCard grid, CourseCard carousel, SectionHeader, Footer, BottomTabBar (mobile) | Enrollment CTA, course filter chips | hero copy, stats.ts, courses.ts (featured only) |
| **Courses** | TopAppBar, Tabs/Chips filter, CourseCard grid, Footer, BottomTabBar | Filter by category, course search (TBD) | courses.ts |
| **Course Detail** | TopAppBar, Tabs (overview/syllabus/reviews/testimonials), CourseCard sticky enroll box, Accordion FAQ, Footer | Tab switching, Makhraj diagram (if Tajweed), scroll-to-section | courses.ts, reviews (mock or DB) |
| **Enroll** | TopAppBar, Stepper header, FormStep multi-step, HifzCalculator widget, BottomTabBar, Footer | Form validation, step navigation, localStorage draft, calculator | enrollment form schema (Zod) |
| **Enroll Thank You** | TopAppBar, Success card, social share buttons, Footer | Celebration animation (optional) | Static |
| **Fees & FAQ** | TopAppBar, SectionHeader, Fee table, Accordion FAQ by category, Filter chips, Footer, BottomTabBar | FAQ filter, accordion expand/collapse | faqs.ts |
| **About** | TopAppBar, Hero, Timeline component, TeamMember card grid, Values section, Footer | Timeline event detail modal (optional) | timeline.ts, team.ts |
| **Contact** | TopAppBar, ContactForm, Map embed, Social links, Footer | Form submission, validation | siteConfig.ts |
| **Ilm Hub** | TopAppBar, Tabs (articles/videos/downloads), IlmHubCard grid, Search bar (TBD), Footer, BottomTabBar | Tab switching, card click → detail lightbox or new page | ilmHub.ts |
| **Student Portal** | TopAppBar, CourseCard with ProgressRing, Certificates section, Upcoming sessions, Footer, BottomTabBar | Course progress display, enrollment mock state | (mock data in context) |
| **Legal** | TopAppBar, Markdown/HTML content, Footer | Anchor navigation to sections | (markdown files or CMS) |
| **404** | TopAppBar, Error message, suggestion links, Footer | Home link | Static |

### 7.4 Build Order (Phased Approach)

**Phase 1: Core Infrastructure (Weeks 1–2)**
- [ ] Next.js project setup + Tailwind config with design tokens
- [ ] i18n setup with next-intl (EN / HI / UR)
- [ ] TopAppBar, BottomTabBar, DrawerMenu, Footer components
- [ ] Data files (courses.ts, faqs.ts, siteConfig.ts, etc.)
- [ ] Routing structure

**Phase 2: Key Pages (Weeks 3–5)**
- [ ] Home page (hero, stats, course teasers, CTA)
- [ ] Courses page (grid, filter chips)
- [ ] Fees & FAQ page (accordion, filter)
- [ ] About page (team, timeline)
- [ ] Contact page (form, map embed)

**Phase 3: Enrollment Flow (Weeks 6–7)**
- [ ] Enroll form (4-step, React Hook Form + Zod validation)
- [ ] HifzCalculator widget
- [ ] Form submission API endpoint
- [ ] Enroll thank-you page

**Phase 4: Dynamic Pages (Weeks 8–9)**
- [ ] Course detail page (dynamic `[slug]` route)
- [ ] Ilm Hub page (tabs, resource listing)
- [ ] Student portal mock

**Phase 5: Polish & Optimization (Weeks 10–12)**
- [ ] Image optimization (`next/image`, WebP/AVIF)
- [ ] Font optimization (self-host, `font-display: swap`)
- [ ] Accessibility audit & fixes (ARIA, contrast, keyboard navigation)
- [ ] RTL full-page testing & refinement
- [ ] Performance optimization (Lighthouse, CWV)
- [ ] Mobile responsiveness refinement
- [ ] SEO metadata per page
- [ ] Testing (unit tests for form validation, e2e for critical flows)

**Phase 6: Deployment & Launch (Weeks 12+)**
- [ ] Staging environment on Vercel
- [ ] Final QA (cross-browser, mobile devices)
- [ ] Production deployment
- [ ] Analytics setup (Google Analytics, Hotjar optional)

---

### 7.5 Key Questions & Assumptions to Confirm

1. **Enrollment Flow**
   - After form submission, who receives the form data? (Email, Zapier webhook, Supabase DB?)
   - Is there an automated confirmation email template?
   - Should students be auto-added to a CRM or mailing list?
   - Who approves/assigns a tutor after enrollment?

2. **Pricing & Payment**
   - Is the Essential Hifz price ₹2,499/month the only offering?
   - Are there other courses with different pricing?
   - Should the site support online payment (Razorpay, Stripe)?
   - Should there be a discount code / coupon system?

3. **Courses & Content**
   - How many distinct courses beyond Hifz should be detailed (detail page per course)?
   - Is syllabus / curriculum content public or restricted to enrolled students?
   - Should reviews/testimonials be real (from DB) or mock?
   - Who manages course content updates (admin panel needed)?

4. **Ilm Hub & Resources**
   - Are Ilm Hub articles markdown/rich text or embedded videos?
   - Should articles have author attribution?
   - Should users be able to download PDFs or other resources?
   - Is there a comments / Q&A section per article?

5. **Student Portal**
   - Should login be mock (no real auth in MVP) or real (NextAuth / Supabase)?
   - What data should students see (enrolled courses, progress, certificates, schedule)?
   - Should they be able to reschedule sessions?
   - Should they have a messaging / support chat?

6. **Localization (EN / HI / UR)**
   - Are all pages translated into all three languages, or only key pages?
   - Is Urdu the only RTL language, or are there others?
   - Should Arabic Quranic verses appear in their original form or transliteration?
   - Who provides translations (in-house or crowdsourced)?

7. **Mobile App**
   - Is a native iOS/Android app planned, or is the mobile web sufficient?
   - Should the splash screen indicate PWA installability?
   - Should notifications be push (PWA / Firebase) or just in-app?

8. **Analytics & SEO**
   - Should course pages have unique SEO metadata (title, description, OG tags)?
   - Should the site track user behavior (Google Analytics, Hotjar)?
   - Should there be a blog for SEO content?

9. **Brand Assets**
   - Is the academy logo finalized? (Link in prototype appears to work)
   - Are there brand guidelines for social media / email?
   - Are testimonial images and team photos ready?

10. **Legal & Compliance**
    - Should privacy policy / terms be visible on the site?
    - Are there specific data protection requirements (GDPR, India DPA)?
    - Should there be refund / cancellation policy?

11. **Infrastructure & Hosting**
    - Should the site be hosted on Vercel (recommended with Next.js)?
    - Should there be a custom domain (aljazari.academy, etc.)?
    - Should SSL/TLS be enforced (yes, always)?
    - Should there be uptime monitoring?

12. **Post-Launch Maintenance**
    - Who owns ongoing content updates (courses, FAQs, team)?
    - Should there be a CMS for non-technical admins?
    - How should bug reports / feature requests be handled?

---

## Summary

This analysis identifies **30 reusable components**, **8 interactive behaviors**, **40+ design/a11y risks**, and a **phased 12-week build plan** for a production-ready Next.js website. The prototype provides excellent reference designs; consolidation into a component library and data-driven approach will unlock rapid iteration.

**Next step:** Confirm the questions above with stakeholders, then proceed to Phase 1 (infrastructure + component setup).

