# Al-Jazari Academy Website

A modern, responsive website for Al-Jazari Educational Academy built with Vite, React, TypeScript, and Tailwind CSS v4.

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone and navigate to the project
cd aljazari-academy

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will open at `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components (Button, Card, etc.)
│   ├── layout/            # Layout components (Header, Footer, Navigation)
│   └── features/          # Feature-specific components
├── pages/                 # Page components (routing)
├── data/                  # Typed data files (courses, FAQs, team, etc.)
├── config/               # Configuration (site.ts)
├── lib/                  # Utilities and helpers
├── hooks/                # Custom React hooks
├── index.css             # Global styles + Tailwind config with @theme
├── App.tsx              # Main app with routing
└── main.tsx             # Vite entry point
```

## Environment Variables

Copy `.env.example` to `.env.local` and update values:

```env
VITE_SITE_URL=http://localhost:5173
VITE_FORM_ENDPOINT=https://script.google.com/macros/s/YOUR_SCRIPT_ID/usercoderun
VITE_WHATSAPP_NUMBER=919591250910
```

### Required Setup

1. **Form Submission Endpoint** — Set `VITE_FORM_ENDPOINT` to your form backend:
   - Google Apps Script (recommended)
   - Formspree
   - Custom API endpoint
   - Firebase Functions

2. **WhatsApp Integration** — Default to `+91 9591250910`, update in `.env.local` if needed

## Pages & Routes

| Route | Page | Status |
|---|---|---|
| `/` | Home | ✅ Implemented |
| `/courses` | Course Listing | ✅ Implemented |
| `/courses/:slug` | Course Detail | ⚠️ Placeholder |
| `/ilm-hub` | Islamic Resources | ⚠️ Placeholder |
| `/achievements` | Student Achievements | ⚠️ Placeholder |
| `/about` | About Us | ⚠️ Placeholder |
| `/enroll` | Enrollment Form | ⚠️ Placeholder |
| `/contact` | Contact | ⚠️ Placeholder |
| `/faq-fees` | FAQ & Pricing | ⚠️ Placeholder |
| `/portal` | Student Portal (Mock) | ⚠️ Placeholder |
| `/privacy` | Privacy Policy | ⚠️ Placeholder |
| `/terms` | Terms & Conditions | ⚠️ Placeholder |
| `*` | 404 Not Found | ✅ Implemented |

## Design System

### Colors (Tailwind v4 @theme block)
- **Primary:** `#001B4F` (navy)
- **Secondary:** `#775A17` (gold)
- **Tertiary:** `#002514` (green)
- **Surface:** `#F7F9FD` (light background)
- **Error:** `#BA1A1A` (red)
- **Success:** `#2E9E6B` (green)

### Typography
- **Headings:** Poppins (600, 700)
- **Body:** Inter (400, 500, 600)
- **Arabic:** Amiri (400, 700)

### Spacing Scale
- `space-xs`: 4px
- `space-sm`: 8px
- `space-md`: 16px
- `space-lg`: 24px
- `space-xl`: 32px
- `space-2xl`: 48px

### Breakpoints
- Mobile: 320px–767px
- Tablet: 768px–1023px
- Desktop: 1024px–1279px
- Wide: 1280px+

## Editing Content

### Site Configuration

Edit `src/config/site.ts` to update:
- Academy name, description
- Contact information (phone, email, address)
- Navigation links
- Form endpoint
- Course data (basic)

### Course Data

Update `src/data/courses.ts` to add/edit courses (when implemented)

### Page Content

Each page is a React component in `src/pages/`. Edit directly to update content.

## Responsive Design

The site is designed mobile-first and tested at:
- **360px** (small mobile)
- **768px** (tablet)
- **1280px** (desktop)

Layout automatically adapts:
- Mobile: Single-column, bottom tab bar, drawer menu
- Tablet: 2-column grids, simplified navigation
- Desktop: Multi-column, sticky sidebars, top navigation

## Deployment

### Vercel (Recommended)

1. Push code to GitHub/GitLab
2. Connect to Vercel: https://vercel.com/import
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

```bash
# Or deploy from CLI
npm i -g vercel
vercel
```

### Other Hosting

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy `dist/` folder to your hosting provider

3. Configure SPA rewrite (all routes → index.html):
   - **Netlify:** Create `netlify.toml` or use UI
   - **GitHub Pages:** Use `react-router-dom` with `HashRouter`
   - **AWS:** Configure CloudFront distribution
   - **Firebase:** Update `firebase.json`

## Performance

- **Lighthouse Target:** 90+ (Performance, Accessibility, Best Practices, SEO)
- **Lazy-loaded routes** via React Router
- **Optimized images** (use WebP/AVIF where possible)
- **Tailwind CSS v4** with @theme (no unused CSS)
- **No unused dependencies** — lean bundle

## Accessibility

- ✅ Semantic HTML
- ✅ WCAG AA contrast ratios
- ✅ Visible focus indicators
- ✅ Keyboard navigation
- ✅ ARIA labels on interactive elements
- ✅ Alt text on images

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest, iOS 14+)
- Edge (latest)

## Placeholder Content List

The following content must be updated before production:

### Contact Information
- [ ] Academy email address
- [ ] Physical address (full details)
- [ ] Google Maps embed URL
- [ ] Alternative phone numbers

### Course Data
- [ ] Course images and hero images
- [ ] Detailed course descriptions
- [ ] Syllabus content
- [ ] Batch timings and schedule
- [ ] Course pricing (update if different from placeholder)

### About Page
- [ ] Team member names and photos
- [ ] Team member bios and qualifications
- [ ] Founder/director information
- [ ] Academy founding year
- [ ] Key milestones and dates

### Ilm Hub
- [ ] Articles and blog posts
- [ ] Video URLs or embeds
- [ ] Downloadable resources
- [ ] Q&A content

### Portal (Student Dashboard)
- [ ] Real authentication system (currently mock)
- [ ] Backend API integration
- [ ] Student enrollment data
- [ ] Progress tracking logic

### Legal
- [ ] Privacy Policy (full text)
- [ ] Terms & Conditions (full text)
- [ ] Refund policy
- [ ] Data protection information

### Testimonials & Social Proof
- [ ] Student testimonials
- [ ] Success stories
- [ ] Student photos (with permission)
- [ ] Achievements/certificates

### Hifz Duration Calculator
- [ ] Calibrated duration table (verses/day → months)
- [ ] Pricing based on duration

### Makhraj Interactive Diagram
- [ ] SVG diagram of throat regions
- [ ] Arabic letters mapping per region
- [ ] Audio clips (optional)

### Form Submission
- [ ] Google Apps Script setup (or alternative backend)
- [ ] Confirmation email template
- [ ] Admin notification setup
- [ ] Success/error messages

## Development Notes

### Adding a New Page

1. Create `src/pages/YourPage.tsx`
2. Add route to `src/App.tsx`
3. Create navigation link in `src/config/site.ts` if needed
4. Test at mobile (360px), tablet (768px), desktop (1280px)

### Adding a New Component

1. Create file in `src/components/ui/` (reusable) or `src/components/features/` (feature-specific)
2. Export from component's `index.ts`
3. Import and use in pages/components
4. Keep components simple and well-typed (TypeScript)

### CSS Guidelines

- Use Tailwind utility classes directly (no @apply if possible)
- Define new design tokens in `src/index.css` @theme block
- No custom CSS — keep styles in Tailwind
- Mobile-first responsive design (`sm:`, `md:`, `lg:` prefixes)

## QA Checklist

### Functionality
- [ ] All 12 pages load without errors
- [ ] Navigation works (all links)
- [ ] Mobile drawer menu opens/closes
- [ ] Bottom tab bar active state updates
- [ ] Form validation works (when implemented)
- [ ] WhatsApp/phone buttons link correctly

### Responsive Design
- [ ] Mobile (360px): single-column, no overflow, bottom bar visible
- [ ] Tablet (768px): 2-column layout, adjusted spacing
- [ ] Desktop (1280px): full layout, sticky elements work
- [ ] Images responsive
- [ ] Text readable at all sizes

### Accessibility
- [ ] All images have alt text
- [ ] Focus rings visible on all buttons
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Form labels linked to inputs
- [ ] Color contrast: 4.5:1 for body text
- [ ] Screen reader-friendly (if tested)

### Performance
- [ ] Page loads in < 3 seconds
- [ ] No layout shift (CLS)
- [ ] Lighthouse score 90+
- [ ] Images lazy-loaded

### Browser Compatibility
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### SEO
- [ ] Page titles set per page
- [ ] Meta descriptions present
- [ ] Open Graph tags configured
- [ ] Favicon displays
- [ ] sitemap.xml accessible (if generated)

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :5173
kill -9 <PID>
```

### Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Build Fails
```bash
# Check TypeScript errors
npm run type-check

# Clean build
rm -rf dist
npm run build
```

## Support & Contact

For questions about the build or customization:
- Review `requirements.md` for full specification
- Check `design.md` for design tokens
- See `tasks.md` for implementation details

---

**Built with** Vite • React 18 • TypeScript • Tailwind CSS v4 • Lucide React • Framer Motion

**Deployed on** Vercel (recommended) or any static hosting with SPA rewrite support
