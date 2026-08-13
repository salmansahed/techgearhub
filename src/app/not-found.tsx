import Link from "next/link";
import { HiOutlineArrowLeft, HiOutlineShoppingBag } from "react-icons/hi2";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-87.5 h-87.5 bg-violet-500/10 dark:bg-violet-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-2xl w-full text-center space-y-8 relative z-10">
        {/* Visual Graphic Element */}
        <div className="relative inline-flex items-center justify-center">
          {/* Subtle Outer Ring */}
          <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-70" />

          {/* Main Display Box */}
          <div className="relative bg-white/70 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl px-8 py-6 rounded-3xl shadow-2xl shadow-indigo-950/5 dark:shadow-slate-950/50">
            <span className="text-8xl sm:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-indigo-500 to-violet-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 select-none">
              404
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-3 max-w-lg mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Signal Lost
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Gear Not Found
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            The page or tech accessory you are looking for has been moved,
            unplugged, or doesn&apos;t exist in our catalog.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-600/25 active:scale-95 text-center"
          >
            <HiOutlineArrowLeft className="w-4 h-4 shrink-0" />
            <span>Back to Store</span>
          </Link>

          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 font-semibold text-sm transition-all duration-200 active:scale-95 text-center"
          >
            <HiOutlineShoppingBag className="w-4 h-4 shrink-0" />
            <span>Browse Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
