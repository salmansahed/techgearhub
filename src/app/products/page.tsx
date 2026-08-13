import Link from "next/link";
import { Button } from "@heroui/react";
import { HiStar, HiShoppingBag } from "react-icons/hi2";
import ProductsFilter from "../../components/products/ProductsFilter";
import { FaSearch } from "react-icons/fa";

// Mock Products Data (Database level simulation)
const MOCK_PRODUCTS = [
  {
    id: "1",
    name: "Keychron K2 Pro Wireless Mechanical Keyboard",
    category: "Keyboards",
    price: 99,
    originalPrice: 120,
    rating: 4.9,
    reviews: 128,
    tag: "Best Seller",
    badgeColor: "bg-indigo-500",
  },
  {
    id: "2",
    name: "Logitech MX Master 3S Performance Wireless Mouse",
    category: "Accessories",
    price: 89,
    originalPrice: 100,
    rating: 4.8,
    reviews: 95,
    tag: "Popular",
    badgeColor: "bg-purple-500",
  },
  {
    id: "3",
    name: "Anker MagGo 3-in-1 Wireless Charging Station",
    category: "Chargers",
    price: 59,
    originalPrice: 75,
    rating: 4.7,
    reviews: 64,
    tag: "15% OFF",
    badgeColor: "bg-emerald-500",
  },
  {
    id: "4",
    name: "BenQ ScreenBar Halo LED Monitor Light",
    category: "Desk Setup",
    price: 139,
    originalPrice: 150,
    rating: 4.9,
    reviews: 210,
    tag: "Hot Deal",
    badgeColor: "bg-amber-500",
  },
  {
    id: "5",
    name: "Glorious Model O Wireless Gaming Mouse",
    category: "Accessories",
    price: 79,
    originalPrice: 90,
    rating: 4.6,
    reviews: 82,
    tag: "Gaming",
    badgeColor: "bg-rose-500",
  },
  {
    id: "6",
    name: "NuPhy Air75 V2 Low Profile Mechanical Keyboard",
    category: "Keyboards",
    price: 119,
    originalPrice: 135,
    rating: 4.9,
    reviews: 154,
    tag: "New",
    badgeColor: "bg-sky-500",
  },
];

interface ProductsPageProps {
  searchParams: Promise<{
    search?: string;
    category?: string;
    sort?: string;
  }>;
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const {
    search = "",
    category = "All",
    sort = "default",
  } = await searchParams;

  // Server-Side Filtering Simulation (Replaces backend query in real app)
  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      category === "All" ||
      product.category.toLowerCase() === category.toLowerCase();
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sort === "price-low") return a.price - b.price;
    if (sort === "price-high") return b.price - a.price;
    if (sort === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="min-h-screen py-10 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="flex flex-col items-start gap-2 mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/80 px-3 py-1 rounded-full">
            <FaSearch className="w-4 h-4" />
            Explore Gear
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            All{" "}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Products
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Find premium mechanical keyboards, mice, desk setup accessories, and
            developer tools.
          </p>
        </div>

        {/* Client Side Filter Component */}
        <ProductsFilter />

        {/* Product Grid (Server Rendered) */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-indigo-100/80 dark:border-slate-800/80 rounded-3xl p-4 shadow-lg shadow-indigo-950/5 dark:shadow-slate-950/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative w-full h-48 sm:h-52 bg-slate-100 dark:bg-slate-800/60 rounded-2xl overflow-hidden flex items-center justify-center mb-4">
                    <span
                      className={`absolute top-3 left-3 text-[10px] uppercase tracking-wider font-extrabold text-white ${product.badgeColor} px-2.5 py-1 rounded-lg shadow-sm z-10`}
                    >
                      {product.tag}
                    </span>

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

                  {/* Title */}
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white line-clamp-2 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                </div>

                {/* Price & Cart Button */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                  <div>
                    <div className="text-lg font-black text-slate-900 dark:text-white leading-none">
                      ${product.price}.00
                    </div>
                    <div className="text-xs font-semibold text-slate-400 line-through mt-0.5">
                      ${product.originalPrice}.00
                    </div>
                  </div>

                  <Button
                    variant="tertiary"
                    className="bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 text-indigo-600 dark:text-indigo-400 font-bold p-2.5 rounded-xl border border-indigo-200/60 dark:border-indigo-800/60 transition-all duration-300 cursor-pointer"
                    aria-label="Add to cart"
                  >
                    <HiShoppingBag className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-indigo-100/80 dark:border-slate-800 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              No Products Found
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              We couldn&apos;t find any products matching your search or filter
              criteria.
            </p>
            <Link
              href="/products"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-2.5 rounded-xl transition-colors"
            >
              Reset Filters
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
