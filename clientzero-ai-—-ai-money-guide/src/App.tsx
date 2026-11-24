import React, {useState} from 'react';
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Cpu,
  GraduationCap,
  HelpCircle,
  Infinity as InfinityIcon,
  Layers,
  Laptop,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Zap,
} from 'lucide-react';

const CHECKOUT_URL =
  'https://whop.com/firstmove-ai/firstmove-ai-the-ultimate-ai-business-guide';

interface InsideCard {
  icon: React.ComponentType<{className?: string; 'aria-hidden'?: boolean}>;
  title: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

const INSIDE_CARDS: InsideCard[] = [
  {
    icon: Laptop,
    title: '5 Sellable AI Services',
    description:
      'Real, everyday problems businesses pay to solve right now—from inbox automation to content workflows.',
  },
  {
    icon: TrendingUp,
    title: 'Step-by-Step Playbooks',
    description:
      'Clear walkthroughs from choosing one skill to delivering finished client work without coding.',
  },
  {
    icon: Layers,
    title: 'Copy-Paste Prompts & Scripts',
    description:
      'Ready-to-use prompt templates and simple outreach messages to help you land your first client.',
  },
  {
    icon: Rocket,
    title: 'Real Pricing & Examples',
    description:
      'Practical scope breakdowns showing what to charge and real use cases you can replicate.',
  },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Is making money with AI hard?',
    answer:
      'No. It feels complicated only when you try to learn everything at once. The guide breaks one practical path down into simple, step-by-step actions anyone can follow.',
  },
  {
    question: "Aren't all these courses a scam?",
    answer:
      "Most hype courses promise overnight riches. This isn't a get-rich-quick scheme—it's a straightforward €11 manual built around real methods, tools, and services businesses actually pay for.",
  },
  {
    question: 'Do I need experience or special skills?',
    answer:
      "No. You'll learn everything from the basics. Every workflow uses accessible tools and copy-paste prompts designed for beginners with zero prior technical experience.",
  },
];

function BookMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[270px] sm:max-w-[300px] select-none">
      {/* Radiant sky-blue & cobalt glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-blue-600/35 via-sky-400/25 to-transparent blur-2xl"
      />

      {/* 3D Book Mockup */}
      <div className="relative flex items-stretch rounded-r-xl rounded-l-sm shadow-[0_28px_60px_-12px_rgba(0,0,0,0.65)] transition-transform duration-300 hover:-translate-y-1">
        {/* Book Spine */}
        <div
          aria-hidden="true"
          className="w-3.5 shrink-0 rounded-l-sm bg-gradient-to-r from-[#030712] via-[#172554] to-[#081226] border-r border-sky-400/20"
        />

        {/* Front Cover */}
        <div className="relative flex-1 aspect-[3/4] overflow-hidden rounded-r-xl bg-gradient-to-br from-[#0B162C] via-[#060D1C] to-[#040914] p-7 sm:p-8 flex flex-col justify-between text-white border border-sky-400/20">
          {/* Glowing blue wave SVG matching reference aesthetic */}
          <svg
            aria-hidden="true"
            viewBox="0 0 300 400"
            className="pointer-events-none absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="ebookWaveFill" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.65" />
                <stop offset="55%" stopColor="#0EA5E9" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#060D1C" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="ebookWaveStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              d="M0 305 C 90 250, 195 330, 300 245 L 300 400 L 0 400 Z"
              fill="url(#ebookWaveFill)"
            />
            <path
              d="M0 305 C 90 250, 195 330, 300 245"
              fill="none"
              stroke="url(#ebookWaveStroke)"
              strokeWidth="2.2"
            />
            <path
              d="M0 338 C 110 290, 210 355, 300 290"
              fill="none"
              stroke="#38BDF8"
              strokeOpacity="0.3"
              strokeWidth="1.2"
            />
          </svg>

          {/* Top Cover Brand */}
          <div className="relative z-10 flex items-center justify-between text-xs font-semibold tracking-tight text-slate-200">
            <span>
              FIRSTMOVE <span className="text-sky-400">AI</span>
            </span>
          </div>

          {/* Center Title */}
          <div className="relative z-10 my-auto py-3">
            <h2 className="font-display text-3xl sm:text-[34px] font-extrabold leading-[1.06] tracking-tight text-white">
              AI
              <br />
              Money
              <br />
              <span className="text-sky-400">Guide</span>
            </h2>
            <p className="mt-3.5 max-w-[175px] text-xs leading-relaxed text-slate-300">
              A step-by-step guide to making money with AI.
            </p>
          </div>

          {/* Bottom AI Chip Emblem */}
          <div className="relative z-10 flex items-end justify-between pt-4">
            <span className="text-[11px] font-medium text-sky-300/90">Digital E-Book</span>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-sky-400/40 bg-sky-500/10 text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
              <Cpu aria-hidden="true" className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Crisp right-edge page stack */}
        <div
          aria-hidden="true"
          className="hidden sm:block w-1.5 my-1.5 rounded-r-xs bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 border-y border-r border-slate-400/40"
        />
      </div>
    </div>
  );
}

export default function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#F4F8FF] text-[#0B0F19] flex flex-col">
      {/* Top Navigation Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#071124]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-3.5 sm:px-10">
          <a
            href="#top"
            className="inline-flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0"
          >
            <BookOpen aria-hidden="true" className="h-5 w-5 text-sky-400" />
            <span>
              FIRSTMOVE <span className="text-sky-400">AI</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a
              href="#whats-inside"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              What&apos;s Inside
            </a>
            <a
              href="#faq"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              FAQ
            </a>
          </nav>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 whitespace-nowrap shrink-0"
          >
            <span>Get the E-book</span>
            <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* 1. Hero Section — Dark Midnight Blue + Glowing Sky-Blue Waves */}
        <section className="relative overflow-hidden bg-[#060E1F] text-white">
          {/* Atmospheric radial & wave background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.28),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.22),transparent_55%)]"
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 1440 320"
            className="pointer-events-none absolute bottom-0 left-0 w-full opacity-35"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="heroWave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M0,224 C320,120 640,300 960,210 C1180,150 1320,175 1440,200 L1440,320 L0,320 Z"
              fill="url(#heroWave)"
            />
          </svg>

          <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24 lg:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
              {/* Left Copy */}
              <div className="lg:col-span-7">
                <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[58px] lg:leading-[1.06] text-balance">
                  Turn AI Into{' '}
                  <span className="text-sky-400 underline decoration-blue-500/70 decoration-4 underline-offset-8">
                    Real Income
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                  A practical e-book that gives you the skills to start making money with AI — even
                  if you&apos;re just starting out.
                </p>

                {/* Primary Hero CTA */}
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <a
                    href={CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-[0_10px_30px_-5px_rgba(37,99,235,0.65)] transition-all duration-150 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 whitespace-nowrap shrink-0"
                  >
                    <span>Get the E-book Now — €11</span>
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                </div>

                {/* 3 Clean Trust Highlights (matching reference strip) */}
                <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-7 max-w-md">
                  <div className="flex flex-col items-start gap-2">
                    <GraduationCap aria-hidden="true" className="h-5 w-5 text-sky-400" />
                    <span className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
                      Beginner Friendly
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-2 border-l border-white/10 pl-4">
                    <Zap aria-hidden="true" className="h-5 w-5 text-sky-400" />
                    <span className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
                      Practical Methods
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-2 border-l border-white/10 pl-4">
                    <Layers aria-hidden="true" className="h-5 w-5 text-sky-400" />
                    <span className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
                      Real Use Cases
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Cover Mockup */}
              <div className="lg:col-span-5">
                <BookMockup />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Proof — Skipped (no metrics or testimonials provided) */}

        {/* 3. What's Inside? — Clean White/Ice-Blue 4-Card Section */}
        <section id="whats-inside" aria-labelledby="whats-inside-heading" className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <h2
                id="whats-inside-heading"
                className="font-display text-3xl font-extrabold tracking-tight text-[#0B0F19] sm:text-4xl text-balance"
              >
                What&apos;s <span className="text-blue-600">Inside?</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                A clear, step-by-step plan to turn everyday AI tools into real income.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {INSIDE_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-slate-200/90 bg-white p-6 text-center shadow-[0_8px_24px_-12px_rgba(15,23,42,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-300"
                  >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-blue-600">
                      <Icon aria-hidden={true} className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-base font-bold text-[#0B0F19]">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. FAQ — Clean Accordion Cards */}
        <section id="faq" aria-labelledby="faq-heading" className="pb-20 sm:pb-24">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <div className="text-center">
              <h2
                id="faq-heading"
                className="font-display text-3xl font-extrabold tracking-tight text-[#0B0F19] sm:text-4xl"
              >
                FAQ
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600">
                Answers to the most common questions before you buy.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={item.question}
                    className="rounded-2xl border border-slate-200/90 bg-white shadow-[0_6px_20px_-10px_rgba(15,23,42,0.06)] transition-colors hover:border-sky-200"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="flex w-full min-h-[60px] items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-50 text-blue-600">
                          <HelpCircle aria-hidden="true" className="h-4 w-4" />
                        </span>
                        <span className="font-display text-base font-bold text-[#0B0F19] sm:text-lg">
                          {item.question}
                        </span>
                      </div>
                      <ChevronDown
                        aria-hidden="true"
                        className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-blue-600' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pl-[72px] pr-10">
                        <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Buy CTA Banner — One Price, One CTA */}
        <section id="buy" aria-labelledby="buy-heading" className="pb-20 sm:pb-24">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#071124] via-[#0A1935] to-[#060E1F] px-7 py-12 text-center text-white shadow-[0_24px_50px_-15px_rgba(7,17,36,0.45)] sm:px-14 sm:py-14 border border-sky-400/20">
              {/* Subtle glowing wave inside CTA banner */}
              <svg
                aria-hidden="true"
                viewBox="0 0 800 220"
                className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 165 C 220 95, 520 215, 800 115 L 800 220 L 0 220 Z"
                  fill="#1D4ED8"
                  fillOpacity="0.22"
                />
                <path
                  d="M0 165 C 220 95, 520 215, 800 115"
                  fill="none"
                  stroke="#38BDF8"
                  strokeOpacity="0.45"
                  strokeWidth="1.5"
                />
              </svg>

              <div className="relative z-10 flex flex-col items-center">
                <h2 id="buy-heading" className="sr-only">
                  Purchase FIRSTMOVE AI Money Guide
                </h2>

                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-9 py-4 text-base sm:text-lg font-bold text-white shadow-[0_12px_32px_-4px_rgba(37,99,235,0.75)] transition-all duration-150 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 whitespace-nowrap shrink-0"
                >
                  <span>Get the E-book Now — €11</span>
                  <ArrowRight aria-hidden="true" className="h-5 w-5" />
                </a>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300">
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck aria-hidden="true" className="h-4 w-4 text-sky-400" />
                    <span>Secure Purchase</span>
                  </span>
                  <span aria-hidden="true" className="hidden sm:inline text-white/20">
                    |
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <InfinityIcon aria-hidden="true" className="h-4 w-4 text-sky-400" />
                    <span>Lifetime Access</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Clean Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-slate-500 sm:flex-row sm:px-10">
          <div className="flex items-center gap-2 font-display font-bold text-sm text-[#0B0F19]">
            <BookOpen aria-hidden="true" className="h-4 w-4 text-blue-600" />
            <span>
              FIRSTMOVE <span className="text-blue-600">AI</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#whats-inside" className="hover:text-[#0B0F19] transition-colors">
              What&apos;s Inside
            </a>
            <a href="#faq" className="hover:text-[#0B0F19] transition-colors">
              FAQ
            </a>
            <span>© {new Date().getFullYear()} FIRSTMOVE AI</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
