"use client";

import { useState } from "react";
import { CircleCheck } from "lucide-react";

import { Header } from "@/components/term-deposits/Header";
import { Footer } from "@/components/term-deposits/Footer";

type SupportLandingPageProps = {
  title: string;
  showContactForm?: boolean;
};

export function SupportLandingPage({
  title,
  showContactForm = false,
}: SupportLandingPageProps) {
  const [supportType, setSupportType] = useState("individual");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
      <Header />

      <section className="relative overflow-hidden bg-[#d7d1cb]">
        <div
          className="w-full min-h-[300px] bg-cover bg-center bg-no-repeat sm:min-h-[360px] lg:min-h-[410px]"
          style={{
            backgroundImage: "linear-gradient(90deg, rgba(18,16,16,0.16), rgba(18,16,16,0.03)), url('/contact_us.jpeg')",
            backgroundPosition: "center center",
          }}
        >
          <div className="mx-auto flex h-full max-w-[1120px] items-start px-4 py-5 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
            <div className="mt-3 w-full max-w-[455px] bg-black px-7 py-7 text-white shadow-[0_24px_70px_rgba(0,0,0,0.26)] sm:px-8 sm:py-8">
              <h1 className="font-[family:var(--font-display)] text-[3.15rem] leading-[0.95] tracking-[-0.045em] text-white sm:text-[3.7rem]">
                {title}
              </h1>
              <p className="mt-5 max-w-[340px] text-sm leading-6 text-white/88 sm:text-[0.98rem] sm:leading-7">
                Call on{" "}
                <a
                  href="tel:+61489989446"
                  className="font-semibold text-white underline underline-offset-2 hover:text-white/80 transition"
                >
                  +61 489 989 446
                </a>
              </p>
              <p className="mt-4 max-w-[340px] text-sm leading-6 text-white/88 sm:text-[0.98rem] sm:leading-7">
                Visit our{" "}
                <a
                  href="/help-centre"
                  className="font-semibold text-white underline underline-offset-2 hover:text-white/80 transition"
                >
                  Help Centre
                </a>{" "}
                for more answers to your questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-16 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
          {showContactForm ? (
            <div className="mx-auto max-w-[760px] rounded-[30px] border border-[var(--border-soft)] bg-white px-5 py-6 text-left shadow-[0_18px_45px_rgba(8,15,39,0.05)] sm:px-8 sm:py-8">
              <label htmlFor="support-type" className="block text-sm font-medium text-[var(--copy)]">
                I need help with...
              </label>
              <select
                id="support-type"
                value={supportType}
                onChange={(event) => setSupportType(event.target.value)}
                className="mt-3 w-full rounded-[6px] border border-[var(--border-strong)] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--brand)] sm:text-base"
              >
                <option value="">Select</option>
                <option value="individual">Individual Term Deposit</option>
                <option value="company">Company Term Deposit</option>
              </select>

              {supportType ? (
                <>
                  <div className="mt-6 grid gap-5 md:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--copy)]">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        className="mt-2 w-full rounded-[6px] border border-[var(--border-strong)] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--brand)] sm:text-base"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-[var(--copy)]">
                        Contact Phone
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        className="mt-2 w-full rounded-[6px] border border-[var(--border-strong)] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--brand)] sm:text-base"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--copy)]">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        className="mt-2 w-full rounded-[6px] border border-[var(--border-strong)] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--brand)] sm:text-base"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-time" className="block text-sm font-medium text-[var(--copy)]">
                        Best date and time to contact you
                      </label>
                      <input
                        id="contact-time"
                        type="datetime-local"
                        className="mt-2 w-full rounded-[6px] border border-[var(--border-strong)] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--brand)] sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col items-center gap-5">
                    <button
                      type="button"
                      onClick={() => handleSubmit()}
                      className="inline-flex w-full max-w-[320px] items-center justify-center rounded-2xl bg-[var(--brand)] px-6 py-4 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(0,102,204,0.24)] transition hover:bg-[var(--brand-dark)] sm:text-base"
                    >
                      Submit
                    </button>

                    {submitted ? (
                      <div className="flex w-full items-start gap-3 rounded-2xl border border-[#c3dfa8] bg-[#f3faec] px-5 py-4">
                        <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#3a8a2e]" />
                        <div>
                          <p className="text-sm font-semibold text-[#2d6e23] sm:text-base">
                            Your enquiry has been submitted successfully.
                          </p>
                          <p className="mt-1 text-sm text-[#4b7a41] sm:text-[0.9rem]">
                            Thank you for reaching out. A member of our team will be in touch with you shortly.
                          </p>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </>
              ) : null}
            </div>
          ) : (
            <div className="mx-auto mt-10 min-h-[180px] max-w-[980px] rounded-[30px] border border-[var(--border-soft)] bg-white/55" />
          )}
        </div>
      </section>

      <section className="border-t border-[var(--border-soft)] bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
          <h2 className="font-[family:var(--font-display)] text-3xl leading-tight tracking-[-0.03em] text-[var(--ink)] sm:text-4xl">
            Accessibility options
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {/* Translating and Interpreting Services */}
            <div>
              <h3 className="text-lg font-semibold text-[var(--ink)]">
                Translating and Interpreting Services
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--copy)]">
                If English isn&apos;t your first language, we can arrange for an interpreter to help
                you communicate with us over the phone. We do this through TIS National, a free service provided by the Australian government.
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--copy)]">
                To use this service, simply ask for an interpreter when you call us, and we&apos;ll
                arrange an interpreter to help you with your banking needs.
              </p>
            </div>

            {/* National Relay Service */}
            <div>
              <h3 className="text-lg font-semibold text-[var(--ink)]">
                National Relay Service (NRS)
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--copy)]">
                If you&apos;re deaf, hard of hearing, or find it difficult speaking on the phone,
                you can contact us via the NRS, an Australia-wide government initiative which offers relay call options.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
