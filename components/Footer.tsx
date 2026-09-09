export default function Footer() {
  return (
    <footer className="bg-bark py-12 text-sand">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-start md:justify-between md:px-6">
        <div>
          <img
            src="/images/logo-white.png"
            alt="Boostrom Construction"
            className="h-10 w-auto"
          />
          <p className="mt-4 max-w-sm text-sm text-sand/80">
            Serving Orange County since 2000. License #789193. Bonded and
            insured.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-white">Contact</p>
          <a className="mt-2 block hover:text-white" href="tel:949-500-1851">
            949-500-1851
          </a>
          <a
            className="block hover:text-white"
            href="mailto:joshua@boostromconstruction.com"
          >
            joshua@boostromconstruction.com
          </a>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-white">On this page</p>
          <a className="mt-2 block hover:text-white" href="#work">
            Work
          </a>
          <a className="block hover:text-white" href="#services">
            Services
          </a>
          <a className="block hover:text-white" href="#contact">
            Estimate
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-xs text-sand/50 md:px-6">
        Speculative website redesign by Novenworks. Boostrom Construction is
        not a Novenworks client. Marks and photography remain property of their
        owners.
      </p>
    </footer>
  );
}
