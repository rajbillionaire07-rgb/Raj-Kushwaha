import React, { useState, useEffect } from 'react';
import { Mail, Copy, Check, Send, AlertCircle, Calendar, MessageCircle, Linkedin, Instagram, Youtube, ArrowUpRight, Phone } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactProps {
  initialService?: string;
}

export default function Contact({ initialService }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(initialService || 'AI Video Production');
  const [budgetRange, setBudgetRange] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');
  const [inquiryId, setInquiryId] = useState('');

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    if (initialService) {
      setProjectType(initialService);
    }
  }, [initialService]);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText('+91 6307164317');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please enter your name or company.';
    if (!email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!message.trim()) {
      errs.message = 'Please provide a brief description of your project or requirements.';
    } else if (message.trim().length < 15) {
      errs.message = 'Please provide a little more detail (at least 15 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setSubmitStatus('idle');
    setResponseMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          projectType,
          budgetRange: budgetRange.trim() || undefined,
          message: message.trim()
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitStatus('success');
        setResponseMessage(data.message || 'Your project inquiry has been received! Raj will respond shortly.');
        setInquiryId(data.inquiryId || '');
        setName('');
        setEmail('');
        setMessage('');
        setBudgetRange('');
      } else {
        setSubmitStatus('error');
        setResponseMessage(data.error || 'Failed to send inquiry. Please try again or email directly.');
      }
    } catch (err: any) {
      // If the backend endpoint fails or is blocked by network, give an explicit informative error and quick mailto fallback
      setSubmitStatus('error');
      setResponseMessage(
        'Could not reach the server endpoint. Please send your message directly to rajbillionaire07@gmail.com using the mailto button below.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.contactEmail}?subject=${encodeURIComponent(
    `[Portfolio Inquiry] ${projectType} - ${name || 'Project Lead'}`
  )}&body=${encodeURIComponent(
    `Hi Raj,\n\nMy Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nBudget Range: ${budgetRange || 'Flexible'}\n\nProject Details:\n${message}\n\nLooking forward to hearing from you!`
  )}`;

  return (
    <section id="contact" className="py-24 bg-[#090a0f] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Outreach & Personal Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-400">
                <span>Start a Collaboration</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-[1.1]">
                HAVE A PROJECT IN MIND? LET'S MAKE IT STAND OUT.
              </h2>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed pt-2">
                Whether you need a dedicated short-form editing partner for your channel, an AI video commercial, or a monthly creative retainer, let's connect and review your timeline.
              </p>
            </div>

            {/* WhatsApp & Call Direct Card */}
            <div className="p-5 rounded-2xl bg-[#0f111a] border border-emerald-500/30 flex flex-col gap-3 shadow-lg shadow-emerald-950/20">
              <div className="flex items-center justify-between">
                <span className="text-xs text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp &amp; Direct Call</span>
                </span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded">
                  Fastest Response
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <a
                  href="tel:+916307164317"
                  className="font-mono text-sm sm:text-base font-semibold text-white hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>+91 6307164317</span>
                </a>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={copyPhoneToClipboard}
                    className="px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-1 shrink-0"
                    title="Copy phone number"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={PORTFOLIO_DATA.personal.links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors flex items-center gap-1.5 shadow-md shadow-emerald-600/30 shrink-0"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
              <span className="text-[11px] text-slate-400">
                Available for project discussion, quick calls, and client retainers.
              </span>
            </div>

            {/* Email Card with Copy-to-Clipboard */}
            <div className="p-5 rounded-2xl bg-[#0f111a] border border-white/10 flex flex-col gap-3">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Direct Email Inquiries
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.contactEmail}`}
                  className="font-mono text-sm sm:text-base font-semibold text-white hover:text-indigo-400 transition-colors truncate"
                >
                  {PORTFOLIO_DATA.personal.contactEmail}
                </a>

                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <span className="text-[11px] text-slate-500">
                Expected response time: within 24 hours.
              </span>
            </div>

            {/* Social & Booking Links */}
            <div className="space-y-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Connect Across Platforms
              </span>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <a
                  href={PORTFOLIO_DATA.personal.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 text-slate-300 hover:text-white flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-pink-500/30 text-slate-300 hover:text-white flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                    <span>@digtalraj07</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 text-slate-300 hover:text-white flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span>WhatsApp</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a
                  href="tel:+916307164317"
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-blue-500/30 text-slate-300 hover:text-white flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                    <span>Call Directly</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Real Validation & Endpoint */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0f111a] border border-white/10 p-6 sm:p-8 md:p-10 shadow-2xl relative">
              {submitStatus === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    {responseMessage}
                  </p>
                  {inquiryId && (
                    <p className="text-xs font-mono text-slate-500">
                      Reference Code: {inquiryId}
                    </p>
                  )}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="px-5 py-2.5 text-xs font-medium text-slate-300 hover:text-white border border-white/10 rounded-lg"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={mailtoUrl}
                      className="px-5 py-2.5 text-xs font-medium text-indigo-300 hover:text-white bg-indigo-950/60 border border-indigo-500/30 rounded-lg"
                    >
                      Also Open Email Client
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitStatus === 'error' && (
                    <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-3">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <span>{responseMessage}</span>
                        <div className="mt-2">
                          <a
                            href={mailtoUrl}
                            className="font-bold underline underline-offset-2 hover:text-white"
                          >
                            Click here to launch prefilled mailto email
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-300 block">
                        Your Name / Brand <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="e.g. Alex Rivera or Acme Media"
                        className={`w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-rose-500 focus:border-rose-400'
                            : 'border-white/10 focus:border-indigo-500'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-rose-400">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-300 block">
                        Email Address <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="e.g. alex@company.com"
                        className={`w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-rose-500 focus:border-rose-400'
                            : 'border-white/10 focus:border-indigo-500'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-400">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Project Type & Budget Range Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-300 block">
                        Project Category
                      </label>
                      <select
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full bg-[#141724] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                      >
                        <option value="AI Video Production">AI Video Production &amp; Avatars</option>
                        <option value="Short-Form Video Editing">Short-Form Video Editing (Reels &amp; Shorts)</option>
                        <option value="Motion Graphics & Promotional Ads">Motion Graphics &amp; Promo Ads</option>
                        <option value="Carousel & Thumbnail Design">Carousel &amp; Thumbnail Design</option>
                        <option value="Social Media Content Production">End-to-End Monthly Retainer</option>
                        <option value="Scriptwriting & Creative Strategy">Scriptwriting &amp; Strategy</option>
                        <option value="General Creative Collaboration">General Creative Collaboration</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-300 block">
                        Budget Expectation <span className="text-slate-500 font-normal">(Optional)</span>
                      </label>
                      <select
                        value={budgetRange}
                        onChange={(e) => setBudgetRange(e.target.value)}
                        className="w-full bg-[#141724] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                      >
                        <option value="">Select an approximate range...</option>
                        <option value="Under $500 / ₹40,000">Single Asset / Under $500</option>
                        <option value="$500 - $1,500 / ₹40,000 - ₹1,20,000">$500 - $1,500 (Project Sprint)</option>
                        <option value="$1,500 - $3,000+ / ₹1,20,000+">$1,500 - $3,000+ (Monthly Retainer)</option>
                        <option value="Custom / Long-Term Contract">Custom Enterprise / Long-term</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Project Details &amp; Goals <span className="text-indigo-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Tell me about your channel, target audience, preferred timeline, or reference links..."
                      className={`w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.message
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-white/10 focus:border-indigo-500'
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-rose-400">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] rounded-xl transition-all shadow-xl shadow-indigo-600/25 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Project Inquiry</span>
                        </>
                      )}
                    </button>

                    <a
                      href={mailtoUrl}
                      className="text-xs text-slate-400 hover:text-white transition-colors underline underline-offset-4"
                    >
                      Prefer your native email app?
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
