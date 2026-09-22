const FOOTER_LINKS = [
  { label: "Nexus", href: "#nexus" },
  { label: "Synergy Matrix", href: "#synergy" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Vision", href: "#vision" },
  { label: "Bridgehead", href: "#bridgehead" },
];

export default function Footer() {
  return (
    <footer className="slate-essence-bg text-[#F5F5F5] border-t border-white/10">
      <div className="mx-auto max-w-[120rem] px-6 md:px-10 py-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-baseline gap-2 mb-6">
              <span className="ochre-text font-serif-display text-3xl leading-none">AC</span>
              <span className="font-tight text-[11px] uppercase tracking-[0.18em] text-white/75 leading-none">
                Bridge Advisors
              </span>
            </div>
            <p className="text-[1.0625rem] leading-[1.7] text-white/55 max-w-sm">
              The strategic conduit between businesses — building the relationships that
              drive growth, innovation, and impactful collaboration.
            </p>
            <address className="mt-6 not-italic font-tight text-[11px] uppercase tracking-[0.18em] text-white/50 leading-relaxed">
              AC BRIDGE ADVISORS LIMITED<br />
              Grigoriou Xenopoulou, 5A<br />
              EASTERN PEARL PROJECT, HOUSE 7<br />
              Pareklisia, 4520, Limassol, Cyprus<br />
              VAT number: 60330052P<br />
              Reg number: HE 484767<br />
              Established December 2025
            </address>
          </div>

          <div className="col-span-6 md:col-span-3 md:col-start-7">
            <p className="font-tight text-[10px] uppercase tracking-[0.22em] text-white/40 mb-5">
              Index
            </p>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-tight text-[12px] uppercase tracking-[0.14em] text-white/60 hover:text-[#C59D5F] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <p className="font-tight text-[10px] uppercase tracking-[0.22em] text-white/40 mb-5">
              Connect
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="mailto:acbridgeinfo@gmail.com" className="font-tight text-[12px] uppercase tracking-[0.14em] text-white/60 hover:text-[#C59D5F] transition-colors">
                  acbridgeinfo@gmail.com
                </a>
              </li>
              <li>
                <a href="#bridgehead" className="font-tight text-[12px] uppercase tracking-[0.14em] text-white/60 hover:text-[#C59D5F] transition-colors">
                  Strategic Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6">
          <span className="font-tight text-[10px] uppercase tracking-[0.22em] text-white/35">
            © 2025 AC BRIDGE ADVISORS LIMITED — The Structural Flow
          </span>
          <span className="font-tight text-[10px] uppercase tracking-[0.22em] text-white/35">
            Customer Relations · B2B Business Connections
          </span>
        </div>
      </div>
    </footer>
  );
}