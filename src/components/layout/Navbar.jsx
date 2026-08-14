import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Nexus", href: "#nexus" },
  { label: "Synergy Matrix", href: "#synergy" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Vision", href: "#vision" },
  { label: "Bridgehead", href: "#bridgehead" },
];

// Live "Network Clock" for key global hubs.
function useNetworkClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return now;
}

function formatCity(date, tz) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(date);
  } catch {
    return "—";
  }
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const now = useNetworkClock();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#121417]/85 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[120rem] px-6 md:px-10 h-20 flex items-center justify-between">
          <a href="#nexus" className="group flex items-baseline gap-2">
            <span className="ochre-text font-serif-display text-2xl leading-none tracking-tight">
              AC
            </span>
            <span className="font-tight text-[11px] uppercase tracking-[0.18em] text-white/75 leading-none">
              Bridge Advisors
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-tight text-[11px] uppercase tracking-[0.18em] text-white/60 hover:text-white transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 font-tight text-[11px] uppercase tracking-[0.18em] text-white/80 hover:text-white transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Full-screen menu */}
      <div
        className={`fixed inset-0 z-[60] bg-[#121417] transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(245,245,245,0.4) 0.5px, transparent 0.5px), linear-gradient(to bottom, rgba(245,245,245,0.4) 0.5px, transparent 0.5px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative h-full mx-auto max-w-[120rem] px-6 md:px-10 flex flex-col">
          <div className="h-20 flex items-center justify-between">
            <span className="flex items-baseline gap-2">
              <span className="ochre-text font-serif-display text-2xl leading-none">AC</span>
              <span className="font-tight text-[11px] uppercase tracking-[0.18em] text-white/75 leading-none">Bridge Advisors</span>
            </span>
            <button
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 font-tight text-[11px] uppercase tracking-[0.18em] text-white/70 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <span>Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 flex flex-col md:flex-row items-start md:items-center justify-between gap-12 py-10">
            <nav className="flex flex-col gap-3 md:gap-5">
              {NAV_LINKS.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-5"
                >
                  <span className="font-tight text-[11px] uppercase tracking-[0.2em] text-white/30 tabular-nums">
                    0{i + 1}
                  </span>
                  <span className="font-serif-display text-5xl md:text-7xl text-white/85 group-hover:text-[#C59D5F] transition-colors duration-300">
                    {l.label}
                  </span>
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <p className="font-tight text-[10px] uppercase tracking-[0.22em] text-white/40 mb-5">
                Network Clock
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { city: "New York", tz: "America/New_York" },
                  { city: "London", tz: "Europe/London" },
                  { city: "Tokyo", tz: "Asia/Tokyo" },
                ].map((c) => (
                  <div key={c.city} className="flex items-center gap-6">
                    <span className="font-tight text-[11px] uppercase tracking-[0.18em] text-white/50 w-20">
                      {c.city}
                    </span>
                    <span className="w-6 h-px hairline" />
                    <span className="font-tight text-sm text-white/80 tabular-nums">
                      {formatCity(now, c.tz)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="h-20 flex items-center justify-between border-t border-white/10">
            <span className="font-tight text-[10px] uppercase tracking-[0.22em] text-white/40">
              The Strategic Conduit
            </span>
            <span className="font-tight text-[10px] uppercase tracking-[0.22em] text-white/40">
              © {new Date().getFullYear()} AC Bridge Advisors
            </span>
          </div>
        </div>
      </div>
    </>
  );
}