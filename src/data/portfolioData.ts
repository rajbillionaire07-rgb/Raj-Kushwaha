/**
 * Centralized Portfolio Configuration for Raj Kushwaha
 * All personal details, projects, services, workflows, and contact links
 * can be edited directly here without modifying component code.
 */

export interface Project {
  id: string;
  title: string;
  category: 
    | 'AI Video Production'
    | 'Video Editing & Motion Graphics'
    | 'Social Media Reels & Shorts'
    | 'Carousel & Graphic Design'
    | 'Thumbnail & Cover Design'
    | 'Content Strategy & Scriptwriting'
    | 'Brand Advertisements';
  projectType: 'Commercial Client Work' | 'Content Campaign' | 'Concept Spec Ad' | 'Educational Series' | 'Brand Collaboration';
  tagline: string;
  clientOrBrand?: string;
  aspectRatio: '9:16' | '16:9' | '1:1' | '4:5';
  featured: boolean;
  objective: string;
  myRole: string[];
  workflow: string[];
  deliverables: string[];
  toolsUsed: string[];
  durationOrPages?: string;
  previewType: 'video' | 'image' | 'carousel';
  // Media source: can be a local path, direct video URL, or YouTube embed URL
  videoUrl?: string;
  youtubeId?: string;
  thumbnailPlaceholderGradient: string;
  thumbnailAccentColor: string;
  externalLink?: string;
  fullCaseStudy: {
    overview: string;
    challenge: string;
    solution: string;
    keyHighlights: string[];
    slidesOrScreenshots?: { title: string; desc: string; type: 'video' | 'image' }[];
  };
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  deliverables: string[];
  idealFor: string;
  typicalTimeline: string;
}

export interface ToolItem {
  name: string;
  category: 'AI & Generation' | 'Video & Motion' | 'Design & Visuals' | 'Strategy & Scripting';
  description: string;
  level: 'Production Daily' | 'Advanced Workflow' | 'Proficient & Exploring';
  badge: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Raj Kushwaha',
    brandTitle: 'AI Video Editor | Creative Content Strategist | Motion Graphics Designer | AI Content Creator',
    tagline: 'Turning Ideas Into Scroll-Stopping Visual Experiences.',
    shortBio: 'Creative content strategist and AI-driven video editor crafting cinematic reels, promotional motion graphics, and high-converting visual stories for brands, creators, and modern digital platforms.',
    extendedBio: [
      "I sit at the intersection of creative storytelling, kinetic motion design, and cutting-edge AI workflows. Rather than treating AI as a shortcut, I leverage tools like HeyGen, ElevenLabs, Runway, and Google Flow alongside classic editing and motion principles to amplify narrative impact.",
      "From fast-paced educational reels for platforms like CareerGuide.com to brand commercials, entrance-exam campaigns (BITSAT), and scholarship explainer visuals (Reliance Foundation), I build content systems engineered for retention, clarity, and engagement.",
      "Based in India, I collaborate remotely with international creators, fast-scaling startups, educational platforms, and digital agencies across the globe."
    ],
    location: 'India',
    availabilityStatus: 'Open for Freelance & Long-Term Retainers',
    availabilityNote: 'Currently taking selected freelance projects, monthly content retainers, and creative collaborations.',
    avatarPlaceholderInitials: 'RK',
    // Replace with local path when actual photo is uploaded, e.g., '/images/raj_portrait.jpg'
    avatarUrl: '',
    showreelVideoUrl: 'https://drive.google.com/file/d/1MDLCBjS99oRk-vAREFfVyaQUbMTk-iVb/preview',
    resumeFilename: 'Raj_Kushwaha_Creative_Portfolio_Resume.pdf',
    resumePdfUrl: '',
    contactEmail: 'rajbillionaire07@gmail.com',
    secondaryEmail: 'onlyaqualisbrand@gmail.com',
    phone: '+91 6307164317',
    links: {
      email: 'mailto:rajbillionaire07@gmail.com',
      secondaryEmail: 'mailto:onlyaqualisbrand@gmail.com',
      phone: 'tel:+916307164317',
      linkedin: 'https://www.linkedin.com/in/raj-kushwaha-b34556373',
      instagram: 'https://www.instagram.com/digtalraj07',
      whatsapp: 'https://wa.me/916307164317?text=Hi%20Raj%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.',
      behance: 'https://behance.net/rajkushwaha',
      youtube: 'https://youtube.com/@rajkushwahacreative',
      calendly: 'https://calendly.com/rajkushwaha'
    }
  },

  trustStrip: {
    headline: 'Trusted for High-Impact Content Production',
    subline: 'Real production experience across educational media, promotional campaigns, and social-first storytelling.',
    featuredCollaboration: {
      name: 'CareerGuide.com',
      role: 'Educational & Career Content Production (Reels, Carousels, Thumbnails & Scripts)',
      note: 'Verified collaborative project reference'
    },
    corePillars: [
      'Short-Form Video Mastery',
      'AI-Enhanced Production',
      'Kinetic Motion Design',
      'High-Conversion Hooks',
      'End-to-End Content Systems'
    ]
  },

  categories: [
    'All Projects',
    'AI Video Production',
    'Video Editing & Motion Graphics',
    'Social Media Reels & Shorts',
    'Carousel & Graphic Design',
    'Thumbnail & Cover Design',
    'Content Strategy & Scriptwriting',
    'Brand Advertisements'
  ] as const,

  projects: [
    {
      id: 'careerguide-content-production',
      title: 'CareerGuide.com Educational & Career Production',
      category: 'Social Media Reels & Shorts',
      projectType: 'Commercial Client Work',
      tagline: 'High-retention career guidance reels, educational carousels, and YouTube assets.',
      clientOrBrand: 'CareerGuide.com',
      aspectRatio: '9:16',
      featured: true,
      objective: 'Produce high-volume, visually captivating career advisory content designed to demystify complex college choices, entrance exam timelines, and industry skill roadmaps for Gen Z students.',
      myRole: [
        'Short-form video editing and kinetic captions',
        'Multi-slide carousel design and visual hierarchy',
        'High-CTR thumbnail creation for educational topics',
        'Script structuring and hook optimization'
      ],
      workflow: [
        '1. Topic research and retention-focused script formatting',
        '2. Asset generation, typographic layout, and branded motion templates',
        '3. Fast-paced pacing with custom SFX and audio level balancing',
        '4. Final multi-format exports for Instagram Reels and YouTube Shorts'
      ],
      deliverables: [
        'Series of 9:16 vertical reels with animated typography',
        'Step-by-step swipeable carousel decks',
        'Cohesive YouTube & Reels thumbnail system',
        'Hook-optimized scripts tailored for educational topics'
      ],
      toolsUsed: ['Canva', 'Premiere Pro', 'CapCut', 'After Effects', 'ElevenLabs'],
      durationOrPages: '15+ Video Deliverables & 10 Carousels',
      previewType: 'video',
      videoUrl: 'https://drive.google.com/file/d/1EqAkEzYxdaFMg7zbPTPnHa1b9xlo4jL4/preview',
      thumbnailPlaceholderGradient: 'from-blue-900/60 via-slate-900 to-indigo-950/80',
      thumbnailAccentColor: '#3b82f6',
      externalLink: 'https://careerguide.com',
      fullCaseStudy: {
        overview: 'CareerGuide.com needed a continuous pipeline of digestible, attractive short-form content to help school and university students navigate modern career pathways without cognitive overload.',
        challenge: 'Educational guidance can often feel dry or textbook-like. The primary hurdle was transforming dense academic data into snappy, 45-second vertical videos that young viewers actually pause and watch in full.',
        solution: 'Developed an energetic visual language combining kinetic typography, subtle zoom cuts, clear color-coded subject tags, and visual sound design to maximize retention across every single second.',
        keyHighlights: [
          'Engineered retention hooks that cut drop-off in the first 3 seconds',
          'Standardized a recognizable branded thumbnail design system',
          'Synchronized audio cues with motion text highlights for multi-sensory engagement'
        ],
        slidesOrScreenshots: [
          { title: 'The Hook Frame', desc: 'High-contrast text hook with bold question framing', type: 'image' },
          { title: 'Data Breakdown Slide', desc: 'Infographic layout showing career salary and growth ladders', type: 'image' },
          { title: 'Actionable Takeaway CTA', desc: 'Clear call-to-action slide prompting saves and shares', type: 'image' }
        ]
      }
    },
    {
      id: 'bitsat-preparation-campaign',
      title: 'BITSAT Preparation Short Video & Visual Campaign',
      category: 'Video Editing & Motion Graphics',
      projectType: 'Content Campaign',
      tagline: 'High-stakes entrance exam short videos, mock-test promo, and study compilation.',
      clientOrBrand: 'BITSAT Exam Prep Series',
      aspectRatio: '9:16',
      featured: true,
      objective: 'Build an urgent, motivational, and highly practical video campaign for engineering aspirants preparing for the BITSAT entrance examination.',
      myRole: [
        'Motion graphics animation and visual overlays',
        'Dynamic countdown & formula revision reels',
        'High-contrast thumbnail package',
        'Compilation editing of mock-test tips'
      ],
      workflow: [
        'Curated critical formula shortcuts and exam day checklist items',
        'Designed high-contrast, distraction-free visual slides',
        'Timed kinetic text transitions to match energetic pacing',
        'Built YouTube & Instagram cover art that pops on dark-mode feeds'
      ],
      deliverables: [
        '6 BITSAT strategy short videos (9:16)',
        'Exam mock-test promotional motion graphic',
        'Custom YouTube thumbnail suite'
      ],
      toolsUsed: ['After Effects', 'Premiere Pro', 'Canva', 'CapCut'],
      durationOrPages: '6 Video Modules + 4 Thumbnails',
      previewType: 'video',
      videoUrl: 'https://drive.google.com/file/d/10V9vThe_K56msFnirgtPdANgHs5NTn5H/preview',
      thumbnailPlaceholderGradient: 'from-amber-950/50 via-slate-900 to-orange-950/70',
      thumbnailAccentColor: '#f59e0b',
      fullCaseStudy: {
        overview: 'Engineering aspirants face high stress during the final 30 days before BITSAT. This campaign distilled high-yield study hacks and mock test tactics into rapid-fire visual modules.',
        challenge: 'Aspirants have near-zero patience for slow introductions or fluff; information needed to be accurate, instant, and visually organized.',
        solution: 'Implemented split-screen problem breakdowns, custom formula highlight animations, and bold chapter titles that allow students to screenshot actionable study formulas immediately.',
        keyHighlights: [
          'Designed high-contrast visual cue cards for rapid memorization',
          'Eliminated dead air with rhythm-based jump cuts and subtle sound effects',
          'Created memorable cover art that increased click-through rates across test series'
        ]
      }
    },
    {
      id: 'flag-holidays-travel-ad',
      title: 'Flag Holidays Travel & Visa Assistance Commercial',
      category: 'Brand Advertisements',
      projectType: 'Concept Spec Ad',
      tagline: 'International travel & visa assistance promotional video concept with cinematic pacing.',
      clientOrBrand: 'Flag Holidays (Travel Concept)',
      aspectRatio: '16:9',
      featured: true,
      objective: 'Conceptualize and produce a cinematic promotional advertisement showcasing frictionless international travel packages, visa clearance assistance, and bespoke holiday experiences.',
      myRole: [
        'Creative direction & concept storyboard',
        'Color grading and cinematic 16:9 widescreen composition',
        'AI voiceover generation & vocal mastering with ElevenLabs',
        'Motion typography and logo bumper animation'
      ],
      workflow: [
        'Drafted an evocative script focusing on the wanderlust dream vs. travel logistics headache',
        'Selected and color-matched high-definition global destination footage',
        'Crafted a warm, trustworthy AI narrator voice using ElevenLabs',
        'Animated brand trust elements, visa processing guarantees, and booking CTA'
      ],
      deliverables: [
        'Full 60-second widescreen cinematic commercial (16:9)',
        '30-second cutdown for digital paid ads',
        'Social story cut (9:16) with vertical framing'
      ],
      toolsUsed: ['ElevenLabs', 'Premiere Pro', 'After Effects', 'Canva'],
      durationOrPages: '60s Master + 30s Cutdown',
      previewType: 'video',
      videoUrl: 'https://drive.google.com/file/d/1og0FH-JO-eeRVAo3TYqBsLVwC2v7oyb4/preview',
      thumbnailPlaceholderGradient: 'from-emerald-950/60 via-slate-900 to-teal-950/80',
      thumbnailAccentColor: '#10b981',
      fullCaseStudy: {
        overview: 'Master App needed a series of high-conversion mobile promotional video ads built with crisp UI mockups, retention hooks, and fast-paced editing to drive app installs.',
        challenge: 'Mobile apps require stopping the scroll in the first 2 seconds and clearly demonstrating user benefits before drop-off occurs.',
        solution: 'Engineered punchy screen recordings, synchronized sound design, dynamic zooms, and persuasive kinetic typography highlights.',
        keyHighlights: [
          'High-retention 3-second hook structure',
          'Clean in-app UI motion breakdowns',
          'Clear call-to-action app install prompt'
        ]
      }
    },
    {
      id: 'couple-roll-board-game-ad',
      title: 'Couple Roll Board Game Motion Promo',
      category: 'Video Editing & Motion Graphics',
      projectType: 'Brand Collaboration',
      tagline: 'Playful, motion-graphics-driven promotional video for a couples board game.',
      clientOrBrand: 'Couple Roll Board Game',
      aspectRatio: '9:16',
      featured: true,
      objective: 'Produce a vibrant, lively social promo highlighting game mechanics, question card reveals, and romantic conversation starters for couples looking for date-night entertainment.',
      myRole: [
        'Motion design and 2D card flip animations',
        'Energetic sound design and beat-matched transitions',
        'Typography and vibrant palette adaptation',
        'Fast-paced social hook creation'
      ],
      workflow: [
        'Deconstructed physical board game assets into digital vector layers',
        'Keyframed dynamic dice rolls, card reveals, and interactive game board previews',
        'Synced visual pops with upbeat acoustic rhythms',
        'Integrated customer hook: "Ditch the screens for your next date night"'
      ],
      deliverables: [
        '30-second Instagram Reel promo',
        '15-second TikTok / Shorts cutdown',
        'Promotional launch story asset'
      ],
      toolsUsed: ['After Effects', 'Premiere Pro', 'Canva'],
      durationOrPages: '30s Motion Reel',
      previewType: 'video',
      videoUrl: 'https://drive.google.com/file/d/1at4AuzuG77pqGQDp22lASLmAzYGdT1du/preview',
      thumbnailPlaceholderGradient: 'from-rose-950/60 via-slate-900 to-pink-950/80',
      thumbnailAccentColor: '#f43f5e',
      fullCaseStudy: {
        overview: 'Couple Roll needed a social-first motion ad that showed why the game sparks genuine intimacy and laughter, moving away from boring unboxing videos.',
        challenge: 'Static board games can look stationary in videos unless motion graphics bring the rules and prompt cards alive.',
        solution: 'Used kinetic 2.5D card tilts, rolling die physics in After Effects, and real conversational prompts rendered in playful kinetic fonts.',
        keyHighlights: [
          'Beat-matched card reveals that hold visual attention',
          'Vibrant color palette tailored to romantic date-night aesthetics',
          'Clear packaging and checkout CTA end-card'
        ]
      }
    },
    {
      id: 'reliance-foundation-scholarship',
      title: 'Reliance Foundation Scholarship Explainer Reel',
      category: 'Social Media Reels & Shorts',
      projectType: 'Educational Series',
      tagline: 'Educational scholarship explainer video reel and eligibility guide.',
      clientOrBrand: 'Educational Outreach Series',
      aspectRatio: '9:16',
      featured: true,
      objective: 'Demystify eligibility criteria, stipend amounts, and application steps for the prestigious Reliance Foundation Undergraduate & Postgraduate Scholarships for underprivileged students.',
      myRole: [
        'Short-form video editing and kinetic captions',
        'Data simplification into visual checklists',
        'Attention-grabbing cover graphics'
      ],
      workflow: [
        'Analyzed official scholarship brochures to extract essential criteria',
        'Structured fast-paced hook: Hook → Eligibility → Benefits → Deadlines → Application Steps',
        'Rendered clean visual cards using high-contrast typography and verified dates',
        'Exported multi-format asset pack for Instagram Reels'
      ],
      deliverables: [
        'Full 9:16 vertical scholarship explainer reel',
        'Cover graphic with bold scholarship badge'
      ],
      toolsUsed: ['Canva', 'CapCut', 'Premiere Pro'],
      durationOrPages: '1 Full Video Reel',
      previewType: 'video',
      videoUrl: 'https://drive.google.com/file/d/1Tbmy7U9a2ZU44qoJvTGqzPwOfUWVipdT/preview',
      thumbnailPlaceholderGradient: 'from-cyan-950/60 via-slate-900 to-blue-950/80',
      thumbnailAccentColor: '#06b6d4',
      fullCaseStudy: {
        overview: 'Prestigious national scholarships often have dense notification PDFs that confuse students. This visual guide broke down the process into clear, actionable steps.',
        challenge: 'Presenting strict eligibility rules, annual income thresholds, and interview stages without creating a wall of text.',
        solution: 'Built a modular visual card system with checkmarks, step badges, and a prominent "Save for Application Day" prompt.',
        keyHighlights: [
          'High shareability and save rate across student communities',
          'Zero jargon: plain language explanation of financial support details',
          'Accessible layout legible on even small smartphone screens'
        ]
      }
    },
    {
      id: 'indian-army-internship-guide',
      title: 'Indian Army Internship & Defence Opportunity Content',
      category: 'Carousel & Graphic Design',
      projectType: 'Educational Series',
      tagline: 'Informative social media carousel and high-impact cover design for defence aspirants.',
      clientOrBrand: 'Defence Opportunities Guide',
      aspectRatio: '4:5',
      featured: false,
      objective: 'Create an authoritative, disciplined visual breakdown of internship and short-service opportunity entries for engineering and graduate students looking at defence sector paths.',
      myRole: [
        'Graphic design & layout hierarchy',
        'Information architecture and timeline visualization',
        'Social media thumbnail and slide pacing'
      ],
      workflow: [
        'Structured complex notification guidelines into age, stream, and physical criteria',
        'Applied a disciplined olive and tactical charcoal palette with crisp typographic dividers',
        'Engineered an unmissable cover slide that immediately filters target students'
      ],
      deliverables: [
        '6-slide informational carousel',
        'YouTube and Instagram feed thumbnail'
      ],
      toolsUsed: ['Canva', 'Photoshop'],
      durationOrPages: '6 Carousel Slides',
      previewType: 'carousel',
      thumbnailPlaceholderGradient: 'from-emerald-950/70 via-slate-900 to-stone-900',
      thumbnailAccentColor: '#84cc16',
      fullCaseStudy: {
        overview: 'A structured breakdown of Indian Army technical entry options, stipends during training, and career progression.',
        challenge: 'Maintaining formal institutional respect while keeping the design engaging for young social media users.',
        solution: 'Adopted minimalist editorial typography, structured comparison columns, and clean milestone timelines.',
        keyHighlights: [
          'Step-by-step application calendar timeline',
          'Clean eligibility matrix table',
          'Bold cover graphic with clear entry code'
        ]
      }
    },
    {
      id: 'ai-career-skills-series',
      title: 'AI Avatar Presenter & Future Skills Reel',
      category: 'AI Video Production',
      projectType: 'Content Campaign',
      tagline: 'Photorealistic AI presenter video with synced lip movement, natural vocal cadence, and kinetic graphics.',
      clientOrBrand: 'AI Presenter Series',
      aspectRatio: '9:16',
      featured: true,
      objective: 'Produce a futuristic content series exploring how non-technical professionals and college graduates can adopt AI tools like prompt engineering, generative video, and automated research.',
      myRole: [
        'AI avatar & presenter video generation with HeyGen',
        'ElevenLabs voice modulation and natural speech pacing',
        'Kinetic typography, screen recordings, and b-roll compilation',
        'Short-form hook formulation'
      ],
      workflow: [
        'Crafted conversational scripts exploring emerging AI roles',
        'Generated photorealistic presenter scenes in HeyGen',
        'Cleaned vocal audio using ElevenLabs speech clarity tools',
        'Layered dynamic screen graphics, glowing tool callouts, and cursor zooms in Premiere'
      ],
      deliverables: [
        '9:16 vertical AI presenter reel with captions',
        'Visual tool comparison cheat sheet'
      ],
      toolsUsed: ['HeyGen', 'ElevenLabs', 'Canva', 'Premiere Pro', 'Google Flow'],
      durationOrPages: 'AI Presenter Video Episode',
      previewType: 'video',
      videoUrl: 'https://drive.google.com/file/d/1raaHMk1E_-XZLNztfbnBcq_2qZhbXxbk/preview',
      thumbnailPlaceholderGradient: 'from-violet-950/60 via-slate-900 to-indigo-950/80',
      thumbnailAccentColor: '#8b5cf6',
      fullCaseStudy: {
        overview: 'An exploration of modern AI tools demonstrated through actual creative workflows, showing viewers how AI multiplies human output rather than replaces creativity.',
        challenge: 'AI-generated presenter videos can look uncanny or stiff if unpolished.',
        solution: 'Blended AI-generated clips with live software screen captures, fast zooms, dynamic audio drops, and kinetic overlays to keep the video feeling human and energetic.',
        keyHighlights: [
          'High production value with minimal turnaround time',
          'Natural conversational voice cadence',
          'Engaging tool demonstrations that teach practical skills'
        ]
      }
    },
    {
      id: 'doctor-ai-ad-campaign',
      title: 'Healthcare & Doctor AI Commercial',
      category: 'AI Video Production',
      projectType: 'Concept Spec Ad',
      tagline: 'AI-generated visual storytelling and healthcare awareness advertisement with script-to-screen pipeline.',
      clientOrBrand: 'Healthcare AI Spec',
      aspectRatio: '9:16',
      featured: true,
      objective: 'Produce a concept video commercial combining AI generation, realistic script storytelling, and medical context communication.',
      myRole: [
        'AI prompt direction & scene generation',
        'Script formatting and voiceover integration',
        'Color grading and cinematic vertical framing'
      ],
      workflow: [
        'Drafted healthcare scenario script focusing on prompt diagnosis and digital consultation',
        'Generated photorealistic visual scenes with AI generation tools',
        'Synced audio cues and clean typography titles'
      ],
      deliverables: [
        'Full vertical commercial reel (9:16)'
      ],
      toolsUsed: ['HeyGen', 'Runway', 'ElevenLabs', 'Premiere Pro'],
      durationOrPages: 'Vertical Commercial',
      previewType: 'video',
      videoUrl: 'https://drive.google.com/file/d/13VmtJVLypSXdIuW6oZJNcp0Is4YAdMPe/preview',
      thumbnailPlaceholderGradient: 'from-teal-950/60 via-slate-900 to-indigo-950/80',
      thumbnailAccentColor: '#14b8a6',
      fullCaseStudy: {
        overview: 'Exploring how generative video workflows can produce empathetic medical and healthcare commercials with high visual fidelity.',
        challenge: 'Maintaining believable character emotion and professional lighting without physical sets.',
        solution: 'Carefully curated AI generations paired with warm voiceover and subtle motion design.',
        keyHighlights: [
          'Consistent clinical aesthetic',
          'Empathetic audio pacing',
          'Multi-channel vertical social readiness'
        ]
      }
    },
    {
      id: 'neet-preparation-short-reel',
      title: 'NEET 2027 Preparation Retention Reel',
      category: 'Social Media Reels & Shorts',
      projectType: 'Content Campaign',
      tagline: 'High-impact motivational short-form reel with retention hooks for medical entrance aspirants.',
      clientOrBrand: 'NEET 2027 Aspirant Series',
      aspectRatio: '9:16',
      featured: true,
      objective: 'Deliver an urgent, psychological retention reel directly addressing student study mindset, overcoming procrastination, and exam readiness.',
      myRole: [
        'Dynamic vertical editing and kinetic captions',
        'Sound design and beat-matched tension builds',
        'Hook optimization for teenage student audiences'
      ],
      workflow: [
        'Scripted powerful reality-check hook for 2027 medical aspirants',
        'Layered fast-paced kinetic text overlays with bold red and yellow emphasis',
        'Balanced aggressive audio pacing with motivational resolution'
      ],
      deliverables: [
        '9:16 vertical short-form reel'
      ],
      toolsUsed: ['CapCut', 'Premiere Pro', 'Canva'],
      durationOrPages: 'Short-Form Reel',
      previewType: 'video',
      videoUrl: 'https://drive.google.com/file/d/1ydWpAlJE1k5Iz1L_WjOtYkg3t5xjp6BP/preview',
      thumbnailPlaceholderGradient: 'from-amber-950/60 via-slate-900 to-red-950/80',
      thumbnailAccentColor: '#ef4444',
      fullCaseStudy: {
        overview: 'Competitive exam aspirants on social media respond best to high-urgency, honest reality checks rather than generic study tips.',
        challenge: 'Grabbing full focus within the first 1.5 seconds so students do not swipe past.',
        solution: 'Direct conversational hook addressing the viewer as "Tumhara 2027 NEET result..." with rapid text cuts and punchy sound design.',
        keyHighlights: [
          'Instant high-retention opening frame',
          'Kinetic Hindi-English captions',
          'Actionable study discipline takeaway'
        ]
      }
    },
    {
      id: 'ai-script-cinematic-reel',
      title: 'AI Script-to-Screen Cinematic Reel',
      category: 'AI Video Production',
      projectType: 'Brand Collaboration',
      tagline: 'Generative AI visual storytelling turning scripted concepts into cinematic reels.',
      clientOrBrand: 'AI Generative Series',
      aspectRatio: '9:16',
      featured: false,
      objective: 'Demonstrate end-to-end AI video creation: from raw script prompt to generated characters, cinematic camera motions, and final color polish.',
      myRole: [
        'Script adaptation & scene prompting',
        'AI character consistency and motion generation',
        'Final sound mix and pacing'
      ],
      workflow: [
        'Drafted script sequence with distinct visual beats',
        'Generated photorealistic cinematic scenes using generative video models',
        'Assembled pacing and subtle ambient soundscape in Premiere'
      ],
      deliverables: [
        'Cinematic vertical AI reel'
      ],
      toolsUsed: ['Runway', 'Midjourney', 'ElevenLabs', 'Premiere Pro'],
      durationOrPages: 'Cinematic Reel',
      previewType: 'video',
      videoUrl: 'https://drive.google.com/file/d/1mYD_9kvlaF5wWZVVYz0Y1n8u8Ydb9LyC/preview',
      thumbnailPlaceholderGradient: 'from-purple-950/60 via-slate-900 to-indigo-950/80',
      thumbnailAccentColor: '#a855f7',
      fullCaseStudy: {
        overview: 'A showcase of how emerging generative video models can bring creative scripts to life without high-cost physical production.',
        challenge: 'Achieving consistent art direction across distinct scenes.',
        solution: 'Unified lighting prompts, color correction in post, and clean pacing.',
        keyHighlights: [
          'Atmospheric visual storytelling',
          'High production value with fast turnaround'
        ]
      }
    },
    {
      id: 'college-placement-readiness',
      title: 'College & Placement Readiness Visual Carousels',
      category: 'Content Strategy & Scriptwriting',
      projectType: 'Educational Series',
      tagline: 'Practical student advice, interview frameworks, and resume tear-downs in high-impact formats.',
      clientOrBrand: 'Student Placement Playbook',
      aspectRatio: '4:5',
      featured: false,
      objective: 'Help tier-2 and tier-3 college students prepare for campus placement interviews with step-by-step resume frameworks, mock question scripts, and LinkedIn networking guides.',
      myRole: [
        'Content strategy, research, and scripting',
        'Carousel graphic design and diagramming',
        'Hook development and retention pacing'
      ],
      workflow: [
        'Identified top 10 interview stumbling blocks for fresh engineering/business graduates',
        'Formulated practical "Before vs After" script answers for behavioral questions',
        'Designed high-contrast, clean carousel slides optimized for LinkedIn and Instagram saves'
      ],
      deliverables: [
        '3 comprehensive 8-slide carousel decks',
        'Interview answer cheat-sheet graphics'
      ],
      toolsUsed: ['Canva', 'Notion'],
      durationOrPages: '24 Carousel Slides Total',
      previewType: 'carousel',
      thumbnailPlaceholderGradient: 'from-slate-900 via-indigo-950/50 to-slate-900',
      thumbnailAccentColor: '#6366f1',
      fullCaseStudy: {
        overview: 'Action-oriented placement guides designed to give students practical phrasing and confidence for campus placement drives.',
        challenge: 'Avoid clichés and provide exact, usable sentences students can adapt for technical and HR rounds.',
        solution: 'Built structured formula cards showing "Don\'t Say This → Say This Instead", resulting in massive bookmark and repost rates.',
        keyHighlights: [
          'Formulaic before-and-after communication slides',
          'High readability with generous margins and bold highlights',
          'Endorsed by campus student ambassadors'
        ]
      }
    }
  ] as Project[],

  services: [
    {
      id: 'ai-video-creation',
      title: 'AI Video Creation & Presenters',
      tagline: 'Cinematic AI-assisted storytelling, realistic digital presenters, and immersive visual generation.',
      description: 'Transform concepts, scripts, and product briefs into polished video assets leveraging AI generative tools, digital avatar presenters, and high-fidelity voice cloning.',
      iconName: 'Sparkles',
      deliverables: [
        'Photorealistic avatar & digital presenter videos (HeyGen)',
        'Ultra-realistic voice narration & custom cadence (ElevenLabs)',
        'AI concept scene generation & visual storytelling (Google Flow / Runway)',
        'Full audio-visual synchronization & color finishing'
      ],
      idealFor: 'Tech founders, educators, SaaS marketing teams, and content creators needing rapid video output.',
      typicalTimeline: '3 to 5 business days'
    },
    {
      id: 'short-form-video-editing',
      title: 'Short-Form Video Editing (Reels & Shorts)',
      tagline: 'Fast-paced, hook-driven edits built to maximize average watch time and completion rates.',
      description: 'Turn raw footage, talking-head takes, and screen recordings into magnetic Instagram Reels, YouTube Shorts, and TikToks with punchy pacing and visual energy.',
      iconName: 'Film',
      deliverables: [
        'Dynamic 3-second hook construction to stop feed scrolling',
        'Kinetic typography, animated emojis, and custom caption styling',
        'Beat-synced sound effects, whooshes, pop cues, and background mixing',
        'Visual b-roll integration, zoom punches, and speed ramps'
      ],
      idealFor: 'Creators, personal brands, educators, podcasters, and direct-to-consumer businesses.',
      typicalTimeline: '24 to 48 hours per reel'
    },
    {
      id: 'motion-graphics-promotional-ads',
      title: 'Motion Graphics & Promotional Ads',
      tagline: 'Visual rhythm, product highlights, kinetic typography, and commercial polish.',
      description: 'Engaging 2D/2.5D motion design for product launches, brand teasers, app walkthroughs, and social ads that clearly demonstrate product value.',
      iconName: 'Layers',
      deliverables: [
        'Custom 2D motion graphics and UI animation',
        'Kinetic typography and kinetic brand logo bumpers',
        'Product feature breakdowns and animated diagrams',
        'Multi-format exports (16:9 widescreen, 9:16 vertical, 1:1 feed)'
      ],
      idealFor: 'Startups, digital products, e-commerce brands, and agency campaigns.',
      typicalTimeline: '4 to 7 business days'
    },
    {
      id: 'social-media-content-production',
      title: 'End-to-End Social Content Systems',
      tagline: 'From research and scripting to editing, graphics, and scheduled publishing.',
      description: 'A complete content creation partner who takes raw ideas or topics and delivers publish-ready weekly content pipelines without client micromanagement.',
      iconName: 'CalendarCheck',
      deliverables: [
        'Competitor & trending topic research in your niche',
        'Monthly content calendars & script outlines',
        'Coordinated batch production of reels, carousels, and covers',
        'Optimized titles, descriptions, and hashtag recommendations'
      ],
      idealFor: 'Growing companies and busy executives wanting a consistent social media presence.',
      typicalTimeline: 'Monthly retainer basis'
    },
    {
      id: 'carousel-thumbnail-design',
      title: 'Carousel & Thumbnail Design',
      tagline: 'High-CTR YouTube covers and high-save Instagram/LinkedIn carousels.',
      description: 'Stop the scroll with thumb-stopping artwork, masterclass-level hierarchy, clean data slides, and unmistakable brand consistency.',
      iconName: 'LayoutGrid',
      deliverables: [
        'High-converting YouTube thumbnails with high contrast & facial hooks',
        'Swipeable educational carousels (PDF & slide images)',
        'Consistent typography, badge system, and brand color palettes',
        'Ready-to-upload high-resolution exports'
      ],
      idealFor: 'YouTube channels, educators, B2B thought leaders, and newsletter operators.',
      typicalTimeline: '24 to 48 hours'
    },
    {
      id: 'scriptwriting-content-strategy',
      title: 'Scriptwriting & Content Strategy',
      tagline: 'Structuring stories that hook viewers instantly and drive clear user action.',
      description: 'Great video starts with a compelling script. I write retention-optimized scripts that balance curiosity, value delivery, and seamless calls to action.',
      iconName: 'PenTool',
      deliverables: [
        '3-second hook variations (A/B testing ideas)',
        'Retention-optimized script bodies structured around problem/solution arcs',
        'Clear, natural, low-friction calls to action (Follow, Comment, Link)',
        'Visual cues & b-roll suggestion notes for each script line'
      ],
      idealFor: 'Founders building personal brands and creators looking to boost retention rates.',
      typicalTimeline: '2 to 3 business days'
    },
    {
      id: 'brand-visual-content',
      title: 'Brand Visual Content & Campaigns',
      tagline: 'Holistic visual identity, event launch assets, and multi-channel campaign collateral.',
      description: 'Cohesive creative collateral across social channels for product launches, event announcements, holiday promotions, and brand milestones.',
      iconName: 'Megaphone',
      deliverables: [
        'Multi-asset campaign packs (banners, story graphics, reels, posters)',
        'Consistent brand guidelines adherence with fresh creative angles',
        'Event countdowns and announcement visual templates',
        'Editable Canva or Figma source templates upon request'
      ],
      idealFor: 'Event organizers, community platforms, and growing retail/DTC brands.',
      typicalTimeline: '5 to 8 business days'
    }
  ] as Service[],

  creativeProcess: [
    {
      step: '01',
      title: 'Discovery & Research',
      subtitle: 'Understanding the Audience & Objective',
      description: 'We align on the goal, target audience, core messaging, and platform constraints. I analyze trending hooks, competitors, and audience pain points to determine the ideal visual angle.',
      deliverable: 'Creative brief, reference moodboard, and target hook strategy.'
    },
    {
      step: '02',
      title: 'Concept & Script',
      subtitle: 'Structuring the Narrative Arc',
      description: 'Writing or refining the script with high-retention frameworks. Every second is planned: the first 3 seconds to grab attention, the middle to deliver value, and the finale for a crisp CTA.',
      deliverable: 'Timed script draft with visual b-roll cues and hook options.'
    },
    {
      step: '03',
      title: 'Design & Production',
      subtitle: 'Generating Visual & Audio Assets',
      description: 'Producing visual components: generating AI presenter clips in HeyGen, synthesizing natural voice in ElevenLabs, creating custom motion graphics, or designing carousel layouts.',
      deliverable: 'Raw asset pack, graphic templates, and initial rough assembly.'
    },
    {
      step: '04',
      title: 'Editing & Refinement',
      subtitle: 'Pacing, SFX & Kinetic Finishing',
      description: 'The real magic happens in the edit. Pacing is tightened, kinetic captions are animated, SFX and ambient audio are balanced, and color grading is polished for screen pop.',
      deliverable: 'Version 1 review cut for your direct feedback.'
    },
    {
      step: '05',
      title: 'Final Delivery',
      subtitle: 'Multi-Format Export & Asset Handover',
      description: 'Incorporating your feedback, finalizing color and audio passes, and exporting in platform-optimized bitrates (4K, 1080p vertical/horizontal) ready for instant publishing.',
      deliverable: 'Final high-res media files + cover thumbnails + optional project files.'
    }
  ],

  toolsAndWorkflows: [
    {
      name: 'Canva',
      category: 'Design & Visuals',
      description: 'Rapid social media design, multi-page carousels, typographic layouts, and brand asset consistency.',
      level: 'Production Daily',
      badge: 'Core Design Suite'
    },
    {
      name: 'HeyGen',
      category: 'AI & Generation',
      description: 'AI digital avatar creation, photorealistic presenter videos, and multi-language visual communication.',
      level: 'Advanced Workflow',
      badge: 'AI Presenter'
    },
    {
      name: 'ElevenLabs',
      category: 'AI & Generation',
      description: 'AI voice generation, natural speech cadence, voiceover dubbing, and audio enhancement.',
      level: 'Production Daily',
      badge: 'AI Voice & Audio'
    },
    {
      name: 'Google Flow & AI Suite',
      category: 'AI & Generation',
      description: 'Exploring emerging AI workflow automation, visual ideation, and conceptual storyboarding.',
      level: 'Proficient & Exploring',
      badge: 'Workflow & GenAI'
    },
    {
      name: 'Premiere Pro',
      category: 'Video & Motion',
      description: 'Multi-track timeline editing, audio leveling, color grading, jump cuts, and master delivery.',
      level: 'Production Daily',
      badge: 'NLE Video Suite'
    },
    {
      name: 'After Effects',
      category: 'Video & Motion',
      description: 'Kinetic typography, 2D motion graphics, lower thirds, logo reveals, and custom VFX accents.',
      level: 'Advanced Workflow',
      badge: 'Motion Design'
    },
    {
      name: 'CapCut Pro',
      category: 'Video & Motion',
      description: 'Rapid short-form mobile editing, auto-caption kinetic templates, trend audio, and speed ramps.',
      level: 'Production Daily',
      badge: 'Short-Form Velocity'
    },
    {
      name: 'Runway & Gen-2/Gen-3',
      category: 'AI & Generation',
      description: 'Generative video sequences, motion brush effects, and cinematic concept video generation.',
      level: 'Proficient & Exploring',
      badge: 'Generative Video'
    },
    {
      name: 'Midjourney / Flux',
      category: 'Design & Visuals',
      description: 'Conceptual art generation, cinematic reference backgrounds, and high-resolution textures.',
      level: 'Advanced Workflow',
      badge: 'AI Visual Generation'
    },
    {
      name: 'Notion & Docs',
      category: 'Strategy & Scripting',
      description: 'Script drafting, content calendar management, visual storyboards, and client revision tracking.',
      level: 'Production Daily',
      badge: 'Content Strategy'
    }
  ] as ToolItem[],

  beforeAfterShowcase: [
    {
      id: 'thumbnail-transformation',
      title: 'YouTube / Social Video Thumbnail',
      category: 'Click-Through Rate Optimization',
      description: 'Transforming a flat, low-contrast text slide into a bold, high-CTR YouTube cover with focal typography, vibrant lighting, and visual depth.',
      beforeLabel: 'Raw Unstyled Draft',
      afterLabel: 'Final High-Converting Thumbnail',
      type: 'thumbnail'
    },
    {
      id: 'carousel-slide-transformation',
      title: 'Educational Carousel Slide',
      category: 'Visual Hierarchy & Retention',
      description: 'Converting dense, unformatted bullet points into an elegant, swipeable graphic card with clear steps, contrast markers, and clean whitespace.',
      beforeLabel: 'Plain Text Notes',
      afterLabel: 'Engineered Carousel Slide',
      type: 'carousel'
    },
    {
      id: 'video-grade-transformation',
      title: 'Video Frame Color & Motion Polish',
      category: 'Cinematic Grading & Overlays',
      description: 'Elevating washed-out raw camera footage with custom color contrast, cinematic teal/orange balance, and kinetic title graphics.',
      beforeLabel: 'Flat Camera Raw',
      afterLabel: 'Color Graded & Motion Graphic',
      type: 'video'
    }
  ],

  testimonialsConfig: {
    // Transparently communicates that this section is ready for real feedback
    hasRealTestimonials: false,
    placeholderNotice: 'Client testimonials and feedback showcase. Currently collaborating on new brand and creator campaigns.',
    ctaPrompt: 'Worked with Raj? Be among the first to leave a verified recommendation or request past collaboration references.',
    // Optional real testimonials array can be populated directly here by the user
    items: [] as {
      quote: string;
      author: string;
      role: string;
      company: string;
      projectType: string;
    }[]
  }
};
