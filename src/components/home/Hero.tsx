import { useEffect, useRef, useState, type FocusEvent } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { contact, stats } from "../../data";
import { Counter, Magnetic, motion, EASE } from "../motion";
import heroImg from "../../assets/hero.jpg";
import aboutImg from "../../assets/about.jpg";

const heroSlides = [
  {
    eyebrow: "Labour law consultants · India-wide support",
    before: "Labour law compliance, made clear and",
    accent: "manageable.",
    description: "Experienced consultants help startups, SMEs, manufacturers and large businesses manage registrations, payroll compliance, employee welfare and labour matters, so they can focus on running their business.",
    action: "Schedule a consultation",
    href: "/contact",
    image: heroImg,
    imagePosition: "68% center",
    imageAlt: "Consultants reviewing labour law compliance with business leaders",
  },
  {
    eyebrow: "Payroll · PF · ESI · Employee benefits",
    before: "Payroll and statutory benefits,",
    accent: "handled end to end.",
    description: "Keep payroll cycles, statutory contributions and employee benefits organised with practical support tailored to your workforce and locations.",
    action: "Explore payroll calculators",
    href: "/calculators",
    image: aboutImg,
    imagePosition: "55% center",
    imageAlt: "Lexus consultant reviewing employment and compliance records",
  },
  {
    eyebrow: "One partner · Multiple locations · Pan-India",
    before: "One trusted compliance partner,",
    accent: "across India.",
    description: "From registrations and licences to audits and representation, Lexus supports businesses with labour law matters across industries and locations.",
    action: "Explore our services",
    href: "/services",
    image: heroImg,
    imagePosition: "38% center",
    imageAlt: "Business team discussing legal and compliance documents",
  },
];

/* ============================ HERO BANNER CAROUSEL ============================ */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 52]);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    if (paused || prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 7000);
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
        aria-label="Lexus Consultants highlights"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={resumeAfterFocus}
        className="relative isolate flex min-h-[calc(75vh+144px)] items-center overflow-hidden bg-navy-950 pt-36 text-white md:min-h-[calc(78vh+176px)] md:pt-44"
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={activeSlide}
            src={slide.image}
            alt={slide.imageAlt}
            style={{ y: imageY, objectPosition: slide.imagePosition }}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 1.025 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.65, ease: EASE }}
            className="absolute inset-0 -z-30 h-[112%] w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(5,13,36,0.98)_0%,rgba(5,13,36,0.9)_42%,rgba(5,13,36,0.36)_75%,rgba(5,13,36,0.14)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/60 via-transparent to-navy-950/25" />

        <motion.div style={{ y: contentY }} className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
          <div className="max-w-[720px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeSlide}
                role="group"
                aria-roledescription="slide"
                aria-label={`${activeSlide + 1} of ${heroSlides.length}`}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: EASE }}
              >
                <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.18em] text-gold-300 uppercase sm:text-[11px] sm:tracking-[0.22em]">
                  <span className="h-px w-10 shrink-0 bg-crimson-500" />
                  {slide.eyebrow}
                </div>

                <h1 className="mt-5 font-display text-[2.1rem] leading-[1.08] font-semibold tracking-[-0.035em] md:text-[3rem] xl:text-[3.5rem]">
                  {slide.before} <span className="text-crimson-600">{slide.accent}</span>
                </h1>

                <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-200 sm:text-base md:text-[17px]">
                  {slide.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Magnetic>
                    <Link to={slide.href} className="group inline-flex items-center gap-2 bg-crimson-600 px-5 py-3.5 text-xs font-bold text-white shadow-xl shadow-black/20 transition hover:bg-crimson-500 sm:px-7 sm:py-4 sm:text-sm">
                      {slide.action}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </Link>
                  </Magnetic>
                  <a href={contact.phoneHref} className="inline-flex items-center gap-2 border border-white/30 bg-white/5 px-5 py-3.5 text-xs font-bold text-white backdrop-blur-sm transition hover:bg-white/10 sm:px-7 sm:py-4 sm:text-sm">
                    <Phone className="h-4 w-4 text-gold-400" /> {contact.phone}
                  </a>
                </div>

                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-4 text-[11px] text-slate-300 sm:gap-x-8 sm:text-xs">
                  <span>Advocates &amp; Management Consultants</span>
                  <span>Delhi NCR · Bangalore · Pan India</span>
                  <span>Labour Court to High Court</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex items-center justify-between gap-4" aria-label="Banner controls">
              <div className="flex items-center gap-2">
                {heroSlides.map((item, index) => (
                  <button
                    key={item.eyebrow}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Show banner ${index + 1}: ${item.eyebrow}`}
                    aria-current={activeSlide === index ? "true" : undefined}
                    className={`h-2 rounded-full transition-all ${activeSlide === index ? "w-8 bg-gold-300" : "w-2 bg-white/45 hover:bg-white/80"}`}
                  />
                ))}
                <span className="ml-2 text-[10px] font-semibold tracking-[0.14em] text-slate-300">0{activeSlide + 1} / 0{heroSlides.length}</span>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => moveSlide(-1)} aria-label="Previous banner" className="grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-white/5 text-white transition hover:bg-white/15">
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button type="button" onClick={() => moveSlide(1)} aria-label="Next banner" className="grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-white/5 text-white transition hover:bg-white/15">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-8 px-3 sm:px-6 md:px-8 ${
                i % 2 === 1 ? "border-l border-line md:border-l-0" : ""
              } ${i > 0 ? "md:border-l md:border-line" : ""} ${
                i >= 2 ? "border-t border-line md:border-t-0" : ""
              }`}
            >
              <div className="font-display text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-[12px] font-semibold text-mutedfg leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
