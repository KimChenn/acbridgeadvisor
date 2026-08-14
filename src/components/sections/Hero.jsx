import { ArrowUpRight } from "lucide-react";

// Hero "Nexus" — minimal & typographic.
// No background image. Just the wordmark, a bold serif statement,
// a short manifesto, and the CTA on Slate Essence with a hairline grid.
export default function Hero() {
  return (
    <section id="nexus" className="relative slate-essence-bg text-[#F5F5F5] overflow-hidden">
      {/* Hairline grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F5F5F5 0.5px, transparent 0.5px), linear-gradient(to bottom, #F5F5F5 0.5px, transparent 0.5px)",
          backgroundSize: "120px 120px",
        }}
      />

      <div className="relative mx-auto max-w-[120rem] px-6 md:px-10 min-h-[100svh] flex flex-col justify-center pt-32 pb-[12vh]">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-12 fade-up">
          <span className="w-10 h-px ochre-bg" />
          <span className="font-tight text-[11px] uppercase tracking-[0.24em] text-[#C59D5F]">
            Customer Relations · B2B Connections
          </span>
        </div>

        {/* Statement */}
        <h1 className="font-serif-display text-balance leading-[0.98] text-[12vw] md:text-[7.5vw] max-w-[18ch] fade-up">
          We bridge companies through <span className="ochre-text italic">relationships.</span>
        </h1>

        {/* Manifesto + CTA — 5-7 asymmetric */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-5">
            <p className="text-[1.0625rem] leading-[1.7] text-white/65 max-w-md">
              AC Bridge Advisors builds meaningful, long-lasting connections between
              businesses — engineering customer relationship systems and strategic
              partnerships that deliver real, measurable value.
            </p>
          </div>
          <div className="md:col-span-7 md:flex md:justify-end">
            <a
              href="#bridgehead"
              className="group inline-flex items-center gap-3 border border-white/25 hover:border-[#C59D5F] rounded-full pl-6 pr-5 py-4 transition-colors duration-300"
            >
              <span className="font-tight text-[12px] uppercase tracking-[0.18em] text-white group-hover:text-[#C59D5F] transition-colors">
                Strategic Consultation
              </span>
              <span className="w-8 h-8 rounded-full ochre-bg flex items-center justify-center text-[#121417]">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>

        {/* Bottom hairline + meta */}
        <div className="mt-20 flex items-center justify-between border-t border-white/10 pt-6">
          <span className="font-tight text-[10px] uppercase tracking-[0.22em] text-white/40">
            The Structural Flow
          </span>
          <span className="font-tight text-[10px] uppercase tracking-[0.22em] text-white/40 hidden sm:block">
            Scroll to enter the ecosystem
          </span>
        </div>
      </div>
    </section>
  );
}