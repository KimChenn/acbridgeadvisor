import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const SERVICES = [
  {
    n: "01",
    title: "CRM & Smart Service Processes",
    desc: "Customer Relationship Management systems and intelligent service-process implementation that turn interactions into compounding value.",
    outcomes: ["Unified customer data", "Automated service flows", "Measurable retention lift"],
  },
  {
    n: "02",
    title: "Retention & Loyalty Programs",
    desc: "Customer retention strategies and loyalty architectures engineered to extend the lifetime of every business relationship.",
    outcomes: ["Loyalty framework design", "Churn diagnostics", "Re-engagement playbooks"],
  },
  {
    n: "03",
    title: "Business Matchmaking",
    desc: "B2B partnership development — connecting complementary companies through structured, intentional introductions.",
    outcomes: ["Strategic alliances", "Partnership mapping", "Joint-venture scoping"],
  },
  {
    n: "04",
    title: "Meetings & Networking Coordination",
    desc: "Coordination of business meetings and focused networking activities that convert introductions into commitments.",
    outcomes: ["Curated roundtables", "Executive introductions", "Sector convenings"],
  },
  {
    n: "05",
    title: "Business Development Consulting",
    desc: "Advisory with an emphasis on inter-organizational relationships — the connective tissue between strategy and execution.",
    outcomes: ["Relationship architecture", "Growth diagnostics", "Ecosystem strategy"],
  },
];

function ServiceRow({ service, active, onHover }) {
  return (
    <div
      onMouseEnter={() => onHover(service.n)}
      onClick={() => onHover(service.n)}
      className="group relative border-t border-[#121417]/12 py-8 md:py-10 cursor-pointer md:cursor-default"
    >
      <div className="grid grid-cols-12 gap-4 items-baseline">
        <span className="col-span-2 md:col-span-1 font-tight text-[11px] uppercase tracking-[0.18em] text-[#121417]/40 tabular-nums">
          {service.n}
        </span>
        <h3
          className={`col-span-10 md:col-span-6 font-serif-display text-3xl md:text-5xl leading-tight transition-colors duration-300 ${
            active ? "text-[#C59D5F]" : "text-[#121417]"
          }`}
        >
          {service.title}
        </h3>
        <div className="hidden md:block md:col-span-5">
          <p className="text-[1.0625rem] leading-[1.7] text-[#121417]/65">
            {service.desc}
          </p>
        </div>
      </div>

      {/* Mobile description */}
      <p className="md:hidden mt-4 ml-0 col-span-12 text-[1rem] leading-[1.6] text-[#121417]/65">
        {service.desc}
      </p>

      {/* Outcomes — revealed as "web of light" when active */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
          active ? "max-h-40 opacity-100 mt-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-2 md:col-span-1" />
          <div className="col-span-10 md:col-span-11 flex flex-wrap gap-x-8 gap-y-3">
            {service.outcomes.map((o, i) => (
              <div key={o} className="flex items-center gap-3">
                <span className="w-6 h-px ochre-bg" style={{ transitionDelay: `${i * 60}ms` }} />
                <span className="font-tight text-[11px] uppercase tracking-[0.16em] text-[#121417]/70">
                  {o}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SynergyMatrix() {
  const [active, setActive] = useState("01");
  const { ref, visible } = useReveal();

  return (
    <section id="synergy" className="relative bone-structure-bg text-[#121417]">
      <div
        ref={ref}
        className={`mx-auto max-w-[120rem] px-6 md:px-10 py-[16vh] ${
          visible ? "fade-up" : "opacity-0"
        }`}
      >
        {/* Section header */}
        <div className="grid grid-cols-12 gap-4 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-10 h-px ochre-bg" />
              <span className="font-tight text-[11px] uppercase tracking-[0.24em] text-[#C59D5F]">
                View II — Synergy Matrix
              </span>
            </div>
            <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.98] text-balance">
              The architecture of <span className="italic">connection.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 flex md:items-end">
            <p className="text-[1.0625rem] leading-[1.7] text-[#121417]/65 max-w-md">
              We demystify complex B2B matchmaking and CRM processes into a visible
              flow. Each service is a structural joint — connect it to the outcomes
              it produces. Hover to trace the web of value.
            </p>
          </div>
        </div>

        {/* Interactive Connectivity Map — services as rows */}
        <div className="border-b border-[#121417]/12">
          {SERVICES.map((s) => (
            <ServiceRow
              key={s.n}
              service={s}
              active={active === s.n}
              onHover={setActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
}