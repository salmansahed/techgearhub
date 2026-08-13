import Link from "next/link";
import {
  HiArrowRight,
  HiShoppingBag,
  HiStar,
  HiSparkles,
} from "react-icons/hi2";
import { Button } from "@heroui/react";

// Mock Product Data
const PRODUCTS = [
  {
    id: "1",
    name: "Keychron K2 Pro Wireless Mechanical Keyboard",
    category: "Keyboards",
    price: "$99.00",
    originalPrice: "$120.00",
    rating: 4.9,
    reviews: 128,
    tag: "Best Seller",
    badgeColor: "bg-indigo-500",
  },
  {
    id: "2",
    name: "Logitech MX Master 3S Performance Wireless Mouse",
    category: "Accessories",
    price: "$89.00",
    originalPrice: "$100.00",
    rating: 4.8,
    reviews: 95,
    tag: "Popular",
    badgeColor: "bg-purple-500",
  },
  {
    id: "3",
    name: "Anker MagGo 3-in-1 Wireless Charging Station",
    category: "Chargers",
    price: "$59.00",
    originalPrice: "$75.00",
    rating: 4.7,
    reviews: 64,
    tag: "15% OFF",
    badgeColor: "bg-emerald-500",
  },
  {
    id: "4",
    name: "BenQ ScreenBar Halo LED Monitor Light",
    category: "Desk Setup",
    price: "$139.00",
    originalPrice: "$150.00",
    rating: 4.9,
    reviews: 210,
    tag: "Hot Deal",
    badgeColor: "bg-amber-500",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-12 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-12">
          <div className="flex flex-col items-start gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/80 px-3 py-1 rounded-full">
              <HiSparkles className="w-4 h-4" />
              Top Gear
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Featured{" "}
              <span className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                Products
              </span>
            </h2>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 group transition-colors"
          >
            <span>Explore All Products</span>
            <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-indigo-100/80 dark:border-slate-800/80 rounded-3xl p-4 shadow-lg shadow-indigo-950/5 dark:shadow-slate-950/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Product Image Placeholder Area */}
                <div className="relative w-full h-48 sm:h-52 bg-slate-100 dark:bg-slate-800/60 rounded-2xl overflow-hidden flex items-center justify-center mb-4">
                  {/* Badge */}
                  <span
                    className={`absolute top-3 left-3 text-[10px] uppercase tracking-wider font-extrabold text-white ${product.badgeColor} px-2.5 py-1 rounded-lg shadow-sm z-10`}
                  >
                    {product.tag}
                  </span>

                  {/* Dummy Image Box */}
                  <div className="w-20 h-20 rounded-2xl bg-indigo-500/10 dark:bg-indigo-400/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-extrabold text-xl group-hover:scale-110 transition-transform duration-300">
                    Tech
                  </div>
                </div>

                {/* Category & Rating */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-700 dark:text-slate-300">
                    <HiStar className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span>{product.rating}</span>
                    <span className="text-slate-400 font-normal">
                      ({product.reviews})
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white line-clamp-2 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {product.name}
                </h3>
              </div>

              {/* Price & Action */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                <div>
                  <div className="text-lg font-black text-slate-900 dark:text-white leading-none">
                    {product.price}
                  </div>
                  <div className="text-xs font-semibold text-slate-400 line-through mt-0.5">
                    {product.originalPrice}
                  </div>
                </div>

                <Button
                  className="bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 text-indigo-600 dark:text-indigo-400 font-bold p-2.5 rounded-xl border border-indigo-200/60 dark:border-indigo-800/60 transition-all duration-300 cursor-pointer"
                  aria-label="Add to cart"
                >
                  <HiShoppingBag className="w-5 h-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
