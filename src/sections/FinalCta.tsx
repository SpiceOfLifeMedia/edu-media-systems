export default function FinalCta() {
  return (
    <section
      id="contact"
      className="bg-ink text-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
              Talk to us
            </div>
            <h2 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-[-0.025em] max-w-3xl">
              See it in your school.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white/70 leading-relaxed">
              We'll bring The Podcart to your campus, walk through Offloadr
              with your teachers, and scope a rollout that fits your program.
              No commitment.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="mailto:info@edumediasystems.com.au?subject=Demo%20request"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-accent hover:text-white"
              >
                Email us
              </a>
              <a
                href="mailto:info@edumediasystems.com.au?subject=Book%20a%20demo"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white"
              >
                Book a demo
              </a>
            </div>
          </div>

          <div className="lg:border-l lg:border-white/15 lg:pl-12">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
              Contact
            </div>
            <dl className="mt-6 space-y-6 text-base">
              <div>
                <dt className="text-sm text-white/60">Email</dt>
                <dd className="mt-1 text-lg text-white">
                  <a
                    href="mailto:info@edumediasystems.com.au"
                    className="hover:text-accent"
                  >
                    info@edumediasystems.com.au
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-white/60">Response time</dt>
                <dd className="mt-1 text-lg text-white">
                  Within one business day
                </dd>
              </div>
              <div>
                <dt className="text-sm text-white/60">Based in</dt>
                <dd className="mt-1 text-lg text-white">Australia</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
