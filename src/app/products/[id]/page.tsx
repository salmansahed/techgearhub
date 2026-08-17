"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import {
  HiStar,
  HiHeart,
  HiShoppingBag,
  HiCheck,
  HiShieldCheck,
  HiTruck,
  HiArrowPath,
  HiChevronRight,
} from "react-icons/hi2";

// Product Data Interface
export interface Specification {
  key: string;
  value: string;
}

export interface ProductColor {
  name: string;
  hex: string;
}

export interface ProductDetails {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  rating: number;
  reviewsCount: number;
  stock: number;
  tag: string;
  badgeColor: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  images: string[];
  colors: ProductColor[];
  specifications: Specification[];
  warranty: string;
  shippingInfo: string;
  returnPolicy: string;
}

// Dummy Product Data
const sampleProduct: ProductDetails = {
  id: "prod-101",
  name: "Mechanical Wireless Gaming Keyboard - RGB Backlit",
  brand: "TechPro",
  category: "Accessories",
  price: 89.99,
  originalPrice: 119.99,
  discountPercentage: 25,
  rating: 4.8,
  reviewsCount: 124,
  stock: 15,
  tag: "In Stock",
  badgeColor: "bg-emerald-500",
  shortDescription:
    "Ultra-responsive mechanical wireless keyboard with hot-swappable switches and customizable RGB lighting.",
  fullDescription:
    "Elevate your gaming and typing experience with our premium Mechanical Wireless Gaming Keyboard. Designed for durability and precision, it features tactile mechanical switches, seamless dual-mode connectivity (Bluetooth 5.0 and 2.4GHz Wireless), and a long-lasting rechargeable battery.",
  features: [
    "Hot-swappable tactile mechanical switches",
    "Dual-mode connectivity: Bluetooth 5.0 & 2.4GHz Wireless",
    "Per-key RGB lighting with 18 dynamic effects",
    "Up to 80 hours of battery life with RGB off",
    "Ergonomic design with magnetic palm rest support",
  ],
  images: ["Image 1", "Image 2", "Image 3", "Image 4"],
  colors: [
    { name: "Midnight Black", hex: "#1E293B" },
    { name: "Arctic White", hex: "#F8FAFC" },
    { name: "Cyber Purple", hex: "#7C3AED" },
  ],
  specifications: [
    { key: "Switch Type", value: "Custom Mechanical Blue/Red" },
    { key: "Connectivity", value: "Wireless 2.4G, Bluetooth 5.0, USB-C" },
    { key: "Battery Capacity", value: "4000 mAh" },
    { key: "Weight", value: "850g" },
    { key: "Compatibility", value: "Windows, macOS, Android, iOS" },
    { key: "Warranty Period", value: "1 Year Official Brand Warranty" },
  ],
  warranty: "1 Year Official Warranty",
  shippingInfo: "Free Shipping on orders over $50",
  returnPolicy: "7 Days Easy Replacement Policy",
};

export default function ProductDetailsPage() {
  const [product] = useState<ProductDetails>(sampleProduct);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<string>(
    sampleProduct.colors[0].name,
  );
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-10">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
        <Link
          href="/"
          className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          Home
        </Link>
        <HiChevronRight className="w-3.5 h-3.5" />
        <Link
          href="/products"
          className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          {product.category}
        </Link>
        <HiChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-900 dark:text-white font-bold truncate">
          {product.name}
        </span>
      </nav>

      {/* Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Product Image Gallery */}
        <div className="lg:col-span-6 space-y-4">
          {/* Main Display Image */}
          <div className="relative w-full h-80 sm:h-96 rounded-3xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 flex items-center justify-center overflow-hidden shadow-sm">
            <span
              className={`absolute top-4 left-4 text-xs uppercase tracking-wider font-extrabold text-white ${product.badgeColor} px-3 py-1 rounded-xl shadow-sm z-10`}
            >
              {product.tag}
            </span>

            <div className="w-32 h-32 rounded-3xl bg-indigo-500/10 dark:bg-indigo-400/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-black text-2xl animate-pulse">
              {product.images[selectedImage]}
            </div>
          </div>

          {/* Thumbnail Selectors */}
          <div className="grid grid-cols-4 gap-3">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`h-20 rounded-2xl border-2 flex items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                  selectedImage === index
                    ? "border-indigo-600 dark:border-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 scale-105"
                    : "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-400 hover:border-indigo-300"
                }`}
              >
                {img}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Product Info & Actions */}
        <div className="lg:col-span-6 space-y-6">
          {/* Brand & Title */}
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-200/60 dark:border-indigo-800/60">
              {product.brand}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-3">
              {product.name}
            </h1>
          </div>

          {/* Rating & Stock */}
          <div className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-1.5 text-amber-500 font-bold text-sm">
              <HiStar className="w-5 h-5 fill-amber-400" />
              <span>{product.rating}</span>
              <span className="text-slate-400 font-normal text-xs">
                ({product.reviewsCount} reviews)
              </span>
            </div>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-lg">
              {product.stock} items available
            </span>
          </div>

          {/* Price & Discount */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-black text-slate-900 dark:text-white">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg font-bold text-slate-400 line-through">
                ${product.originalPrice}
              </span>
            )}
            {product.discountPercentage && (
              <span className="text-xs font-extrabold text-rose-500 bg-rose-50 dark:bg-rose-950/60 px-2 py-1 rounded-md border border-rose-200 dark:border-rose-800">
                {product.discountPercentage}% OFF
              </span>
            )}
          </div>

          {/* Short Description */}
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Color Selection */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Select Color:{" "}
              <span className="text-slate-900 dark:text-white">
                {selectedColor}
              </span>
            </label>
            <div className="flex flex-wrap gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    selectedColor === color.name
                      ? "border-indigo-600 dark:border-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 ring-2 ring-indigo-500/20"
                      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:border-slate-300"
                  }`}
                >
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-slate-300 shadow-xs"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span>{color.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Key Features Bullet Points */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Key Features:
            </h3>
            <ul className="space-y-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <HiCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            {/* Add to Cart */}
            <Button
              variant="secondary"
              className="w-full sm:flex-1 h-12 font-bold bg-linear-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 rounded-2xl shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
            >
              <HiShoppingBag className="w-5 h-5" />
              <span>Add to Cart</span>
            </Button>

            {/* Wishlist Button */}
            <Button
              variant="tertiary"
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`h-12 px-6 rounded-2xl font-bold flex items-center justify-center gap-2 border transition-all duration-300 cursor-pointer ${
                isWishlisted
                  ? "bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200"
              }`}
            >
              <HiHeart
                className={`w-5 h-5 ${isWishlisted ? "fill-rose-500 text-rose-500" : ""}`}
              />
              <span>{isWishlisted ? "Saved" : "Wishlist"}</span>
            </Button>
          </div>

          {/* Guarantee Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                <HiShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-900 dark:text-white">
                  Warranty
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {product.warranty}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                <HiTruck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-900 dark:text-white">
                  Shipping
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Free Delivery
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                <HiArrowPath className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-900 dark:text-white">
                  Returns
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  7 Days Easy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications Grid Section */}
      <div className="mt-12 space-y-6">
        <h2 className="text-xl font-black text-slate-900 dark:text-white pb-4 border-b border-slate-200 dark:border-slate-800">
          Technical Specifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.specifications.map((spec, index) => (
            <div
              key={index}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/80 flex justify-between items-center"
            >
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                {spec.key}
              </span>
              <span className="text-sm font-bold text-slate-900 dark:text-white text-right">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
