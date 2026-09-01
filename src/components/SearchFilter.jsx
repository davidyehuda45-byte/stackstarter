import { useMemo, useState } from 'react';
import { Search, Heart, ArrowUpDown } from 'lucide-react';

export default function SearchFilter({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
  categories,
  sortBy,
  setSortBy,
  showFavoritesOnly,
  setShowFavoritesOnly,
  allStacks,
  resultCount,
  totalCount,
  language,
  t,
}) {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    return allStacks
      .filter((stack) => {
        const haystack = `${stack.name} ${stack.description} ${stack.descriptionEn || ''} ${
          stack.category || ''
        } ${(stack.tags || []).join(' ')}`.toLowerCase();
        return haystack.includes(q);
      })
      .slice(0, 6);
  }, [search, allStacks]);

  const exists = Number(totalCount) > 0;

  return (
    <div className="space-y-4 my-8">
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-faint" />
        <input
          id="search-input"
          type="text"
          placeholder={t(language, 'searchPlaceholder')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
          className="w-full pl-11 pr-4 py-3 bg-card border border-line rounded-xl text-main placeholder-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition font-mono text-sm"
        />

        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute z-30 mt-1 w-full bg-card border border-line rounded-xl shadow-soft overflow-hidden">
            <div className="px-3 pt-2 pb-1 text-[10px] uppercase text-faint font-mono">
              {t(language, 'suggestHint')}
            </div>
            {suggestions.map((stack) => (
              <button
                key={stack.id}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  setSearch(stack.name);
                  setShowSuggestions(false);
                }}
                className="w-full text-left px-3 py-2 text-xs font-mono text-muted hover:bg-app-soft hover:text-main transition cursor-pointer"
              >
                <span className="text-accent">{stack.name}</span>
                <span className="ml-2 text-faint">{stack.category}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-3 justify-between">
        {/* Category + favorites */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none min-w-0">
          <button
            onClick={() => {
              setSelectedCategory('All');
              setShowFavoritesOnly(false);
            }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition cursor-pointer ${
              !showFavoritesOnly && selectedCategory === 'All'
                ? 'bg-accent text-on-accent font-semibold'
                : 'bg-card text-muted hover:text-main border border-line'
            }`}
          >
            {t(language, 'all')}
          </button>

          {categories
            .filter((cat) => cat !== 'All')
            .map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowFavoritesOnly(false);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition cursor-pointer ${
                  !showFavoritesOnly && selectedCategory === cat
                    ? 'bg-accent text-on-accent font-semibold'
                    : 'bg-card text-muted hover:text-main border border-line'
                }`}
              >
                {cat}
              </button>
            ))}

          <button
            onClick={() => {
              setShowFavoritesOnly(!showFavoritesOnly);
              setSelectedCategory('All');
            }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 border ${
              showFavoritesOnly
                ? 'bg-accent text-on-accent font-semibold border-accent'
                : 'bg-card text-muted hover:text-main border-line'
            }`}
          >
            <Heart className={`w-3 h-3 ${showFavoritesOnly ? 'fill-current' : ''}`} />
            {t(language, 'favorites')}
          </button>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center gap-1.5 bg-card border border-line rounded-lg px-3 py-1.5">
            <ArrowUpDown className="w-3.5 h-3.5 text-faint" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-xs font-mono text-muted focus:outline-none cursor-pointer"
            >
              <option value="default">{t(language, 'sortDefault')}</option>
              <option value="name-asc">{t(language, 'sortAlphaAsc')}</option>
              <option value="name-desc">{t(language, 'sortAlphaDesc')}</option>
              <option value="popular">{t(language, 'sortPopular')}</option>
              <option value="difficulty">{t(language, 'sortDifficulty')}</option>
            </select>
          </div>
          {exists && (
            <span className="text-[11px] font-mono text-faint whitespace-nowrap">
              {resultCount} / {totalCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
