import { useState, useRef, useCallback, useEffect } from 'react';
import { SlidersHorizontal, Sparkles, Layers, Film } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function BeforeAfterShowcase() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const currentItem = PORTFOLIO_DATA.beforeAfterShowcase[activeItemIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedPct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(clampedPct);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) handleMove(e.touches[0].clientX);
    };

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchend', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging, handleMove]);

  return (
    <section className="py-24 bg-[#090a0f] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-3">
            <span>Visual Transformation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            Before &amp; After Polish.
          </h2>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed">
            Drag the comparison slider to see how raw drafts and unedited frames are engineered into high-impact, scroll-stopping creative assets.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8">
          {PORTFOLIO_DATA.beforeAfterShowcase.map((item, idx) => {
            const isActive = activeItemIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveItemIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                    : 'bg-white/[0.04] text-slate-300 hover:text-white border border-white/5'
                }`}
              >
                {idx === 0 ? (
                  <Sparkles className="w-3.5 h-3.5" />
                ) : idx === 1 ? (
                  <Layers className="w-3.5 h-3.5" />
                ) : (
                  <Film className="w-3.5 h-3.5" />
                )}
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Comparison Slider Container */}
        <div className="rounded-2xl bg-[#0f111a] border border-white/[0.08] p-4 sm:p-6 md:p-8 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/5">
            <div>
              <h3 className="text-base sm:text-lg font-bold font-display text-white">
                {currentItem.title}
              </h3>
              <p className="text-xs text-slate-400">{currentItem.description}</p>
            </div>
            <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider shrink-0">
              Drag Center Divider
            </span>
          </div>

          {/* Slider viewport */}
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/9] max-h-[500px] rounded-xl overflow-hidden select-none cursor-ew-resize border border-white/10 bg-black"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            {/* AFTER Layer (Full background layer) */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-violet-950 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center mb-4 shadow-2xl">
                <Sparkles className="w-8 h-8 text-indigo-300" />
              </div>
              <span className="text-xs font-mono tracking-widest uppercase text-indigo-400 font-bold mb-2">
                AFTER: HIGH-CONVERSION ASSET
              </span>
              <h4 className="font-display font-bold text-2xl sm:text-3xl text-white max-w-xl">
                {currentItem.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md">
                Engineered contrast, kinetic font styling, balanced saturation, and visual hierarchy.
              </p>

              {/* Tag in bottom-right */}
              <div className="absolute bottom-4 right-4 bg-indigo-950/80 backdrop-blur-md border border-indigo-500/40 rounded px-3 py-1 text-xs font-bold text-indigo-300">
                {currentItem.afterLabel}
              </div>
            </div>

            {/* BEFORE Layer (Clipped to left side of slider) */}
            <div
              className="absolute inset-0 bg-neutral-900 flex flex-col items-center justify-center p-8 text-center overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-4">
                <SlidersHorizontal className="w-8 h-8 text-neutral-500" />
              </div>
              <span className="text-xs font-mono tracking-widest uppercase text-neutral-500 font-bold mb-2">
                BEFORE: RAW DRAFT
              </span>
              <h4 className="font-display font-bold text-2xl sm:text-3xl text-neutral-400 max-w-xl">
                {currentItem.title} (Draft)
              </h4>
              <p className="text-xs sm:text-sm text-neutral-500 mt-2 max-w-md">
                Flat lighting, zero typographic pacing, unformatted text, and low engagement.
              </p>

              {/* Tag in bottom-left */}
              <div className="absolute bottom-4 left-4 bg-neutral-950/80 backdrop-blur-md border border-neutral-700 rounded px-3 py-1 text-xs font-medium text-neutral-400">
                {currentItem.beforeLabel}
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30 shadow-2xl flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center font-bold text-xs pointer-events-none select-none">
                ↔
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>← {currentItem.beforeLabel}</span>
            <span className="text-indigo-400 font-medium">Split: {Math.round(sliderPosition)}%</span>
            <span>{currentItem.afterLabel} →</span>
          </div>
        </div>
      </div>
    </section>
  );
}
