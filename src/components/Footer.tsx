import { ArrowUp, Heart, Github, Linkedin, Instagram, Youtube, MessageCircle, Phone } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenSetupGuide: () => void;
  onOpenResume?: () => void;
}

export default function Footer({ onOpenSetupGuide, onOpenResume }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06070a] border-t border-white/[0.08] text-slate-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-white font-display font-bold text-lg">
              <span className="w-2.5 h-2.5 rounded-sm bg-indigo-500 inline-block" />
              <span>{PORTFOLIO_DATA.personal.name}</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              {PORTFOLIO_DATA.personal.tagline}
            </p>

            <div className="text-xs text-slate-500 space-y-1">
              <div>Location: {PORTFOLIO_DATA.personal.location} (Available Globally)</div>
              <div>Availability: {PORTFOLIO_DATA.personal.availabilityStatus}</div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('work')}
                  className="hover:text-white transition-colors"
                >
                  Featured Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors"
                >
                  About &amp; Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('process')}
                  className="hover:text-white transition-colors"
                >
                  Creative Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact &amp; Inquiries
                </button>
              </li>
              {onOpenResume && (
                <li>
                  <button
                    onClick={onOpenResume}
                    className="hover:text-white text-indigo-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>Resume &amp; CV</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300">PDF</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Connect & Setup */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              Direct Channels
            </span>
            <p className="text-xs text-slate-400">
              Inquiries: <a href={`mailto:${PORTFOLIO_DATA.personal.contactEmail}`} className="text-indigo-400 hover:underline">{PORTFOLIO_DATA.personal.contactEmail}</a>
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.personal.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-indigo-600 hover:text-white border border-white/5 flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-pink-600 hover:text-white border border-white/5 flex items-center justify-center transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-emerald-600 hover:text-white border border-white/5 flex items-center justify-center transition-colors"
                aria-label="WhatsApp Message"
                title="Message on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:+916307164317"
                className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-blue-600 hover:text-white border border-white/5 flex items-center justify-center transition-colors"
                aria-label="Direct Phone Call"
                title="Call Directly"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenSetupGuide}
                className="text-xs text-slate-500 hover:text-indigo-400 underline underline-offset-4 transition-colors"
              >
                Portfolio Setup &amp; Deployment Instructions
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} {PORTFOLIO_DATA.personal.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Built for High Retention Visual Storytelling</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] hover:text-white transition-colors flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
