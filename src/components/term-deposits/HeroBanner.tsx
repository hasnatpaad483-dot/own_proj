export function HeroBanner() {
  return (
    <section className="bg-[var(--surface)]">
      <div className="shadow-[0_24px_70px_rgba(8,15,39,0.15)]">

        {/* Mobile / tablet: photo on top, black bar below */}
        <div className="lg:hidden">
          <div
            className="w-full h-[220px] bg-cover bg-center sm:h-[280px]"
            style={{
              backgroundImage: "url('/main_page.jpeg')",
            }}
          />
          <div className="bg-black px-5 py-7 text-white sm:px-8 sm:py-8">
            <div className="mx-auto max-w-[600px]">
              <h1 className="font-[family:var(--font-display)] text-[2.6rem] leading-[0.92] tracking-[-0.04em] text-white sm:text-[3.2rem]">
                <span>Term</span>
                <span className="ml-[0.22em]">deposits</span>
              </h1>
              <p className="mt-4 text-sm leading-7 text-white/88 sm:text-[1.05rem]">
                Choose a rate valid until 2026.
              </p>
              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.28em] text-white/52 sm:text-sm">Promotional rates</p>
                <div className="mt-3 grid grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-[2.8rem] leading-none sm:text-[3.4rem]">7.00</span>
                      <span className="pt-2 text-base sm:text-lg">% p.a.</span>
                    </div>
                    <p className="mt-1 text-sm text-white/72">for 3 months</p>
                  </div>
                  <div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-[2.8rem] leading-none sm:text-[3.4rem]">7.20</span>
                      <span className="pt-2 text-base sm:text-lg">% p.a.</span>
                    </div>
                    <p className="mt-1 text-sm text-white/72">for 12 months</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-white/70 leading-6">
                  Available on new term deposits opened before 31 December 2026. On balances $1m and below.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: photo as background + black box overlay */}
        <div className="relative hidden lg:block">
          <div
            className="w-full lg:min-h-[410px] xl:min-h-[440px] bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(18,16,16,0.26), rgba(18,16,16,0.08)), url('/main_page.jpeg')",
            }}
          />
          <div className="absolute inset-0 flex items-start">
            <div className="mx-auto w-full max-w-[1360px] px-8 py-[36px]">
              <div className="max-w-[475px] bg-black px-9 py-9 text-white shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
                <h1 className="font-[family:var(--font-display)] text-[3.55rem] leading-[0.92] tracking-[-0.04em]">
                  <span>Term</span>
                  <span className="ml-[0.22em]">deposits</span>
                </h1>
                <p className="mt-4 max-w-md text-[1.2rem] leading-7 text-white/88">
                  Choose a rate valid until 2026.
                </p>
                <div className="mt-7">
                  <p className="text-sm uppercase tracking-[0.28em] text-white/52">Promotional rates</p>
                  <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-end gap-5">
                    <div>
                      <div className="flex items-start gap-2">
                        <span className="text-[3.7rem] leading-none">7.00</span>
                        <span className="pt-2 text-xl">% p.a.</span>
                      </div>
                      <p className="mt-1.5 text-sm text-white/72">for 3 months</p>
                    </div>
                    <div className="h-14 w-px bg-white/24" />
                    <div>
                      <div className="flex items-start gap-2">
                        <span className="text-[3.7rem] leading-none">7.20</span>
                        <span className="pt-2 text-xl">% p.a.</span>
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

      </div>
    </section>
  );
}
