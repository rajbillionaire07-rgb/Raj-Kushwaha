import { CheckCircle2, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface TrustStripProps {
  onSelectProject: (projectId: string) => void;
}

export default function TrustStrip({ onSelectProject }: TrustStripProps) {
  const { featuredCollaboration, corePillars } = PORTFOLIO_DATA.trustStrip;

  return (
    <section className="py-12 border-y border-white/[0.08] bg-[#0c0e17]/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Verified Past-Work Reference Anchor */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:max-w-xl">
            <div className="px-3.5 py-1.5 rounded-md bg-white/[0.04] border border-white/10 text-xs font-semibold text-slate-300 tracking-wide uppercase">
              Production Highlight
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-white text-base sm:text-lg">
                  {featuredCollaboration.name}
                </span>
                <span className="text-xs text-indigo-400 font-medium">
                  ({featuredCollaboration.note})
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                {featuredCollaboration.role}
              </p>
            </div>
            <button
              onClick={() => onSelectProject('careerguide-content-production')}
              className="text-xs font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-1 sm:ml-auto whitespace-nowrap mt-1 sm:mt-0"
            >
              <span>View Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Core Capabilities Pillars (Clean unboxed text with subtle dividers) */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-slate-400 border-t lg:border-t-0 pt-4 lg:pt-0 border-white/5">
            {corePillars.map((pillar, idx) => (
              <div key={pillar} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400/80 shrink-0" />
                <span className="text-slate-300 whitespace-nowrap">{pillar}</span>
                {idx < corePillars.length - 1 && (
                  <span className="hidden sm:inline text-slate-600 ml-2" aria-hidden="true">
                    /
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
