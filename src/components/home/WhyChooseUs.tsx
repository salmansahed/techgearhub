import {
  HiShieldCheck,
  HiTruck,
  HiArrowPath,
  HiChatBubbleLeftRight,
  HiSparkles,
} from "react-icons/hi2";

const FEATURES = [
  {
    id: 1,
    title: "Official Warranty",
    description:
      "100% authentic tech gear backed by brand official replacement warranty.",
    icon: HiShieldCheck,
  },
  {
    id: 2,
    title: "Express Delivery",
    description:
      "Fast 24-48 hours delivery guaranteed all over Bangladesh right to your doorstep.",
    icon: HiTruck,
  },
  {
    id: 3,
    title: "7 Days Easy Return",
    description:
      "Hassle-free 7-day replacement policy if you encounter any hardware defects.",
    icon: HiArrowPath,
  },
  {
    id: 4,
    title: "24/7 Tech Support",
    description:
      "Our dedicated support team is always ready to assist you with set up and queries.",
    icon: HiChatBubbleLeftRight,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/80 px-3.5 py-1 rounded-full mb-3">
            <HiSparkles className="w-4 h-4" />
            Our Commitment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Why Shop With{" "}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              TechGearHub?
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            We provide premium gear with unmatched service quality to make your
            desktop setup journey seamless.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-indigo-100/80 dark:border-slate-800/80 p-6 sm:p-8 rounded-3xl shadow-lg shadow-indigo-950/5 dark:shadow-slate-950/40 hover:-translate-y-2 transition-all duration-300 flex flex-col items-start"
              >
                {/* Glow Overlay on Hover */}
                <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-linear-to-tr group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-300 shadow-xs">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
