const testimonials = [
  {
    quote:
      "I've been working with Karen for over two years. She's fixed and improved countless issues on my store and has stepped in to help with mutual clients as well — always reliable, always sharp.",
    name: "Ali Hijazi",
  },
  {
    quote:
      "Karen has built two websites for my brands and she never disappoints. The site was never something I had to worry about — she handles everything from step zero to one hundred.",
    name: "Khalil Saleh",
  },
] as const;

export default function Testimonials() {
  return (
    <div className="mt-16">
      <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
        What clients say
      </h2>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2">
        {testimonials.map(({ quote, name }) => (
          <li
            key={name}
            className="border border-border p-6 sm:p-8"
          >
            <p className="text-sm leading-relaxed text-muted">&ldquo;{quote}&rdquo;</p>
            <p className="mt-5 text-sm font-semibold text-foreground">{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
