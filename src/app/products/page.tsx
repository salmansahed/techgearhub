import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import ProductsFilter from "../../components/products/ProductsFilter";
import ProductCard, { Product } from "../../components/common/ProductCard";

// Mock Products Data
const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Keychron K2 Pro Wireless Mechanical Keyboard",
    category: "Keyboards",
    price: 99,
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
    rating: 4.7,
    reviews: 64,
    tag: "Popular",
    badgeColor: "bg-emerald-500",
  },
  {
    id: "4",
    name: "BenQ ScreenBar Halo LED Monitor Light",
    category: "Desk Setup",
    price: 139,
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

  // Server-Side Filtering & Sorting
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

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
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
