import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-espresso text-paper-100">
      <div className="mx-auto flex max-w-page flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md space-y-3">
          <p className="font-display text-2xl text-paper-50">{site.name}</p>
          <p className="text-sm leading-relaxed text-paper-200">
            Orange County remodeling since {site.since}. License #{site.license}.{" "}
            {site.bondedInsuredClaim}.
          </p>
        </div>
        <div className="space-y-2 text-sm">
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
            Verify license #{site.license} on CSLB
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-paper-200/80">
        {site.name} marks and photography remain the property of their owners. This page is a
        speculative Novenworks redesign, not a client site.
      </div>
    </footer>
  );
}
