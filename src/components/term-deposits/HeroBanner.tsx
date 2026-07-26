export function HeroBanner() {
  return (
    <section className="bg-[var(--surface)]">
      <div>
        <div className="relative overflow-hidden bg-[#d7d1cb] shadow-[0_24px_70px_rgba(8,15,39,0.15)]">
          {/* Background image — always fills full height of the container */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(18,16,16,0.26), rgba(18,16,16,0.08)), url('/main_page.jpeg')",
            }}
          />

          {/* Content sits on top; drives the container height on all screen sizes */}
          <div className="relative mx-auto max-w-[1360px] px-4 py-8 sm:px-6 sm:py-12 lg:py-[36px]">
            <div className="max-w-[500px] bg-black px-7 py-8 text-white shadow-[0_24px_60px_rgba(0,0,0,0.4)] sm:px-9 sm:py-9 lg:max-w-[475px]">
              <h1 className="font-[family:var(--font-display)] text-[3.25rem] leading-[0.92] tracking-[-0.04em] sm:text-[3.95rem] lg:text-[3.55rem]">
                <span>Term</span>
                <span className="ml-[0.22em]">deposits</span>
              </h1>
              <p className="mt-4 max-w-md text-lg leading-7 text-white/88 sm:text-[1.2rem]">
                Choose a rate valid until 2026.
              </p>

              <div className="mt-7">
                <p className="text-xs uppercase tracking-[0.28em] text-white/52 sm:text-sm">Promotional rates</p>
                <div className="mt-3 grid gap-5 sm:grid-cols-[1fr_auto_1fr] sm:items-end">
                  <div>
                    <div className="flex items-start gap-2">
                      <span className="text-[3.3rem] leading-none sm:text-[4rem] lg:text-[3.7rem]">7.00</span>
                      <span className="pt-2 text-lg sm:text-xl">% p.a.</span>
                    </div>
                    <p className="mt-1.5 text-sm text-white/72">for 3 months</p>
                  </div>
                  <div className="hidden h-14 w-px bg-white/24 sm:block" />
                  <div>
                    <div className="flex items-start gap-2">
                      <span className="text-[3.3rem] leading-none sm:text-[4rem] lg:text-[3.7rem]">7.20</span>
                      <span className="pt-2 text-lg sm:text-xl">% p.a.</span>
                    </div>
                    <p className="mt-1.5 text-sm text-white/72">for 12 months</p>
                  </div>
                </div>
                <p className="mt-5 text-sm text-white/70">
                  <span className="whitespace-nowrap">
                    Available on new term deposits opened before 31 December 2026.
                  </span>{" "}
                  On balances $1m and below.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
