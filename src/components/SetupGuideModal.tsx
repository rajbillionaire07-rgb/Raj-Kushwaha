import { useState, useEffect } from 'react';
import { X, SlidersHorizontal, Image, Video, Mail, Star, Globe, Copy, Check, ChevronRight } from 'lucide-react';

interface SetupGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SetupGuideModal({ isOpen, onClose }: SetupGuideModalProps) {
  const [activeTab, setActiveTab] = useState<'details' | 'projects' | 'contact' | 'testimonials' | 'deploy'>('details');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

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

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0f111a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-30 bg-[#0c0e17]/95 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-indigo-400" />
            <h2 className="text-sm sm:text-base font-bold font-display text-white">
              Portfolio Customization &amp; Deployment Guide
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

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-white/5 overflow-x-auto">
          <button
            onClick={() => setActiveTab('details')}
            className={`pb-3 text-xs font-semibold whitespace-nowrap border-b-2 transition-all ${
              activeTab === 'details'
                ? 'text-indigo-400 border-indigo-500'
                : 'text-slate-400 border-transparent hover:text-white'
            }`}
          >
            1. Personal Details &amp; Bio
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`pb-3 text-xs font-semibold whitespace-nowrap border-b-2 transition-all ${
              activeTab === 'projects'
                ? 'text-indigo-400 border-indigo-500'
                : 'text-slate-400 border-transparent hover:text-white'
            }`}
          >
            2. Upload Videos &amp; Thumbnails
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`pb-3 text-xs font-semibold whitespace-nowrap border-b-2 transition-all ${
              activeTab === 'contact'
                ? 'text-indigo-400 border-indigo-500'
                : 'text-slate-400 border-transparent hover:text-white'
            }`}
          >
            3. Contact Form &amp; Email
          </button>
          <button
            onClick={() => setActiveTab('testimonials')}
            className={`pb-3 text-xs font-semibold whitespace-nowrap border-b-2 transition-all ${
              activeTab === 'testimonials'
                ? 'text-indigo-400 border-indigo-500'
                : 'text-slate-400 border-transparent hover:text-white'
            }`}
          >
            4. Real Testimonials
          </button>
          <button
            onClick={() => setActiveTab('deploy')}
            className={`pb-3 text-xs font-semibold whitespace-nowrap border-b-2 transition-all ${
              activeTab === 'deploy'
                ? 'text-indigo-400 border-indigo-500'
                : 'text-slate-400 border-transparent hover:text-white'
            }`}
          >
            5. Deploy &amp; Custom Domain
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8 space-y-6 text-sm text-slate-300">
          {activeTab === 'details' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Image className="w-4 h-4 text-indigo-400" />
                <span>How to Replace Your Name, Photo, Bio &amp; Social Links</span>
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                All personal details are completely centralized in one file: <code className="text-indigo-300 bg-black/40 px-2 py-0.5 rounded">src/data/portfolioData.ts</code>. You never have to touch component code!
              </p>

              <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-2">
                <span className="text-xs font-mono text-indigo-400 block">Step-by-step:</span>
                <ol className="list-decimal list-inside text-xs text-slate-300 space-y-2">
                  <li>Open <strong className="text-white">src/data/portfolioData.ts</strong></li>
                  <li>Find the <code className="text-indigo-300">personal</code> object at the top.</li>
                  <li>
                    To add your portrait photo: place your image in <code className="text-indigo-300">public/images/avatar.jpg</code>, and set <code className="text-indigo-300">avatarUrl: '/images/avatar.jpg'</code>.
                  </li>
                  <li>
                    Update your social URLs (LinkedIn, Instagram, Behance, YouTube, WhatsApp, Calendly) in <code className="text-indigo-300">personal.links</code>.
                  </li>
                </ol>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Video className="w-4 h-4 text-violet-400" />
                <span>How to Add Your Edited Videos &amp; Reels</span>
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                You can add videos using any of the 3 simple methods below:
              </p>

              <div className="space-y-3">
                {/* Method 1 */}
                <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-2">
                  <span className="text-xs font-bold text-indigo-400 flex items-center gap-1.5">
                    <span>Method 1: Click "Add Videos" in the Top Navigation Bar</span>
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Click the <strong>"Add Videos"</strong> button in the top menu or on any project card. You can pick an <code className="text-indigo-300">.mp4</code> from your computer or paste a YouTube / Shorts link to watch it play live immediately!
                  </p>
                </div>

                {/* Method 2 */}
                <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-2">
                  <span className="text-xs font-bold text-violet-400 flex items-center gap-1.5">
                    <span>Method 2: Put Files in <code className="text-white">public/videos/</code></span>
                  </span>
                  <ol className="list-decimal list-inside text-xs text-slate-300 space-y-1">
                    <li>Copy your video file (e.g. <code className="text-indigo-300">my_reel.mp4</code>) into the folder: <code className="text-indigo-300">public/videos/my_reel.mp4</code></li>
                    <li>Open <strong className="text-white">src/data/portfolioData.ts</strong></li>
                    <li>In the project object, set: <code className="text-indigo-300">videoUrl: '/videos/my_reel.mp4'</code></li>
                  </ol>
                </div>

                {/* Method 3 */}
                <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-2">
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                    <span>Method 3: YouTube Links &amp; YouTube Shorts</span>
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Simply paste any YouTube link or YouTube Shorts URL into <code className="text-indigo-300">videoUrl</code>:
                  </p>
                  <pre className="text-[11px] font-mono text-slate-300 bg-[#090a0f] p-2.5 rounded-lg border border-white/5 overflow-x-auto">
{`videoUrl: 'https://www.youtube.com/shorts/3i_rJ7U0Mbg', // YouTube Shorts
// OR:
videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID', // YouTube Video`}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Configuring Contact Inquiries &amp; Delivery</span>
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                The contact form is already wired to the live Express endpoint <code className="text-indigo-300">POST /api/contact</code> with validation and mailto fallbacks.
              </p>

              <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-3">
                <span className="text-xs font-mono text-indigo-400 block">Receiving Inquiries to Your Inbox:</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  You can connect services like <strong>Formspree</strong> or <strong>Resend</strong> in <code className="text-indigo-300">server.ts</code>, or use <strong>EmailJS</strong> directly in the browser by inserting your Service ID and Template ID. The built-in direct email link and copy button already route to <strong className="text-white">rajbillionaire07@gmail.com</strong>.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400" />
                <span>Adding Verified Client Testimonials</span>
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                By default, the website shows a tasteful, transparent placeholder note explaining that genuine reviews will be published as projects conclude (no fake reviews!).
              </p>

              <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-2">
                <span className="text-xs font-mono text-indigo-400 block">To enable real reviews:</span>
                <p className="text-xs text-slate-300">
                  Open <code className="text-indigo-300">src/data/portfolioData.ts</code>, find <code className="text-indigo-300">testimonialsConfig</code>, set:
                </p>
                <pre className="text-[11px] font-mono text-slate-300 bg-[#090a0f] p-3 rounded-lg overflow-x-auto border border-white/5">
{`testimonialsConfig: {
  hasRealTestimonials: true,
  items: [
    {
      quote: "Raj delivered incredible short-form reels that exceeded our expectations.",
      author: "Client Name",
      role: "Marketing Director",
      company: "Acme Corp",
      projectType: "Short-Form Video Retainer"
    }
  ]
}`}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'deploy' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Deploying with Vercel, Netlify, or Custom Domain</span>
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                This project is built with Vite and React SPA. You can deploy it worldwide in 2 minutes:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-2">
                  <span className="text-xs font-bold text-white block">Deploy on Vercel:</span>
                  <ol className="list-decimal list-inside text-xs text-slate-400 space-y-1">
                    <li>Push code to your GitHub repo.</li>
                    <li>Go to vercel.com &amp; click "Add New Project".</li>
                    <li>Select Vite framework preset.</li>
                    <li>Click Deploy!</li>
                  </ol>
                </div>

                <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-2">
                  <span className="text-xs font-bold text-white block">Connect Custom Domain:</span>
                  <ol className="list-decimal list-inside text-xs text-slate-400 space-y-1">
                    <li>Go to Vercel/Netlify Project Settings → Domains.</li>
                    <li>Enter your custom domain (e.g. rajkushwaha.com).</li>
                    <li>Add the CNAME record in your domain registrar (GoDaddy, Namecheap, Cloudflare).</li>
                  </ol>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#0c0e17] px-6 py-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>Editable configuration: <code className="text-indigo-300">src/data/portfolioData.ts</code></span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
}
