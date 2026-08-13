import { HiStar, HiSparkles, HiCheckCircle } from "react-icons/hi2";

const REVIEWS = [
  {
    id: 1,
    name: "Tanvir Ahmed",
    role: "Software Engineer",
    avatarText: "TA",
    rating: 5,
    review:
      "Keychron keyboard-টা একদম অরিজিনাল ছিল! প্যাকিং চমৎকার হয়েছে আর ডেলিভারিও ২৪ ঘণ্টার মধ্যে পেয়ে গেছি। বিল্ড কোয়ালিটি ১০০/১০০!",
  },
  {
    id: 2,
    name: "Fahim Shahriar",
    role: "Full-Stack Developer",
    avatarText: "FS",
    rating: 5,
    review:
      "TechGearHub থেকে MX Master 3S মাউস কিনেছিলাম। সাপোর্ট টিম খুব হেল্পফুল ছিল। যেকোনো ডেস্ক সেটআপের জন্য এই শপটাই সেরা!",
  },
  {
    id: 3,
    name: "Sajid Mahmud",
    role: "UI/UX Designer",
    avatarText: "SM",
    rating: 5,
    review:
      "BenQ ScreenBar মনিটর লাইট নেওয়ার পর থেকে রাতে কাজ করা অনেক কমফোর্টেবল হয়ে গেছে। অফিশিয়াল ওয়ারেন্টি কার্ডসহ পেয়েছি।",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-12 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/80 px-3.5 py-1 rounded-full mb-3">
            <HiSparkles className="w-4 h-4" />
            Wall of Trust
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Loved By{" "}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Developers & Creators
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            See what our community says about their desk setup upgrade
            experience with TechGearHub.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-indigo-100/80 dark:border-slate-800/80 p-6 sm:p-8 rounded-3xl shadow-lg shadow-indigo-950/5 dark:shadow-slate-950/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <HiStar
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Review Body */}
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                  &quot;{item.review}&quot;
                </p>
              </div>

              {/* User Profile */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="w-11 h-11 rounded-2xl bg-linear-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-indigo-500/20">
                  {item.avatarText}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-extrabold text-slate-900 dark:text-white">
                      {item.name}
                    </span>
                    <HiCheckCircle
                      className="w-4 h-4 text-indigo-600 dark:text-indigo-400"
                      title="Verified Buyer"
                    />
                  </div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
