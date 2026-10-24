const photos = [
  {
    src: "/new-img-vid/WhatsApp%20Image%202026-10-23%20at%206.36.40%20PM%20(1).jpeg",
    alt: "Lexus Consultants team working at their office desks",
    label: "Our team at work",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/new-img-vid/WhatsApp%20Image%202026-10-23%20at%206.36.40%20PM%20(2).jpeg",
    alt: "Team members working together at the office",
    label: "Working together",
  },
  {
    src: "/new-img-vid/WhatsApp%20Image%202026-10-23%20at%206.36.40%20PM.jpeg",
    alt: "Client meeting room at Lexus Consultants",
    label: "A place to meet",
  },
  {
    src: "/new-img-vid/WhatsApp%20Image%202026-10-23%20at%206.36.41%20PM%20(1).jpeg",
    alt: "Labour law and compliance reference books in the office library",
    label: "Our legal library",
  },
  {
    src: "/new-img-vid/WhatsApp%20Image%202026-10-23%20at%206.36.41%20PM.jpeg",
    alt: "Office corridor and reference shelves",
    label: "Inside our office",
  },
  {
    src: "/new-img-vid/WhatsApp%20Image%202026-10-24%20at%2010.36.47%20AM.jpeg",
    alt: "A member of the Lexus Consultants team",
    label: "The people behind the work",
  },
];

const videos = [
  {
    src: "/new-img-vid/WhatsApp%20Video%202026-10-24%20at%2010.40.15%20AM.mp4",
    label: "Office video · 1",
    poster: photos[2].src,
  },
  {
    src: "/new-img-vid/WhatsApp%20Video%202026-10-24%20at%2010.40.56%20AM.mp4",
    label: "Office video · 2",
    poster: photos[0].src,
  },
];

export function OfficeMedia() {
  return (
    <section aria-labelledby="office-media-title" className="bg-navy-950 py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] text-gold-300 uppercase">A closer look</p>
            <h2 id="office-media-title" className="mt-4 max-w-2xl font-display text-3xl leading-tight font-semibold tracking-[-0.03em] md:text-4xl">
              The people and place behind the practice.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              A glimpse inside Lexus Consultants: our workplace, the team, and the resources that support our work.
            </p>
          </div>
          <span className="text-xs font-semibold tracking-[0.12em] text-slate-400 uppercase">Lexus Consultants · India</span>
        </div>

        <div className="mt-10 grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[210px] sm:grid-cols-3 md:mt-14 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {photos.map((photo) => (
            <figure key={photo.src} className={`group relative overflow-hidden bg-navy-900 ${photo.className ?? ""}`}>
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 px-4 py-4 font-display text-sm font-semibold text-white md:px-5 md:py-5">
                {photo.label}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2">
          {videos.map((video) => (
            <figure key={video.src} className="overflow-hidden border border-white/10 bg-white/[0.04]">
              <video
                controls
                playsInline
                preload="metadata"
                poster={video.poster}
                aria-label={video.label}
                className="aspect-video w-full bg-black object-cover"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
              <figcaption className="px-5 py-4 text-xs font-bold tracking-[0.16em] text-gold-300 uppercase">
                {video.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
