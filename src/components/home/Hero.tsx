import { useEffect, useRef, useState, type FocusEvent } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { contact, stats } from "../../data";
import { Counter, Magnetic, motion, EASE } from "../motion";

const heroSlides = [
  {
    id: "legal-chambers",
    eyebrow: "Advocates & Labour Law Consultants · Estd. 2005",
    before: "Labour Law Compliance,",
    accent: "Built for Enterprise.",
    description: "Advocates protecting employers across India with proactive compliance, court defense, and statutory retainers.",
    action: "Schedule Consultation",
    href: "/contact",
    image: "/images/office/executive-chamber.jpg",
    imageAlt: "Lexus Consultants Executive Consultation Chambers in New Delhi",
    facilityLabel: "Head Office Chambers",
    facilitySub: "Vikas Puri, New Delhi",
  },
  {
    id: "labour-codes",
    eyebrow: "Central Labour Codes · 29 Acts Consolidated",
    before: "Four New Labour Codes,",
    accent: "Mastered & Implemented.",
    description: "Audit-ready employment contracts, wage structures, and compliance before statutory inspections occur.",
    action: "Explore Labour Codes",
    href: "/labour-laws",
    image: "/images/office/law-library.jpg",
    imageAlt: "Central Labour Law Library with extensive statutory commentaries",
    facilityLabel: "Central Law Library",
    facilitySub: "1,000+ Precedent Treatises",
  },
  {
    id: "operations-payroll",
    eyebrow: "Zero-Penalty Operations · ECR Filings · Licensing",
    before: "Payroll & Statutory Filings,",
    accent: "Handled End-to-End.",
    description: "Timely monthly ECR returns, PF/ESI challans, registers, and licensing managed by dedicated specialists.",
    action: "Explore Payroll",
    href: "/calculators",
    image: "/images/office/operations-team.jpg",
    imageAlt: "Compliance operations floor processing statutory filings",
    facilityLabel: "Operations Center",
    facilitySub: "Statutory Filing Operations",
  },
];

/* ============================ MINIMALIST & CLEAN HERO BANNER ============================ */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 35]);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    if (paused || prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 7500);
    return () => window.clearInterval(timer);
  }, [activeSlide, paused, prefersReducedMotion]);

  const resumeAfterFocus = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
  };

  const moveSlide = (direction: -1 | 1) => {
    setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length);
  };

  return (
    <>
      <section
        id="home"
        ref={ref}
        aria-roledescription="carousel"
        aria-label="Lexus Consultants banner"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={resumeAfterFocus}
        className="relative isolate flex min-h-[calc(75vh+140px)] items-center overflow-hidden bg-navy-950 pt-28 pb-10 text-white md:min-h-[calc(80vh+170px)] md:pt-36 md:pb-16"
      >
        {/* Background photo */}
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.id}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: EASE }}
            className="absolute inset-0 -z-30 h-full w-full overflow-hidden"
          >
            <motion.img
              src={slide.image}
              alt={slide.imageAlt}
              style={{ y: imageY }}
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* High-end Multi-layered Scrim */}
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(5,13,36,0.96)_0%,rgba(5,13,36,0.88)_48%,rgba(5,13,36,0.55)_75%,rgba(5,13,36,0.3)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/20 to-navy-950/50" />

        <motion.div style={{ y: contentY }} className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Content Column */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={slide.id}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${activeSlide + 1} of ${heroSlides.length}`}
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.35, ease: EASE }}
                >
                  {/* Single Clean Tag */}
                  <div className="inline-flex max-w-full flex-wrap items-center gap-1.5 rounded-full border border-gold-400/30 bg-gold-500/10 px-2.5 py-1 text-[9px] font-bold tracking-wide text-gold-300 uppercase backdrop-blur-md sm:px-3 sm:text-[11px] sm:tracking-wider">
                    <ShieldCheck className="h-3.5 w-3.5 text-gold-400" />
                    {slide.eyebrow}
                  </div>

                  {/* Main Display Headline (Punchy, Short) */}
                  <h1 className="mt-3 font-display text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] text-white min-[380px]:text-[2.2rem] sm:text-[2.8rem] md:text-[3.2rem]">
                    {slide.before} <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson-400 to-rose-400">{slide.accent}</span>
                  </h1>

                  {/* 1-Line Description */}
                  <p className="mt-2.5 max-w-xl text-[15px] leading-relaxed text-slate-200 sm:text-base">
                    {slide.description}
                  </p>

                  {/* Clean CTAs */}
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <Magnetic>
                      <Link
                        to={slide.href}
                        className="group inline-flex items-center gap-2 rounded-full bg-crimson-600 px-6 py-3.5 text-xs font-bold text-white shadow-lg shadow-crimson-600/30 transition-all hover:bg-crimson-500 sm:px-7 sm:py-3.5 sm:text-sm"
                      >
                        <span>{slide.action}</span>
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </Link>
                    </Magnetic>

                    <a
                      href={contact.phoneHref}
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-xs font-bold text-white backdrop-blur-md transition-all hover:border-gold-400 hover:bg-white/15 sm:text-sm"
                    >
                      <Phone className="h-4 w-4 text-gold-400" />
                      <span>{contact.phone}</span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Clean Minimalist Preview Card */}
            <div className="hidden lg:col-span-4 lg:block">
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-navy-900/50 p-2.5 shadow-2xl backdrop-blur-md">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <img
                    src={slide.image}
                    alt={slide.imageAlt}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-bold text-gold-300 uppercase tracking-wider">{slide.facilityLabel}</div>
                      <div className="text-xs font-bold text-white">{slide.facilitySub}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Minimalist Carousel Controls */}
          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
            <div className="flex items-center gap-2">
              {heroSlides.map((item, index) => {
                const isActive = activeSlide === index;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Slide ${index + 1}`}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold transition-all ${
                      isActive
                        ? "bg-white/15 text-gold-300"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <span>0{index + 1}</span>
                    <span className={`h-1 rounded-full transition-all duration-300 ${isActive ? "w-5 bg-gold-400" : "w-1.5 bg-white/20"}`} />
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => moveSlide(-1)}
                aria-label="Previous slide"
                className="grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-gold-500 hover:text-navy-950"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => moveSlide(1)}
                aria-label="Next slide"
                className="grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-gold-500 hover:text-navy-950"
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Clean Metrics Bar */}
      <section className="border-b border-line bg-white shadow-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-6 px-4 sm:px-6 md:px-8 ${
                i % 2 === 1 ? "border-l border-line md:border-l-0" : ""
              } ${i > 0 ? "md:border-l md:border-line" : ""} ${
                i >= 2 ? "border-t border-line md:border-t-0" : ""
              }`}
            >
              <div className="font-display text-2xl font-extrabold tracking-tight text-navy-950 md:text-3xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs font-semibold text-mutedfg">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
