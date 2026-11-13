export const siteConfig = {
  name: 'Al-Jazari Academy',
  description: 'Learn Quran, Hifz, Tajweed & Tafseer Online',
  url: process.env.VITE_SITE_URL || 'https://aljazari.academy',
  
  contact: {
    phone: '+91 9591250910',
    whatsapp: '+91 9591250910',
    email: 'hello@aljazari.academy',
    address: 'Bangalore, India',
    instagram: '@al_jazari_educational_academy',
    instagramUrl: 'https://instagram.com/al_jazari_educational_academy',
  },

  form: {
    endpoint: process.env.VITE_FORM_ENDPOINT || 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/usercoderun',
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

  courses: [
    {
      id: 'hifz-1',
      title: 'Essential Hifz',
      level: 'Beginner to Advanced',
      price: 2499,
      currency: 'INR',
      duration: '8-12 months',
      description: 'Customized Quran memorization with your work and studies',
    },
    {
      id: 'tajweed-1',
      title: 'Tajweed & Makhraj',
      level: 'Intermediate',
      price: 1999,
      currency: 'INR',
      duration: '3-6 months',
      description: 'Perfect pronunciation and rules of Quran recitation',
    },
  ],
}
