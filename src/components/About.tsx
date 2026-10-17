import { FileText, MapPin, Clock, Globe, Laptop, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AboutProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export default function About({ onOpenResume, onOpenContact }: AboutProps) {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 bg-[#090a0f] relative overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-3">
            <span>Philosophy &amp; Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            Storytelling First. AI as the Engine.
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative Story & Creative Vision */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p className="text-white font-medium text-lg sm:text-xl leading-relaxed">
              In an attention economy flooded with template content, true visual retention isn't created by automated buttons — it is won through intentional rhythm, emotional hook, and deliberate visual design.
            </p>

            {personal.extendedBio.map((paragraph, idx) => (
              <p key={idx} className="text-slate-400">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenResume}
                className="px-5 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>View Profile Brief &amp; Resume</span>
              </button>

              <button
                onClick={onOpenContact}
                className="px-5 py-3 text-sm font-semibold text-indigo-300 hover:text-white flex items-center gap-2 transition-colors"
              >
                <span>Discuss a Collaboration</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Key Details & Operational Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl bg-[#0f111a] border border-white/[0.08] p-7 flex flex-col gap-6">
              <h3 className="text-lg font-bold font-display text-white pb-4 border-b border-white/5">
                Creative Overview
              </h3>

              <div className="flex flex-col gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs">Location</span>
                    <span className="text-slate-200 font-medium">{personal.location} (Available Globally)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Laptop className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs">Work Modality</span>
                    <span className="text-slate-200 font-medium">100% Remote, Asynchronous &amp; Scheduled Calls</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs">Current Availability</span>
                    <span className="text-slate-200 font-medium">{personal.availabilityStatus}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs">Direct Outreach</span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <a
                        href="tel:+916307164317"
                        className="text-slate-200 hover:text-white font-medium flex items-center gap-1 hover:underline"
                      >
                        <Phone className="w-3.5 h-3.5 text-emerald-400" />
                        <span>+91 6307164317</span>
                      </a>
                      <span className="text-slate-600">·</span>
                      <a
                        href={personal.links.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 font-medium text-xs flex items-center gap-1 hover:underline"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Creative Disciplines (Clean unboxed list) */}
              <div className="pt-4 border-t border-white/5">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                  Core Production Stack
                </span>
                <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-slate-300">
                  <span>AI Video Pipelines</span>
                  <span className="text-slate-600" aria-hidden="true">·</span>
                  <span>Kinetic Typography</span>
                  <span className="text-slate-600" aria-hidden="true">·</span>
                  <span>Shorts &amp; Reels</span>
                  <span className="text-slate-600" aria-hidden="true">·</span>
                  <span>Canva &amp; Carousels</span>
                  <span className="text-slate-600" aria-hidden="true">·</span>
                  <span>High-CTR Thumbnails</span>
                  <span className="text-slate-600" aria-hidden="true">·</span>
                  <span>Retention Scripting</span>
                </div>
              </div>
            </div>

            {/* Note box */}
            <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-300/90 leading-relaxed">
              <span className="font-semibold text-indigo-200 block mb-1">Collaborative Note:</span>
              Open to single-project sprints, monthly video retainers, and specialized content series production for brands and creators.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
