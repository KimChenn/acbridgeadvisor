import { Image } from "@/components/ui/image";
import { useReveal } from "@/hooks/useReveal";

const VISION_IMG = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80";

const PILLARS = [
  { k: "Relationships", v: "as the driving force behind growth" },
  { k: "Innovation", v: "born from inter-organizational collaboration" },
  { k: "Impact", v: "amplified through shared business goals" },
];

export default function Vision() {
  const { ref, visible } = useReveal();

  return (
    <section id="vision" className="relative bone-structure-bg text-[#121417]">
      <div
        ref={ref}
        className={`mx-auto max-w-[120rem] px-6 md:px-10 py-[18vh] ${
          visible ? "fade-up" : "opacity-0"
        }`}
      >
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Image — structural joint */}
          <div className="col-span-12 md:col-span-5 order-2 md:order-1">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={VISION_IMG}
                alt="Two brutalist structures meeting at a precise joint"
                className="w-full h-full object-cover"
                fittingType="fill"
              />
              <div className="absolute bottom-0 inset-x-0 h-px ochre-bg" />
            </div>
            <p className="font-tight text-[10px] uppercase tracking-[0.22em] text-[#121417]/40 mt-4">
              The Space Between — the joint is where value lives
            </p>
          </div>

          {/* Vision text */}
          <div className="col-span-12 md:col-span-6 md:col-start-7 order-1 md:order-2">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-10 h-px ochre-bg" />
              <span className="font-tight text-[11px] uppercase tracking-[0.24em] text-[#C59D5F]">
                Our Vision
              </span>
            </div>
            <h2 className="font-serif-display text-4xl md:text-6xl leading-[1.02] text-balance">
              To create a business ecosystem where relationships are the driving force
              behind <span className="italic">growth, innovation,</span> and impactful
              collaborations between leading companies.
            </h2>

            <div className="mt-12 flex flex-col divide-y divide-[#121417]/12">
              {PILLARS.map((p) => (
                <div key={p.k} className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-6 py-5">
                  <span className="font-serif-display text-2xl ochre-text md:w-44 md:shrink-0">
                    {p.k}
                  </span>
                  <span className="text-[1.0625rem] leading-[1.6] text-[#121417]/65">
                    {p.v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}