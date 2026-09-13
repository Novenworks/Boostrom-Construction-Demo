import { navLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-espresso text-paper-100">
      <div className="mx-auto flex max-w-page flex-col gap-10 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md space-y-3">
          <p className="font-display text-2xl text-paper-50">{site.name}</p>
          <p className="text-[0.9375rem] leading-relaxed text-paper-200">
            Orange County remodeling since {site.since}. License #{site.license}.{" "}
            {site.bondedInsuredClaim}.
          </p>
        </div>
        <nav aria-label="Footer" className="grid gap-x-10 gap-y-2 sm:grid-cols-2">
          {navLinks.map((link) => (
            <a key={link.href} className="block min-h-11 py-1 text-[0.9375rem] hover:text-brass" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="space-y-1 text-[0.9375rem]">
          <a className="block min-h-11 py-1 hover:text-brass" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>
          <a className="block min-h-11 py-1 hover:text-brass" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a
            className="block min-h-11 py-1 hover:text-brass"
            href={site.licenseUrl}
            rel="noreferrer"
            target="_blank"
          >
            License #{site.license} on CSLB
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-[0.8125rem] leading-relaxed text-paper-200">
        {site.name} · {site.area} · License #{site.license}
      </div>
    </footer>
  );
}
