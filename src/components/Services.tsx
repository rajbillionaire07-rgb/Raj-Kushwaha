import { Sparkles, Film, Layers, CalendarCheck, LayoutGrid, PenTool, Megaphone, ArrowRight, Check } from 'lucide-react';
import { PORTFOLIO_DATA, Service } from '../data/portfolioData';

interface ServicesProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export default function Services({ onSelectServiceForInquiry }: ServicesProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
      case 'Film':
        return <Film className="w-5 h-5 text-violet-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-400" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5 text-emerald-400" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-5 h-5 text-amber-400" />;
      case 'PenTool':
        return <PenTool className="w-5 h-5 text-rose-400" />;
      case 'Megaphone':
        return <Megaphone className="w-5 h-5 text-cyan-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#090a0f] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-3">
              <span>Capabilities &amp; Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
              Services Built for High Retention.
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Available on a project-by-project sprint or dedicated monthly creative retainer. Clear deliverables, realistic turnarounds, zero hidden fluff.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.services.map((service, index) => {
            const isWide = index === 0; // First service gets full width on tablet/laptop if needed

            return (
              <div
                key={service.id}
                className={`rounded-2xl bg-[#0f111a] border border-white/[0.08] p-7 flex flex-col justify-between hover:border-indigo-500/40 hover:bg-[#121422] transition-all duration-300 hover:shadow-xl group ${
                  isWide ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Top Bar with Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">
                      EST: {service.typicalTimeline}
                    </span>
                  </div>

                  {/* Service Title & Tagline */}
                  <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                      Key Deliverables
                    </span>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal For Note */}
                  <div className="text-[11px] text-slate-400 bg-white/[0.02] border border-white/5 p-3 rounded-lg mb-6">
                    <span className="text-slate-300 font-semibold block mb-0.5">Ideal for:</span>
                    {service.idealFor}
                  </div>
                </div>

                {/* Inquiry CTA */}
                <button
                  onClick={() => onSelectServiceForInquiry(service.title)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-indigo-300 hover:text-white bg-indigo-950/40 hover:bg-indigo-600/80 border border-indigo-500/20 hover:border-indigo-500/50 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-2"
                >
                  <span>Inquire for this Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
