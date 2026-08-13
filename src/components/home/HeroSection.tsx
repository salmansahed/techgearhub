import Link from "next/link";
import {
  HiArrowRight,
  HiSparkles,
  HiShoppingBag,
  HiStar,
  HiTruck,
  HiShieldCheck,
  HiCpuChip,
  HiBolt,
} from "react-icons/hi2";
import { Button } from "@heroui/react";

// 1. Stats Array Data
const STATS = [
  {
    value: "10k+",
    label: "Happy Clients",
  },
  {
    value: "4.9",
    icon: (
      <HiStar className="w-5 h-5 text-amber-500 fill-amber-500 inline-block ml-1" />
    ),
    label: "2k+ Reviews",
  },
  {
    value: "24h",
    label: "Fast Delivery",
  },
];

// 2. Feature Cards Array Data
const FEATURES = [
  {
    id: 1,
    title: "Official Warranty",
    description: "100% Authentic Tech",
    icon: HiShieldCheck,
    bgClass: "bg-indigo-50 dark:bg-indigo-950/80",
    textClass: "text-indigo-600 dark:text-indigo-400",
  },
  {
    id: 2,
    title: "Express Delivery",
    description: "24-48h All Over BD",
    icon: HiTruck,
    bgClass: "bg-purple-50 dark:bg-purple-950/80",
    textClass: "text-purple-600 dark:text-purple-400",
  },
  {
    id: 3,
    title: "Pro Accessories",
    description: "Built for Creators",
    icon: HiCpuChip,
    bgClass: "bg-indigo-50 dark:bg-indigo-950/80",
    textClass: "text-indigo-600 dark:text-indigo-400",
  },
  {
    id: 4,
    title: "Best Pricing",
    description: "Unbeatable Deals",
    icon: HiBolt,
    bgClass: "bg-emerald-50 dark:bg-emerald-950/80",
    textClass: "text-emerald-600 dark:text-emerald-400",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-linear-to-tr from-indigo-500/20 to-purple-500/15 dark:from-indigo-600/25 dark:to-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-purple-500/10 dark:bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            {/* Live Status Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-indigo-200/80 dark:border-slate-800 shadow-xs shadow-indigo-950/5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600 dark:bg-indigo-400"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 tracking-wide flex items-center gap-1.5">
                <HiSparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                Next-Gen Tech Accessories 2026
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Upgrade Your Setup With{" "}
              <span className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                Premium Tech
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              Discover high-performance mechanical keyboards, ultra-fast
              wireless chargers, and minimalist desktop gear engineered for
              developers and creators.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <Link href="/products">
                <Button className="bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-extrabold text-base px-8 py-6 rounded-2xl shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
                  <HiShoppingBag className="w-5 h-5" /> Explore Products
                </Button>
              </Link>

              <Link href="/offers">
                <Button
                  variant="secondary"
                  className="text-slate-800 dark:text-slate-200 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/80 font-bold text-base px-8 py-6 rounded-2xl backdrop-blur-md transition-all duration-200"
                >
                  View Offers
                  <HiArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Trust Metrics / Social Proof (Mapped from STATS) */}
            <div className="grid grid-cols-3 gap-6 sm:gap-10 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 w-full max-w-xl mt-4">
              {STATS.map((stat, index) => (
                <div key={index}>
                  <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center">
                    {stat.value}
                    {stat.icon}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Tech Features Grid & Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md flex flex-col gap-4">
              {/* Feature Grid (Mapped from FEATURES) */}
              <div className="grid grid-cols-2 gap-3.5">
                {FEATURES.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.id}
                      className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-indigo-100/80 dark:border-slate-800 p-4 rounded-2xl shadow-lg shadow-indigo-950/5 dark:shadow-slate-950/40 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div
                        className={`w-10 h-10 rounded-xl ${feature.bgClass} ${feature.textClass} flex items-center justify-center mb-3`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Promo Banner Overlay Box */}
              <div className="relative bg-linear-to-r from-indigo-600 to-purple-600 p-5 rounded-2xl text-white shadow-xl shadow-indigo-500/20 overflow-hidden flex items-center justify-between">
                <div className="relative z-10">
                  <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 px-2.5 py-1 rounded-md">
                    Limited Period
                  </span>
                  <h3 className="text-base font-extrabold mt-2">
                    Flash Tech Deals Live!
                  </h3>
                  <p className="text-xs opacity-90">
                    Get up to 30% OFF on selected desktop gear
                  </p>
                </div>
                <div className="relative z-10 shrink-0">
                  <Link
                    href="/offers"
                    className="w-10 h-10 bg-white text-indigo-600 rounded-xl flex items-center justify-center font-bold shadow-md hover:scale-105 transition-transform"
                  >
                    <HiArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
