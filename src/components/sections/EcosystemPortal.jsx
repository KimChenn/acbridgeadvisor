import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { useReveal } from "@/hooks/useReveal";

const PARTNERS = [
  {
    img: "https://media.base44.com/images/public/6a7d70aea68c2c50dc698df1/c86111ba7_generated_3d958451.png",
    sector: "Financial Services",
    kpi: "150+",
    label: "Strategic Alliances Formed",
  },
  {
    img: "https://media.base44.com/images/public/6a7d70aea68c2c50dc698df1/332d4d49d_generated_a269c307.png",
    sector: "Technology & SaaS",
    kpi: "42",
    label: "Cross-Industry Partnerships",
  },
  {
    img: "https://media.base44.com/images/public/6a7d70aea68c2c50dc698df1/195e74d07_generated_7adb8322.png",
    sector: "Manufacturing",
    kpi: "8.4x",
    label: "Avg. Relationship ROI",
  },
  {
    img: "https://media.base44.com/images/public/6a7d70aea68c2c50dc698df1/4b0a25e67_generated_ce88955e.png",
    sector: "Professional Services",
    kpi: "300+",
    label: "Curated Introductions",
  },
];

function PartnerCard({ partner }) {
  return (
    <div className="group relative shrink-0 w-[80vw] sm:w-[60vw] md:w-[42vw] lg:w-[34vw] h-[68vh] overflow-hidden">
      <Image
        src={partner.img}
        alt={partner.sector}
        className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        fittingType="fill"
      />
      {/* Ochre KPI overlay on hover */}
      <div className="absolute inset-0 bg-[#C59D5F]/0 group-hover:bg-[#C59D5F]/85 transition-colors duration-500 flex flex-col justify-end p-8 md:p-10">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 text-[#121417]">
          <p className="font-tight text-[11px] uppercase tracking-[0.2em] mb-3">
            {partner.sector}
          </p>
          <p className="font-serif-display text-6xl md:text-7xl leading-none">
            {partner.kpi}
          </p>
          <p className="font-tight text-[12px] uppercase tracking-[0.16em] mt-3">
            {partner.label}
          </p>
        </div>
      </div>
      {/* Resting label */}
      <div className="absolute bottom-0 inset-x-0 p-8 md:p-10 group-hover:opacity-0 transition-opacity duration-300">
        <p className="font-tight text-[11px] uppercase tracking-[0.2em] text-white/80">
          {partner.sector}
        </p>
      </div>
    </div>
  );
}

export default function EcosystemPortal() {
  const scroller = useRef(null);
  const { ref, visible } = useReveal();

  const scrollBy = (dir) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section id="ecosystem" className="relative slate-essence-bg text-[#F5F5F5] overflow-hidden">
      <div
        ref={ref}
        className={`mx-auto max-w-[120rem] px-6 md:px-10 pt-[16vh] pb-10 ${
          visible ? "fade-up" : "opacity-0"
        }`}
      >
        <div className="grid grid-cols-12 gap-4 mb-14">
          <div className="col-span-12 md:col-span-7">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-10 h-px ochre-bg" />
              <span className="font-tight text-[11px] uppercase tracking-[0.24em] text-[#C59D5F]">
                View III — Ecosystem Portal
              </span>
            </div>
            <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.98] text-balance max-w-[14ch]">
              A horizon of <span className="italic">proven</span> alliances.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 flex md:items-end">
            <p className="text-[1.0625rem] leading-[1.7] text-white/60 max-w-sm">
              The breadth of the network, expressed without disclosing confidential
              relationships. Each pillar represents an industry transformed through
              connection.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <span className="font-tight text-[10px] uppercase tracking-[0.22em] text-white/40">
            Partner Horizon — drag or scroll horizontally
          </span>
          <div className="flex gap-3">
            <button
              onClick={() => scrollBy(-1)}
              className="w-11 h-11 rounded-full border border-white/20 hover:border-[#C59D5F] hover:text-[#C59D5F] flex items-center justify-center transition-colors"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              className="w-11 h-11 rounded-full border border-white/20 hover:border-[#C59D5F] hover:text-[#C59D5F] flex items-center justify-center transition-colors"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroller */}
      <div
        ref={scroller}
        className="no-scrollbar flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-[16vh] pl-6 md:pl-10 pr-6 md:pr-10"
      >
        {PARTNERS.map((p) => (
          <div key={p.sector} className="snap-start">
            <PartnerCard partner={p} />
          </div>
        ))}
      </div>
    </section>
  );
}