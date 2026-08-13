"use client";

import { useState, FormEvent } from "react";
import { Button } from "@heroui/react";
import { HiEnvelope, HiSparkles, HiCheckCircle } from "react-icons/hi2";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-12 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card Container */}
        <div className="relative rounded-3xl bg-linear-to-b from-indigo-50/80 via-purple-50/50 to-white dark:from-slate-900/90 dark:via-indigo-950/40 dark:to-slate-900/90 backdrop-blur-xl border border-indigo-100 dark:border-slate-800 p-8 sm:p-12 lg:p-16 text-center shadow-2xl shadow-indigo-950/5 dark:shadow-slate-950/50 overflow-hidden">
          {/* Top Subtle Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-indigo-500/50 dark:via-indigo-400/50 to-transparent" />

          {/* Background Glows */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-4">
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase bg-indigo-100/70 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/80 px-3.5 py-1 rounded-full">
              <HiSparkles className="w-4 h-4" />
              Stay Updated
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Don’t Miss Our{" "}
              <span className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                Exclusive Deals
              </span>
            </h2>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Subscribe to our newsletter and get instant updates on new tech
              drops, restocks, and member-only discount coupons directly in your
              inbox.
            </p>

            {/* Newsletter Form */}
            {isSubscribed ? (
              <div className="mt-4 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-2 font-bold text-sm sm:text-base animate-fade-in">
                <HiCheckCircle className="w-6 h-6 shrink-0" />
                <span>
                  Awesome! You’re subscribed to TechGearHub newsletter.
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-4 w-full flex flex-col sm:flex-row items-center gap-3 bg-white/80 dark:bg-slate-950/80 p-2 rounded-2xl border border-indigo-100 dark:border-slate-800 shadow-lg shadow-indigo-950/5 dark:shadow-slate-950/40"
              >
                <div className="relative w-full flex items-center">
                  <HiEnvelope className="absolute left-4 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full pl-11 pr-4 py-3 bg-transparent text-slate-900 dark:text-white placeholder-slate-400 text-sm font-medium focus:outline-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full sm:w-auto bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-extrabold px-7 py-6 rounded-xl shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/40 transition-all duration-200 shrink-0 cursor-pointer"
                >
                  Subscribe
                </Button>
              </form>
            )}

            {/* Trust Note */}
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              We respect your privacy. No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
