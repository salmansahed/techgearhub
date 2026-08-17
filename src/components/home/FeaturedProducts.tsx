"use client";

import Link from "next/link";
import { HiArrowRight, HiSparkles } from "react-icons/hi2";
import ProductCard, { Product } from "../common/ProductCard";

// Mock Product Data
const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Keychron K2 Pro Wireless Mechanical Keyboard",
    category: "Keyboards",
    price: 99.0,
    rating: 4.9,
    reviews: 128,
    tag: "Best Seller",
    badgeColor: "bg-indigo-500",
  },
  {
    id: "2",
    name: "Logitech MX Master 3S Performance Wireless Mouse",
    category: "Accessories",
    price: 89.0,
    rating: 4.8,
    reviews: 95,
    tag: "Popular",
    badgeColor: "bg-purple-500",
  },
  {
    id: "3",
    name: "Anker MagGo 3-in-1 Wireless Charging Station",
    category: "Chargers",
    price: 59.0,
    rating: 4.7,
    reviews: 64,
    tag: "Popular",
    badgeColor: "bg-emerald-500",
  },
  {
    id: "4",
    name: "BenQ ScreenBar Halo LED Monitor Light",
    category: "Desk Setup",
    price: 139.0,
    rating: 4.9,
    reviews: 210,
    tag: "Hot Deal",
    badgeColor: "bg-amber-500",
  },
];

export default function FeaturedProducts() {
  const handleAddToCart = (product: Product) => {
    console.log("Added to cart:", product);
  };

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
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
