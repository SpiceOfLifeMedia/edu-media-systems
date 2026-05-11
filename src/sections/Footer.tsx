import LogoMark from "./LogoMark";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 text-white">
          <LogoMark size={28} />
          <div className="text-sm font-semibold tracking-tight">
            EDU Media Systems
          </div>
        </div>
        <div className="text-xs text-white/50">
          © {new Date().getFullYear()} EDU Media Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
