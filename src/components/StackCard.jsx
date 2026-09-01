import { useState } from 'react';
import { Copy, Check, Terminal, Cpu, Heart, ArrowLeftRight, BookOpen } from 'lucide-react';

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function Highlight({ text, term }) {
  if (!term) return <>{text}</>;
  const pattern = new RegExp(`(${escapeRegExp(term)})`, 'gi');
  const parts = String(text).split(pattern);
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === term.toLowerCase() ? (
          <mark key={index} className="rounded px-0.5 text-main" style={{ backgroundColor: 'var(--hs-bg)' }}>
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
}

export default function StackCard({
  stack,
  selectedTerminal,
  search,
  language,
  t,
  onCopy,
  onToggleFavorite,
  isFavorite,
  onOpenModal,
  onToggleCompare,
  isComparing,
}) {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const currentCommands = stack.commands[selectedTerminal] || stack.commands.cmd || [];
  const difficultyKey = `difficulty${stack.difficulty || 'Medium'}`;
  const description = language === 'en' && stack.descriptionEn ? stack.descriptionEn : stack.description;

  const handleCopy = (code, index) => {
    onCopy(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1800);
  };

  const handleCopyAll = () => {
    const all = currentCommands.map((cmd) => cmd.code).join('\n');
    onCopy(all);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 1800);
  };

  return (
    <div className="bg-card border border-line rounded-xl p-5 hover:border-line-strong hover:shadow-soft transition flex flex-col justify-between shadow-soft">
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-lg font-bold text-main font-mono">
            <Highlight text={stack.name} term={search} />
          </h3>
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={() => onToggleFavorite(stack.id)}
              className={`p-1.5 rounded-lg transition cursor-pointer ${
                isFavorite ? 'text-accent' : 'text-faint hover:text-muted'
              }`}
              title={isFavorite ? t(language, 'unfavorite') : t(language, 'favorite')}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-muted text-muted border border-line">
              {stack.category}
            </span>
          </div>
        </div>

        <p className="text-xs text-muted mb-3 line-clamp-2">
          <Highlight text={description} term={search} />
        </p>

        <div className="flex flex-wrap items-center gap-1.5 mb-3">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-faint border border-line">
            {t(language, 'difficulty')}: {t(language, difficultyKey)}
          </span>
          {(stack.tags || []).slice(0, 3).map((tag) => (
            <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-soft border border-accent text-accent">
              {tag}
            </span>
          ))}
        </div>

        {stack.prerequisites && (
          <div className="flex items-center gap-1.5 mb-4 text-[11px] text-faint">
            <Cpu className="w-3.5 h-3.5 text-muted" />
            <span>
              {t(language, 'prerequisites')}:{' '}
              <strong className="text-muted font-normal">{stack.prerequisites.join(', ')}</strong>
            </span>
          </div>
        )}

        <div className="space-y-2.5 mb-2">
          {currentCommands.map((cmd, idx) => (
            <div key={idx} className="group">
              <div className="text-[11px] text-faint mb-1 flex items-center gap-1 font-mono">
                <Terminal className="w-3 h-3 text-accent" />
                <span>{cmd.label}</span>
              </div>
              <div className="flex items-center justify-between gap-2 bg-code border border-line rounded-lg p-2.5 font-mono text-xs text-code group-hover:border-line-strong transition">
                <code className="truncate">{cmd.code}</code>
                <button
                  onClick={() => handleCopy(cmd.code, idx)}
                  className="p-1 text-faint hover:text-main transition shrink-0 cursor-pointer"
                  title={t(language, 'copyCommand')}
                >
                  {copiedIndex === idx ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-line flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleCopyAll}
            className="px-2.5 py-1.5 rounded-lg text-[11px] font-mono bg-accent-soft text-accent border border-accent hover:bg-accent hover:text-on-accent transition cursor-pointer flex items-center gap-1.5"
          >
            {copiedAll ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            {copiedAll ? t(language, 'copiedAll') : t(language, 'copyAll')}
          </button>
          <button
            onClick={() => onToggleCompare(stack.id)}
            className={`px-2.5 py-1.5 rounded-lg text-[11px] font-mono border transition cursor-pointer flex items-center gap-1.5 ${
              isComparing
                ? 'bg-accent text-on-accent border-accent'
                : 'bg-card text-muted border-line hover:text-main hover:border-line-strong'
            }`}
          >
            <ArrowLeftRight className="w-3 h-3" />
            {t(language, 'compare')}
          </button>
        </div>

        <button
          onClick={() => onOpenModal(stack)}
          className="px-2.5 py-1.5 rounded-lg text-[11px] font-mono bg-card text-muted border border-line hover:text-main hover:border-accent transition cursor-pointer flex items-center gap-1.5"
        >
          <BookOpen className="w-3 h-3" />
          {t(language, 'details')}
        </button>
      </div>
    </div>
  );
}
