# Al-Jazari Academy — Placeholder Content List

This document lists all placeholder values that must be filled in before production launch.

## Priority: CRITICAL (Block Launch)

### Contact Information
| Item | Current Value | Location | Action |
|---|---|---|---|
| Academy Email | `hello@aljazari.academy` | `src/config/site.ts` | Update to real email |
| Physical Address | `Bangalore, India` | `src/config/site.ts` | Add full address with postal code |
| Google Maps Embed URL | `[PLACEHOLDER]` | Contact page | Add iframe embed from Google Maps |
| Admission Email | `[PLACEHOLDER]` | Enrollment form confirmation | Setup enrollment confirmation email |

### Form Submission
| Item | Current Value | Location | Action |
|---|---|---|---|
| Google Apps Script ID | `YOUR_SCRIPT_ID` | `.env.local` | Setup Google Apps Script & get ID |
| Form Endpoint | `https://script.google.com/...` | `.env.local`, `src/config/site.ts` | Replace with actual endpoint URL |
| Success Email Template | `[PLACEHOLDER]` | Backend setup | Create confirmation email template |
| Admin Notification Email | `[PLACEHOLDER]` | Backend setup | Configure admin notifications |

### Course Data
| Item | Current Value | Location | Action |
|---|---|---|---|
| Course 1 Pricing (Hifz) | `₹2,499/month` | `src/config/site.ts` | Confirm or update |
| Course 2 Pricing (Tajweed) | `₹1,999/month` | `src/config/site.ts` | Confirm or update |
| Course Images | Gray placeholder boxes | Home, Courses pages | Add real course images (recommended: 600×400px) |
| Course Descriptions | Placeholder text | `src/data/courses.ts` | Write detailed descriptions |

## Priority: HIGH (Complete Before Launch)

### Team & People
| Item | Current Count | Location | Action |
|---|---|---|---|
| Team Member Photos | 0 (placeholder only) | About page | Add 5-10 tutor/staff photos |
| Team Member Names | `[PLACEHOLDER]` | `src/data/team.ts` | Add real names |
| Team Member Qualifications | `[PLACEHOLDER]` | `src/data/team.ts` | Add educational background, certifications |
| Team Member Bios | `[PLACEHOLDER]` | `src/data/team.ts` | Write 2-3 sentence bios |

### Course Details
| Item | Current Value | Location | Action |
|---|---|---|---|
| Hifz Syllabus | `[PLACEHOLDER]` | Course detail page | Detail curriculum by Juz/Surah |
| Tajweed Syllabus | `[PLACEHOLDER]` | Course detail page | Detail Makhraj rules, theory |
| Batch Timings | `[PLACEHOLDER]` | Course detail page | List available time slots |
| Course Duration | `8-12 months`, `3-6 months` | `src/config/site.ts` | Confirm or adjust based on academy standards |
| Hifz Duration Calculator | Default values | `src/data/hifzDuration.ts` | Calibrate with academy data (verses/day → months) |

### Achievements & Events
| Item | Current Count | Location | Action |
|---|---|---|---|
| Achievement Images | 0 placeholders | Achievements page | Add student photos, certificates (with permission) |
| Event Photos | 0 placeholders | Achievements page | Add photos from Qirat Competition, etc. |
| Event Details | `Qirat & Nazam Competition 2026` | `src/data/achievements.ts` | Add date, venue, registration link |

### Ilm Hub Content
| Item | Current Count | Location | Action |
|---|---|---|---|
| Articles | 0 | `src/data/ilmHub.ts` | Add 10+ Islamic articles or blog posts |
| Videos | 0 | `src/data/ilmHub.ts` | Link to YouTube videos or embed URLs |
| Downloads | 0 | `src/data/ilmHub.ts` | Add PDF resources, guides |
| Q&A Content | 0 | `src/data/ilmHub.ts` | Add common Q&A responses |

### FAQ & Policies
| Item | Current Count | Location | Action |
|---|---|---|---|
| FAQ Items | 0 custom | `src/data/faqs.ts` | Add 15-20 FAQs per category |
| Enrollment FAQ | Template | `src/data/faqs.ts` | Answer common enrollment questions |
| Fees FAQ | Template | `src/data/faqs.ts` | Explain pricing, payment options, refunds |
| Schedule FAQ | Template | `src/data/faqs.ts` | Explain batch timings, class duration |
| General FAQ | Template | `src/data/faqs.ts` | About academy, eligibility, etc. |

## Priority: MEDIUM (Complete Before SEO/Marketing)

### Legal & Compliance
| Item | Current Value | Location | Action |
|---|---|---|---|
| Privacy Policy | `[PLACEHOLDER]` | `/privacy` route | Write full privacy policy (data handling, GDPR, etc.) |
| Terms & Conditions | `[PLACEHOLDER]` | `/terms` route | Write terms (enrollment, cancellation, refunds, liability) |
| Refund Policy | `[PLACEHOLDER]` | FAQ or separate page | Define refund terms and process |
| Data Protection | `[PLACEHOLDER]` | Privacy policy | Specify data retention, security measures |

### Social Proof & Testimonials
| Item | Current Count | Location | Action |
|---|---|---|---|
| Student Testimonials | 0 real | Home page | Collect 5-10 real student testimonials |
| Testimonial Photos | 0 | Home page | Get permission for student photos (or use avatars) |
| Success Stories | 0 detailed | About page or dedicated page | Document 3-5 student success stories |
| Hafiz Graduates | Count or stat | Home page stats | Update "30+ Certified Huffaz" if different |

### Media & Assets
| Item | Current Value | Location | Action |
|---|---|---|---|
| Logo Vector (SVG) | Placeholder circle | Header, footer | Use official logo SVG |
| Favicon | Generic | `public/favicon.ico` | Add official favicon (32×32px) |
| OG Image | Generic | Meta tags | Add open graph image (1200×630px) for social sharing |
| Hero Banner Image | Placeholder gradient | Home page hero | Add professional banner image |

### Makhraj Interactive
| Item | Current Value | Location | Action |
|---|---|---|---|
| Throat Diagram SVG | `[PLACEHOLDER]` | Ilm Hub page | Create or source Makhraj diagram |
| Makhraj Regions | Template regions | `src/data/makhraj.ts` | Detail all articulation points |
| Arabic Letters | Template letters | `src/data/makhraj.ts` | Map letters to each Makhraj region |
| Pronunciation Audio | Optional | Features | Source or record pronunciation clips |

### Portal (Student Dashboard)
| Item | Current State | Location | Action |
|---|---|---|---|
| Login System | Mock UI only | Portal page | Implement real authentication (NextAuth, Supabase, Firebase) |
| Student Data | Demo data | Portal page | Connect to backend student database |
| Progress Tracking | Static mockup | Portal page | Implement real progress calculation |
| Schedule View | Placeholder | Portal page | Connect to class schedule system |
| Certificates | Static mockup | Portal page | Connect to certificate generation |

## Priority: LOW (Nice to Have / Post-Launch)

### Enhancements
| Item | Current Value | Location | Action |
|---|---|---|---|
| Blog / Articles | 0 | Ilm Hub | Add more long-form content |
| Video Library | 0 URLs | Ilm Hub | Create or curate video lessons |
| Daily Ayah Widget | Static card | Ilm Hub | Implement daily Quran verse rotation |
| Revision Tracker | localStorage only | Ilm Hub | Add data persistence to backend |
| Student Portal Chat | Not implemented | Portal | Add live chat/support feature |
| Testimonials Video | 0 videos | Home page | Record video testimonials from students |

### Analytics & Performance
| Item | Current Value | Location | Action |
|---|---|---|---|
| Google Analytics | Not configured | Meta tags | Setup GA4 tracking |
| Hotjar Heatmap | Not configured | Package.json | Optional: add user behavior tracking |
| SEO Metadata | Basic | All pages | Enhance with schema markup (SchemaOrg) |
| Sitemap | Dynamic generation needed | Build process | Generate sitemap.xml at build time |

### Integrations (Future)
| Item | Current Value | Location | Action |
|---|---|---|---|
| Payment Gateway | Not integrated | Enroll page | Integrate Razorpay or Stripe (if accepting payments) |
| WhatsApp Business | Not integrated | Contact forms | Setup WhatsApp Business API (optional) |
| Email Marketing | Not integrated | Footer | Setup Mailchimp or similar |
| CRM Integration | Not integrated | Form submission | Connect to Salesforce or Pipedrive (optional) |
| Calendar Booking | Not integrated | Course pages | Add Calendly or similar for trial sessions |

---

## How to Update Placeholders

### Step 1: Contact Information
1. Open `src/config/site.ts`
2. Update `contact` object with real values
3. Save and test links

### Step 2: Course Data
1. Open `src/data/courses.ts` (when created)
2. Add real course data
3. Update `src/config/site.ts` with sample courses
4. Test course pages

### Step 3: Form Endpoint
1. Set up Google Apps Script (see instructions below)
2. Get script deployment URL
3. Update `.env.local`: `VITE_FORM_ENDPOINT=https://script.google.com/macros/s/YOUR_ID/usercoderun`
4. Test form submission

### Step 4: Images & Assets
1. Create `public/images/` folder
2. Optimize images (640×480 for courses, 1200×630 for OG)
3. Update image URLs in components/data files

### Step 5: Content Pages
1. Edit `src/pages/*.tsx` files
2. Replace placeholder text with real content
3. Test responsiveness

---

## Google Apps Script Setup (Form Submission)

### Create Script

1. Go to https://script.new/
2. Replace default code with:
```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  // Add headers if first entry
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(Object.keys(data));
  }
  
  // Add data row
  sheet.appendRow(Object.values(data));
  
  // Send email notification
  MailApp.sendEmail('your-email@example.com', 'New Enrollment', JSON.stringify(data, null, 2));
  
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Deploy as new deployment → select "Web app"
4. Execute as: your account
5. Allow access to your Google Sheet
6. Copy deployment URL (contains script ID)
7. Update `.env.local`: `VITE_FORM_ENDPOINT=<deployment_url>`

---

## Testing Placeholders

After updating each section:

1. **Visual Test:** View on desktop (1280px) and mobile (360px)
2. **Link Test:** Click all links, verify they work
3. **Form Test:** Submit test enrollment form, check email
4. **Image Test:** Verify all images load and have alt text
5. **SEO Test:** Check meta tags with browser DevTools

---

## Tracking Progress

Use this checklist to track completion:

- [ ] Contact information updated
- [ ] Form endpoint configured
- [ ] Course data entered
- [ ] Team members added
- [ ] Images uploaded
- [ ] Content proofread
- [ ] Links tested
- [ ] Mobile responsiveness verified
- [ ] Legal pages completed
- [ ] Analytics configured
- [ ] Production deployment ready

