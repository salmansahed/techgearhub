import Link from "next/link";
import { Button, Card } from "@heroui/react";
import { HiPlus, HiShoppingBag, HiHeart, HiSquares2X2 } from "react-icons/hi2";

// Stat Cards Array Data
const STATS_DATA = [
  {
    id: "products",
    title: "Total Products",
    count: "12",
    badge: "Active",
    subtitle: "Stored in Prisma Schema",
    icon: HiShoppingBag,
    color: {
      border:
        "border-indigo-100 dark:border-indigo-900/40 hover:border-indigo-300 dark:hover:border-indigo-600",
      shadow: "hover:shadow-indigo-500/10",
      iconBg: "bg-indigo-50 dark:bg-indigo-950/80 group-hover:bg-indigo-600",
      iconText: "text-indigo-600 dark:text-indigo-400 group-hover:text-white",
      badgeBg:
        "bg-indigo-50 dark:bg-indigo-950/80 border-indigo-200/60 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400",
      hoverText: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
      dot: "bg-indigo-500",
    },
  },
  {
    id: "wishlist",
    title: "Saved Wishlist",
    count: "02",
    badge: "Updated",
    subtitle: "Items saved by users",
    icon: HiHeart,
    color: {
      border:
        "border-purple-100 dark:border-purple-900/40 hover:border-purple-300 dark:hover:border-purple-600",
      shadow: "hover:shadow-purple-500/10",
      iconBg: "bg-purple-50 dark:bg-purple-950/80 group-hover:bg-purple-600",
      iconText: "text-purple-600 dark:text-purple-400 group-hover:text-white",
      badgeBg:
        "bg-purple-50 dark:bg-purple-950/80 border-purple-200/60 dark:border-purple-800/60 text-purple-600 dark:text-purple-400",
      hoverText: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
      dot: "bg-purple-500",
    },
  },
  {
    id: "categories",
    title: "Categories",
    count: "04",
    badge: "Validated",
    subtitle: "Services & Tech Items",
    icon: HiSquares2X2,
    color: {
      border:
        "border-indigo-100 dark:border-indigo-900/40 hover:border-indigo-300 dark:hover:border-indigo-600",
      shadow: "hover:shadow-indigo-500/10",
      iconBg: "bg-linear-to-br from-indigo-500 to-purple-600",
      iconText: "text-white",
      badgeBg:
        "bg-indigo-50 dark:bg-indigo-950/80 border-indigo-200/60 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400",
      hoverText: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
      dot: "bg-indigo-500",
    },
  },
];

export default function DashboardOverviewPage() {
  return (
    <div className="space-y-8 container mx-auto px-4 py-6">
      {/* Top Banner */}
      <div className="relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-linear-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl shadow-indigo-950/20 border border-indigo-700/50">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-indigo-200 bg-indigo-500/30 px-3 py-1 rounded-full mb-3 border border-indigo-400/30">
            Dashboard Overview
          </span>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Welcome Back, Salman! 👋
          </h1>
          <p className="text-sm text-indigo-100/80 mt-1 max-w-xl">
            Manage your products, categories, and wishlist items seamlessly from
            one place.
          </p>
        </div>

        <Link
          href="/dashboard/add-product"
          className="relative z-10 self-start sm:self-auto"
        >
          <Button
            variant="secondary"
            className="font-bold bg-white text-indigo-900 hover:bg-indigo-50 hover:scale-105 active:scale-95 shadow-lg transition-all duration-300 px-5 py-6 rounded-xl flex items-center gap-2 cursor-pointer"
          >
            <HiPlus className="w-5 h-5 text-indigo-600" />
            <span>Add New Product</span>
          </Button>
        </Link>
      </div>

      {/* Dynamic Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {STATS_DATA.map(
          ({ id, title, count, badge, subtitle, icon: Icon, color }) => (
            <Card
              key={id}
              className={`group p-6 bg-white dark:bg-slate-900/90 border rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden ${color.border} ${color.shadow}`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${color.iconBg} ${color.iconText}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <span
                  className={`text-xs font-bold border px-3 py-1 rounded-full ${color.badgeBg}`}
                >
                  {badge}
                </span>
              </div>

              <div className="mt-4">
                <span className="text-xs font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider">
                  {title}
                </span>
                <p
                  className={`text-4xl font-black text-slate-900 dark:text-white mt-1 transition-colors ${color.hoverText}`}
                >
                  {count}
                </p>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-2 flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full inline-block animate-pulse ${color.dot}`}
                  />
                  {subtitle}
                </p>
              </div>
            </Card>
          ),
        )}
      </div>
    </div>
  );
}
