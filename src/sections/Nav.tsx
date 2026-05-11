import LogoMark from "./LogoMark";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a
          href="#top"
          className="flex items-center gap-3"
          aria-label="EDU Media Systems home"
        >
          <LogoMark size={28} />
          <span className="text-sm font-semibold tracking-tight text-ink">
            EDU Media Systems
          </span>
        </a>
        <nav
          className="hidden items-center gap-8 text-sm text-ink-muted md:flex"
          aria-label="Primary"
        >
          <a href="#ecosystem" className="hover:text-ink">
            Ecosystem
          </a>
          <a href="#podcart" className="hover:text-ink">
            Podcart
          </a>
          <a href="#offloadr" className="hover:text-ink">
            Offloadr
          </a>
          <a href="#pricing" className="hover:text-ink">
            Pricing
          </a>
          <a
            href="#contact"
            className="rounded-full bg-ink px-4 py-2 text-white hover:bg-accent"
          >
            Book a demo
          </a>
        </nav>
      </div>
    </header>
  );
}
