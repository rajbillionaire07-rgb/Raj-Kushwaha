import { useState, useEffect } from 'react';
import { X, Video, Upload, Link2, Copy, Check, Sparkles, FolderOpen, Play, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { getVideoInfo } from '../utils/videoHelper';

interface VideoManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProjectId?: string;
  onUpdateProjectVideo: (projectId: string, videoUrl: string) => void;
}

export default function VideoManagerModal({
  isOpen,
  onClose,
  selectedProjectId,
  onUpdateProjectVideo
}: VideoManagerModalProps) {
  const [activeProjectId, setActiveProjectId] = useState<string>(
    selectedProjectId || PORTFOLIO_DATA.projects[0].id
  );
  const [videoInputUrl, setVideoInputUrl] = useState('');
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [testSuccess, setTestSuccess] = useState(false);

  useEffect(() => {
    if (selectedProjectId) {
      setActiveProjectId(selectedProjectId);
    }
  }, [selectedProjectId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
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

  const currentProject = PORTFOLIO_DATA.projects.find((p) => p.id === activeProjectId);

  // Handle local file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const localBlobUrl = URL.createObjectURL(file);
      setUploadedFileName(file.name);
      setVideoInputUrl(`/videos/${file.name}`);
      onUpdateProjectVideo(activeProjectId, localBlobUrl);
      setTestSuccess(true);
      setTimeout(() => setTestSuccess(false), 3000);
    }
  };

  // Handle URL apply
  const handleApplyUrl = () => {
    if (videoInputUrl.trim()) {
      onUpdateProjectVideo(activeProjectId, videoInputUrl.trim());
      setTestSuccess(true);
      setTimeout(() => setTestSuccess(false), 3000);
    }
  };

  // Pre-fill a demo video link to demonstrate live playback
  const handleApplyDemo = (demoUrl: string) => {
    setVideoInputUrl(demoUrl);
    onUpdateProjectVideo(activeProjectId, demoUrl);
    setTestSuccess(true);
    setTimeout(() => setTestSuccess(false), 3000);
  };

  // Generate snippet for portfolioData.ts
  const codeSnippet = `// In src/data/portfolioData.ts -> projects -> id: '${activeProjectId}'
videoUrl: '${videoInputUrl || `/videos/${uploadedFileName || 'my_edited_video.mp4'}`}',`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#0f111a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0c0e17] px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5 text-indigo-400" />
            <h2 className="text-base font-bold font-display text-white">
              Add Your Edited Videos
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Step 1: Select which project to add video to */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 block uppercase tracking-wider">
              1. Select Project to Add Video To
            </label>
            <select
              value={activeProjectId}
              onChange={(e) => {
                setActiveProjectId(e.target.value);
                setVideoInputUrl('');
                setUploadedFileName(null);
              }}
              className="w-full bg-[#141724] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
            >
              {PORTFOLIO_DATA.projects.map((proj) => (
                <option key={proj.id} value={proj.id}>
                  {proj.title} ({proj.aspectRatio} · {proj.category})
                </option>
              ))}
            </select>
          </div>

          {/* Step 2: Choose Method (Upload local or paste URL) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Method A: Select File from Computer */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-xs font-bold text-white flex items-center gap-1.5 mb-1">
                  <Upload className="w-4 h-4 text-indigo-400" />
                  <span>Option A: Pick Video from Computer</span>
                </span>
                <p className="text-xs text-slate-400">
                  Select your <code className="text-indigo-300">.mp4</code> or <code className="text-indigo-300">.mov</code> file to preview it live in your browser right now.
                </p>
              </div>

              <div>
                <label className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors">
                  <FolderOpen className="w-4 h-4" />
                  <span>Browse Video File (.mp4)</span>
                  <input
                    type="file"
                    accept="video/mp4,video/webm,video/quicktime"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
                {uploadedFileName && (
                  <p className="text-[11px] text-emerald-400 mt-2 truncate flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Loaded: {uploadedFileName}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Method B: Paste Link */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-xs font-bold text-white flex items-center gap-1.5 mb-1">
                  <Link2 className="w-4 h-4 text-violet-400" />
                  <span>Option B: Paste Online Video URL</span>
                </span>
                <p className="text-xs text-slate-400">
                  Supports <strong>YouTube Shorts</strong>, YouTube links, Vimeo, or hosted MP4 URLs.
                </p>
              </div>

              <div className="space-y-2">
                <input
                  type="text"
                  value={videoInputUrl}
                  onChange={(e) => setVideoInputUrl(e.target.value)}
                  placeholder="https://youtube.com/shorts/... or /videos/reel.mp4"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="button"
                  onClick={handleApplyUrl}
                  className="w-full py-2 text-xs font-semibold text-indigo-300 bg-indigo-950/60 hover:bg-indigo-600 hover:text-white border border-indigo-500/30 rounded-lg transition-colors flex items-center justify-center gap-1"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Apply &amp; Test Video</span>
                </button>
              </div>
            </div>
          </div>

          {testSuccess && (
            <div className="p-3 rounded-lg bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Video attached! Open the project in the portfolio to watch it play live.</span>
            </div>
          )}

          {/* Quick Demo Pre-fill */}
          <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-semibold text-indigo-300 block">Want to test with sample video clips?</span>
              <span className="text-slate-400">Click to instantly attach a test sample video stream.</span>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() =>
                  handleApplyDemo(
                    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
                  )
                }
                className="px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/15 text-slate-200 border border-white/10 transition-colors"
              >
                Sample 1 (Commercial)
              </button>
              <button
                type="button"
                onClick={() =>
                  handleApplyDemo(
                    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
                  )
                }
                className="px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/15 text-slate-200 border border-white/10 transition-colors"
              >
                Sample 2 (Motion)
              </button>
            </div>
          </div>

          {/* Step 3: Making it Permanent in Code */}
          <div className="p-5 rounded-xl bg-black/60 border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>To Save Permanently in Code:</span>
              </span>

              <button
                type="button"
                onClick={copyCode}
                className="px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-md transition-colors flex items-center gap-1"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Copied!' : 'Copy Line'}</span>
              </button>
            </div>

            <ol className="list-decimal list-inside text-xs text-slate-400 space-y-1.5">
              <li>
                Drop your video file into the project folder:{' '}
                <code className="text-indigo-300 bg-white/5 px-1.5 py-0.5 rounded">public/videos/</code>
              </li>
              <li>
                Open <code className="text-indigo-300 bg-white/5 px-1.5 py-0.5 rounded">src/data/portfolioData.ts</code>
              </li>
              <li>
                Find project <strong className="text-white">'{activeProjectId}'</strong> and paste this line:
              </li>
            </ol>

            <pre className="text-xs font-mono text-indigo-300 bg-[#090a0f] p-3 rounded-lg border border-white/5 overflow-x-auto">
              {codeSnippet}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#0c0e17] px-6 py-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>Supported: Local MP4 in /public/videos/, YouTube, Shorts, Vimeo</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
