import { ArrowRight, Smartphone, WalletCards } from "lucide-react";

import { productCards } from "@/lib/term-deposit-data";

const icons = [Smartphone, WalletCards];

export function ProductComparison() {
  return (
    <section className="bg-[var(--surface)] py-8 sm:py-12">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
        <div className="mx-auto max-w-[740px] text-center">
          <h2 className="font-[family:var(--font-display)] text-4xl leading-tight tracking-[-0.04em] text-[var(--ink)] sm:text-6xl">
            Discover our term deposits
          </h2>
          <p className="mt-6 text-lg leading-8 text-[var(--copy)]">
            We offer two term deposits, designed for your unique savings goals.
          </p>
          <p className="mt-2 text-lg leading-8 text-[var(--copy)]">
            Compare both products, interest rates, and requirements below to find the right fit for you.
          </p>
        </div>

        <div id="products" className="scroll-mt-[100px] mt-12 grid gap-6 lg:grid-cols-2">
          {productCards.map((card, index) => {
            const Icon = icons[index];

            return (
              <article
                key={card.title}
                className="flex h-full flex-col rounded-[30px] border border-[var(--border-soft)] bg-white p-8 shadow-[0_24px_60px_rgba(8,15,39,0.08)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-muted)] text-[var(--ink)]">
                    <Icon className="h-8 w-8 stroke-[1.8]" />
                  </div>
                </div>

                <h3 className="mt-10 font-[family:var(--font-display)] text-3xl leading-tight tracking-[-0.03em] text-[var(--ink)]">
                  {card.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[var(--copy)]">{card.description}</p>

                <ul className="mt-8 space-y-5 text-[15px] leading-7 text-[var(--copy)]">
                  {card.bullets.map((bullet) => (
                    <li key={bullet.label} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--ink)]" />
                      <p>
                        <strong className="font-semibold text-[var(--ink)]">{bullet.label}</strong>{" "}
                        {bullet.text}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-10">
                  <div className="flex flex-row gap-3">
                  <a
                    href={card.primaryHref}
                    className="inline-flex min-h-14 flex-1 items-center justify-center rounded-md bg-[var(--brand)] px-5 text-base font-semibold text-white transition hover:bg-[var(--brand-dark)]"
                  >
                    {card.primaryAction}
                  </a>
                  <a
                    href={card.secondaryHref}
                    className="inline-flex min-h-14 flex-1 items-center justify-center gap-2 rounded-md border border-[var(--brand)] px-5 text-base font-semibold text-[var(--brand)] transition hover:bg-[var(--brand-soft)]"
                  >
                    {card.secondaryAction}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
