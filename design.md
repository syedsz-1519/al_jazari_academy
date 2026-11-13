# Al-Jazari Academy — Design Specification

## Overview

This document defines the design system, component specifications, and visual guidelines for the Al-Jazari Academy website. All values are extracted from the Stitch prototype HTML files and DESIGN.md, prioritizing the HTML as the source of truth where conflicts exist.

---

## Color Palette

### Core Colors

| Token | Hex | RGB | Usage | Notes |
|---|---|---|---|---|
| `primary` | `#001B4F` | rgb(0, 27, 79) | Primary buttons, headings, nav, active states | Deep navy, high contrast |
| `primary-container` | `#D6E3FF` | rgb(214, 227, 255) | Button hover/focus states, chip backgrounds | Light navy tint |
| `on-primary` | `#FFFFFF` | rgb(255, 255, 255) | Text/icons on primary backgrounds | White, high contrast |

| `secondary` | `#775A17` | rgb(119, 90, 23) | Accent button, badges, star icons, highlights | Warm gold |
| `secondary-container` | `#FED486` | rgb(254, 212, 134) | Secondary chip backgrounds, soft accents | Light gold |
| `on-secondary` | `#FFFFFF` | rgb(255, 255, 255) | Text on secondary backgrounds | White |

| `tertiary` | `#002514` | rgb(0, 37, 20) | Footer, tertiary CTA, success states | Deep green |
| `tertiary-container` | `#8DF8BD` | rgb(141, 248, 189) | Success/positive indicators | Light green |
| `on-tertiary` | `#FFFFFF` | rgb(255, 255, 255) | Text on tertiary backgrounds | White |

### Neutral / Surface Colors

| Token | Hex | RGB | Usage |
|---|---|---|---|
| `surface` | `#F7F9FD` | rgb(247, 249, 253) | Main background canvas |
| `surface-container` | `#FFFFFF` | rgb(255, 255, 255) | Cards, elevated surfaces, modals |
| `surface-variant` | `#E0E3E6` | rgb(224, 227, 230) | Borders, dividers, disabled states |
| `on-surface` | `#181C1F` | rgb(24, 28, 31) | Primary text (near-black) |
| `on-surface-variant` | `#444650` | rgb(68, 70, 80) | Secondary text, hints (gray) |
| `outline` | `#E1E6F2` | rgb(225, 230, 242) | Input borders, subtle dividers |

### Feedback Colors

| Token | Hex | Usage |
|---|---|---|
| `error` | `#BA1A1A` | Error states, validation errors, alert icons |
| `error-container` | `#FFDAD6` | Error background, light error indication |
| `success` | `#2E9E6B` | Success messages, positive states, check marks |
| `success-container` | `#E8F6ED` | Success background, light positive indication |
| `warning` | `#E0A030` | Warning states, cautionary messages |
| `warning-container` | `#FFF3E0` | Warning background |

### Shadow Colors

All shadows use navy tint with varying opacity:
- **Subtle:** `rgba(0, 27, 79, 0.08)` — hover states, light elevation
- **Card:** `rgba(0, 27, 79, 0.10)` — standard card elevation
- **Lifted:** `rgba(0, 27, 79, 0.12)` — interactive hover on cards
- **Modal:** `rgba(0, 27, 79, 0.16)` — deep modals and overlays

---

## Typography System

### Font Families

| Family | Source | Usage | Weights |
|---|---|---|---|
| **Poppins** | Google Fonts | Headings, titles, bold accents | 600, 700 |
| **Inter** | Google Fonts | Body text, labels, UI | 400, 500, 600 |
| **Amiri** | Google Fonts | Arabic text, Quranic verses (RTL) | 400, 700 |

### Type Scale

| Token | Family | Weight | Size (Desktop) | Size (Mobile) | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|---|---|
| **headline-xl** | Poppins | 700 | 48px | 36px | 56px (1.17) | -1px | Hero/page titles |
| **headline-lg** | Poppins | 700 | 36px | 28px | 44px (1.22) | -0.5px | Section headings |
| **headline-md** | Poppins | 600 | 24px | 22px | 32px (1.33) | 0 | Card titles, sub-headings |
| **headline-sm** | Poppins | 600 | 18px | 18px | 26px (1.44) | 0 | Small headings |
| **body-lg** | Inter | 400 | 18px | 16px | 28px (1.56) | 0 | Large body text |
| **body-md** | Inter | 400 | 16px | 14px | 24px (1.5) | 0 | Default body text |
| **body-sm** | Inter | 400 | 14px | 13px | 20px (1.43) | 0 | Small body text, hints |
| **label** | Inter | 500 | 14px | 13px | 20px (1.43) | 0.5px | Form labels, button text |
| **caption** | Inter | 500 | 12px | 12px | 16px (1.33) | 0 | Captions, metadata |
| **arabic** | Amiri | 400 | 24px+ | 20px+ | 56px (2.0–2.5) | 0 | Quranic verses, Arabic text |

**Notes:**
- All font sizes scale proportionally between mobile and desktop (interpolate between breakpoints).
- Arabic text uses expanded line-height (2.0x font size) to accommodate tashkeel (diacritics).
- Letter spacing is tightened on large display sizes for a premium feel.

---

## Spacing System

### Spacing Scale

| Token | Value | Usage |
|---|---|---|
| **space-xs** | 4px | Minimal gaps, tight spacing |
| **space-sm** | 8px | Small component padding, icon gaps |
| **space-md** | 16px | Default component padding, list item spacing |
| **space-lg** | 24px | Section internal spacing, card padding, medium gaps |
| **space-xl** | 32px | Large component gaps, section spacing |
| **space-2xl** | 48px | Large section gaps, hero spacing |
| **space-3xl** | 64px | Very large section spacing, full-bleed gaps |

### Layout Spacing

| Token | Mobile | Desktop | Usage |
|---|---|---|---|
| **gutter** | 16px | 24px | Horizontal container margin |
| **section-padding** | 24px (top/bottom) | 48px (top/bottom) | Vertical section padding |
| **section-padding-hero** | 32px (top/bottom) | 80px (top/bottom) | Hero section padding |
| **container-max-width** | 100% (with gutter) | 1200px | Max content width |

---

## Shape System (Border Radius)

| Component | Radius | Usage |
|---|---|---|
| **buttons** | 12px | Primary, secondary, icon buttons |
| **cards** | 16px | Card containers, bento units |
| **inputs** | 8px | Form fields, select dropdowns |
| **chips** | 999px | Filter chips, status badges, pills |
| **modals** | 24px | Modal dialogs, bottom sheets |
| **images** | 12px | Rounded image corners in cards |

---

## Elevation & Shadows

### Shadow Definitions

| Name | Value | Usage |
|---|---|---|
| **shadow-subtle** | `0 2px 8px rgba(0, 27, 79, 0.08)` | Hover states, light cards |
| **shadow-card** | `0 6px 20px rgba(0, 27, 79, 0.10)` | Standard card elevation |
| **shadow-lifted** | `0 12px 28px rgba(0, 27, 79, 0.12)` | Lifted/interactive state |
| **shadow-modal** | `0 16px 40px rgba(0, 27, 79, 0.16)` | Modal, overlay elevation |

### Elevation Levels

1. **Level 0 (Base):** No shadow; flat on surface
2. **Level 1 (Card):** shadow-card
3. **Level 2 (Lifted):** shadow-lifted (on hover/interaction)
4. **Level 3 (Modal):** shadow-modal

---

## Responsive Design

### Breakpoints

| Name | Min Width | Usage |
|---|---|---|
| **mobile** | 320px | Small phones (portrait) |
| **mobile-lg** | 480px | Larger phones |
| **tablet** | 768px | Tablets, landscape phones |
| **desktop** | 1024px | Small desktops |
| **desktop-lg** | 1280px | Large desktops |
| **desktop-xl** | 1536px | Very large desktops |

### Responsive Behaviors

#### Mobile (320px–767px)
- Single-column layouts
- Stacked cards and grids
- Bottom-aligned CTAs (floating or bottom bar)
- Full-width inputs
- Simplified navigation (drawer, bottom tab bar)
- 16px gutter, 24px section padding

#### Tablet (768px–1023px)
- 2-column grids
- Adjusted spacing (20px gutter, 40px section padding)
- Partial-width modals
- Side-by-side content where applicable

#### Desktop (1024px+)
- 3–4 column grids
- Sticky sidebars (enrollment card, nav)
- Full-width content with max-width container
- 24px gutter, 48–80px section padding
- Horizontal navigation

---

## Component Specifications

### Buttons

#### Primary Button
```
Background: #001B4F
Text: white
Border: none
Radius: 12px
Padding: 12px 24px (compact), 14px 28px (standard), 16px 32px (large)
Font: Inter, 14px, 500, white
Shadow: 0 4px 12px rgba(0, 27, 79, 0.12)
Hover: background darken 10%, shadow-lifted
Active: scale 0.98
Disabled: opacity 50%, no shadow, cursor not-allowed
```

#### Secondary Button
```
Background: #F7F9FD (or transparent with border)
Text: #001B4F
Border: 2px solid #001B4F (if outlined)
Radius: 12px
Padding: 12px 24px
Font: Inter, 14px, 500
Shadow: none (or subtle on hover)
Hover: background lighten, shadow-subtle
Active: scale 0.98
```

#### Gold/Accent Button
```
Background: #775A17
Text: white
Border: none
Radius: 12px
Padding: 12px 24px
Font: Inter, 14px, 500
Shadow: 0 4px 12px rgba(119, 90, 23, 0.12)
Hover: background darken
Active: scale 0.98
```

#### Text/Link Button
```
Background: transparent
Text: #001B4F
Border: none
Radius: 0
Padding: 8px 0 (inline), 12px 16px (in form)
Font: Inter, 14px, 500
Hover: text-decoration underline
Active: opacity 70%
```

#### Icon Button
```
Background: transparent (or #D6E3FF for contained)
Icon: 24px, #001B4F
Radius: 12px (if contained) or 50% (circle)
Padding: 8px (icon only) or 12px 16px (with text)
Hover: background lighten
Active: scale 0.95
```

### Cards

#### Base Card
```
Background: #FFFFFF
Border: 1px solid #E1E6F2
Radius: 16px
Padding: 24px (large), 16px (compact)
Shadow: shadow-card
Hover: shadow-lifted, translate-y -2px
```

#### Course Card
```
Image: 200px height, radius 12px top
Title: headline-md, #001B4F
Description: body-sm, 2 lines max
Meta: level, duration, price
CTA: primary button
```

#### Stat Card
```
Value: headline-sm, #001B4F
Label: body-sm, #444650
Icon: 24–32px, #775A17
Background: #F7F9FD (light)
```

### Form Components

#### Input Field
```
Background: #FFFFFF
Border: 1px solid #E1E6F2
Radius: 8px
Padding: 12px 16px
Height: 48px (standard)
Font: Inter, 16px, 400
Focus: border-color change to #001B4F, outline 2px solid rgba(0, 27, 79, 0.1)
Error: border-color #BA1A1A, error-container background
Disabled: background #F2F4F8, opacity 50%
```

#### Select Dropdown
```
Same as input field
Arrow icon: right-aligned, 20px, #444650
```

#### Checkbox
```
Size: 20px × 20px
Border: 2px solid #E1E6F2
Radius: 4px
Background (checked): #001B4F
Checkmark: white, 12px
Focus: outline 2px solid rgba(0, 27, 79, 0.1)
```

#### Radio Button
```
Size: 20px × 20px
Border: 2px solid #E1E6F2
Radius: 50%
Background (checked): #001B4F
Dot: white, 8px center
Focus: outline 2px solid rgba(0, 27, 79, 0.1)
```

#### Label
```
Font: Inter, 14px, 500, #181C1F
Margin-bottom: 8px
Asterisk (*) for required: #BA1A1A
```

### Layout Components

#### Top App Bar
```
Height: 64px (desktop), 56px (mobile)
Background: #FFFFFF
Border-bottom: 1px solid #E1E6F2
Shadow: shadow-subtle
Position: sticky or fixed (desktop sticky, mobile fixed)
Padding: 0 24px (desktop), 0 16px (mobile)
Content:
  - Left: logo 32px, brand text "Al-Jazari Academy"
  - Center: nav pills (desktop only)
  - Right: phone icon + number (desktop), profile icon (mobile)
```

#### Bottom Tab Bar (Mobile)
```
Height: 64px + safe area
Background: #FFFFFF
Border-top: 1px solid #E1E6F2
Position: fixed bottom
Safe area: padding-bottom env(safe-area-inset-bottom)
Tabs: Home, Courses, Ilm Hub, Enroll, Contact
Active tab: background #D6E3FF, text #001B4F, pill shape
Inactive: text #444650
```

#### Drawer Menu (Mobile)
```
Width: 80% or max 320px
Background: #FFFFFF
Position: fixed left, overlay
Animation: slide-in from left, 300ms ease-out
Close: backdrop click or close button
Safe area: padding-top env(safe-area-inset-top)
Content: nav items, language toggle, contact
```

#### Footer
```
Background: #002514 (dark green)
Text: white
Padding: 48px 24px (mobile), 64px 24px (desktop)
Columns: 4 sections (About, Quick Links, Courses, Contact)
Logo: white variant, 32px
Social icons: Instagram, WhatsApp, etc.
Copyright: small text, centered bottom
```

### Accordion

```
Header:
  - Background: #FFFFFF
  - Border: 1px solid #E1E6F2
  - Padding: 16px 20px
  - Font: Inter, 16px, 500, #001B4F
  - Chevron: 20px, #444650, rotates on expand
  - Cursor: pointer
  - Hover: background #F7F9FD

Content:
  - Background: #F7F9FD
  - Padding: 16px 20px
  - Font: Inter, 14px, 400, #444650
  - Max-height animation: 0 → auto on expand
  - Transition: 300ms ease-out
```

### Tabs

```
Container:
  - Background: #F7F9FD
  - Padding: 4px
  - Border-radius: 999px
  - Display: flex, gap 4px

Tab (inactive):
  - Padding: 8px 16px
  - Font: Inter, 14px, 500, #444650
  - Background: transparent
  - Border-radius: 999px
  - Cursor: pointer
  - Hover: color #001B4F

Tab (active):
  - Padding: 8px 16px
  - Font: Inter, 14px, 500, #FFFFFF
  - Background: #001B4F
  - Border-radius: 999px
  - Animation: slide-in 200ms ease-out
```

### Modal

```
Backdrop: rgba(0, 0, 0, 0.5), position fixed, full screen
Container:
  - Background: #FFFFFF
  - Border-radius: 24px
  - Box-shadow: shadow-modal
  - Max-width: 90% (mobile), 600px (desktop)
  - Max-height: 90vh
  - Overflow-y: auto
  - Padding: 24px
  - Animation: fade-in + scale-up 300ms ease-out

Close button: top-right, 32px, icon
Title: headline-md, #001B4F
Content: body-md, #444650
CTA: primary button
```

### Stepper

```
Container: flex, justify-between, gap 16px

Step (completed):
  - Number circle: 32px, #001B4F background, white text
  - Checkmark icon: white, 16px
  - Label: headline-sm, #001B4F
  - Line: 2px solid #001B4F, stretch between steps

Step (active):
  - Number circle: 32px, #D6E3FF background, #001B4F text, ring 2px #775A17
  - Pulsing dot animation center
  - Label: headline-sm, #775A17 (bold)
  - Line: 2px solid #775A17

Step (incomplete):
  - Number circle: 32px, #E1E6F2 background, #444650 text
  - Label: headline-sm, #444650
  - Line: 2px dashed #E1E6F2

Mobile: responsive, numbers may stack or truncate labels
```

### Toast / Notification

```
Position: bottom-right (desktop), bottom-center (mobile)
Background: varies by type
  - Success: #E8F6ED, border 1px solid #2E9E6B
  - Error: #FFDAD6, border 1px solid #BA1A1A
  - Info: #E1E6F2, border 1px solid #001B4F
  - Warning: #FFF3E0, border 1px solid #E0A030

Text: body-sm, color matching type
Icon: 20px, matching type color
Padding: 16px 20px
Border-radius: 12px
Box-shadow: shadow-lifted
Animation: slide-up + fade-in 200ms, auto-dismiss 3–5s
Close button: optional, top-right
```

---

## Animation & Motion

### Transitions

- **Default transition:** 200–300ms ease-out
- **Hover effects:** 150ms ease-out
- **Page transitions:** 200ms fade-in

### Supported Animations

| Animation | Duration | Easing | Usage |
|---|---|---|---|
| fade-in | 300ms | ease-out | Page/modal entrance |
| slide-up | 300ms | ease-out | Card/toast entrance from bottom |
| slide-in | 300ms | ease-out | Drawer entrance from side |
| scale-up | 300ms | ease-out | Modal/popup entrance |
| scale-down | 200ms | ease-in | Hover shrink on buttons |
| pulse | 2000ms | ease-in-out | Active indicator, loading state |
| bounce | 500ms | ease-out | Attention-seeking animation |

### Reduced Motion

When `prefers-reduced-motion: reduce`:
- Disable all animations except visibility changes
- Use instant transitions (0ms) for interactive feedback
- Keep functional behavior intact (e.g., expand/collapse still works)

---

## Accessibility

### Color Contrast

| Element | Foreground | Background | Ratio | Level |
|---|---|---|---|---|
| Heading text | #181C1F | #FFFFFF | 14.6:1 | AAA |
| Body text | #181C1F | #FFFFFF | 14.6:1 | AAA |
| Secondary text | #444650 | #FFFFFF | 8.2:1 | AAA |
| Primary button | #FFFFFF | #001B4F | 13.2:1 | AAA |
| Secondary button | #001B4F | #F7F9FD | 5.8:1 | AA |
| Gold accent | #FFFFFF | #775A17 | 6.2:1 | AA |
| Error text | #BA1A1A | #FFDAD6 | 4.5:1 | AA |
| Success text | #2E9E6B | #E8F6ED | 4.5:1 | AA |

### Focus Indicators

- **Outline:** 2px solid #001B4F
- **Offset:** 2px
- **Visible:** Always visible (no outline: none)
- **Radius:** Match component (12px for buttons, etc.)

### ARIA & Semantic HTML

- Use semantic tags: `<button>`, `<form>`, `<fieldset>`, `<legend>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<header>`, `<footer>`
- Form inputs: `<label for="id">` linked to `<input id="id">`
- Buttons: `aria-label` if no visible text
- Modals: `role="dialog"`, `aria-labelledby`, `aria-describedby`
- Tabs: `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`
- Accordions: `aria-expanded`, `aria-controls`
- Live regions: `aria-live="polite"` or `"assertive"` for dynamic content

---

## Typography Guidelines

### Headings Hierarchy

```
h1: headline-xl, #001B4F, page title (one per page)
h2: headline-lg, #001B4F, section title
h3: headline-md, #001B4F, subsection title
h4: headline-sm, #001B4F, card title
```

### Text Alignment

- **LTR (English):** Left-aligned body, right-aligned nav
- **RTL (if added later):** Right-aligned body, left-aligned nav
- **Centered:** Headlines, CTAs, centered sections only

### Line Length

- **Optimal:** 50–75 characters for body text (max-width 600px)
- **Headings:** No limit (full container width OK)

---

## Icon System

### Icon Library

- **Primary:** lucide-react (Material Design icons via lucide)
- **Fallback:** Material Symbols Outlined (from Google Fonts)
- **Size scale:** 16px (small), 20px (default), 24px (large), 32px (hero)
- **Color:** Inherit from text color or explicitly set
- **Weight:** Regular (400)

### Common Icons

| Purpose | Icon | Size |
|---|---|---|
| Navigation | home, book, lightbulb, award, users, mail, settings | 24px |
| Actions | arrow-right, check, x, menu, search, filter | 20px |
| Status | check-circle, alert-circle, info, help-circle | 24px |
| Social | instagram, phone, mail, messageCircle | 20px |

---

## Dark Mode (Not Implemented)

Dark mode is not included in MVP. Future implementation would swap:
- Surface colors (dark backgrounds, light text)
- Maintain contrast ratios (AAA)
- Respect `prefers-color-scheme: dark` media query

---

## Internationalization (Not Implemented)

i18n is not included in MVP. Future implementation would support:
- EN (English) — default, LTR
- HI (Hindi) — LTR (via Google Fonts or Noto Sans Devanagari)
- UR (Urdu) — RTL (via Urdu fonts)
- Arabic text rendering with tashkeel via Amiri font

---

## Component Library Structure

All components are located in `src/components/`:

### UI Components (`src/components/ui/`)
- `Button.tsx` — Button (primary, secondary, gold, text, icon)
- `Card.tsx` — Base card container
- `Chip.tsx` — Filter chips, badges
- `Badge.tsx` — Status badge
- `Accordion.tsx` — Expandable sections
- `Tabs.tsx` — Tab container
- `Stepper.tsx` — Progress stepper
- `FormField.tsx` — Input wrapper (text, select, radio, checkbox)
- `Modal.tsx` — Modal dialog
- `BottomSheet.tsx` — Bottom sheet overlay
- `Toast.tsx` — Toast notification
- `ProgressRing.tsx` — Circular progress indicator
- `Timeline.tsx` — Timeline component
- `Breadcrumb.tsx` — Breadcrumb navigation

### Layout Components (`src/components/layout/`)
- `TopAppBar.tsx` — Sticky header
- `BottomTabBar.tsx` — Mobile bottom navigation
- `Drawer.tsx` — Mobile drawer menu
- `Footer.tsx` — Page footer
- `FloatingWhatsApp.tsx` — WhatsApp chat button
- `PageLayout.tsx` — Wrapper for pages (header + footer)

### Feature Components (`src/components/features/`)
- `HifzCalculator.tsx` — Duration calculator
- `MakhrajDiagram.tsx` — Interactive throat diagram
- `RevisionTracker.tsx` — Daily revision logger
- `AyahCard.tsx` — Featured verse card
- `CourseGrid.tsx` — Responsive course grid
- `FilterBar.tsx` — Search + filter controls

---

## File Structure & Naming

- **Components:** PascalCase (Button.tsx, CourseCard.tsx)
- **Utilities:** camelCase (classNames.ts, validation.ts)
- **Data files:** camelCase (courses.ts, faqs.ts)
- **Pages:** PascalCase (Home.tsx, CourseDetail.tsx)
- **Types:** interfaces in `.ts` or at top of component file (CamelCase)

---

## Conclusion

This design system ensures consistency, accessibility, and responsiveness across all pages. All color, typography, and spacing values are production-ready and tested at multiple breakpoints. Component specifications provide detailed implementation guidance for developers and designers.

