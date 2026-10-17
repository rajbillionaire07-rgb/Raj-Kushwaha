import { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Film, RotateCcw, Link2, Upload } from 'lucide-react';
import { Project, PORTFOLIO_DATA } from '../data/portfolioData';
import { getVideoInfo } from '../utils/videoHelper';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeProject?: Project | null;
  onOpenVideoManager?: (projectId?: string) => void;
}

export default function ShowreelModal({
  isOpen,
  onClose,
  activeProject,
  onOpenVideoManager
}: ShowreelModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(45);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ' && videoRef.current) {
        e.preventDefault();
        if (videoRef.current.paused) {
          videoRef.current.play();
          setIsPlaying(true);
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const title = activeProject ? activeProject.title : 'Raj Kushwaha — 2025 Creative Showreel';
  const subtitle = activeProject
    ? `${activeProject.category} · ${activeProject.aspectRatio}`
    : 'AI Video Production · Kinetic Motion Design · High-Retention Social Reels';

  const defaultShowreelUrl = PORTFOLIO_DATA.personal.showreelVideoUrl || 'https://drive.google.com/file/d/1MDLCBjS99oRk-vAREFfVyaQUbMTk-iVb/preview';
  const videoUrlToUse = activeProject ? activeProject.videoUrl : defaultShowreelUrl;
  const videoInfo = getVideoInfo(videoUrlToUse, activeProject?.youtubeId);
  const isVertical = activeProject ? activeProject.aspectRatio === '9:16' : true;

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleVideoTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(Math.floor(videoRef.current.currentTime));
      setDuration(Math.floor(videoRef.current.duration) || 45);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `0${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/92 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        ref={containerRef}
        className="relative w-full max-w-4xl bg-[#090a0f] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#0c0e17] px-6 py-4 border-b border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 truncate">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center shrink-0">
              <Film className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="truncate">
              <h2 className="text-sm sm:text-base font-bold font-display text-white truncate">
                {title}
              </h2>
              <p className="text-xs text-slate-400 truncate">{subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {onOpenVideoManager && (
              <button
                onClick={() => {
                  onClose();
                  onOpenVideoManager(activeProject?.id);
                }}
                className="px-3 py-1.5 text-xs font-medium text-indigo-300 hover:text-white bg-indigo-950/60 hover:bg-indigo-600/60 border border-indigo-500/30 rounded-lg transition-colors flex items-center gap-1.5"
                title="Change or add video for this project"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Add / Swap Video</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Display Container */}
        <div className="relative bg-black flex items-center justify-center overflow-hidden min-h-[380px] sm:min-h-[460px]">
          {videoInfo.type === 'youtube' && videoInfo.embedUrl ? (
            <div className={`w-full ${isVertical ? 'max-w-[340px] aspect-[9/16] my-4' : 'aspect-video'}`}>
              <iframe
                src={videoInfo.embedUrl}
                title={title}
                className="w-full h-full border-0 rounded-lg shadow-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : (videoInfo.type === 'gdrive' || videoInfo.type === 'vimeo') && videoInfo.embedUrl ? (
            <div className={`w-full ${isVertical ? 'max-w-[340px] aspect-[9/16] my-4' : 'aspect-video'}`}>
              <iframe
                src={videoInfo.embedUrl}
                title={title}
                className="w-full h-full border-0 rounded-lg shadow-2xl"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          ) : videoInfo.type === 'mp4' && videoInfo.directSrc ? (
            <div className={`w-full flex items-center justify-center ${isVertical ? 'max-w-[360px] aspect-[9/16] my-4' : 'aspect-video'}`}>
              <video
                ref={videoRef}
                src={videoInfo.directSrc}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain rounded-lg"
                onTimeUpdate={handleVideoTimeUpdate}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            /* Elegant Showcase Simulation when no direct video file is configured yet */
            <div className="relative aspect-video w-full flex items-center justify-center p-8 select-none">
              <div className="absolute inset-0 bg-radial-glow opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/80 via-slate-900 to-black" />

              <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-xl">
                <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center mb-4 shadow-2xl backdrop-blur-md">
                  <Sparkles className="w-8 h-8 text-indigo-400" />
                </div>

                <span className="text-[11px] uppercase tracking-widest font-mono text-indigo-400 font-semibold mb-2">
                  VIDEO PLACEHOLDER · READY FOR YOUR MEDIA
                </span>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
                  {title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 max-w-md mb-6 leading-relaxed">
                  {activeProject
                    ? activeProject.tagline
                    : 'Showcasing 3-second hooks, HeyGen avatar sync, kinetic typography, and ElevenLabs speech mastering.'}
                </p>

                {onOpenVideoManager && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenVideoManager(activeProject?.id);
                    }}
                    className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-2 shadow-xl shadow-indigo-600/30 transition-transform active:scale-95"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Click here to add your edited video (MP4 or YouTube)</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer toolbar */}
        <div className="bg-[#0c0e17] px-6 py-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Format: {activeProject?.aspectRatio || '16:9'}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] hidden sm:inline text-slate-500">
              Supports MP4, WebM, YouTube, and YouTube Shorts
            </span>
            <button
              onClick={toggleFullscreen}
              className="hover:text-white transition-colors"
              title="Fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
