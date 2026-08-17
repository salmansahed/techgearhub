import Link from "next/link";
import { HiStar, HiXMark, HiCalendar, HiEye } from "react-icons/hi2";
import { Button } from "@heroui/react";

// Product Data Interface
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  tag: string;
  badgeColor: string;
}

interface ProductCardProps {
  product: Product;
  onRemove?: (id: string) => void;
  addedDate?: string;
}

export default function ProductCard({
  product,
  onRemove,
  addedDate,
}: ProductCardProps) {
  return (
    <div className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-indigo-100/80 dark:border-slate-800/80 rounded-3xl p-4 shadow-lg shadow-indigo-950/5 dark:shadow-slate-950/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        {/* Product Image & Badge */}
        <div className="relative w-full h-48 sm:h-52 bg-slate-100 dark:bg-slate-800/60 rounded-2xl overflow-hidden flex items-center justify-center mb-4">
          <span
            className={`absolute top-3 left-3 text-xs uppercase tracking-wider font-extrabold text-white ${product.badgeColor} px-2.5 py-1 rounded-lg shadow-sm z-10`}
          >
            {product.tag}
          </span>

          {/* Cross / Remove Button (Shown only when onRemove is provided) */}
          {onRemove && (
            <Button
              variant="ghost"
              isIconOnly
              onClick={() => onRemove(product.id)}
              className="absolute top-3 right-3 min-w-0 w-8 h-8 rounded-full p-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md hover:bg-rose-500 hover:text-white text-slate-400 dark:text-slate-300 transition-all duration-300 cursor-pointer z-10 shadow-sm"
              aria-label="Remove item from wishlist"
            >
              <HiXMark className="w-4 h-4" />
            </Button>
          )}

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

        {/* Product Title */}
        <h3 className="text-base font-extrabold text-slate-900 dark:text-white line-clamp-2 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {product.name}
        </h3>

        {/* Added Date (Shown only when addedDate is provided) */}
        {addedDate && (
          <div className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 dark:text-slate-500 mb-3 bg-slate-50 dark:bg-slate-800/40 px-2.5 py-1 rounded-md border border-slate-100 dark:border-slate-800">
            <HiCalendar className="w-3.5 h-3.5 text-indigo-500" />
            <span>Added: {addedDate}</span>
          </div>
        )}
      </div>

      {/* Price & View Details Action */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2 mt-auto">
        <div>
          <div className="text-lg font-black text-slate-900 dark:text-white leading-none">
            $ {product.price}
          </div>
        </div>

        {/* View Details Button */}
        <Link href={`/products/${product.id}`}>
          <Button
            variant="tertiary"
            className="bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 text-indigo-600 dark:text-indigo-400 font-bold px-3 py-2 rounded-xl border border-indigo-200/60 dark:border-indigo-800/60 transition-all duration-300 cursor-pointer h-10 flex items-center gap-1.5 text-xs"
            aria-label="View product details"
          >
            <HiEye className="w-4 h-4" />
            <span>Details</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
