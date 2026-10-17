import { useState } from 'react';
import { Search, PenLine, Sparkles, Sliders, CheckCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function CreativeProcess() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const steps = PORTFOLIO_DATA.creativeProcess;

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Search className="w-5 h-5 text-indigo-400" />;
      case 1:
        return <PenLine className="w-5 h-5 text-violet-400" />;
      case 2:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
      case 3:
        return <Sliders className="w-5 h-5 text-emerald-400" />;
      case 4:
        return <CheckCheck className="w-5 h-5 text-cyan-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-[#090a0f] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-3">
            <span>Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            How Great Visuals Get Made.
          </h2>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed">
            A structured, repeatable five-stage creative pipeline designed to prevent endless revisions and deliver high-retention content on schedule.
          </p>
        </div>

        {/* Process Step Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {steps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isActive
                    ? 'bg-indigo-950/40 border-indigo-500/60 shadow-lg shadow-indigo-600/10'
                    : 'bg-[#0f111a] border-white/[0.06] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? 'text-indigo-400' : 'text-slate-500'
                    }`}
                  >
                    STEP {step.step}
                  </span>
                  {getStepIcon(idx)}
                </div>
                <span
                  className={`block text-xs sm:text-sm font-semibold truncate ${
                    isActive ? 'text-white' : 'text-slate-400'
                  }`}
                >
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Box */}
        <div className="rounded-2xl bg-[#0f111a] border border-white/[0.08] p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/5 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
                <span>STAGE {steps[activeStepIndex].step} OF 05</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">{steps[activeStepIndex].subtitle}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                {steps[activeStepIndex].title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {steps[activeStepIndex].description}
              </p>
            </div>

            <div className="lg:col-span-4 p-6 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                Deliverable at this stage:
              </span>
              <p className="text-sm font-medium text-indigo-300 leading-snug">
                {steps[activeStepIndex].deliverable}
              </p>
              <div className="pt-2 text-[11px] text-slate-500">
                Full milestone visibility via shared Notion dashboard or Google Drive.
              </div>
            </div>
          </div>
        </div>

        {/* 5-Step Linear Flow Summary */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 px-2">
          <span>01. Discovery</span>
          <span>→</span>
          <span>02. Concept &amp; Script</span>
          <span>→</span>
          <span>03. Design &amp; Assets</span>
          <span>→</span>
          <span>04. Kinetic Editing</span>
          <span>→</span>
          <span className="text-indigo-400 font-semibold">05. Final Multi-Format Delivery</span>
        </div>
      </div>
    </section>
  );
}
