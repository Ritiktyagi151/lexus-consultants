import { useEffect, useState } from "react";

type LoaderPhase = "visible" | "exiting" | "hidden";

/** Simple, elegant, executive page loader */
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
      className={`page-loader${phase === "exiting" ? " page-loader--exiting" : ""}`}
      role="status"
      aria-label="Loading Lexus Consultants"
      aria-live="polite"
    >
      <div className="page-loader__content">
        {/* Crisp Logo */}
        <div className="relative">
          <img
            className="page-loader__logo"
            src="/images/lexus-logo-light.svg"
            alt="Lexus Consultants"
            fetchPriority="high"
          />
        </div>

        {/* Minimalist Subtitle */}
        <p className="page-loader__name">LEXUS CONSULTANTS</p>
        <p className="page-loader__tagline">Advocates &amp; Industrial Legal Consultants · Estd. 1995</p>

        {/* Clean Hairline Progress Track */}
        <div className="page-loader__track" aria-hidden="true">
          <span />
        </div>
        <span className="sr-only">Loading website content</span>
      </div>
    </div>
  );
}
