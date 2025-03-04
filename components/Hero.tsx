export default function Hero() {
  return (
    <div className="relative h-[70vh] w-full overflow-hidden flex flex-col justify-center">
      {/* Top-to-bottom overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/55 dark:from-white/15 dark:to-black/40" />
      {/* Bottom-to-top overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />

      <div className="relative container mx-auto px-8 h-full flex flex-col justify-center">
        <div className="max-w-3xl space-y-4">
          {/* Small subheading */}
          <span className="text-sm uppercase tracking-widest text-muted-foreground/80 animate-fadeIn">
            Featured Learning
          </span>
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent animate-fadeIn">
            Expand Your Knowledge with Our Courses
          </h1>
          {/* Supporting paragraph */}
          <p className="text-xl text-muted-foreground animate-fadeIn">
            Discover a world of learning with our expertly crafted courses.
            Learn from industry professionals and take your skills to the next level.
          </p>
          {/* Optional: You can add a stats row here if needed */}
        </div>
      </div>

      {/* Wave Divider at the bottom */}
      <div className="absolute bottom-0 left-0 w-full text-background">
        <svg
          className="w-full h-16 md:h-24"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path
            fillOpacity="1"
            d="M0,256L80,224C160,192,320,128,480,117.3C640,107,800,149,960,154.7C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>

      {/* Scroll-down arrow */}
      <div className="absolute bottom-4 w-full flex justify-center">
        <a
          href="#featured-courses"
          className="text-foreground/70 hover:text-foreground transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
