const skills = [
  "Shopify",
  "Liquid",
  "HTML",
  "JavaScript",
  "React",
  "Laravel",
  "SEO",
  "UI / UX",
] as const;

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <p className="text-sm font-medium uppercase tracking-widest text-muted">
        About
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Shopify developer &amp; e‑commerce builder
      </h1>

      <div className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-muted">
        <p>
          I&apos;m Karen, 22, and I&apos;ve been building on Shopify for three
          years. My path started when I launched my first e‑commerce brand,{" "}
          <span className="text-foreground">La Veia</span> — that project pulled
          me into every layer of the work, from storefront design and custom
          sections to backend setup, SEO, and hand‑written code when the theme
          needed more.
        </p>
        <p>
          I loved the process enough to keep going. Today I run two additional
          brands alongside La Veia, and I&apos;ve optimized and delivered work on
          more than{" "}
          <span className="text-foreground">30–40 Shopify stores</span> with clear,
          measurable improvements in speed, conversion, and how the site feels
          to use.
        </p>
        <p>
          I&apos;m a graduate of{" "}
          <span className="text-foreground">
            Computer and Communications Engineering (CCE)
          </span>
          , so design and development aren&apos;t separate worlds for me — they
          fit together. That background helps me think like both a designer and
          a developer on every project: structure, performance, and a polished
          front end.
        </p>
      </div>

      <div className="mt-14">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
          Skills &amp; tools
        </h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="border border-border px-4 py-2 text-sm text-foreground"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
