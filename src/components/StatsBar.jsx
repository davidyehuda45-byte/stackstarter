import { Layers, Copy, Heart } from 'lucide-react';

export default function StatsBar({ totalStacks, copyCount, favoritesCount, language, t }) {
  const items = [
    { label: t(language, 'statsStacks'), value: totalStacks, Icon: Layers },
    { label: t(language, 'statsCopies'), value: copyCount, Icon: Copy },
    { label: t(language, 'statsFavorites'), value: favoritesCount, Icon: Heart },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 mb-2">
      {items.map(({ label, value, Icon }) => (
        <div
          key={label}
          className="bg-card border border-line rounded-xl px-3 py-3 flex items-center justify-between gap-2 shadow-soft"
        >
          <div className="min-w-0">
            <div className="text-xl font-bold text-main font-mono">{value}</div>
            <div className="text-[10px] uppercase font-mono text-faint truncate">{label}</div>
          </div>
          <Icon className="w-4 h-4 text-accent shrink-0" />
        </div>
      ))}
    </div>
  );
}
