# Raj Kushwaha — AI Video Editor & Creative Content Strategist Portfolio

A premium, production-ready personal portfolio website for **Raj Kushwaha**, multidisciplinary AI video editor, creative content strategist, and motion graphics designer based in India.

---

## 🚀 Features & Architecture

- **Visual Aesthetic**: Near-black/charcoal dark-mode theme (`#090a0f`), refined typography (`Space Grotesk` & `Inter`), subtle electric cobalt & violet accents, zero-pill metadata discipline, and clean hairline borders.
- **Sticky Navbar**: 3-Zone top-bar contract with brand wordmark, active section indicator, smooth scrolling, and mobile menu.
- **Cinematic Hero**: Large bold editorial headline, animated role cycler, direct action CTAs, creative portrait badge, and quick showreel trigger.
- **Trust & Collaboration Strip**: Verified project reference to *CareerGuide.com* and core production strengths with zero fabricated numbers.
- **About Section**: Genuine narrative about combining storytelling, kinetic motion design, and emerging AI workflows. Includes a built-in **Profile Brief & Printable Resume Viewer**.
- **Featured Projects Gallery**: 8 featured case studies across 7 categories (*AI Video Production, Video Editing & Motion Graphics, Social Media Reels & Shorts, Carousel & Graphic Design, Thumbnail & Cover Design, Content Strategy & Scriptwriting, Brand Advertisements*) with filter tabs and real-time search.
- **Detailed Project Case Studies**: Dedicated modal viewer with overview, objectives, creative solution, workflow steps, deliverables, tools used, and next/previous project navigation.
- **Cinematic Showreel Modal**: Simulated media player with play/pause, timecode scrubber, mute/volume control, and fullscreen mode.
- **Services**: 7 detailed service cards with key deliverables, turnaround expectations, and 1-click inquiry pre-fill.
- **Creative Process**: 5-stage interactive timeline (*Discovery & Research → Concept & Script → Design & Production → Editing & Refinement → Final Delivery*).
- **Tools & Workflows**: Honest categorization of creative tools (*Canva, HeyGen, ElevenLabs, Google Flow, Premiere Pro, After Effects, CapCut, Runway, Midjourney, Notion*) with proficiency indicators.
- **Interactive Before & After Showcase**: Working interactive comparison slider to inspect raw drafts vs. final high-converting assets across YouTube Thumbnails, Carousel Slides, and Video Color Grading.
- **Testimonials Section**: Transparent, authentic placeholder ready for real client feedback as campaigns conclude.
- **Contact Section**: High-conversion form with client-side validation, live Express backend endpoint (`POST /api/contact`), mailto fallback, one-click copy email button with toast feedback, and social links.
- **Portfolio Setup & Customization Guide**: Built-in modal and documentation for easy maintenance.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) + Lucide Icons + Google Fonts
- **Backend API**: Node.js + Express (`server.ts`)
- **Centralized Data File**: `src/data/portfolioData.ts`

---

## 📂 Project Structure

```
├── server.ts                       # Express server with /api/contact & Vite dev middleware
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky top bar with 3-zone layout & mobile drawer
│   │   ├── Hero.tsx                # Split hero, role animation, showreel trigger
│   │   ├── TrustStrip.tsx          # CareerGuide.com reference & core pillars
│   │   ├── FeaturedWork.tsx        # Filterable project gallery with 7 categories
│   │   ├── CaseStudyModal.tsx      # Comprehensive case study detail modal
│   │   ├── ShowreelModal.tsx       # Cinematic video player modal
│   │   ├── About.tsx               # Narrative bio & operational card
│   │   ├── Services.tsx            # 7 production services with inquiry pre-fill
│   │   ├── CreativeProcess.tsx     # 5-stage production timeline
│   │   ├── ToolsWorkflow.tsx       # Categorized creative & AI tools
│   │   ├── BeforeAfterShowcase.tsx # Working interactive before/after slider
│   │   ├── Testimonials.tsx        # Authentic reviews & reference requester
│   │   ├── Contact.tsx             # Validated form + API + mailto + copy email
│   │   ├── ResumeModal.tsx         # In-browser printable profile & resume
│   │   ├── SetupGuideModal.tsx     # Built-in customization modal
│   │   └── Footer.tsx              # Personal branding, quiet links, back-to-top
│   ├── data/
│   │   └── portfolioData.ts        # CENTRAL CONFIG: all text, projects, links, tools
│   ├── App.tsx                     # Main layout & state orchestrator
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Tailwind v4 theme, fonts & glass utilities
├── index.html                      # SEO metadata, OpenGraph, JSON-LD schema
├── package.json
└── tsconfig.json
```

---

## ✏️ How to Customize Your Portfolio

All personal info, projects, links, and text are stored in **`src/data/portfolioData.ts`**. You do not need to edit component files.

### 1. Update Name, Portrait & Social Links
Open `src/data/portfolioData.ts` and modify `PORTFOLIO_DATA.personal`:
- Set your profile photo: place your photo in `public/images/portrait.jpg` and set `avatarUrl: '/images/portrait.jpg'`.
- Update email: `contactEmail: 'yourname@example.com'`.
- Update social links: `links.linkedin`, `links.instagram`, `links.youtube`, `links.calendly`.

### 2. Adding or Replacing Projects & Videos
In `src/data/portfolioData.ts`, each item in `PORTFOLIO_DATA.projects` contains:
- `title`, `category`, `projectType`, `tagline`
- `videoUrl`: path to local video file (`/videos/my_reel.mp4`) or YouTube URL
- `aspectRatio`: `'9:16'` (vertical reel) or `'16:9'` (widescreen)
- `deliverables`, `toolsUsed`, `fullCaseStudy` (overview, challenge, solution)

### 3. Adding Real Testimonials
When clients provide verified feedback, open `src/data/portfolioData.ts`, find `testimonialsConfig`:
```typescript
testimonialsConfig: {
  hasRealTestimonials: true,
  placeholderNotice: '',
  ctaPrompt: '',
  items: [
    {
      quote: "Raj delivered incredible short-form reels that elevated our brand engagement.",
      author: "Jane Doe",
      role: "Creative Director",
      company: "Acme Media",
      projectType: "Social Media Reels"
    }
  ]
}
```

---

## 🌐 Deployment to Vercel or Netlify

### Option 1: Deploy on Vercel (Recommended)
1. Push your repository to GitHub.
2. Visit [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Vite**.
5. Click **Deploy**. Your portfolio is live with free global CDN & SSL!

### Option 2: Connecting a Custom Domain (e.g. `rajkushwaha.com`)
1. In Vercel or Netlify, go to **Project Settings → Domains**.
2. Enter your custom domain name.
3. Add the `CNAME` or `A` records provided by Vercel into your domain registrar (GoDaddy, Namecheap, Cloudflare, Google Domains).
4. DNS activates automatically within minutes.
