"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@heroui/react";
import {
  HiChartPie,
  HiPlusCircle,
  HiHeart,
  HiArrowLeft,
  HiXMark,
  HiSquares2X2,
} from "react-icons/hi2";

interface SidebarProps {
  onClose?: () => void;
}

// Navigation Items Configuration
const NAV_ITEMS = [
  {
    href: "/dashboard",
    label: "Overview",
    icon: HiChartPie,
  },
  {
    href: "/dashboard/add-product",
    label: "Add Product",
    icon: HiPlusCircle,
  },
  {
    href: "/dashboard/wishlist",
    label: "My Wishlist",
    icon: HiHeart,
  },
];

export default function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname();

  const handleNavClick = () => {
    if (onClose) onClose();
  };

  return (
    <aside className="w-full md:w-64 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-indigo-100 dark:border-indigo-950/60 p-5 flex flex-col justify-between h-full shrink-0">
      <div className="space-y-6">
        {/* Sidebar Header & Brand */}
        <div className="flex items-center justify-between pb-4 border-b border-indigo-100 dark:border-indigo-950/60">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-linear-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
              <HiSquares2X2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-black text-base bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Dashboard
              </h2>
              <p className="text-xs font-bold text-slate-400">Control Panel</p>
            </div>
          </div>

          {/* Mobile Close Button */}
          <Button
            variant="ghost"
            isIconOnly
            onClick={onClose}
            className="md:hidden p-1 min-w-0 w-8 h-8 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/50"
            aria-label="Close menu"
          >
            <HiXMark className="w-5 h-5" />
          </Button>
        </div>

        {/* Navigation Menu */}
        <div>
          <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-2 block mb-3">
            Main Navigation
          </span>
          <nav className="space-y-1.5">
            {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className="block w-full"
                  onClick={handleNavClick}
                >
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className={`w-full justify-start font-bold text-sm h-11 rounded-2xl transition-all duration-300 flex items-center gap-3 ${
                      isActive
                        ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20 hover:from-indigo-700 hover:to-purple-700"
                        : "text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/80 dark:hover:bg-indigo-950/50"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        isActive
                          ? "text-white"
                          : "text-indigo-500/70 group-hover:text-indigo-600"
                      }`}
                    />
                    <span>{label}</span>
                  </Button>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Back to Home Link */}
      <div className="pt-4 border-t border-indigo-100 dark:border-indigo-950/60 mt-6">
        <Link href="/" className="w-full block" onClick={handleNavClick}>
          <Button
            variant="outline"
            className="w-full font-bold text-sm h-11 rounded-2xl border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:border-indigo-400 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <HiArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Button>
        </Link>
      </div>
    </aside>
  );
}
