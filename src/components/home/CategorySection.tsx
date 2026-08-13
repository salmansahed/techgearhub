import Link from "next/link";
import {
  HiArrowRight,
  HiCommandLine,
  HiDevicePhoneMobile,
  HiSparkles,
  HiTv,
  HiWrenchScrewdriver,
} from "react-icons/hi2";

// Category Data Array
const CATEGORIES = [
  {
    id: 1,
    name: "Mechanical Keyboards",
    itemCount: "24+ Items",
    href: "/products?category=keyboards",
    icon: HiCommandLine,
    bgClass:
      "from-indigo-500/10 to-purple-500/10 dark:from-indigo-950/40 dark:to-purple-950/40",
    borderClass: "border-indigo-200/60 dark:border-indigo-800/60",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
  {
    id: 2,
    name: "Desk Setup & Displays",
    itemCount: "18+ Items",
    href: "/products?category=displays",
    icon: HiTv,
    bgClass:
      "from-purple-500/10 to-indigo-500/10 dark:from-purple-950/40 dark:to-indigo-950/40",
    borderClass: "border-purple-200/60 dark:border-purple-800/60",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    id: 3,
    name: "Wireless & Mobile Gear",
    itemCount: "32+ Items",
    href: "/products?category=mobile-gear",
    icon: HiDevicePhoneMobile,
    bgClass:
      "from-indigo-500/10 to-purple-500/10 dark:from-indigo-950/40 dark:to-purple-950/40",
    borderClass: "border-indigo-200/60 dark:border-indigo-800/60",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
  {
    id: 4,
    name: "Developer Tools & Kits",
    itemCount: "15+ Items",
    href: "/products?category=dev-tools",
    icon: HiWrenchScrewdriver,
    bgClass:
      "from-purple-500/10 to-indigo-500/10 dark:from-purple-950/40 dark:to-indigo-950/40",
    borderClass: "border-purple-200/60 dark:border-purple-800/60",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
];

export default function CategorySection() {
  return (
    <section className="py-12 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-12">
          <div className="flex flex-col items-start gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/80 px-3 py-1 rounded-full">
              <HiSparkles className="w-4 h-4" />
              Explore Collections
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Browse By{" "}
              <span className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                Category
              </span>
            </h2>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 group transition-colors"
          >
            <span>View All Categories</span>
            <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                href={category.href}
                className={`group relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border ${category.borderClass} p-6 rounded-3xl shadow-lg shadow-indigo-950/5 dark:shadow-slate-950/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden`}
              >
                {/* Background Gradient Glow on Hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${category.bgClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-10 flex items-center justify-between mb-8">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center ${category.iconColor} group-hover:scale-110 transition-transform duration-300 shadow-inner`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-100/80 dark:bg-slate-800/80 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-indigo-600 transition-all duration-300">
                    <HiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                    {category.itemCount}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
