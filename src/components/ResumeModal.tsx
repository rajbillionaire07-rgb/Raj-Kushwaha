import { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  ExternalLink, 
  Link2, 
  Check, 
  FileText, 
  Copy, 
  Briefcase, 
  Sparkles, 
  Wrench, 
  Globe2 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function ResumeModal({ isOpen, onClose, onOpenContact }: ResumeModalProps) {
  const [resumeUrl, setResumeUrl] = useState<string>(() => {
    return localStorage.getItem('raj_resume_url') || PORTFOLIO_DATA.personal.resumePdfUrl || '';
  });
  const [editingUrl, setEditingUrl] = useState(false);
  const [tempUrlInput, setTempUrlInput] = useState(resumeUrl);
  const [copiedType, setCopiedType] = useState<string | null>(null);

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

  const handlePrint = () => {
    window.print();
  };

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUrl = tempUrlInput.trim();
    setResumeUrl(cleanUrl);
    localStorage.setItem('raj_resume_url', cleanUrl);
    setEditingUrl(false);
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#0f111a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto print:border-none print:shadow-none print:bg-white print:text-black print:my-0 print:p-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden on print) */}
        <div className="sticky top-0 z-30 bg-[#0c0e17]/95 backdrop-blur-md px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block">
                Raj Kushwaha · Official Resume
              </span>
              <span className="text-[11px] text-slate-400">AI Video Editor &amp; Content Strategist</span>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {resumeUrl ? (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-colors flex items-center gap-1.5 shadow-md shadow-indigo-600/20"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Open Google Drive / PDF</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            ) : (
              <button
                onClick={() => setEditingUrl(true)}
                className="px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 text-xs font-medium transition-colors flex items-center gap-1.5"
                title="Paste a Google Drive or PDF download link"
              >
                <Link2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Link Google Drive PDF</span>
              </button>
            )}

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-medium text-slate-200 hover:text-white transition-colors flex items-center gap-1.5 border border-white/10 shadow-sm"
              title="Print directly or save clean PDF in browser"
            >
              <Printer className="w-3.5 h-3.5 text-indigo-300" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Link Input Bar (Optional expansion to paste Google Drive link) */}
        {editingUrl && (
          <div className="bg-[#141824] px-6 py-3 border-b border-indigo-500/20 flex flex-col sm:flex-row items-center gap-3 print:hidden">
            <div className="flex-1 w-full text-xs text-slate-300">
              <span className="font-medium text-indigo-300 block mb-1">
                Paste your Google Drive link or PDF URL:
              </span>
              <form onSubmit={handleSaveUrl} className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://drive.google.com/file/d/.../view?usp=sharing"
                  value={tempUrlInput}
                  onChange={(e) => setTempUrlInput(e.target.value)}
                  className="flex-1 px-3 py-1.5 rounded-lg bg-[#0b0d14] border border-white/15 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white whitespace-nowrap"
                >
                  Save Link
                </button>
                <button
                  type="button"
                  onClick={() => setEditingUrl(false)}
                  className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-400 whitespace-nowrap"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Printable & Interactive Resume Body */}
        <div className="p-8 sm:p-12 space-y-7 text-slate-200 print:text-black print:p-8 print:space-y-5 bg-[#0f111a] print:bg-white">
          {/* Header */}
          <div className="border-b border-white/10 print:border-gray-300 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold font-display text-white print:text-black tracking-tight">
                  {PORTFOLIO_DATA.personal.name}
                </h1>
                <p className="text-sm sm:text-base font-semibold text-indigo-400 print:text-indigo-800 mt-1">
                  AI Video Editor · Creative Content Strategist · Motion Graphics Designer
                </p>
                <p className="text-xs text-slate-400 print:text-gray-600 mt-1.5 italic">
                  "{PORTFOLIO_DATA.personal.tagline}"
                </p>
              </div>

              <div className="text-xs text-slate-300 print:text-gray-700 sm:text-right space-y-1.5">
                <div className="flex sm:justify-end items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-600" />
                  <span>India · Available Globally (Remote)</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 print:text-emerald-700" />
                  <a href="tel:+916307164317" className="hover:underline font-semibold text-white print:text-black">
                    +91 6307164317
                  </a>
                  <button
                    type="button"
                    onClick={() => copyToClipboard('+916307164317', 'phone')}
                    className="p-1 text-slate-400 hover:text-white print:hidden"
                    title="Copy phone"
                  >
                    {copiedType === 'phone' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-600" />
                  <a href="mailto:rajbillionaire07@gmail.com" className="hover:underline text-slate-200 print:text-black">
                    rajbillionaire07@gmail.com
                  </a>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-600" />
                  <a href="mailto:onlyaqualisbrand@gmail.com" className="hover:underline text-slate-300 print:text-gray-700">
                    onlyaqualisbrand@gmail.com
                  </a>
                </div>
                <div className="flex sm:justify-end items-center gap-2 pt-1.5 text-[11px] text-indigo-400 print:text-indigo-700 font-medium">
                  <a href={PORTFOLIO_DATA.personal.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    LinkedIn
                  </a>
                  <span>·</span>
                  <a href={PORTFOLIO_DATA.personal.links.instagram} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Instagram (@digtalraj07)
                  </a>
                  <span>·</span>
                  <a href={PORTFOLIO_DATA.personal.links.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:underline text-emerald-400 print:text-emerald-700">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 print:hidden" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 print:text-gray-700">
                Professional Profile
              </h2>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300 print:text-gray-800">
              Creative content strategist and AI-driven video editor specializing in cinematic short-form video production, motion graphics, and high-retention social content systems. Experienced in creating educational and career advisory content, entrance exam campaigns (BITSAT), and brand promotional motion videos with high engagement hooks and kinetic typography. Dedicated to turning complex concepts into high-converting, scroll-stopping digital assets.
            </p>
          </div>

          {/* Core Specializations */}
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <Wrench className="w-3.5 h-3.5 text-indigo-400 print:hidden" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 print:text-gray-700">
                Core Capabilities &amp; Specializations
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-start gap-2 bg-white/[0.02] print:bg-transparent p-2 rounded-lg border border-white/5 print:border-none">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-700 shrink-0 mt-0.5" />
                <span>AI-Powered Video Production &amp; Digital Avatars (HeyGen, ElevenLabs, Google Flow)</span>
              </div>
              <div className="flex items-start gap-2 bg-white/[0.02] print:bg-transparent p-2 rounded-lg border border-white/5 print:border-none">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-700 shrink-0 mt-0.5" />
                <span>Kinetic Typography &amp; 2D Motion Graphics (After Effects, Premiere Pro)</span>
              </div>
              <div className="flex items-start gap-2 bg-white/[0.02] print:bg-transparent p-2 rounded-lg border border-white/5 print:border-none">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-700 shrink-0 mt-0.5" />
                <span>Instagram Reels &amp; YouTube Shorts Retention Pacing &amp; Hooks</span>
              </div>
              <div className="flex items-start gap-2 bg-white/[0.02] print:bg-transparent p-2 rounded-lg border border-white/5 print:border-none">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-700 shrink-0 mt-0.5" />
                <span>High-CTR YouTube Cover &amp; Social Media Thumbnail Design</span>
              </div>
              <div className="flex items-start gap-2 bg-white/[0.02] print:bg-transparent p-2 rounded-lg border border-white/5 print:border-none">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-700 shrink-0 mt-0.5" />
                <span>Educational, Career &amp; Scholarship Explainer Carousels (Canva)</span>
              </div>
              <div className="flex items-start gap-2 bg-white/[0.02] print:bg-transparent p-2 rounded-lg border border-white/5 print:border-none">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-700 shrink-0 mt-0.5" />
                <span>Retention-Driven Scriptwriting, Video Hooks, and Content Flow Strategy</span>
              </div>
            </div>
          </div>

          {/* Professional Work & Production Experience */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-3.5 h-3.5 text-indigo-400 print:hidden" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 print:text-gray-700">
                Key Production Experience &amp; Collaborations
              </h2>
            </div>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 print:border-gray-300 print:p-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-white print:text-black text-sm">CareerGuide.com</span>
                  <span className="text-xs text-indigo-400 print:text-indigo-700 font-mono">Client Video Production</span>
                </div>
                <p className="text-xs text-slate-300 print:text-gray-700 leading-relaxed">
                  Produced educational and career guidance reels, swipeable carousels, YouTube thumbnails, and retention-focused scripts for student audiences navigating higher education and careers.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 print:border-gray-300 print:p-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-white print:text-black text-sm">BITSAT Preparation Content Campaign</span>
                  <span className="text-xs text-indigo-400 print:text-indigo-700 font-mono">Exam Campaign</span>
                </div>
                <p className="text-xs text-slate-300 print:text-gray-700 leading-relaxed">
                  Created high-stakes short video revision modules, formula countdowns, mock-test promotional motion graphics, and high-CTR thumbnail packs.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 print:border-gray-300 print:p-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-white print:text-black text-sm">Flag Holidays &amp; Couple Roll Campaigns</span>
                  <span className="text-xs text-indigo-400 print:text-indigo-700 font-mono">Promotional Motion &amp; Commercials</span>
                </div>
                <p className="text-xs text-slate-300 print:text-gray-700 leading-relaxed">
                  Engineered 60s international travel ad with AI voiceover and a 2D motion graphics promotional video for a couples' board game.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 print:border-gray-300 print:p-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-white print:text-black text-sm">Freelance Video Producer &amp; Content Creator</span>
                  <span className="text-xs text-indigo-400 print:text-indigo-700 font-mono">Global Remote (2023 - Present)</span>
                </div>
                <p className="text-xs text-slate-300 print:text-gray-700 leading-relaxed">
                  Delivering end-to-end video editing, audio mastering, kinetic captioning, and AI-accelerated workflows for brands, agencies, and independent creators across YouTube, Instagram, and web advertising.
                </p>
              </div>
            </div>
          </div>

          {/* Software & Tools */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 print:text-gray-700 mb-2">
              Software &amp; AI Stack
            </h2>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 print:border-gray-300 text-xs text-slate-300 print:text-gray-800 leading-relaxed space-y-1.5 print:p-2">
              <div>
                <strong className="text-white print:text-black font-semibold">Video &amp; Motion:</strong> Premiere Pro, After Effects, CapCut Pro
              </div>
              <div>
                <strong className="text-white print:text-black font-semibold">AI Generation &amp; Audio:</strong> HeyGen, ElevenLabs, Google Flow, Runway Gen-2/Gen-3
              </div>
              <div>
                <strong className="text-white print:text-black font-semibold">Graphic &amp; Thumbnail Design:</strong> Canva, Photoshop, Figma
              </div>
              <div>
                <strong className="text-white print:text-black font-semibold">Content Strategy:</strong> Retention Frameworks, Hook Engineering, Notion
              </div>
            </div>
          </div>

          {/* Modality & Languages */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Globe2 className="w-3.5 h-3.5 text-indigo-400 print:hidden" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 print:text-gray-700">
                Languages &amp; Work Modality
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-slate-300 print:text-gray-800">
              <span className="px-2.5 py-1 rounded bg-white/5 print:bg-gray-100 border border-white/10 print:border-gray-300">
                <strong>Languages:</strong> English, Hindi
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 print:bg-gray-100 border border-white/10 print:border-gray-300">
                <strong>Availability:</strong> Full-time Freelance &amp; Monthly Retainers
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 print:bg-gray-100 border border-white/10 print:border-gray-300">
                <strong>Work Style:</strong> 100% Remote (Worldwide)
              </span>
            </div>
          </div>

          {/* Availability Footer (Hidden on print) */}
          <div className="pt-4 border-t border-white/10 print:border-gray-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 print:hidden">
            <span className="text-xs text-slate-400">
              Open to freelance projects, monthly content retainers, and creative collaborations worldwide.
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors shadow-md shadow-indigo-600/20"
              >
                Hire / Contact Raj
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
