import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const STEPS = [
  { id: 1, label: "Your Focus", field: "focus", placeholder: "e.g. Strategic partnership in fintech", type: "text" },
  { id: 2, label: "Your Stage", field: "stage" },
  { id: 3, label: "Your Email", field: "email", placeholder: "you@company.com", type: "email" },
  { id: 4, label: "Your Phone", field: "phone", placeholder: "+1 (555) 000-0000", type: "tel" },
];

export default function Bridgehead() {
  const { ref, visible } = useReveal();
  const [step, setStep] = useState(0);
  const [values, setValues] = useState({ focus: "", stage: "", email: "", phone: "" });

  const update = (field, val) => setValues((s) => ({ ...s, [field]: val }));

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const canAdvance = !!values[STEPS[step].field];

  const submit = (e) => {
    e.preventDefault();
    if (!canAdvance) return;
    const subject = encodeURIComponent("Strategic consultation inquiry");
    const body = encodeURIComponent(`Focus: ${values.focus}\nStage: ${values.stage}\nEmail: ${values.email}\nPhone: ${values.phone}`);
    window.location.href = `mailto:acbridgeinfo@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="bridgehead" className="relative slate-essence-bg text-[#F5F5F5]">
      <div
        ref={ref}
        className={`mx-auto max-w-[120rem] px-6 md:px-10 py-[16vh] ${
          visible ? "fade-up" : "opacity-0"
        }`}
      >
        <div className="grid grid-cols-12 gap-8 md:gap-16 items-stretch">
          {/* Left — bold statement */}
          <div className="col-span-12 md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-10 h-px ochre-bg" />
                <span className="font-tight text-[11px] uppercase tracking-[0.24em] text-[#C59D5F]">
                  View IV — The Bridgehead
                </span>
              </div>
              <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.98] text-balance">
                Every partnership starts with a <span className="italic">conversation.</span>
              </h2>
              <p className="mt-8 text-[1.0625rem] leading-[1.7] text-white/60 max-w-md">
                Tell us where you want to go — we'll map the relationships that get you
                there.
              </p>
              <address className="mt-8 not-italic font-tight text-[11px] uppercase tracking-[0.18em] text-white/50 leading-relaxed">
                Grigoriou Xenopoulou, 5A<br />EASTERN PEARL PROJECT, HOUSE 7<br />Pareklisia, 4520, Limassol, Cyprus<br /><a href="mailto:acbridgeinfo@gmail.com">acbridgeinfo@gmail.com</a>
              </address>
            </div>

            <div className="mt-12 hidden md:flex items-center gap-6">
              <span className="font-tight text-[10px] uppercase tracking-[0.22em] text-white/40">
                Strategic Consultation
              </span>
              <span className="flex-1 h-px hairline" />
              <span className="font-tight text-[10px] uppercase tracking-[0.22em] text-white/40">
                By appointment
              </span>
            </div>
          </div>

          {/* Right — multi-step diagnostic form */}
          <div className="col-span-12 md:col-span-6">
            <div className="border border-white/15 rounded-sm p-8 md:p-10 bg-white/[0.02]">
              <form onSubmit={submit}>
                  {/* Step indicator */}
                  <div className="flex items-center gap-3 mb-10 flex-wrap">
                    {STEPS.map((s, i) => (
                      <div key={s.id} className="flex items-center gap-3">
                        <span
                          className={`font-tight text-[10px] uppercase tracking-[0.18em] tabular-nums ${
                            i === step ? "text-[#C59D5F]" : i < step ? "text-white/50" : "text-white/30"
                          }`}
                        >
                          0{s.id}
                        </span>
                        {i < STEPS.length - 1 && (
                          <span className={`w-6 h-px ${i < step ? "ochre-bg" : "bg-white/15"}`} />
                        )}
                      </div>
                    ))}
                  </div>

                  <p className="font-tight text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3">
                    {STEPS[step].label}
                  </p>

                  {step === 1 ? (
                    <div className="flex flex-col gap-3">
                      {["Exploring partnerships", "Scaling existing relationships", "Optimizing CRM"].map(
                        (opt) => (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => update("stage", opt)}
                            className={`text-left px-5 py-4 rounded-sm border transition-colors ${
                              values.stage === opt
                                ? "border-[#C59D5F] text-[#C59D5F]"
                                : "border-white/15 text-white/70 hover:border-white/40"
                            }`}
                          >
                            <span className="text-[1.0625rem]">{opt}</span>
                          </button>
                        )
                      )}
                    </div>
                  ) : (
                    <input
                      autoFocus
                      type={STEPS[step].type || "text"}
                      value={values[STEPS[step].field]}
                      onChange={(e) => update(STEPS[step].field, e.target.value)}
                      placeholder={STEPS[step].placeholder}
                      className="w-full bg-transparent border-b border-white/20 focus:border-[#C59D5F] outline-none py-4 text-[1.25rem] text-white placeholder:text-white/25 transition-colors"
                    />
                  )}

                  <div className="mt-10 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={prev}
                      disabled={step === 0}
                      className="font-tight text-[11px] uppercase tracking-[0.18em] text-white/40 hover:text-white disabled:opacity-30 transition-colors"
                    >
                      Back
                    </button>

                    {step < STEPS.length - 1 ? (
                      <button
                        type="button"
                        onClick={next}
                        disabled={!canAdvance}
                        className="group inline-flex items-center gap-3 font-tight text-[11px] uppercase tracking-[0.18em] text-white disabled:opacity-40"
                      >
                        Continue
                        <span className="w-8 h-8 rounded-full ochre-bg flex items-center justify-center text-[#121417] group-hover:translate-x-1 transition-transform">
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={!canAdvance}
                        className="group inline-flex items-center gap-3 font-tight text-[11px] uppercase tracking-[0.18em] text-white disabled:opacity-50"
                      >
                        Open Email Draft
                        <span className="w-8 h-8 rounded-full ochre-bg flex items-center justify-center text-[#121417] group-hover:translate-x-1 transition-transform">
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </button>
                    )}
                  </div>
                </form>
              <p className="mt-5 text-xs text-white/50">Your email app will open with these details. Send the email there to contact us.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}