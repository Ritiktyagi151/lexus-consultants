import { useEffect, useState } from "react";

type LoaderPhase = "visible" | "exiting" | "hidden";

/** Minimal first-load screen */
export function PageLoader() {
  const [phase, setPhase] = useState<LoaderPhase>("visible");

  useEffect(() => {
    const startedAt = performance.now();
    let phaseTimer = 0;
    let fallbackTimer = 0;
    let completed = false;

    const finishLoading = () => {
      if (completed) return;
      completed = true;
      window.clearTimeout(fallbackTimer);

      // Snappy and polite: exit smoothly after minimal delay (350ms)
      const remainingMinimum = Math.max(0, 350 - (performance.now() - startedAt));
      phaseTimer = window.setTimeout(() => {
        setPhase("exiting");
        phaseTimer = window.setTimeout(() => setPhase("hidden"), 300);
      }, remainingMinimum);
    };

    const onWindowLoad = () => finishLoading();
    window.addEventListener("load", onWindowLoad, { once: true });

    fallbackTimer = window.setTimeout(finishLoading, 2500);
    if (document.readyState === "complete") finishLoading();

    return () => {
      window.removeEventListener("load", onWindowLoad);
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(phaseTimer);
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] grid place-items-center overflow-hidden bg-[#081229] text-white transition-[opacity,visibility] duration-300 ${phase === "exiting" ? "pointer-events-none invisible opacity-0" : "opacity-100"}`}
      role="status"
      aria-label="Loading Lexus Consultants"
      aria-live="polite"
    >
      <div className="relative flex w-[min(88vw,280px)] flex-col items-center text-center">
        <img
          className="h-auto w-[min(62vw,210px)] max-h-20 object-contain"
          src="/images/lexus-logo-light.svg"
          alt="Lexus Consultants"
          fetchPriority="high"
        />

        <div className="relative mt-[22px] h-0.5 w-[min(48vw,160px)] overflow-hidden rounded-full bg-white/10" aria-hidden="true">
          <span className="absolute inset-y-0 left-[-45%] w-[45%] rounded-full bg-gradient-to-r from-crimson-600 to-gold-500 motion-safe:animate-loader-glide motion-reduce:animate-none" />
        </div>
        <span className="sr-only">Loading website content</span>
      </div>
    </div>
  );
}
