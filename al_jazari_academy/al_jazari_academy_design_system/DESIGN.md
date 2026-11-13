---
name: Al-Jazari Academy Design System
colors:
  surface: '#f7f9fd'
  surface-dim: '#d8dade'
  surface-bright: '#f7f9fd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f8'
  surface-container: '#eceef2'
  surface-container-high: '#e6e8ec'
  surface-container-highest: '#e0e3e6'
  on-surface: '#181c1f'
  on-surface-variant: '#444650'
  inverse-surface: '#2d3134'
  inverse-on-surface: '#eff1f5'
  outline: '#757781'
  outline-variant: '#c5c6d1'
  surface-tint: '#455c98'
  primary: '#001b4f'
  on-primary: '#ffffff'
  primary-container: '#17316b'
  on-primary-container: '#849bdc'
  inverse-primary: '#b2c5ff'
  secondary: '#775a17'
  on-secondary: '#ffffff'
  secondary-container: '#fed486'
  on-secondary-container: '#785a18'
  tertiary: '#002514'
  on-tertiary: '#ffffff'
  tertiary-container: '#003d24'
  on-tertiary-container: '#43b07b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001848'
  on-primary-fixed-variant: '#2d447f'
  secondary-fixed: '#ffdea3'
  secondary-fixed-dim: '#e9c175'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4200'
  tertiary-fixed: '#8df8bd'
  tertiary-fixed-dim: '#71dba2'
  on-tertiary-fixed: '#002112'
  on-tertiary-fixed-variant: '#005232'
  background: '#f7f9fd'
  on-background: '#181c1f'
  surface-variant: '#e0e3e6'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 52px
    fontWeight: '600'
    lineHeight: 64px
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 38px
    fontWeight: '600'
    lineHeight: 48px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  caption:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  arabic-verse:
    fontFamily: Noto Serif
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 56px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 1.5rem
  margin-desktop: 5.5rem
  margin-mobile: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an academic, trustworthy, and serene learning environment for Quranic studies, Tajweed, Hifz, and Tafseer. Balancing sacred tradition with contemporary digital craftsmanship, the aesthetic avoids brochure-like conventions in favor of a focused, premium edtech application feel.

### Personality & Emotional Response
- **Trustworthy & Authoritative:** Instills scholarly reverence and credibility through deep institutional navies, meticulous typography, and disciplined structural rhythm.
- **Calm & Encouraging:** Utilizes expansive, tinted pastel backdrops (soft lavender, blush, ice navy) that relieve visual fatigue during prolonged memorization and reading sessions.
- **Modern & Polished:** Embraces soft-surfaced white cards, balanced elevation, rounded geometry, and crisp iconographic badge accents.

### Visual Style
The system sits at the intersection of **Modern SaaS Clarity** and **Subtle Heritage Nuance**. It relies on crisp white floating surfaces, gentle ambient shadows tinted with deep navy pigment, and low-opacity geometric Islamic star motifs (maximum 5% opacity) restricted to headers, accent framing, and footers. Visual storytelling explicitly avoids photographs of human faces, utilizing purposeful typography, iconography, and structured progress dashboards.

## Colors

The palette establishes an intentional hierarchy: commanding deep navy anchors navigation and instructional weight, balanced by tinted pastel sections and selective warm gold accents.

### Palette Architecture
- **Primary Navy (`#17316B`) & Navy Deep (`#0F2250`):** Used for primary buttons, core branding, high-emphasis text, and primary navigational landmarks.
- **Accent Soft Gold (`#C8A35A`):** Used strictly as a jewel accent—reserved for achievement badges, rating stars, active milestone rings, and completion ribbons. Never used for long-form reading text.
- **Tonal Tints:**
  - `Navy Soft` (`#E8EDF8`): Subtle states, interactive hover surfaces, and segmented controls.
  - `Lavender Tint` (`#EFEAF8`): Dedicated background tint for Tafseer and reflection modules.
  - `Blush Tint` (`#FCEFF3`): Soft background tint for Hifz, revision, and memory checkpoint sections.
- **Surfaces & Neutrals:**
  - `App Background` (`#F5F7FB`): The canvas base.
  - `Card Surface` (`#FFFFFF`): The elevated foreground container.
  - `Border Stroke` (`#E1E6F2`): Structural dividers and card perimeters.
- **Text & Feedback:**
  - `Heading Ink` (`#14213D`): Primary contrast text.
  - `Body Ink` (`#4B5675`): Secondary readable body text meeting WCAG AAA contrast against white cards.
  - `Success` (`#2E9E6B`): Recitation validation and completion tracking.
  - `Warning` (`#E0A030`): Revision warnings and upcoming scheduled sessions.

## Typography

The typographic hierarchy pairs modern geometric clarity with respectful script rendering.

### Primary Typefaces
- **Headings (Plus Jakarta Sans):** SemiBold weight provides contemporary warmth and structure without harshness. Letter spacing is slightly tightened on large display sizes (-0.02em).
- **Body & Functional UI (Inter):** Ensures legibility for schedules, curriculum tracking, student notes, and complex metadata across all viewports.
- **Scriptural Arabic (Noto Serif / Quranic Naskh Stack):** Applied to Ayahs, Tajweed rules, and Hadith references. Designed with strict RTL directionality, full tashkeel rendering support, and an expanded line-height ratio (2.0x) to eliminate diacritic clipping.

## Layout & Spacing

The layout structure relies on a bounded 12-column grid capped at a maximum width of `1200px`, maintaining clear line-length discipline across widescreen displays.

### Form Factors & Breakpoints
- **Desktop (1024px+):** 12 columns with `24px` (`1.5rem`) gutters. Vertical section padding is set to `88px` (`5.5rem`) to allow deliberate breathing room between curriculum tracks and interactive modules.
- **Tablet (768px – 1023px):** 8 columns with `20px` gutters and `32px` outer horizontal margins. Bento-style module grids collapse from 3 or 4 columns down to 2 columns.
- **Mobile (320px – 767px):** 4 columns with `16px` gutters and `20px` outer margins. Vertical section padding decreases to `48px` (`3rem`). Bento grids stack vertically into single-column cards.

## Elevation & Depth

Visual hierarchy uses clean layering rather than stark contrast. The base app canvas rests at `#F5F7FB`, upon which crisp `#FFFFFF` cards float with soft depth.

### Depth Rules
- **Base Canvas:** Flat background (`#F5F7FB`) with optional alternating tinted sections (`#EFEAF8`, `#FCEFF3`, `#E8EDF8`).
- **Cards & Bento Units:** Surface `#FFFFFF` bordered with a 1px solid stroke (`#E1E6F2`) and elevated by a navy-tinted ambient shadow:
  `box-shadow: 0 6px 20px rgba(23, 49, 107, 0.08);`
- **Interactive Hover:** Translates vertically by `-2px` with expanded shadow:
  `box-shadow: 0 12px 28px rgba(23, 49, 107, 0.12);`
- **Floating Modals & Flyouts:** `box-shadow: 0 16px 40px rgba(15, 34, 80, 0.16);`
- **Background Watermarks:** Geometric 8-point Islamic star motifs must maintain an opacity between 3% and 5% in `#17316B`, placed solely as ambient background textures behind hero areas and footers.

## Shapes

The design system implements a soft, friendly, and structured corner radius hierarchy:

- **Cards & Bento Units:** `20px` border-radius for an approachable, app-like feel.
- **Buttons & Action Controls:** `14px` border-radius for smooth, tactile feedback.
- **Form Inputs & Dropdowns:** `12px` border-radius for clean structure.
- **Chips, Badges, Tabs & Avatars:** `999px` full pill radius.
- **Icon Containers:** Soft circular housings (`50%` radius) on soft-tint backdrops (`#E8EDF8` or `#EFEAF8`).

## Components

### Buttons
- **Primary:** Background `#17316B`, text `#FFFFFF`, border-radius `14px`, padding `14px 28px`. Hover shifts to `#0F2250`.
- **Secondary / Soft:** Background `#E8EDF8`, text `#17316B`, border-radius `14px`. Hover deepens to `#D6DFEE`.
- **Accent:** Background `#C8A35A`, text `#FFFFFF`, reserved for "Enroll Now" or certificate milestones.

### Top App Bar & Navigation
- Surface `#FFFFFF` with bottom border `1px solid #E1E6F2`.
- Contains academy book and star crest emblem on the left, pill-shaped central route container with active state marked by `#E8EDF8` pill and `#17316B` text, and quick action "Student Portal" button on the right.

### Chips & Badges
- Pill-shaped (`999px`), padding `6px 14px`, text `13px` medium.
- Category indicators use subtle tint pairs (e.g., Tafseer in `#EFEAF8` background with `#17316B` text; Tajweed in `#FCEFF3` background with `#8A2846` text; Verified in `#E8F6ED` background with `#2E9E6B` text).

### Bento-Grid Cards
- Multi-tier metric and feature cards featuring `20px` corner radii, `#FFFFFF` surfaces, and `1px solid #E1E6F2` borders.
- Top-left contains a `44px` circular badge featuring a rounded `1.75px` stroke Lucide-style icon centered within `#E8EDF8`.

### Progress Bars & Stepper Indicators
- **Track:** Height `8px`, border-radius `999px`, background `#E1E6F2`.
- **Fill:** Primary Navy `#17316B` or Success Green `#2E9E6B`.
- **Milestone Steppers:** Numbered circular nodes (`32px`) connected by `2px` lines. Completed nodes display deep navy with white checkmarks; active nodes showcase a gold border (`#C8A35A`) with pulsing center dot.

### Inputs & Selection Controls
- **Inputs:** Height `48px`, border-radius `12px`, border `1px solid #E1E6F2`, background `#FFFFFF`. Active focus displays a `2px` ring in `#17316B` with `0.1` opacity glow.
- **Checkboxes & Radios:** `20px` with `6px` radius (or circle for radio). Checked fill `#17316B` featuring crisp white vector tick.

### Tabs & Accordions
- **Segmented Tabs:** Contained pill track (`#E8EDF8`, `999px` radius) with sliding `#FFFFFF` card indicator and deep navy text.
- **Curriculum Accordions:** Full-width white container with `20px` radius, expandable list of Surahs or lessons, and chevron indicator with a 90-degree rotate animation.