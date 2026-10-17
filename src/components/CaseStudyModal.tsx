import { useEffect } from 'react';
import { X, ArrowLeft, ArrowRight, ExternalLink, Check, Film, Layers, Sparkles, Upload } from 'lucide-react';
import { Project, PORTFOLIO_DATA } from '../data/portfolioData';
import { getVideoInfo } from '../utils/videoHelper';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  onOpenVideoPreview: (project: Project) => void;
  onOpenVideoManager?: (projectId?: string) => void;
}

export default function CaseStudyModal({
  project,
  onClose,
  onSelectProject,
  onOpenVideoPreview,
  onOpenVideoManager
}: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const allProjects = PORTFOLIO_DATA.projects;
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0c0e17] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="sticky top-0 z-30 bg-[#0c0e17]/95 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="text-indigo-400 font-semibold">{project.category}</span>
            <span aria-hidden="true">/</span>
            <span>{project.projectType}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 md:p-10 space-y-10">
          {/* Hero Header */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white tracking-tight">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {project.tagline}
            </p>

            {/* Quick Metadata Line (Zero pills, clean typography) */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400 border-t border-white/5">
              {project.clientOrBrand && (
                <div>
                  <span className="text-slate-500">Client / Platform:</span>{' '}
                  <span className="text-slate-200 font-medium">{project.clientOrBrand}</span>
                </div>
              )}
              {project.durationOrPages && (
                <div>
                  <span className="text-slate-500">Scope:</span>{' '}
                  <span className="text-slate-200 font-medium">{project.durationOrPages}</span>
                </div>
              )}
              <div>
                <span className="text-slate-500">Format:</span>{' '}
                <span className="text-slate-200 font-medium">{project.aspectRatio} ({project.previewType})</span>
              </div>
            </div>
          </div>

          {/* Hero Media Preview Container */}
          <div
            className={`w-full rounded-xl overflow-hidden bg-gradient-to-br ${project.thumbnailPlaceholderGradient} border border-white/10 relative flex flex-col items-center justify-center text-center ${
              project.aspectRatio === '16:9' ? 'aspect-[16/9]' : 'min-h-[300px]'
            }`}
          >
            {(() => {
              const info = getVideoInfo(project.videoUrl, project.youtubeId);
              if (info.type === 'youtube' && info.embedUrl) {
                return (
                  <div className={`w-full ${project.aspectRatio === '9:16' ? 'max-w-[320px] aspect-[9/16] my-4' : 'aspect-video'}`}>
                    <iframe
                      src={info.embedUrl}
                      title={project.title}
                      className="w-full h-full border-0 rounded-lg shadow-2xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                );
              }
              if ((info.type === 'gdrive' || info.type === 'vimeo') && info.embedUrl) {
                return (
                  <div className={`w-full ${project.aspectRatio === '9:16' ? 'max-w-[320px] aspect-[9/16] my-4' : 'aspect-video'}`}>
                    <iframe
                      src={info.embedUrl}
                      title={project.title}
                      className="w-full h-full border-0 rounded-lg shadow-2xl"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  </div>
                );
              }
              if (info.type === 'mp4' && info.directSrc) {
                return (
                  <div className={`w-full flex items-center justify-center p-2 ${project.aspectRatio === '9:16' ? 'max-w-[340px] aspect-[9/16] my-4' : 'aspect-video'}`}>
                    <video
                      src={info.directSrc}
                      controls
                      autoPlay
                      playsInline
                      className="w-full h-full object-contain rounded-lg"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                );
              }
              return (
                <div className="p-8 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 shadow-xl">
                    {project.previewType === 'video' ? (
                      <Film className="w-8 h-8 text-indigo-400" />
                    ) : (
                      <Layers className="w-8 h-8 text-cyan-400" />
                    )}
                  </div>

                  <h3 className="font-display font-bold text-xl text-white max-w-lg">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 max-w-md">
                    Cinematic preview frame &amp; production composition.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    {project.previewType === 'video' && (
                      <button
                        onClick={() => onOpenVideoPreview(project)}
                        className="px-4 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg flex items-center gap-2 shadow-lg"
                      >
                        <Film className="w-4 h-4" />
                        <span>Launch Video Preview</span>
                      </button>
                    )}

                    {onOpenVideoManager && (
                      <button
                        onClick={() => onOpenVideoManager(project.id)}
                        className="px-4 py-2.5 text-xs font-semibold text-indigo-300 hover:text-white bg-indigo-950/60 hover:bg-indigo-600/70 border border-indigo-500/30 rounded-lg flex items-center gap-2"
                      >
                        <Upload className="w-3.5 h-3.5" />
                        <span>Add Video File</span>
                      </button>
                    )}

                    {project.externalLink && (
                      <a
                        href={project.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded-lg flex items-center gap-2"
                      >
                        <span>Visit Platform</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Brief, Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/10">
            <div className="space-y-3">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block">
                The Objective &amp; Challenge
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.fullCaseStudy.challenge || project.objective}
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                The Creative Solution
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.fullCaseStudy.solution}
              </p>
            </div>
          </div>

          {/* Workflow & Key Highlights */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              Production Workflow &amp; Highlights
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.workflow.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3"
                >
                  <span className="text-xs font-mono font-bold text-indigo-400 shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <span className="text-xs text-slate-300 leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables & Tools Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Deliverables Handed Over
              </span>
              <ul className="space-y-2">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Tools &amp; Workflows
              </span>
              <div className="flex flex-wrap gap-2">
                {project.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 text-xs text-slate-300 bg-white/5 border border-white/10 rounded-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 pt-1">
                Editable project record. Real asset replacement guide available in top menu.
              </p>
            </div>
          </div>

          {/* Next / Previous Project Navigation */}
          <div className="pt-8 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="text-left group flex items-center gap-3 text-xs text-slate-400 hover:text-white"
            >
              <div className="p-2 rounded-lg bg-white/5 group-hover:bg-indigo-600 transition-colors text-white">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-500 uppercase">Previous</span>
                <span className="font-semibold truncate max-w-[140px] sm:max-w-[200px] block">
                  {prevProject.title}
                </span>
              </div>
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="text-right group flex items-center gap-3 text-xs text-slate-400 hover:text-white"
            >
              <div>
                <span className="block text-[10px] text-slate-500 uppercase">Next Project</span>
                <span className="font-semibold truncate max-w-[140px] sm:max-w-[200px] block">
                  {nextProject.title}
                </span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 group-hover:bg-indigo-600 transition-colors text-white">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
