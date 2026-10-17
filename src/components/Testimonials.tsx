import { MessageSquare, ArrowRight, Quote } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface TestimonialsProps {
  onOpenContact: () => void;
}

export default function Testimonials({ onOpenContact }: TestimonialsProps) {
  const { testimonialsConfig } = PORTFOLIO_DATA;
  const hasReal = testimonialsConfig.hasRealTestimonials && testimonialsConfig.items.length > 0;

  return (
    <section className="py-20 bg-[#090a0f] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        {hasReal ? (
          <div>
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2 block">
                Client Feedback
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
                Words From Recent Collaborators.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonialsConfig.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0f111a] border border-white/10 flex flex-col justify-between"
                >
                  <Quote className="w-6 h-6 text-indigo-400 mb-4" />
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">
                    "{item.quote}"
                  </p>
                  <div className="pt-4 border-t border-white/5">
                    <span className="font-bold text-white text-sm block">{item.author}</span>
                    <span className="text-xs text-slate-400 block">
                      {item.role} · {item.company}
                    </span>
                    <span className="text-[11px] text-indigo-400 font-mono mt-1 block">
                      {item.projectType}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Honest, Tasteful Ready-For-Feedback Showcase */
          <div className="rounded-2xl bg-gradient-to-br from-[#0f111a] to-[#141724] border border-white/[0.08] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
                <MessageSquare className="w-4 h-4" />
                <span>Client Recommendations &amp; References</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Collaborative Reviews &amp; References
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {testimonialsConfig.placeholderNotice}
              </p>
              <p className="text-xs text-slate-500">
                In adherence to transparent creative ethics, all testimonials will represent verified direct client collaborations. Client references for educational content and brand campaigns are available on request during initial project calls.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2"
              >
                <span>Request Collaboration Reference</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
