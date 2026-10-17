import { useState, useMemo } from 'react';
import { Cpu, Wrench, CheckCircle2, Sparkles, Filter } from 'lucide-react';
import { PORTFOLIO_DATA, ToolItem } from '../data/portfolioData';

interface ToolsWorkflowProps {
  onOpenSetupGuide: () => void;
}

export default function ToolsWorkflow({ onOpenSetupGuide }: ToolsWorkflowProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'AI & Generation', 'Video & Motion', 'Design & Visuals', 'Strategy & Scripting'];

  const filteredTools = useMemo(() => {
    if (selectedCategory === 'All') return PORTFOLIO_DATA.toolsAndWorkflows;
    return PORTFOLIO_DATA.toolsAndWorkflows.filter((t) => t.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="workflow" className="py-24 bg-[#090a0f] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-3">
              <span>Production Pipeline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
              Tools &amp; Creative Workflows.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm">
              Honest breakdown of active creative suites and generative AI workflows without exaggerated claims.
            </p>
            <button
              onClick={onOpenSetupGuide}
              className="text-xs text-indigo-400 hover:text-indigo-300 underline underline-offset-4 whitespace-nowrap"
            >
              How to edit tools
            </button>
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white/[0.04] text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <div
              key={tool.name}
              className="rounded-2xl bg-[#0f111a] border border-white/[0.08] p-6 flex flex-col justify-between hover:border-indigo-500/30 transition-all group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-indigo-400" />
                    </div>
                    <span className="font-display font-bold text-white text-base">
                      {tool.name}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-slate-400 bg-white/[0.04] border border-white/10 px-2 py-0.5 rounded">
                    {tool.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {tool.description}
                </p>
              </div>

              {/* Status footer */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
                <span className="text-slate-500">{tool.category}</span>
                <span className="text-indigo-300 font-medium">{tool.level}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Workflow Philosophy */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-white">Continuous Tool Evolution</span>
            <p className="text-xs text-slate-400 max-w-xl">
              I continuously benchmark emerging generative models, motion plugins, and automated workflows (Canva, HeyGen, ElevenLabs, Google Flow) to ensure deliverables leverage modern production speed while maintaining bespoke artistic taste.
            </p>
          </div>
          <span className="text-xs font-mono text-indigo-400 whitespace-nowrap">
            Updated for 2025/2026 Workflows
          </span>
        </div>
      </div>
    </section>
  );
}
