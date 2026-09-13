import Image from "next/image";
import { site } from "@/lib/site";

export function Differentiation() {
  return (
    <section id="approach" className="bg-espresso text-paper-50">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="section-label text-brass">One contractor</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            One contractor across the house and the yard
          </h2>
          <p className="mt-4 text-base leading-relaxed text-paper-50/88">
            Kitchen, bath, interior, and outdoor living do not have to be four separate jobs. Boostrom
            handles the rooms you live in and the space around them together.
          </p>
          <ul className="mt-6 space-y-3 text-[0.9375rem] leading-relaxed text-paper-50/88">
            <li>California contractor license #{site.license}.</li>
            <li>Serving Orange County since {site.since}.</li>
            <li>Thoughtful planning, clear communication, and workmanship you can see.</li>
          </ul>
        </div>
        <div className="relative aspect-[16/11] overflow-hidden rounded-sm sm:aspect-[4/5]">
            <Image
              src="/images/outdoor-patio.jpg"
              alt="Timber outdoor cover over a new paver patio"
              fill
              loading="eager"
              className="object-cover object-[center_40%] sm:object-[40%_18%]"
              sizes="(min-width: 1024px) 28rem, 100vw"
            />
          </div>
      </div>
    </section>
  );
}
