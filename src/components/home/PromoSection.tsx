"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { HiBolt, HiShoppingBag, HiSparkles } from "react-icons/hi2";

export default function PromoSection() {
  return (
    <section className="py-12 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner Container */}
        <div className="relative rounded-3xl bg-linear-to-r from-slate-900 via-indigo-950 to-purple-950 p-8 sm:p-12 lg:p-16 border border-indigo-800/40 shadow-2xl shadow-indigo-950/50 overflow-hidden">
          {/* Background Gradient Glowing Orbs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Ambient Top Glow Line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-linear-to-r from-transparent via-indigo-400/50 to-transparent" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start gap-4">
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-300 tracking-wide uppercase bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full">
                <HiBolt className="w-4 h-4 text-amber-400" />
                Limited Time Offer
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Upgrade Your Workspace <br className="hidden sm:inline" />
                <span className="bg-linear-to-r from-indigo-400 via-purple-300 to-indigo-200 bg-clip-text text-transparent">
                  Get Up To 35% OFF
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
                Level up your dev setup with premium ergonomic gear, ultra-fast
                wireless chargers, and custom mechanical keyboards before the
                mega deal ends.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
                <Link href="/products" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-extrabold px-7 py-6 rounded-2xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all cursor-pointer">
                    <HiShoppingBag className="w-5 h-5 mr-1" />
                    Claim Offer Now
                  </Button>
                </Link>

                <Link href="/products?sale=true" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 font-bold px-6 py-6 rounded-2xl cursor-pointer"
                  >
                    View Sale Items
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Card Column (Coupon Code & Countdown) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-white/10 dark:bg-slate-900/40 backdrop-blur-xl border border-white/15 p-6 sm:p-8 rounded-3xl flex flex-col gap-6 shadow-2xl">
                {/* Coupon Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                      Promo Code
                    </p>
                    <p className="text-xl font-black text-white tracking-wider font-mono mt-0.5">
                      TECHHUB2026
                    </p>
                  </div>
                  <span className="bg-amber-400 text-slate-950 font-black text-xs px-3 py-1.5 rounded-xl uppercase tracking-wider">
                    Active
                  </span>
                </div>

                {/* Countdown Timer */}
                <div>
                  <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                    Deal Expires In:
                  </p>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
                      <span className="block text-2xl font-black text-white">
                        02
                      </span>
                      <span className="text-xs uppercase font-bold text-slate-400">
                        Days
                      </span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
                      <span className="block text-2xl font-black text-white">
                        14
                      </span>
                      <span className="text-xs uppercase font-bold text-slate-400">
                        Hours
                      </span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
                      <span className="block text-2xl font-black text-white">
                        45
                      </span>
                      <span className="text-xs uppercase font-bold text-slate-400">
                        Mins
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-indigo-200 font-medium pt-1">
                  <HiSparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    Free express delivery applied automatically at checkout.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
