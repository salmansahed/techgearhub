"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition, useState, useEffect, useCallback } from "react";
import { Select, Label, ListBox, SearchField } from "@heroui/react";

const CATEGORIES = [
  { key: "All", label: "All Categories" },
  { key: "Keyboards", label: "Keyboards" },
  { key: "Accessories", label: "Accessories" },
  { key: "Chargers", label: "Chargers" },
  { key: "Desk Setup", label: "Desk Setup" },
];

const SORT_OPTIONS = [
  { key: "default", label: "Sort by: All" },
  { key: "price-low", label: "Price: Low to High" },
  { key: "price-high", label: "Price: High to Low" },
  { key: "rating", label: "Top Rated" },
];

export default function ProductsFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // Retrieve current query values from URL
  const currentSearch = searchParams.get("search") || "";
  const currentCategory = searchParams.get("category") || "All";
  const currentSort = searchParams.get("sort") || "default";

  // Local state for smooth real-time typing input
  const [searchTerm, setSearchTerm] = useState(currentSearch);
  const [prevSearch, setPrevSearch] = useState(currentSearch);

  // Sync local state during render if URL changes externally (e.g. back/forward button)
  if (currentSearch !== prevSearch) {
    setPrevSearch(currentSearch);
    setSearchTerm(currentSearch);
  }

  // Memoized URL parameter updater function to prevent re-creation on every render
  const updateQueryParams = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (
        value &&
        value !== "All" &&
        value !== "default" &&
        value.trim() !== ""
      ) {
        params.set(name, value);
      } else {
        params.delete(name);
      }

      const queryString = params.toString();
      const targetUrl = queryString ? `${pathname}?${queryString}` : pathname;

      startTransition(() => {
        router.push(targetUrl);
      });
    },
    [pathname, router, searchParams],
  );

  // Debounce logic: Delay URL update until user stops typing for 300ms
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm !== currentSearch) {
        updateQueryParams("search", searchTerm);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, currentSearch, updateQueryParams]);

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-indigo-100/80 dark:border-slate-800/80 p-4 sm:p-6 rounded-3xl shadow-xl shadow-indigo-950/5 dark:shadow-slate-950/40 mb-10 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Search Input */}
        <div className="md:col-span-6 lg:col-span-6">
          <SearchField
            value={searchTerm}
            onChange={(value) => setSearchTerm(value)}
            className="w-full"
          >
            <Label className="sr-only">Search products</Label>
            <SearchField.Group className="w-full h-12 px-4 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-900 dark:text-white text-sm font-medium flex items-center gap-2 focus-within:border-indigo-500 dark:focus-within:border-indigo-400 transition-colors">
              <SearchField.SearchIcon className="w-5 h-5 text-slate-400 shrink-0" />
              <SearchField.Input
                placeholder="Search products by name..."
                className="w-full h-full bg-transparent border-none text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none text-sm font-medium"
              />
              <SearchField.ClearButton className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer p-0.5 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors" />
            </SearchField.Group>
          </SearchField>
        </div>

        {/* Category Filter */}
        <div className="md:col-span-3 lg:col-span-3">
          <Select
            aria-label="Select Category"
            placeholder="Select Category"
            selectedKey={currentCategory}
            onSelectionChange={(key) => {
              if (key !== null && key !== undefined) {
                updateQueryParams("category", String(key));
              }
            }}
            className="w-full"
          >
            <Label className="sr-only">Category</Label>

            <Select.Trigger className="w-full h-12 px-4 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-900 dark:text-white text-sm font-medium cursor-pointer flex items-center justify-between">
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>

            <Select.Popover className="bg-white dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 rounded-2xl shadow-xl p-1 z-50">
              <ListBox>
                {CATEGORIES.map((cat) => (
                  <ListBox.Item
                    key={cat.key}
                    id={cat.key}
                    textValue={cat.label}
                    className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer flex items-center justify-between"
                  >
                    {cat.label}
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                ))}
              </ListBox>
            </Select.Popover>
          </Select>
        </div>

        {/* Sorting Filter */}
        <div className="md:col-span-3 lg:col-span-3">
          <Select
            aria-label="Sort By"
            placeholder="Sort by"
            selectedKey={currentSort}
            onSelectionChange={(key) => {
              if (key !== null && key !== undefined) {
                updateQueryParams("sort", String(key));
              }
            }}
            className="w-full"
          >
            <Label className="sr-only">Sort By</Label>

            <Select.Trigger className="w-full h-12 px-4 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-900 dark:text-white text-sm font-medium cursor-pointer flex items-center justify-between">
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>

            <Select.Popover className="bg-white dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 rounded-2xl shadow-xl p-1 z-50">
              <ListBox>
                {SORT_OPTIONS.map((sort) => (
                  <ListBox.Item
                    key={sort.key}
                    id={sort.key}
                    textValue={sort.label}
                    className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer flex items-center justify-between"
                  >
                    {sort.label}
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                ))}
              </ListBox>
            </Select.Popover>
          </Select>
        </div>
      </div>

      {/* Loading State */}
      {isPending && (
        <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 text-right animate-pulse">
          Filtering gear...
        </div>
      )}
    </div>
  );
}
