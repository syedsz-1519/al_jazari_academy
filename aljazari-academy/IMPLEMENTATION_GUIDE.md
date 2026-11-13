# Implementation Guide — Al-Jazari Academy Website

This guide provides step-by-step instructions for completing and deploying the website.

## Table of Contents
1. [Initial Setup](#initial-setup)
2. [Development Workflow](#development-workflow)
3. [Implementing Pages](#implementing-pages)
4. [Form Submission Setup](#form-submission-setup)
5. [Adding Content](#adding-content)
6. [Testing](#testing)
7. [Deployment](#deployment)

---

## Initial Setup

### 1. Clone/Setup Project

```bash
cd aljazari-academy
npm install
npm run dev
```

Visit `http://localhost:5173` — you should see Home page with basic layout.

### 2. Verify Build

```bash
npm run build
```

Should complete without errors. Check `dist/` folder is created.

### 3. Update Configuration

Edit `src/config/site.ts`:
- Replace contact info with real numbers
- Update navigation items if needed
- Add real WhatsApp number

### 4. Setup Environment Variables

Create `.env.local` (already started):
```env
VITE_SITE_URL=http://localhost:5173
VITE_FORM_ENDPOINT=https://your-form-endpoint.com
VITE_WHATSAPP_NUMBER=919591250910
```

---

## Development Workflow

### Adding a New Component

**Example: Creating a CourseCard component**

1. Create file: `src/components/features/CourseCard.tsx`

```typescript
interface CourseCardProps {
  title: string
  price: number
  level: string
  image: string
  description: string
}

export default function CourseCard({ title, price, level, image, description }: CourseCardProps) {
  return (
    <div className="card">
      <img src={image} alt={title} className="h-40 w-full object-cover rounded-lg mb-4" />
      <h3 className="text-headline-md text-primary font-bold mb-2">{title}</h3>
      <p className="text-body-sm text-on-surface-variant mb-4">{description}</p>
      <div className="flex justify-between items-center mb-4">
        <span className="text-label text-secondary">₹{price}/mo</span>
        <span className="chip bg-surface-variant">{level}</span>
      </div>
      <button className="btn-primary w-full">Learn More</button>
    </div>
  )
}
```

2. Export from index: Create `src/components/features/index.ts`
3. Import and use in pages

### Tailwind Class Reference

Common classes used (from @theme):
```
Colors:
  bg-primary, bg-secondary, bg-tertiary
  text-primary, text-on-surface, text-on-surface-variant
  border-outline, border-on-surface-variant

Spacing:
  p-6 (padding 24px), p-4 (16px), p-3 (12px)
  m-8 (margin 32px), m-4 (16px)
  gap-6, gap-4, gap-2

Radius:
  rounded-md (12px), rounded-lg (16px), rounded-xl (24px), rounded-full (999px)

Typography:
  text-headline-md, text-body-lg, text-body-md, text-body-sm, text-label

Shadows:
  shadow-subtle, shadow-card, shadow-lifted, shadow-modal
```

### Hot Reload Testing

1. Edit any component
2. Save file
3. Browser auto-updates (Vite HMR)
4. Check for errors in browser console

---

## Implementing Pages

### Step 1: Course Detail Page

File: `src/pages/CourseDetail.tsx`

**Current (placeholder):**
```typescript
export default function CourseDetail() {
  const { slug } = useParams()
  return <div>{slug}</div>
}
```

**Upgrade to:**
```typescript
import { useParams, Link } from 'react-router-dom'
import { siteConfig } from '../config/site'

export default function CourseDetail() {
  const { slug } = useParams()
  
  // Find course from config
  const course = siteConfig.courses.find(c => c.id === slug)
  if (!course) return <div>Course not found</div>

  return (
    <div className="py-12 md:py-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Hero */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{course.title}</h1>
          <p className="text-body-lg text-on-surface-variant">{course.description}</p>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Tab content */}
          </div>
          
          {/* Sticky CTA */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="card">
              <h2 className="text-headline-md text-primary font-bold mb-4">{course.title}</h2>
              <p className="text-headline-sm text-secondary font-bold mb-6">₹{course.price}/{course.currency}</p>
              <Link to="/enroll" className="btn-primary w-full text-center">Enroll Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

### Step 2: Enrollment Form Page

File: `src/pages/Enroll.tsx`

**Basic structure:**
```typescript
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

const enrollmentSchema = z.object({
  fullName: z.string().min(3, 'Name required'),
  place: z.string().min(2, 'Place required'),
  contactNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone'),
  course: z.string().min(1, 'Select course'),
  gender: z.enum(['male', 'female', 'other']),
  studentStatus: z.string(),
  startDate: z.string(),
})

type EnrollmentForm = z.infer<typeof enrollmentSchema>

export default function Enroll() {
  const { register, handleSubmit, formState: { errors } } = useForm<EnrollmentForm>({
    resolver: zodResolver(enrollmentSchema),
  })

  const onSubmit = async (data: EnrollmentForm) => {
    // Submit form
    const response = await fetch(import.meta.env.VITE_FORM_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(data),
    })
    // Handle response
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto p-6">
      <input {...register('fullName')} placeholder="Your Name" className="input-base" />
      {errors.fullName && <p className="text-error">{errors.fullName.message}</p>}
      {/* More fields */}
      <button type="submit" className="btn-primary w-full">Submit</button>
    </form>
  )
}
```

### Step 3: About Page

File: `src/pages/About.tsx`

```typescript
export default function About() {
  return (
    <div className="py-12 md:py-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Mission */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Al-Jazari</h1>
          <p className="text-body-lg text-on-surface-variant leading-relaxed max-w-3xl">
            [Your mission statement here]
          </p>
        </section>

        {/* Team Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Team member cards */}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-8">Our Journey</h2>
          {/* Timeline events */}
        </section>
      </div>
    </div>
  )
}
```

---

## Form Submission Setup

### Option 1: Google Apps Script (Recommended)

**Step 1: Create Google Sheet**
1. Go to Google Drive: https://drive.google.com
2. Create new Sheet: "Al-Jazari Enrollments"
3. Add headers: Name, Phone, Course, Date, Email, Status

**Step 2: Create Apps Script**
1. Go to script.new
2. Replace with script (see PLACEHOLDERS.md)
3. Deploy as Web App
4. Copy deployment URL

**Step 3: Update .env.local**
```env
VITE_FORM_ENDPOINT=https://script.google.com/macros/s/YOUR_SCRIPT_ID/usercoderun
```

**Step 4: Test**
Submit test form from `/enroll` page — should see data in Google Sheet.

### Option 2: Formspree (Simpler, Email-based)

1. Go to https://formspree.io/
2. Create new form, get endpoint URL
3. Update `.env.local`: `VITE_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID`
4. Test submission

### Option 3: Custom Backend (Advanced)

If using Node/Express, Firebase Functions, etc.:
1. Create POST endpoint that accepts form JSON
2. Validate data on backend
3. Save to database
4. Send confirmation email
5. Update `.env.local` with endpoint URL

---

## Adding Content

### Adding a Course

Edit `src/config/site.ts`:
```typescript
courses: [
  {
    id: 'hifz-1',
    title: 'Essential Hifz',
    // ... existing fields
  },
  {
    id: 'new-course',
    title: 'New Course Title',
    level: 'Intermediate',
    price: 1999,
    currency: 'INR',
    duration: '3-6 months',
    description: 'Course description here',
  }
]
```

### Adding a Team Member

Create `src/data/team.ts`:
```typescript
export const teamMembers = [
  {
    id: 'tutor-1',
    name: 'Muhammad Ibrahim',
    role: 'Lead Hifz Instructor',
    bio: 'Certified Hafiz from Al-Azhar with 10+ years experience',
    image: '/images/team/ibrahim.jpg',
    qualifications: ['Al-Azhar Certified', 'Tajweed Expert'],
  },
  // Add more team members
]
```

Import in `About.tsx` and map over array.

### Adding FAQ

Create `src/data/faqs.ts`:
```typescript
export const faqs = [
  {
    id: 'faq-1',
    question: 'What is the minimum age?',
    answer: 'There is no minimum age. Students of all ages can join.',
    category: 'enrollment',
  },
  // Add more FAQs
]
```

Import in `FaqFees.tsx` and use with Accordion component.

---

## Testing

### Before Each Build
```bash
npm run type-check  # Check TypeScript errors
npm run build        # Build for production
npm run preview      # Preview production build
```

### Manual Testing Checklist

**Mobile (360px)**
- [ ] Tap all buttons on home page
- [ ] Bottom tab bar visible and clickable
- [ ] No horizontal scroll
- [ ] Text readable (zoom not needed)

**Tablet (768px)**
- [ ] 2-column layouts display
- [ ] Images properly sized
- [ ] Spacing balanced

**Desktop (1280px)**
- [ ] Full layout visible
- [ ] Max-width container (not stretched)
- [ ] Sticky elements work

**Forms**
- [ ] Submit with valid data → should succeed
- [ ] Submit with missing field → shows error
- [ ] Form persists after page reload (localStorage)

**Links**
- [ ] All nav links work
- [ ] All CTA buttons lead to correct pages
- [ ] Phone number dials on mobile
- [ ] WhatsApp opens chat
- [ ] Instagram opens in new tab

### Browser Console
```javascript
// Check for errors
// Should see NO red errors in console
// Only informational logs are OK
```

---

## Deployment

### Vercel (Recommended)

**Step 1: Prepare Repository**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/aljazari-academy.git
git push -u origin main
```

**Step 2: Connect to Vercel**
1. Go to https://vercel.com/import
2. Select GitHub repo
3. Vercel auto-detects Vite settings
4. Click Deploy

**Step 3: Set Environment Variables**
1. Project Settings → Environment Variables
2. Add:
   - `VITE_SITE_URL=https://aljazari.academy` (if using custom domain)
   - `VITE_FORM_ENDPOINT=https://script.google.com/...`
   - `VITE_WHATSAPP_NUMBER=919591250910`

**Step 4: Configure Custom Domain**
1. Project Settings → Domains
2. Add custom domain (e.g., aljazari.academy)
3. Follow DNS instructions from your domain registrar

**Step 5: Verify Deployment**
1. Visit deployed URL
2. Test all pages
3. Check form submission
4. Run Lighthouse audit

### Other Hosting

**For Netlify:**
1. Create `netlify.toml` in root:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```
2. Push to GitHub
3. Connect to Netlify

**For GitHub Pages:**
Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/aljazari-academy/',  // if sub-path
  // ...
})
```

---

## Troubleshooting

### Build Fails

**Error: "Cannot find module..."**
```bash
npm install
npm run build
```

**Error: "TypeScript errors"**
```bash
npm run type-check
# Fix errors shown, then rebuild
```

### Pages Won't Load (404)

**Issue:** SPA routes not rewrites to index.html

**Solution:**
- Vercel: vercel.json already configured ✓
- Netlify: Add netlify.toml rewrite (see above)
- Other: Configure server to rewrite all routes to /index.html

### Form Submission Fails

**Check:**
1. `VITE_FORM_ENDPOINT` correctly set in `.env.local`
2. Endpoint accepts POST requests
3. Browser console shows error (inspect Network tab)
4. Try test endpoint: `curl -X POST https://your-endpoint.com`

### Mobile Layout Broken

**Check:**
1. Viewport meta tag in index.html
2. Tailwind breakpoints: `sm:`, `md:`, `lg:` classes
3. Mobile bottom tab bar: might need `pb-20` on `main`

---

## Performance Optimization

### Image Optimization

1. Compress images:
   - Use TinyPNG or similar
   - Keep under 500KB per image
   - Recommended: 640×480 for cards, 1200×630 for hero

2. Format:
   - Use WebP or AVIF if browser support available
   - Fallback to JPG/PNG

3. In code:
```html
<img 
  src="/images/course.jpg" 
  alt="Course title"
  className="w-full h-40 object-cover rounded-lg"
  loading="lazy"
/>
```

### Code Splitting

Routes auto-split via React Router `lazy()` in App.tsx.

### CSS

Tailwind CSS v4 with @theme block automatically purges unused styles.

---

## Next Steps

1. **Fill Placeholders:** Use PLACEHOLDERS.md checklist
2. **Implement Pages:** Use this guide for each page
3. **Test:** Use QA_CHECKLIST.md
4. **Deploy:** Follow deployment steps above
5. **Monitor:** Check Analytics, form submissions, errors

---

## Support

- **Errors:** Check browser console (F12)
- **Questions:** Review README.md, design.md, requirements.md
- **Customization:** Edit components in `src/components/`
- **Content:** Edit `src/config/site.ts` and data files

