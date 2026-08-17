"use client";

import Link from "next/link";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { Button, Card } from "@heroui/react";
import ThemeSwitch from "../theming/ThemeSwitch";

interface DashboardNavbarProps {
  isMobileMenuOpen?: boolean;
  onMenuClick?: () => void;
}

export default function DashboardNavbar({
  isMobileMenuOpen = false,
  onMenuClick,
}: DashboardNavbarProps) {
  return (
    <header className="sticky top-0 z-30 w-full bg-content1/80 backdrop-blur-md border-b border-default-200 px-4 sm:px-6 py-3 flex items-center justify-between">
      {/* Left: Hamburger Menu + Brand Logo */}
      <div className="flex items-center gap-3">
        {/* 🔥 Hamburger Button Moved to Left */}
        <Button
          isIconOnly
          variant="tertiary"
          onClick={onMenuClick}
          className="md:hidden text-slate-800 dark:text-slate-200 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 focus:outline-none transition-colors cursor-pointer"
          aria-label="Toggle Sidebar Menu"
        >
          {isMobileMenuOpen ? (
            <HiXMark className="w-6 h-6" />
          ) : (
            <HiBars3 className="w-6 h-6" />
          )}
        </Button>

        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
        >
          <div className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-linear-to-tr from-indigo-600 to-purple-600 p-0.5 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-white dark:bg-slate-950 rounded-xl flex items-center justify-center">
              <span className="font-extrabold text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-sm sm:text-lg">
                T
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
              TechGear
              <span className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                Hub
              </span>
            </span>
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mt-0.5 hidden sm:inline-block">
              Dashboard
            </span>
          </div>
        </Link>
      </div>

      {/* Right Controls: Theme Switch, Notifications & User Card */}
      <div className="flex items-center gap-2 sm:gap-3">
        <ThemeSwitch />

        {/* Notifications Button */}
        <Button
          variant="tertiary"
          isIconOnly
          className="relative p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 min-w-0 w-10 h-10 flex items-center justify-center text-foreground"
        >
          <span className="w-2 h-2 rounded-full bg-danger absolute top-2 right-2" />
          🔔
        </Button>

        {/* User Info Card */}
        <Card className="flex-row items-center gap-2.5 px-3 py-1.5 bg-content2/60 border border-default-200 rounded-full shadow-none">
          <div className="w-7 h-7 rounded-full bg-indigo-600/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold">
            SS
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-bold text-foreground leading-none">
              Salman Sahed
            </p>
            <p className="text-2xs text-default-400 leading-tight mt-0.5">
              Store Manager
            </p>
          </div>
        </Card>
      </div>
    </header>
  );
}
