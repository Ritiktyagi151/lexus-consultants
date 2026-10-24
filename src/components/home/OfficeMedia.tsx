import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Eye, Building, BookOpen, Users, Award, Film } from "lucide-react";
import { officePhotos, officeVideos } from "../../data/officeMedia";

export function OfficeMedia() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filteredPhotos = selectedCategory === "all"
    ? officePhotos
    : officePhotos.filter((p) => p.category === selectedCategory);

  const showVideos = selectedCategory === "all" || selectedCategory === "videos";

  const categories = [
    { id: "all", label: "All Media", count: officePhotos.length + officeVideos.length },
    { id: "leadership", label: "Leadership & Counsel", count: officePhotos.filter(p => p.category === "leadership").length },
    { id: "chambers", label: "Client Chambers", count: officePhotos.filter(p => p.category === "chambers").length },
    { id: "library", label: "Law Library", count: officePhotos.filter(p => p.category === "library").length },
    { id: "operations", label: "Operations Center", count: officePhotos.filter(p => p.category === "operations").length },
    { id: "videos", label: "Office Video Tours", count: officeVideos.length },
  ];

  const openPhoto = (index: number) => {
    setActivePhotoIndex(index);
  };

  const nextPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  const currentPhoto = activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] : null;

  return (
    <section id="office-gallery" aria-labelledby="office-media-title" className="relative overflow-hidden bg-navy-950 py-20 text-white md:py-28">
      {/* Background radial accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,165,88,0.12),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(201,33,39,0.1),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header Block */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-gold-300 uppercase">
              <Building className="h-3.5 w-3.5 text-gold-400" />
              Inside Our Chambers & Headquarters
            </div>
            <h2 id="office-media-title" className="mt-4 font-display text-3xl leading-tight font-bold tracking-tight text-white md:text-5xl">
              The advocates, team & law library behind Lexus.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
              Take a walk through our Delhi headquarters: private consultation chambers, comprehensive labour law digests, dedicated compliance workstations, and our legal leadership.
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 border-l border-white/20 pl-4 sm:flex-row sm:items-center md:flex-col md:items-end md:border-l-0 md:pl-0">
            <span className="rounded-md bg-white/10 px-3 py-1 text-xs font-bold tracking-widest text-gold-300 uppercase">
              Head Office · New Delhi
            </span>
            <span className="text-xs text-slate-400">GG-1-23 B, Vikas Puri · Pan-India Practice</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap gap-2 border-b border-white/10 pb-6 md:mt-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`group flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-gold-500 to-amber-600 text-navy-950 shadow-lg shadow-gold-500/20"
                  : "border border-white/15 bg-white/5 text-slate-300 hover:border-gold-400/40 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span>{cat.label}</span>
              <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-extrabold ${
                selectedCategory === cat.id ? "bg-navy-950/20 text-navy-950" : "bg-white/10 text-slate-400"
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        {selectedCategory !== "videos" && (
          <div className="mt-8 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[260px] md:grid-cols-3 lg:grid-cols-4 md:gap-5">
            {filteredPhotos.map((photo, index) => {
              // Special bento layout for key photos
              const isLead = photo.id === "managing-partner" || photo.id === "executive-chamber";
              const colSpan = isLead ? "sm:col-span-2 md:col-span-2 md:row-span-2" : "col-span-1";

              return (
                <div
                  key={photo.id}
                  onClick={() => openPhoto(index)}
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-navy-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/50 hover:shadow-2xl hover:shadow-gold-500/10 ${colSpan}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95" />

                  {/* Hover Quick Actions */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex items-center gap-1 rounded-full bg-navy-900/90 px-2.5 py-1 text-[11px] font-semibold text-gold-300 backdrop-blur-md">
                      <Eye className="h-3 w-3" /> View details
                    </span>
                  </div>

                  {/* Category Pill on top left */}
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-navy-950/80 px-2.5 py-1 text-[10px] font-bold tracking-wider text-gold-300 uppercase backdrop-blur-md border border-white/10">
                      {photo.categoryLabel}
                    </span>
                  </div>

                  {/* Caption & Metadata at bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[11px] font-semibold tracking-wider text-gold-400/90 uppercase">
                      {photo.roleOrLocation}
                    </p>
                    <h3 className="mt-1 font-display text-base font-bold text-white transition-colors group-hover:text-gold-200 sm:text-lg">
                      {photo.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-300">
                      {photo.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Video Section */}
        {showVideos && (
          <div className="mt-14 border-t border-white/10 pt-12">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold tracking-[0.16em] text-gold-400 uppercase">Video Tours</span>
                <h3 className="mt-1 font-display text-2xl font-bold text-white">Experience Our Workplace</h3>
              </div>
              <span className="hidden items-center gap-1.5 text-xs text-slate-400 sm:inline-flex">
                <Film className="h-4 w-4 text-gold-400" /> High-definition office walkthroughs
              </span>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {officeVideos.map((video) => (
                <div
                  key={video.id}
                  className="group relative overflow-hidden rounded-2xl border border-white/15 bg-navy-900/70 p-2 shadow-2xl transition hover:border-gold-400/40"
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      poster={video.poster}
                      aria-label={video.title}
                      className="h-full w-full object-cover"
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support HTML video.
                    </video>
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="flex items-center justify-between">
                      <span className="rounded-md bg-crimson-600/30 px-2 py-0.5 text-[10px] font-bold tracking-wider text-crimson-400 uppercase border border-crimson-600/40">
                        {video.categoryLabel}
                      </span>
                      <span className="text-xs font-medium text-slate-400">{video.duration}</span>
                    </div>
                    <h4 className="mt-2.5 font-display text-lg font-bold text-white">{video.title}</h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-300">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Credibility Stats Bar */}
        <div className="mt-16 grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:grid-cols-4 md:p-8">
          <div className="flex items-center gap-3.5">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold-500/20 text-gold-400">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display text-lg font-bold text-white sm:text-xl">30+ Years</div>
              <div className="text-xs text-slate-400">Continuous Legal Practice</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-crimson-600/20 text-crimson-400">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display text-lg font-bold text-white sm:text-xl">1,000+</div>
              <div className="text-xs text-slate-400">Case Law Treatises & Codes</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold-500/20 text-gold-400">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display text-lg font-bold text-white sm:text-xl">Dedicated</div>
              <div className="text-xs text-slate-400">Statutory Filing Officers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-500/20 text-blue-400">
              <Building className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display text-lg font-bold text-white sm:text-xl">Pan India</div>
              <div className="text-xs text-slate-400">HQ in Vikas Puri, Delhi</div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          onClick={() => setActivePhotoIndex(null)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-navy-950 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Bar */}
            <div className="flex items-center justify-between border-b border-white/10 bg-navy-900/80 px-6 py-4">
              <div>
                <span className="text-[11px] font-bold tracking-wider text-gold-400 uppercase">
                  {currentPhoto.categoryLabel} · {currentPhoto.roleOrLocation}
                </span>
                <h3 className="font-display text-lg font-bold text-white sm:text-xl">{currentPhoto.title}</h3>
              </div>
              <button
                onClick={() => setActivePhotoIndex(null)}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-crimson-600"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="relative flex flex-1 items-center justify-center bg-black/80 p-2 sm:p-6">
              <img
                src={currentPhoto.src}
                alt={currentPhoto.title}
                className="max-h-[62vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              />

              {/* Prev / Next buttons */}
              {filteredPhotos.length > 1 && (
                <>
                  <button
                    onClick={prevPhoto}
                    className="absolute left-4 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-navy-900/80 text-white shadow-xl backdrop-blur-md transition hover:bg-gold-500 hover:text-navy-950"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-4 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-navy-900/80 text-white shadow-xl backdrop-blur-md transition hover:bg-gold-500 hover:text-navy-950"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>

            {/* Modal Footer Description */}
            <div className="border-t border-white/10 bg-navy-900/90 px-6 py-4">
              <p className="text-sm leading-relaxed text-slate-300">
                {currentPhoto.description}
              </p>
              <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                <span>Photo {activePhotoIndex! + 1} of {filteredPhotos.length}</span>
                <span className="font-medium text-gold-300">Lexus Consultants Pvt. Ltd. · Advocates & Compliance Consultants</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
