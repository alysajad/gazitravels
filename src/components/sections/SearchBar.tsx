"use client";

import { useRouter } from "next/navigation";
import { Calendar, ChevronDown, ArrowUpRight } from "lucide-react";

export function SearchBar() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/umrah");
  };

  return (
    <section className="relative z-20 -mt-16 md:-mt-24 px-6">
      <div className="max-w-5xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-[40px] shadow-floating p-6 md:p-8"
        >
          <h3 className="font-display font-semibold text-xl text-dark mb-6">
            Select <span className="font-bold">Your Journey</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            {/* Flight Date */}
            <div>
              <label className="block mb-2 text-xs font-semibold text-gray-500">
                Flight Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Calendar className="w-4 h-4 text-gray-400" />
                </div>
                <select className="w-full appearance-none rounded-full bg-gray-50 border border-transparent px-10 py-3.5 text-sm font-medium text-gray-600 focus:border-gray-200 focus:bg-white focus:outline-none transition-colors cursor-pointer">
                  <option>Feb 21-March-24</option>
                  <option>Apr 10-May-15</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Distance */}
            <div>
              <label className="block mb-2 text-xs font-semibold text-gray-500">
                Distance
              </label>
              <div className="relative">
                <select className="w-full appearance-none rounded-full bg-gray-50 border border-transparent px-6 py-3.5 text-sm font-medium text-gray-600 focus:border-gray-200 focus:bg-white focus:outline-none transition-colors cursor-pointer">
                  <option>1000km - 2000km</option>
                  <option>2000km - 5000km</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Package */}
            <div>
              <label className="block mb-2 text-xs font-semibold text-gray-500">
                Package
              </label>
              <div className="relative">
                <select className="w-full appearance-none rounded-full bg-gray-50 border border-transparent px-6 py-3.5 text-sm font-medium text-gray-600 focus:border-gray-200 focus:bg-white focus:outline-none transition-colors cursor-pointer">
                  <option>Premium Package</option>
                  <option>Basic Package</option>
                  <option>Growth Package</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Price */}
            <div>
              <label className="block mb-2 text-xs font-semibold text-gray-500">
                Price
              </label>
              <div className="relative">
                <select className="w-full appearance-none rounded-full bg-gray-50 border border-transparent px-6 py-3.5 text-sm font-medium text-gray-600 focus:border-gray-200 focus:bg-white focus:outline-none transition-colors cursor-pointer">
                  <option>$1200-$2400</option>
                  <option>$2400-$4000</option>
                  <option>$4000+</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-end h-[46px]">
              <button
                type="submit"
                className="group h-full inline-flex items-center justify-center gap-2 rounded-full bg-accent pl-6 pr-2 py-2 font-medium text-sm text-dark hover:bg-accent-hover transition-colors duration-fast w-full md:w-auto"
              >
                Search
                <div className="w-8 h-8 rounded-full bg-dark flex items-center justify-center text-white">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:scale-110" />
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
