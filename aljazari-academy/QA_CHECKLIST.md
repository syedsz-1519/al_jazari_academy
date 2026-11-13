# Al-Jazari Academy — QA Checklist

This document lists all tests to verify before production launch.

## Build & Deployment

### Build Process
- [ ] `npm run build` completes without errors
- [ ] `npm run build` completes without warnings
- [ ] `dist/` folder created with HTML, CSS, JS files
- [ ] No console errors in build output
- [ ] `npm run preview` works and displays correct page

### Development
- [ ] `npm run dev` starts without errors
- [ ] Hot reload works (saves auto-update page)
- [ ] No TypeScript errors: `npm run type-check`
- [ ] No console errors on page load

### Deployment
- [ ] Deployed to Vercel successfully
- [ ] Environment variables set in Vercel dashboard
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS working
- [ ] No 404 errors on navigation (SPA rewrite working)

---

## Functionality Testing

### Navigation
- [ ] Home link navigates to `/`
- [ ] Courses link navigates to `/courses`
- [ ] All nav links work and update URL
- [ ] Back/forward browser buttons work
- [ ] Refresh page preserves URL

### Mobile Navigation
- [ ] Bottom tab bar visible on mobile (< 768px)
- [ ] Tab bar hidden on desktop (≥ 768px)
- [ ] Active tab highlighted correctly
- [ ] Tab click navigates correctly
- [ ] Bottom tab bar doesn't cover content

### Drawer Menu (Mobile)
- [ ] Hamburger menu button visible on mobile
- [ ] Drawer opens on button click
- [ ] Drawer closes on backdrop click
- [ ] Drawer closes on link click
- [ ] Close (X) button works
- [ ] Drawer menu not visible on desktop

### Links & CTA
- [ ] "Enroll" button links to `/enroll`
- [ ] "Learn More" buttons navigate to course detail
- [ ] Phone number links to `tel:+919591250910`
- [ ] WhatsApp button links to WhatsApp chat
- [ ] Contact form submits to configured endpoint
- [ ] External links open in new tab (`target="_blank"`)
- [ ] Instagram link works and opens profile

### Forms (When Implemented)
- [ ] Form displays all required fields
- [ ] Field labels visible and linked
- [ ] Form validation works (shows errors on invalid input)
- [ ] Submit button works
- [ ] Loading state shows during submission
- [ ] Success message displays on successful submission
- [ ] Error message displays on submission failure
- [ ] Form data persists in localStorage (draft mode)

---

## Responsive Design

### Mobile (320px–480px)
- [ ] No horizontal scroll
- [ ] Text readable (font size ≥ 14px)
- [ ] Buttons large enough (≥ 44×44px)
- [ ] Images scale properly
- [ ] Bottom tab bar visible
- [ ] Footer doesn't overlap content
- [ ] No layout shift when scrolling
- [ ] Touch targets have adequate spacing

### Mobile Large (480px–767px)
- [ ] Still single-column layout (or 2-col where appropriate)
- [ ] Spacing balanced
- [ ] Images responsive
- [ ] Text still readable

### Tablet (768px–1023px)
- [ ] 2-column grids display correctly
- [ ] Navigation visible or drawer available
- [ ] Spacing appropriate
- [ ] Images not too large or small

### Desktop (1024px–1279px)
- [ ] 3–4 column grids display
- [ ] Top navigation visible
- [ ] Content has max-width container
- [ ] Sticky elements (sidebar, header) work

### Desktop Large (1280px+)
- [ ] Content doesn't stretch to window edges
- [ ] Max-width constraint (≈1200px) applied
- [ ] Spacing consistent

### Viewport Resize
- [ ] Resize window smoothly (no layout shift)
- [ ] Breakpoints trigger correctly
- [ ] No overflow or hidden content

---

## Typography & Spacing

### Font Loading
- [ ] Poppins font loads (headings)
- [ ] Inter font loads (body)
- [ ] Amiri font loads (Arabic)
- [ ] No FOUT (Flash of Unstyled Text)
- [ ] `font-display: swap` working (fallback visible immediately)

### Headings
- [ ] h1 (48px desktop, 36px mobile) — page titles
- [ ] h2 (36px desktop, 28px mobile) — section headings
- [ ] h3 (24px desktop, 22px mobile) — subsection titles
- [ ] h4 (18px desktop) — card titles
- [ ] All headings bold

### Body Text
- [ ] Body text 16px (desktop), 14px (mobile)
- [ ] Line height adequate (≥1.5)
- [ ] Text color is `#181C1F` (on-surface, not pure black)
- [ ] Links underlined or visually distinct
- [ ] Secondary text is `#444650` (on-surface-variant, gray)

### Spacing
- [ ] Consistent padding inside cards (24px, 16px on mobile)
- [ ] Consistent gap between sections (48px desktop, 24px mobile)
- [ ] Grid gaps consistent (16–24px)
- [ ] No awkward spacing or large gaps

---

## Colors & Contrast

### Color Accuracy
- [ ] Primary navy `#001B4F` used for buttons, headings
- [ ] Secondary gold `#775A17` used for accents
- [ ] Background `#F7F9FD` (not pure white, soft)
- [ ] Card background white `#FFFFFF`
- [ ] Text colors accurate

### Contrast Ratios (WCAG AA minimum)
- [ ] Black text on white: 14.6:1 ✓ (exceeds 4.5:1 requirement)
- [ ] Primary navy on white buttons: 13.2:1 ✓
- [ ] Gold on white: ≥ 4.5:1 ✓
- [ ] Gray text on white: 8.2:1 ✓
- [ ] Error red on white: 4.5:1 ✓
- [ ] Success green on white: 4.5:1 ✓

### Color Usage
- [ ] Buttons use primary color
- [ ] Links styled consistently
- [ ] Errors shown in red
- [ ] Success messages shown in green
- [ ] Disabled states show reduced opacity

---

## Components

### Buttons
- [ ] Primary button: navy background, white text, 12px radius
- [ ] Secondary button: white/light background, navy text
- [ ] Text button: no background, navy text
- [ ] Hover state: shadow lift or background change
- [ ] Active state: slight scale-down
- [ ] Disabled state: reduced opacity, no hover effect
- [ ] Focus ring visible on keyboard focus

### Cards
- [ ] White background `#FFFFFF`
- [ ] 16px border radius
- [ ] Box shadow visible
- [ ] Hover shadow lifts (elevation change)
- [ ] Padding consistent (24px large, 16px compact)
- [ ] Image radius matches (12px inside card)

### Chips / Badges
- [ ] Rounded pill shape (999px radius)
- [ ] Proper padding and font size
- [ ] Correct background color per category
- [ ] Text readable (good contrast)

### Forms (When Implemented)
- [ ] Input fields have proper height (48px)
- [ ] Border visible (1px `#E1E6F2`)
- [ ] Focus ring visible (2px primary color)
- [ ] Placeholder text light gray
- [ ] Error state shows red border
- [ ] Disabled state shows reduced opacity
- [ ] Labels positioned correctly

### Tabs (When Implemented)
- [ ] Tab container has pill background
- [ ] Active tab highlighted
- [ ] Tab switch is smooth
- [ ] Tab text readable
- [ ] Keyboard navigation works (arrow keys)

---

## Accessibility

### Semantic HTML
- [ ] Page has single `<h1>`
- [ ] Heading hierarchy correct (h1 → h2 → h3, no skips)
- [ ] Navigation uses `<nav>`
- [ ] Main content in `<main>`
- [ ] Footer uses `<footer>`
- [ ] Articles/sections use `<article>` or `<section>`
- [ ] Buttons are `<button>` or `<a role="button">`
- [ ] Form inputs have `<label>` elements

### Form Accessibility
- [ ] Every `<input>` has associated `<label>` (via `htmlFor`)
- [ ] Required fields marked with `*` and `aria-required`
- [ ] Error messages linked to inputs (aria-describedby)
- [ ] Form instructions clear

### Focus Management
- [ ] Focus ring visible on all buttons (2px, offset)
- [ ] Focus ring visible on form fields
- [ ] Focus order logical (top-to-bottom, left-to-right)
- [ ] Tab navigation works through all interactive elements
- [ ] No focus trap (except modals)
- [ ] Focus not moved unexpectedly

### Images & Alt Text
- [ ] All content images have descriptive alt text
- [ ] Decorative images have `alt=""`
- [ ] Logo alt text: "Al-Jazari Academy Logo" or similar
- [ ] Placeholder images marked clearly
- [ ] Screenshot images described (if any)

### ARIA Labels
- [ ] Icon buttons have `aria-label`
- [ ] Modals have `aria-labelledby` pointing to title
- [ ] Live regions have `aria-live="polite"` or `"assertive"`
- [ ] Expandable sections have `aria-expanded`
- [ ] Links with no text have meaningful `aria-label`

### Keyboard Navigation
- [ ] All interactive elements accessible via Tab key
- [ ] Enter key activates buttons
- [ ] Space key toggles checkboxes
- [ ] Escape key closes modals/dropdowns
- [ ] Arrow keys navigate tabs or lists (if implemented)

### Screen Reader
- [ ] Test with NVDA (Windows) or JAWS
- [ ] Page structure announced correctly
- [ ] Links announced with destination
- [ ] Form labels announced
- [ ] Error messages announced
- [ ] Status updates announced

---

## Performance

### Lighthouse Audit
- [ ] Performance score: ≥ 90
- [ ] Accessibility score: ≥ 95
- [ ] Best Practices score: ≥ 90
- [ ] SEO score: ≥ 90

### Core Web Vitals
- [ ] LCP (Largest Contentful Paint): < 3.0s (mobile), < 2.5s (desktop)
- [ ] FID (First Input Delay): < 100ms (mobile)
- [ ] CLS (Cumulative Layout Shift): < 0.1 (no layout shift on load)

### Load Performance
- [ ] First Contentful Paint (FCP): < 2s
- [ ] Time to Interactive (TTI): < 4s
- [ ] Total bundle size: < 500KB (uncompressed)
- [ ] Images optimized (no images > 500KB each)

### Images
- [ ] Images lazy-loaded (loading="lazy")
- [ ] Responsive images use `srcset` (if applicable)
- [ ] WebP/AVIF format used where supported
- [ ] Placeholder shown while loading
- [ ] No "unsized" warnings

### JavaScript
- [ ] Minified in production
- [ ] No unused dependencies
- [ ] Routes code-split (lazy loading)
- [ ] No console errors or warnings

---

## SEO

### Page Metadata
- [ ] Each page has unique `<title>` (50–60 chars)
- [ ] Meta description present (150–160 chars)
- [ ] Meta description describes page content
- [ ] Favicon displays

### Open Graph & Social
- [ ] `og:title` set
- [ ] `og:description` set
- [ ] `og:image` set (1200×630px)
- [ ] `og:url` set to canonical URL
- [ ] Image displays correctly when shared on social media

### Structured Data
- [ ] JSON-LD schema for EducationalOrganization
- [ ] Course schema (if course pages implement)
- [ ] Event schema (if event pages implement)
- [ ] Schema validated with Google Structured Data Tester

### XML Sitemaps & Robots
- [ ] `sitemap.xml` exists and lists all pages
- [ ] `robots.txt` exists and allows crawling
- [ ] Sitemap references in robots.txt
- [ ] All routes in sitemap

### Canonical Links
- [ ] Canonical link set if multiple URLs for same content
- [ ] Canonical points to https:// URL
- [ ] No redirect chains

---

## Security

### HTTPS
- [ ] All pages served over HTTPS
- [ ] No mixed content (HTTP resources on HTTPS pages)
- [ ] SSL certificate valid

### Headers
- [ ] `X-Content-Type-Options: nosniff`
- [ ] `X-Frame-Options: SAMEORIGIN`
- [ ] `X-XSS-Protection` set
- [ ] `Referrer-Policy` set

### Input Validation
- [ ] Form inputs validated on client
- [ ] Contact form validates email format
- [ ] Phone number validated (10 digits for India)
- [ ] No SQL injection vulnerabilities (if backend)

### Environment Variables
- [ ] Sensitive URLs not hardcoded
- [ ] API keys not in source code
- [ ] Environment variables documented in `.env.example`
- [ ] `.env.local` ignored by git

---

## Browser Compatibility

### Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Browsers
- [ ] Chrome Mobile (iOS, Android)
- [ ] Safari Mobile (iOS 14+)
- [ ] Samsung Internet

### Device Testing (Recommended)
- [ ] iPhone SE (375px)
- [ ] iPhone 12 (390px)
- [ ] iPhone 14 Pro Max (430px)
- [ ] Samsung Galaxy S20 (360px)
- [ ] iPad (768px)
- [ ] Desktop (1280px+)

---

## Content Verification

### Home Page
- [ ] Hero headline visible and compelling
- [ ] CTA buttons prominent
- [ ] Stats section displays (100%, 30+, Global)
- [ ] Featured courses show with images
- [ ] Testimonials/social proof visible
- [ ] FAQ preview or quick links
- [ ] WhatsApp/contact banner visible

### Course Listing
- [ ] Course grid responsive
- [ ] Course cards show image, title, price, level
- [ ] Filter chips work (if implemented)
- [ ] Search works (if implemented)
- [ ] Links to course detail pages work

### About Page
- [ ] Mission/vision statement visible
- [ ] Team members display with photos
- [ ] Bios readable and informative
- [ ] Timeline or key milestones shown

### Contact Page
- [ ] Contact form displays all fields
- [ ] Map embedded correctly
- [ ] Phone number and email links work
- [ ] Social media links work (Instagram, etc.)

### FAQ & Fees
- [ ] FAQ accordion expands/collapses
- [ ] Pricing plans display correctly
- [ ] Currency shown (INR, USD)
- [ ] Pricing consistent with site config

---

## Tracking & Analytics

### Setup
- [ ] Google Analytics 4 tracking code installed
- [ ] Tracking fires on page load
- [ ] Form submission tracked as event
- [ ] CTA clicks tracked
- [ ] No errors in Analytics console

### Data
- [ ] Page views recorded
- [ ] Event tracking working
- [ ] Bounce rate reasonable (< 50% for home)
- [ ] Average session duration > 1 minute

---

## Production Readiness

### Pre-Launch
- [ ] All placeholder content replaced with real data
- [ ] Contact information verified (phone, email, address)
- [ ] Links tested and working
- [ ] Images optimized and loaded
- [ ] Legal pages (Privacy, Terms) complete
- [ ] Spelling and grammar checked
- [ ] No broken links (404s)
- [ ] No console errors in production

### Launch
- [ ] Domain configured
- [ ] DNS records updated
- [ ] SSL certificate installed
- [ ] Redirect from old site (if applicable)
- [ ] Announcement sent to email list
- [ ] Social media posted

### Post-Launch
- [ ] Monitor Analytics for traffic
- [ ] Check error logs (Sentry, etc.)
- [ ] Test form submissions daily
- [ ] Monitor performance (Lighthouse weekly)
- [ ] Respond to user feedback
- [ ] Update content as needed

---

## Sign-Off

| Role | Name | Date | Signature |
|---|---|---|---|
| Developer | _________________ | __________ | __________ |
| QA Tester | _________________ | __________ | __________ |
| Product Owner | _________________ | __________ | __________ |
| Launch Approval | _________________ | __________ | __________ |

---

## Notes & Issues Found

*Document any issues, bugs, or observations during testing:*

```
Date: __________
Issue: _______________________________________________
Severity: [ ] Critical  [ ] High  [ ] Medium  [ ] Low
Status: [ ] Open  [ ] In Progress  [ ] Fixed  [ ] Won't Fix
Notes: _______________________________________________
```

---

**Last Updated:** ___________  
**Next Review:** ___________  
**Version:** 1.0

