import { useState, useEffect } from 'react';
import { Play, ArrowDown, Sparkles, Film, Wand2, Compass, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenShowreel: () => void;
  onOpenContact: () => void;
  onOpenResume?: () => void;
}

const ROLES = [
  'AI Video Editor',
  'Motion Graphics Designer',
  'Creative Content Strategist',
  'Short-Form Video Producer',
  'AI Content Creator'
];

export default function Hero({ onOpenShowreel, onOpenContact, onOpenResume }: HeroProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background radial accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-violet-600/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Subtle editorial kicker (NO pill boxes) */}
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-5">
              <span className="w-2 h-2 rounded-sm bg-indigo-500 inline-block" />
              <span>{PORTFOLIO_DATA.personal.location} · {PORTFOLIO_DATA.personal.availabilityStatus}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-white leading-[1.08] mb-6 text-balance">
              I TURN IDEAS INTO CONTENT THAT GETS NOTICED.
            </h1>

            {/* Animated Role Switcher */}
            <div className="flex items-center gap-3 text-lg sm:text-xl font-medium text-slate-300 mb-6 min-h-[32px]">
              <span className="text-slate-500">Focus:</span>
              <span className="text-indigo-300 font-semibold border-b border-indigo-500/40 pb-0.5 transition-all duration-300">
                {ROLES[currentRoleIndex]}
              </span>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mb-8">
              I am an AI-powered video editor and multidisciplinary creative combining cinematic storytelling, kinetic motion design, and emerging generative workflows to turn complex ideas into scroll-stopping visual experiences for brands and creators worldwide.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <button
                onClick={scrollToWork}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] rounded-xl transition-all shadow-xl shadow-indigo-600/25 flex items-center gap-2"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenContact}
                className="px-5 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 active:scale-[0.98] rounded-xl transition-all"
              >
                Let's Collaborate
              </button>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="px-4 py-3.5 text-sm font-medium text-indigo-300 hover:text-white bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-500/30 rounded-xl transition-all flex items-center gap-2"
                  title="View Raj Kushwaha's Resume & Profile"
                >
                  <FileText className="w-4 h-4 text-indigo-400" />
                  <span>Resume / CV</span>
                </button>
              )}

              <button
                onClick={onOpenShowreel}
                className="group px-3.5 py-3 text-sm font-medium text-slate-300 hover:text-white flex items-center gap-2 transition-colors"
                aria-label="Play 2025 Creative Showreel"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-indigo-600/80 flex items-center justify-center transition-colors">
                  <Play className="w-3.5 h-3.5 text-white ml-0.5 fill-white" />
                </div>
                <span>Watch Reel</span>
              </button>
            </div>

            {/* Honest metadata line */}
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Verified Project Deliverables</span>
              <span aria-hidden="true">·</span>
              <span>Remote Collaboration Ready</span>
              <span aria-hidden="true">·</span>
              <span>Available for Retainers</span>
            </div>
          </div>

          {/* Right Column: Visual Container & Showreel Anchor */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-md relative">
              {/* Decorative studio frame */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-2xl">
                <div className="rounded-[15px] bg-[#0f111a] p-6 border border-white/[0.06] flex flex-col gap-6 relative overflow-hidden">
                  {/* Subtle corner grid lines */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 blur-2xl rounded-full" />
                  
                  {/* Portrait Placeholder Container (Strictly honest, non-fabricated) */}
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gradient-to-br from-[#161926] to-[#0a0c13] border border-white/10 flex flex-col items-center justify-center group">
                    {PORTFOLIO_DATA.personal.avatarUrl ? (
                      <img
                        src={PORTFOLIO_DATA.personal.avatarUrl}
                        alt="Raj Kushwaha - Creative Director"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center p-6 select-none">
                        {/* Artistic aperture insignia */}
                        <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
                          <div className="absolute inset-0 rounded-full border border-indigo-500/30 animate-[spin_20s_linear_infinite]" />
                          <div className="absolute inset-2 rounded-full border border-dashed border-violet-500/40 animate-[spin_15s_linear_infinite_reverse]" />
                          <div className="w-16 h-16 rounded-full bg-indigo-950/80 border border-indigo-400/40 flex items-center justify-center shadow-inner">
                            <span className="font-display font-bold text-2xl text-white tracking-widest">
                              {PORTFOLIO_DATA.personal.avatarPlaceholderInitials}
                            </span>
                          </div>
                        </div>

                        <span className="font-display font-semibold text-white text-base">
                          Raj Kushwaha
                        </span>
                        <span className="text-xs text-slate-400 mt-1 max-w-[200px]">
                          Creative Studio &amp; AI Video Production Suite
                        </span>

                        <div className="mt-4 flex items-center gap-2 text-[11px] text-indigo-300 bg-indigo-950/50 border border-indigo-500/20 px-3 py-1 rounded-md">
                          <span>India</span>
                          <span aria-hidden="true">·</span>
                          <span>Global Remote</span>
                        </div>
                      </div>
                    )}

                    {/* Quick Showreel Floating Trigger */}
                    <button
                      onClick={onOpenShowreel}
                      className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 backdrop-blur-sm cursor-pointer"
                    >
                      <div className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform">
                        <Play className="w-6 h-6 fill-white ml-0.5" />
                      </div>
                      <span className="text-xs font-semibold text-white uppercase tracking-wider">
                        Play Creative Showreel
                      </span>
                    </button>
                  </div>

                  {/* Showreel preview status bar */}
                  <div className="flex items-center justify-between pt-1 border-t border-white/5 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <Film className="w-3.5 h-3.5 text-indigo-400" />
                      <span>2025 Showreel Cut</span>
                    </div>
                    <button
                      onClick={onOpenShowreel}
                      className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1"
                    >
                      <span>Preview Reel</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-Point Production Capabilities Strip */}
        <div className="mt-16 pt-10 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-indigo-400">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold">AI Video Suite</span>
            </div>
            <span className="text-base font-semibold text-white">Generative Storytelling</span>
            <p className="text-xs text-slate-400">HeyGen avatars, ElevenLabs audio, and conceptual narrative scenes.</p>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-violet-400">
              <Film className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold">Short-Form Edge</span>
            </div>
            <span className="text-base font-semibold text-white">Reels &amp; Shorts Editing</span>
            <p className="text-xs text-slate-400">3-second hooks, kinetic captions, rhythm cuts, and sound design.</p>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-blue-400">
              <Wand2 className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold">Motion Graphics</span>
            </div>
            <span className="text-base font-semibold text-white">Kinetic Visual Design</span>
            <p className="text-xs text-slate-400">Typography animation, product reveals, and promo ads in After Effects.</p>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-emerald-400">
              <Compass className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold">Content Strategy</span>
            </div>
            <span className="text-base font-semibold text-white">End-to-End Delivery</span>
            <p className="text-xs text-slate-400">From topic research and scriptwriting to thumbnail and publishing.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
