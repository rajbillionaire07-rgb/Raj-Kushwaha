import { useState, useMemo } from 'react';
import { Play, Eye, ArrowUpRight, Search, Layers, Film, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface FeaturedWorkProps {
  onSelectProject: (project: Project) => void;
  onOpenVideoPreview: (project: Project) => void;
  projects?: Project[];
}

export default function FeaturedWork({ onSelectProject, onOpenVideoPreview, projects }: FeaturedWorkProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All Projects');
  const [searchQuery, setSearchQuery] = useState('');

  const activeProjectsList = projects || PORTFOLIO_DATA.projects;

  const filteredProjects = useMemo(() => {
    return activeProjectsList.filter((project) => {
      const matchesCategory =
        activeCategory === 'All Projects' || project.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.toolsUsed.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="work" className="py-24 bg-[#090a0f] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-3">
              <span>Selected Works &amp; Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
              Crafted for Visual Impact &amp; Retention.
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Explore authentic case-study breakdowns across AI generation, short-form editing, kinetic motion graphics, and content campaigns.
          </p>
        </div>

        {/* Filter Controls Bar (Interactive buttons conforming to Zero-Pill discipline) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.08]">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {PORTFOLIO_DATA.categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic or tool..."
              className="w-full bg-white/[0.03] border border-white/10 rounded-lg pl-9 pr-4 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center rounded-2xl bg-white/[0.02] border border-white/5">
            <Layers className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white">No projects found</h3>
            <p className="text-xs text-slate-400 mt-1">Try clearing your search query or selecting another category.</p>
            <button
              onClick={() => {
                setActiveCategory('All Projects');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-medium text-indigo-400 hover:text-indigo-300"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const isVertical = project.aspectRatio === '9:16';
              const isWidescreen = project.aspectRatio === '16:9';

              return (
                <div
                  key={project.id}
                  className="group rounded-2xl bg-[#0f111a] border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10"
                >
                  {/* Media Visual Area */}
                  <div
                    className={`relative w-full overflow-hidden bg-gradient-to-br ${project.thumbnailPlaceholderGradient} flex items-center justify-center ${
                      isVertical ? 'aspect-[4/5] sm:aspect-[9/12]' : isWidescreen ? 'aspect-[16/9]' : 'aspect-[4/4]'
                    }`}
                  >
                    {/* Subtle grid texture */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-30" />

                    {/* Central artistic thumbnail composition */}
                    <div className="relative z-10 p-6 flex flex-col items-center text-center justify-center w-full h-full">
                      <div className="w-12 h-12 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 flex items-center justify-center mb-3 shadow-lg group-hover:scale-105 transition-transform">
                        {project.previewType === 'video' ? (
                          <Film className="w-5 h-5 text-indigo-400" />
                        ) : project.previewType === 'carousel' ? (
                          <Layers className="w-5 h-5 text-cyan-400" />
                        ) : (
                          <Sparkles className="w-5 h-5 text-violet-400" />
                        )}
                      </div>

                      <span className="font-display font-bold text-white text-base sm:text-lg line-clamp-2 max-w-[90%]">
                        {project.title}
                      </span>
                      <span className="text-xs text-slate-300/80 mt-1.5 max-w-[85%] line-clamp-1">
                        {project.tagline}
                      </span>

                      {/* Aspect Ratio Badge */}
                      <span className="mt-3 text-[10px] tracking-wider uppercase font-mono text-slate-400 bg-black/40 px-2 py-0.5 rounded border border-white/10">
                        {project.aspectRatio} · {project.previewType}
                      </span>
                    </div>

                    {/* Hover Action Overlay */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs flex items-center justify-center gap-3 z-20 p-4">
                      {project.previewType === 'video' && (
                        <button
                          onClick={() => onOpenVideoPreview(project)}
                          className="px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg flex items-center gap-1.5 shadow-lg"
                        >
                          <Play className="w-3.5 h-3.5 fill-white" />
                          <span>Preview</span>
                        </button>
                      )}

                      <button
                        onClick={() => onSelectProject(project)}
                        className="px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg flex items-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Case Study</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                    <div>
                      {/* Clean unboxed metadata (Zero-pill discipline) */}
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                        <span className="text-indigo-400 font-medium">{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.projectType}</span>
                      </div>

                      <h3
                        onClick={() => onSelectProject(project)}
                        className="text-base sm:text-lg font-bold font-display text-white group-hover:text-indigo-300 transition-colors cursor-pointer line-clamp-2"
                      >
                        {project.title}
                      </h3>

                      <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                        {project.objective}
                      </p>
                    </div>

                    {/* Tools and Action Row */}
                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 overflow-hidden text-[11px] text-slate-400 font-medium truncate">
                        <span>Tools:</span>
                        <span className="text-slate-300 truncate">
                          {project.toolsUsed.slice(0, 3).join(', ')}
                          {project.toolsUsed.length > 3 && ` +${project.toolsUsed.length - 3}`}
                        </span>
                      </div>

                      <button
                        onClick={() => onSelectProject(project)}
                        className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 whitespace-nowrap shrink-0 group/link"
                      >
                        <span>Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
