import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, SlidersHorizontal, Video } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenSetupGuide: () => void;
  onOpenContact: (serviceTitle?: string) => void;
  onOpenVideoManager: () => void;
  onOpenResume: () => void;
}

export default function Navbar({ onOpenSetupGuide, onOpenContact, onOpenVideoManager, onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'work', 'about', 'services', 'process', 'workflow', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090a0f]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('home');
            }}
            className="text-lg md:text-xl font-bold font-display tracking-tight text-white hover:text-indigo-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-sm bg-indigo-500 inline-block"></span>
            <span>RAJ KUSHWAHA</span>
          </a>

          {/* Zone 2: Clean 4–5 single-line navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <button
              onClick={() => scrollTo('work')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 ${
                activeSection === 'work' ? 'text-white' : 'text-slate-400'
              }`}
            >
              Work
              {activeSection === 'work' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-full" />
              )}
            </button>
            <button
              onClick={() => scrollTo('about')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 ${
                activeSection === 'about' ? 'text-white' : 'text-slate-400'
              }`}
            >
              About
              {activeSection === 'about' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-full" />
              )}
            </button>
            <button
              onClick={() => scrollTo('services')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 ${
                activeSection === 'services' ? 'text-white' : 'text-slate-400'
              }`}
            >
              Services
              {activeSection === 'services' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-full" />
              )}
            </button>
            <button
              onClick={() => scrollTo('process')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 ${
                activeSection === 'process' ? 'text-white' : 'text-slate-400'
              }`}
            >
              Process
              {activeSection === 'process' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-full" />
              )}
            </button>
            <button
              onClick={onOpenResume}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 text-slate-400 hover:text-indigo-300"
            >
              Resume
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 ${
                activeSection === 'contact' ? 'text-white' : 'text-slate-400'
              }`}
            >
              Contact
              {activeSection === 'contact' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-full" />
              )}
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenVideoManager}
              title="Add or Manage Your Edited Videos"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-indigo-300 hover:text-white bg-indigo-950/40 hover:bg-indigo-900/60 border border-indigo-500/30 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <Video className="w-3.5 h-3.5 text-indigo-400" />
              <span>Add Videos</span>
            </button>

            <button
              onClick={onOpenSetupGuide}
              title="Portfolio Setup & Customization Guide"
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-400 hover:text-white border border-white/10 rounded-lg hover:border-white/25 transition-colors whitespace-nowrap shrink-0"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-400" />
              <span>Guide</span>
            </button>

            <button
              onClick={() => onOpenContact()}
              className="px-4 py-2 text-xs md:text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] rounded-lg transition-all shadow-lg shadow-indigo-600/20 whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#090a0f]/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col gap-6">
          <nav className="flex flex-col gap-4 text-lg font-medium text-slate-300">
            <button
              onClick={() => scrollTo('home')}
              className="text-left py-2 border-b border-white/5 hover:text-white"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('work')}
              className="text-left py-2 border-b border-white/5 hover:text-white"
            >
              Work &amp; Case Studies
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="text-left py-2 border-b border-white/5 hover:text-white"
            >
              About &amp; Background
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="text-left py-2 border-b border-white/5 hover:text-white"
            >
              Services &amp; Retainers
            </button>
            <button
              onClick={() => scrollTo('process')}
              className="text-left py-2 border-b border-white/5 hover:text-white"
            >
              Creative Process
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="text-left py-2 border-b border-white/5 hover:text-white flex items-center justify-between"
            >
              <span>Resume &amp; Profile Brief</span>
              <span className="text-[11px] font-mono text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-500/20">
                View &amp; Print
              </span>
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="text-left py-2 border-b border-white/5 hover:text-white text-indigo-400 font-semibold"
            >
              Contact &amp; Inquiries
            </button>
          </nav>

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVideoManager();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm text-indigo-300 bg-indigo-950/40 border border-indigo-500/30 rounded-lg"
            >
              <Video className="w-4 h-4 text-indigo-400" />
              <span>Add / Manage Edited Videos</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSetupGuide();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm text-slate-300 border border-white/15 rounded-lg"
            >
              <SlidersHorizontal className="w-4 h-4 text-indigo-400" />
              <span>Portfolio Setup &amp; Edit Guide</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 text-sm font-semibold text-white bg-indigo-600 rounded-lg text-center"
            >
              Let's Collaborate
            </button>

            <p className="text-xs text-slate-500 text-center mt-2">
              {PORTFOLIO_DATA.personal.location} · {PORTFOLIO_DATA.personal.availabilityStatus}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
