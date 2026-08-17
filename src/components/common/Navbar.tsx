"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { Button } from "@heroui/react";
import ThemeSwitch from "../theming/ThemeSwitch";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPath = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  // Hide Navbar on Dashboard Page
  if (currentPath.includes("/dashboard")) {
    return null;
  }
  return (
    <>
      {/* Click Outside Backdrop Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 dark:bg-black/60 backdrop-blur-xs"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <header className="sticky top-4 z-50 w-full px-3 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Floating Glass Navbar Container */}
          <nav className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xs border border-indigo-100/80 dark:border-slate-800/80 rounded-2xl px-3 sm:px-5 py-3 shadow-xl shadow-indigo-950/5 dark:shadow-slate-950/50 transition-all duration-300">
            {/* Ambient Top Glow Beam */}
            <div className="absolute -top-px left-1/4 right-1/4 h-px bg-linear-to-r from-transparent via-indigo-500/40 dark:via-indigo-400/50 to-transparent shadow-xs shadow-indigo-400" />

            <div className="flex items-center justify-between gap-2">
              {/* Brand Logo */}
              <Link
                href="/"
                className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
              >
                <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-linear-to-tr from-indigo-600 to-purple-600 p-0.5 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-white dark:bg-slate-950 rounded-xl flex items-center justify-center">
                    <span className="font-extrabold text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-base sm:text-lg">
                      T
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                    TechGear
                    <span className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                      Hub
                    </span>
                  </span>
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mt-0.5">
                    Store
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/80 p-1.5 rounded-xl border border-slate-200 dark:border-slate-700/60">
                {navLinks.map((link) => {
                  const isActive = currentPath === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-sm px-4 lg:px-5 py-2 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "text-indigo-600 dark:text-indigo-400 font-bold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-xs"
                          : "text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-slate-900 hover:shadow-xs"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* Desktop Action Buttons & Theme Switch */}
              <div className="hidden lg:flex items-center gap-2 lg:gap-3 shrink-0">
                <ThemeSwitch />
                <Link href="/login">
                  <Button className="text-indigo-700 dark:text-indigo-300 bg-indigo-50/70 dark:bg-indigo-950/60 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white font-bold px-5 py-4.5 rounded-xl border border-indigo-200/60 dark:border-indigo-800/60 hover:border-indigo-600 shadow-xs hover:shadow-md hover:shadow-indigo-500/20 transition-all duration-300">
                    Login
                  </Button>
                </Link>

                <Link href="/register">
                  <Button className="bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-sm px-5 py-4.5 rounded-xl shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
                    Register
                  </Button>
                </Link>
              </div>

              {/* Mobile Controls (Theme Switch + Hamburger Toggle) */}
              <div className="flex lg:hidden items-center gap-2 shrink-0">
                <ThemeSwitch />

                <Button
                  isIconOnly
                  variant="tertiary"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-slate-800 dark:text-slate-200 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 focus:outline-none transition-colors cursor-pointer"
                  aria-label="Toggle Menu"
                >
                  {isMobileMenuOpen ? (
                    <HiXMark className="w-6 h-6" />
                  ) : (
                    <HiBars3 className="w-6 h-6" />
                  )}
                </Button>
              </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {isMobileMenuOpen && (
              <div className="lg:hidden mt-4 pt-4 border-t border-indigo-100 dark:border-slate-800 flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = currentPath === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-sm px-5 py-2.5 rounded-xl transition-all duration-200 ${
                        isActive
                          ? "text-indigo-600 dark:text-indigo-400 font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs"
                          : "text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-slate-800"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                <div className="pt-2 flex flex-col gap-2">
                  <Link
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="text-center text-indigo-700 dark:text-indigo-300 bg-indigo-50/80 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/80 py-2.5 rounded-xl font-bold w-full">
                      Login
                    </Button>
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="text-center bg-linear-to-r from-indigo-600 to-purple-600 text-white font-extrabold py-2.5 rounded-xl shadow-md w-full">
                      Register
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
