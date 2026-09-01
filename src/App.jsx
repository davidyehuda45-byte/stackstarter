import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import SearchFilter from './components/SearchFilter';
import StackCard from './components/StackCard';
import StackModal from './components/StackModal';
import CompareModal from './components/CompareModal';
import StatsBar from './components/StatsBar';
import { STACKS_DATA } from './data/stacksData';
import { t } from './i18n';
import { ArrowLeftRight } from 'lucide-react';

const getRaw = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

const setRaw = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // ignore storage errors
  }
};

const getJson = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const setJson = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore storage errors
  }
};

function detectTerminal() {
  if (typeof navigator === 'undefined') return 'cmd';
  const ua = navigator.userAgent || '';
  return /windows/i.test(ua) ? 'cmd' : 'bash';
}

const DIFFICULTY_RANK = { Easy: 0, Medium: 1, Advanced: 2 };

export default function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTerminal, setSelectedTerminal] = useState(
    () => getRaw('stackstarter-terminal') || detectTerminal()
  );
  const [sortBy, setSortBy] = useState('default');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const [language, setLanguage] = useState(() => getRaw('stackstarter-language') || 'id');
  const [theme, setTheme] = useState(() => getRaw('stackstarter-theme') || 'dark');
  const [accent, setAccent] = useState(() => getRaw('stackstarter-accent') || 'emerald');

  const [favorites, setFavorites] = useState(() => getJson('stackstarter-favorites', []));
  const [progress, setProgress] = useState(() => getJson('stackstarter-progress', {}));
  const [copyCount, setCopyCount] = useState(() => Number(getRaw('stackstarter-copy-count')) || 0);

  const [selectedStack, setSelectedStack] = useState(null);
  const [compare, setCompare] = useState([]);
  const [showCompare, setShowCompare] = useState(false);

  // Theme / accent / language sync
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    setRaw('stackstarter-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.dataset.accent = accent;
    setRaw('stackstarter-accent', accent);
  }, [accent]);

  useEffect(() => {
    document.documentElement.lang = language;
    setRaw('stackstarter-language', language);
  }, [language]);

  useEffect(() => {
    setRaw('stackstarter-terminal', selectedTerminal);
  }, [selectedTerminal]);

  useEffect(() => {
    setJson('stackstarter-favorites', favorites);
  }, [favorites]);

  useEffect(() => {
    setJson('stackstarter-progress', progress);
  }, [progress]);

  useEffect(() => {
    setRaw('stackstarter-copy-count', String(copyCount));
  }, [copyCount]);

  // Keyboard shortcut: '/' to focus search
  useEffect(() => {
    const onKey = (e) => {
      const tag = (e.target?.tagName || '').toLowerCase();
      if (e.key === '/' && tag !== 'input' && tag !== 'textarea') {
        e.preventDefault();
        document.getElementById('search-input')?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const categories = useMemo(() => {
    return ['All', ...new Set(STACKS_DATA.map((s) => s.category))];
  }, []);

  const filteredStacks = useMemo(() => {
    let result = STACKS_DATA.filter((stack) => {
      const q = search.toLowerCase();
      const haystack = `${stack.name} ${stack.description} ${stack.descriptionEn || ''} ${stack.category} ${
        (stack.tags || []).join(' ')
      }`.toLowerCase();
      const matchesSearch = !q || haystack.includes(q);
      const matchesCategory = selectedCategory === 'All' || stack.category === selectedCategory;
      const matchesFavorite = !showFavoritesOnly || favorites.includes(stack.id);
      return matchesSearch && matchesCategory && matchesFavorite;
    });

    switch (sortBy) {
      case 'name-asc':
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result = [...result].sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'popular':
        result = [...result].sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
        break;
      case 'difficulty':
        result = [...result].sort(
          (a, b) => (DIFFICULTY_RANK[a.difficulty || 'Medium'] || 1) - (DIFFICULTY_RANK[b.difficulty || 'Medium'] || 1)
        );
        break;
      default:
        break;
    }

    return result;
  }, [search, selectedCategory, showFavoritesOnly, favorites, sortBy]);

  const compareStacks = useMemo(
    () => compare.map((id) => STACKS_DATA.find((s) => s.id === id)).filter(Boolean),
    [compare]
  );

  const toggleFavorite = (id) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const toggleStep = (id, index) => {
    setProgress((prev) => {
      const current = prev[id] || [];
      const next = current.includes(index)
        ? current.filter((x) => x !== index)
        : [...current, index];
      return { ...prev, [id]: next };
    });
  };

  const handleCopy = () => setCopyCount((count) => count + 1);

  const toggleCompare = (id) => {
    setCompare((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      return [...prev, id].slice(-3);
    });
  };

  const clearCompare = () => {
    setCompare([]);
    setShowCompare(false);
  };

  return (
    <div className="min-h-screen bg-app text-main font-sans antialiased selection:bg-accent selection:text-on-accent">
      <Header
        selectedTerminal={selectedTerminal}
        setSelectedTerminal={setSelectedTerminal}
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
        accent={accent}
        setAccent={setAccent}
        t={t}
      />

      <main className="max-w-6xl mx-auto px-4 pb-16">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
          showFavoritesOnly={showFavoritesOnly}
          setShowFavoritesOnly={setShowFavoritesOnly}
          categories={categories}
          allStacks={STACKS_DATA}
          resultCount={filteredStacks.length}
          totalCount={STACKS_DATA.length}
          language={language}
          t={t}
        />

        <StatsBar
          totalStacks={STACKS_DATA.length}
          copyCount={copyCount}
          favoritesCount={favorites.length}
          language={language}
          t={t}
        />

        {filteredStacks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {filteredStacks.map((stack) => (
              <StackCard
                key={stack.id}
                stack={stack}
                selectedTerminal={selectedTerminal}
                search={search}
                language={language}
                t={t}
                onCopy={handleCopy}
                onToggleFavorite={toggleFavorite}
                isFavorite={favorites.includes(stack.id)}
                onOpenModal={setSelectedStack}
                onToggleCompare={toggleCompare}
                isComparing={compare.includes(stack.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 mt-6 border border-dashed border-line-strong rounded-2xl bg-card">
            <p className="text-muted font-mono text-sm">{t(language, 'noResults')}</p>
            <button
              onClick={() => {
                setSearch('');
                setSelectedCategory('All');
                setShowFavoritesOnly(false);
              }}
              className="mt-3 text-xs text-accent hover:underline font-mono cursor-pointer"
            >
              {t(language, 'resetFilters')}
            </button>
          </div>
        )}

        <footer className="mt-14 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-faint">
          <span>
            {t(language, 'appTitle')} · {t(language, 'appSubtitle')}
          </span>
          <span>{t(language, 'searchShortcut')} /</span>
        </footer>
      </main>

      {/* Floating compare button */}
      {compare.length > 0 && (
        <button
          onClick={() => setShowCompare(true)}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2 px-4 py-3 rounded-xl bg-accent text-on-accent shadow-soft font-mono text-xs font-bold hover:bg-accent-hover transition cursor-pointer"
        >
          <ArrowLeftRight className="w-4 h-4" />
          {t(language, 'compare')} ({compare.length}/3)
        </button>
      )}

      {/* Detail modal */}
      {selectedStack && (
        <StackModal
          stack={selectedStack}
          selectedTerminal={selectedTerminal}
          language={language}
          t={t}
          isFavorite={favorites.includes(selectedStack.id)}
          onToggleFavorite={toggleFavorite}
          doneSteps={progress[selectedStack.id] || []}
          onToggleStep={toggleStep}
          onCopy={handleCopy}
          onClose={() => setSelectedStack(null)}
          onAddCompare={toggleCompare}
        />
      )}

      {/* Compare modal */}
      {showCompare && compareStacks.length > 0 && (
        <CompareModal
          stacks={compareStacks}
          selectedTerminal={selectedTerminal}
          language={language}
          t={t}
          onRemove={toggleCompare}
          onClear={clearCompare}
          onClose={() => setShowCompare(false)}
        />
      )}
    </div>
  );
}
