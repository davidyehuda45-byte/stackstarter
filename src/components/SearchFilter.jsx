import React from 'react';
import { Search } from 'lucide-react';

export default function SearchFilter({ search, setSearch, selectedCategory, setSelectedCategory, categories }) {
  return (
    <div className="space-y-4 my-8">
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
        <input
          type="text"
          placeholder="Cari framework/bahasa (cth: React, Express, Flutter, Go)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-11 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition font-mono text-sm"
        />
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
              selectedCategory === cat
                ? 'bg-emerald-500 text-zinc-950 font-semibold'
                : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}