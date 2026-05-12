export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a
          href="#top"
          className="flex items-center"
          aria-label="EDU Media Systems home"
        >
          <img
            src="/edu-logo-black.png"
            alt="EDU Media Systems"
            className="h-9 w-auto"
          />
        </a>
        <nav
          className="hidden items-center gap-8 text-sm text-ink-muted md:flex"
          aria-label="Primary"
        >
          <a href="#explore#podcart" className="hover:text-ink">
            Podcart
          </a>
          <a href="#explore#offloadr" className="hover:text-ink">
            Offloadr
          </a>
          <a href="#explore#workflow" className="hover:text-ink">
            Workflow
          </a>
          <a href="#explore#identity" className="hover:text-ink">
            Identity
          </a>
          <a href="#explore#subscription" className="hover:text-ink">
            Subscription
          </a>
          <a
            href="#contact"
            className="rounded-full bg-ink px-4 py-2 text-white hover:bg-accent"
          >
            Book a demo
          </a>
        </nav>
        <a
          href="#contact"
          className="md:hidden rounded-full bg-ink px-4 py-2 text-sm text-white hover:bg-accent"
        >
          Book a demo
        </a>
      </div>
    </header>
  );
}
