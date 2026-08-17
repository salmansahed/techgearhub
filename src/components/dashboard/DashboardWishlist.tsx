"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, Button, Select, ListBox } from "@heroui/react";
import { HiHeart, HiTrash, HiShoppingBag } from "react-icons/hi2";
import ProductCard, { Product } from "../common/ProductCard";

// Wishlist Item Interface with addedDate extension
export interface WishlistItem extends Product {
  addedDate: string;
}

// Sample Data matching exact Product interface
const initialWishlist: WishlistItem[] = [
  {
    id: "w-1",
    name: "Mechanical Wireless Gaming Keyboard - RGB Backlit",
    category: "Accessories",
    price: 89.99,
    rating: 4.8,
    reviews: 124,
    tag: "In Stock",
    badgeColor: "bg-emerald-500",
    addedDate: "2026-08-10",
  },
  {
    id: "w-2",
    name: "Ergonomic Ultra-Light Wireless Mouse",
    category: "Accessories",
    price: 49.99,
    rating: 4.6,
    reviews: 89,
    tag: "In Stock",
    badgeColor: "bg-emerald-500",
    addedDate: "2026-08-12",
  },
  {
    id: "w-3",
    name: "4K UHD Curved Monitor 27 inch - 144Hz",
    category: "Monitors",
    price: 329.0,
    rating: 4.9,
    reviews: 210,
    tag: "Out of Stock",
    badgeColor: "bg-rose-500",
    addedDate: "2026-08-01",
  },
  {
    id: "w-4",
    name: "Noise-Cancelling Over-Ear Headphones",
    category: "Audio",
    price: 159.5,
    rating: 4.7,
    reviews: 65,
    tag: "Featured",
    badgeColor: "bg-purple-500",
    addedDate: "2026-08-05",
  },
];

export default function DashboardWishlist() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>(initialWishlist);
  const [sortBy, setSortBy] = useState<string>("latest");

  // Single Item Remove Handler
  const handleRemoveItem = (id: string) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear All Wishlist Items
  const handleClearAll = () => {
    if (confirm("Are you sure you want to clear your entire wishlist?")) {
      setWishlist([]);
    }
  };

  // Sorted Wishlist Items
  const sortedWishlist = [...wishlist].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime();
  });

  return (
    <div className="w-full space-y-8 container mx-auto px-4 py-6">
      {/* Page Header Banner */}
      <div className="relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-white dark:bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-purple-100 dark:border-purple-900/40 shadow-sm">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/80 px-3 py-1 rounded-full mb-3 border border-purple-200/60 dark:border-purple-800/60">
            <HiHeart className="w-4 h-4 text-purple-500" />
            <span>Saved Favorites</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            My Wishlist
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            You have{" "}
            <span className="font-extrabold text-indigo-600 dark:text-indigo-400">
              {wishlist.length}
            </span>{" "}
            items saved in your wishlist.
          </p>
        </div>

        {wishlist.length > 0 && (
          <div className="flex items-center gap-3 self-start sm:self-auto relative z-10">
            {/* Sort Select Component */}
            <div className="w-48">
              <Select
                id="sort-wishlist"
                selectedKey={sortBy}
                onSelectionChange={(key) => {
                  if (key) setSortBy(String(key));
                }}
              >
                <Select.Trigger className="h-11 rounded-xl border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-900 dark:text-indigo-200 font-bold">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="latest">Recently Added</ListBox.Item>
                    <ListBox.Item id="price-low">
                      Price: Low to High
                    </ListBox.Item>
                    <ListBox.Item id="price-high">
                      Price: High to Low
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Clear All Button */}
            <Button
              variant="danger-soft"
              onClick={handleClearAll}
              className="font-bold h-11 px-4 rounded-xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <HiTrash className="w-4 h-4" />
              <span>Clear All</span>
            </Button>
          </div>
        )}
      </div>

      {/* Empty State */}
      {wishlist.length === 0 ? (
        <Card className="p-12 text-center bg-white dark:bg-slate-900/90 border border-purple-100 dark:border-purple-900/40 rounded-3xl flex flex-col items-center justify-center shadow-sm">
          <div className="w-20 h-20 rounded-3xl bg-linear-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white text-3xl mb-4 shadow-lg shadow-purple-500/20 animate-bounce">
            <HiHeart className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-black text-slate-900 dark:text-white">
            Your wishlist is empty
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mt-2 mb-6">
            Explore our store and save products you love to your wishlist to buy
            them later!
          </p>
          <Link href="/">
            <Button
              variant="secondary"
              className="font-bold bg-linear-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-md shadow-indigo-500/20 px-6 py-5 rounded-xl flex items-center gap-2 cursor-pointer"
            >
              <HiShoppingBag className="w-5 h-5" />
              <span>Browse Products</span>
            </Button>
          </Link>
        </Card>
      ) : (
        /* Wishlist Product Grid Using Reusable ProductCard */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedWishlist.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addedDate={product.addedDate}
              onRemove={handleRemoveItem}
            />
          ))}
        </div>
      )}
    </div>
  );
}
