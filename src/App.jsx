import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import SearchFilter from './components/SearchFilter';
import StackCard from './components/StackCard';
import { STACKS_DATA } from './data/stacksData';

export default function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTerminal, setSelectedTerminal] = useState('cmd'); // 'cmd' | 'powershell' | 'bash'

  const categories = useMemo(() => {
    return ['All', ...new Set(STACKS_DATA.map((s) => s.category))];
  }, []);

  const filteredStacks = useMemo(() => {
    return STACKS_DATA.filter((stack) => {
      const matchesSearch =
        stack.name.toLowerCase().includes(search.toLowerCase()) ||
        stack.description.toLowerCase().includes(search.toLowerCase()) ||
        stack.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || stack.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-emerald-500 selection:text-zinc-950">
      <Header 
        selectedTerminal={selectedTerminal} 
        setSelectedTerminal={setSelectedTerminal} 
      />

      <main className="max-w-6xl mx-auto px-4 pb-16">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />

        {filteredStacks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredStacks.map((stack) => (
              <StackCard 
                key={stack.id} 
                stack={stack} 
                selectedTerminal={selectedTerminal} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border border-dashed border-zinc-800 rounded-2xl">
            <p className="text-zinc-400 font-mono text-sm">Tech stack tidak ditemukan.</p>
            <button
              onClick={() => { setSearch(''); setSelectedCategory('All'); }}
              className="mt-3 text-xs text-emerald-400 hover:underline font-mono cursor-pointer"
            >
              Reset filter
            </button>
          </div>
        )}
      </main>
    </div>
  );
}