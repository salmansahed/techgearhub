export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-pulse space-y-10">
      {/* 1. Page Header Skeleton */}
      <div className="space-y-3">
        <div className="h-9 w-64 bg-slate-200 dark:bg-slate-800 rounded-2xl" />
        <div className="h-5 w-96 max-w-full bg-slate-200/70 dark:bg-slate-800/70 rounded-xl" />
      </div>

      {/* 2. ProductsFilter Component Skeleton */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-indigo-100/80 dark:border-slate-800/80 p-4 sm:p-6 rounded-3xl shadow-xl shadow-indigo-950/5 dark:shadow-slate-950/40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Input Skeleton */}
          <div className="md:col-span-6 h-12 bg-slate-100 dark:bg-slate-950/60 rounded-2xl border border-slate-200/60 dark:border-slate-800/60" />

          {/* Category Dropdown Skeleton */}
          <div className="md:col-span-3 h-12 bg-slate-100 dark:bg-slate-950/60 rounded-2xl border border-slate-200/60 dark:border-slate-800/60" />

          {/* Sort Dropdown Skeleton */}
          <div className="md:col-span-3 h-12 bg-slate-100 dark:bg-slate-950/60 rounded-2xl border border-slate-200/60 dark:border-slate-800/60" />
        </div>
      </div>

      {/* 3. Product Cards Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-4 flex flex-col space-y-4 shadow-sm"
          >
            {/* Product Image Placeholder */}
            <div className="w-full h-52 bg-slate-200 dark:bg-slate-800/70 rounded-2xl" />

            {/* Content Details */}
            <div className="space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                {/* Category Badge & Rating Placeholder */}
                <div className="flex justify-between items-center">
                  <div className="h-4 w-20 bg-indigo-100 dark:bg-indigo-950/50 rounded-lg" />
                  <div className="h-4 w-12 bg-amber-100 dark:bg-amber-950/50 rounded-lg" />
                </div>

                {/* Title Placeholder */}
                <div className="h-6 w-4/5 bg-slate-200 dark:bg-slate-800 rounded-xl" />

                {/* Subtitle / Description Short Line */}
                <div className="h-4 w-full bg-slate-100 dark:bg-slate-800/50 rounded-lg" />
              </div>

              {/* Price & Action Button Placeholder */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                <div className="h-7 w-20 bg-slate-200 dark:bg-slate-800 rounded-xl" />
                <div className="h-10 w-28 bg-indigo-200 dark:bg-indigo-900/40 rounded-2xl" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
