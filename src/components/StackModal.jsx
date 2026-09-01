import { useEffect, useState } from 'react';
import { X, Copy, Check, Heart, Terminal, Cpu, ExternalLink, GitBranch, BookOpen, CheckCircle2, Circle } from 'lucide-react';

export default function StackModal({
  stack,
  selectedTerminal,
  language,
  t,
  isFavorite,
  onToggleFavorite,
  doneSteps,
  onToggleStep,
  onCopy,
  onClose,
  onAddCompare,
}) {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const commands = stack.commands[selectedTerminal] || stack.commands.cmd || [];
  const doneSet = new Set(doneSteps || []);
  const progressPct = commands.length ? Math.round((doneSet.size / commands.length) * 100) : 0;
  const difficultyKey = `difficulty${stack.difficulty || 'Medium'}`;
  const description = language === 'en' && stack.descriptionEn ? stack.descriptionEn : stack.description;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const handleCopy = (code, index) => {
    onCopy(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1800);
  };

  const handleCopyAll = () => {
    const all = commands.map((cmd) => cmd.code).join('\n');
    onCopy(all);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 1800);
  };

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/60 p-4 flex items-start justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-card border border-line rounded-2xl shadow-soft my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-line flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <h2 className="text-2xl font-bold text-main font-mono">{stack.name}</h2>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-muted text-muted border border-line">
                {stack.category}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-soft text-accent border border-accent">
                {t(language, 'difficulty')}: {t(language, difficultyKey)}
              </span>
            </div>
            <p className="text-xs text-muted">{description}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {(stack.tags || []).map((tag) => (
                <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-faint border border-line">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => onToggleFavorite(stack.id)}
              className={`p-2 rounded-lg border border-line transition cursor-pointer ${
                isFavorite ? 'text-accent bg-accent-soft border-accent' : 'text-faint hover:text-muted'
              }`}
              title={isFavorite ? t(language, 'unfavorite') : t(language, 'favorite')}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
            {stack.docs && (
              <a
                href={stack.docs}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-line text-muted hover:text-main hover:border-accent transition"
                title={t(language, 'docs')}
              >
                <BookOpen className="w-4 h-4" />
              </a>
            )}
            {stack.repo && (
              <a
                href={stack.repo}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-line text-muted hover:text-main hover:border-accent transition"
                title={t(language, 'repo')}
              >
                <GitBranch className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg border border-line text-faint hover:text-main hover:border-line-strong transition cursor-pointer"
              title={t(language, 'close')}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-5 space-y-5">
          {/* Progress */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-mono text-muted uppercase tracking-wider">{t(language, 'progress')}</span>
              <span className="text-xs font-mono text-accent">
                {doneSet.size}/{commands.length} {t(language, 'stepsCompleted')}
              </span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-accent transition-all" style={{ width: `${progressPct}%` }} />
            </div>
          </div>

          {/* Prereqs */}
          {stack.prerequisites && (
            <div className="flex items-start gap-2 text-xs text-muted">
              <Cpu className="w-4 h-4 text-accent mt-0.5 shrink-0" />
              <div>
                <span className="font-mono text-faint uppercase tracking-wider">{t(language, 'prerequisites')}:</span>{' '}
                {stack.prerequisites.join(', ')}
              </div>
            </div>
          )}

          {/* Steps */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-muted uppercase tracking-wider">{t(language, 'steps')}</span>
              <button
                onClick={handleCopyAll}
                className="px-3 py-1.5 rounded-lg text-[11px] font-mono bg-accent-soft text-accent border border-accent hover:bg-accent hover:text-on-accent transition cursor-pointer flex items-center gap-1.5"
              >
                {copiedAll ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                {copiedAll ? t(language, 'copiedAll') : t(language, 'copyAll')}
              </button>
            </div>

            {commands.map((cmd, idx) => {
              const done = doneSet.has(idx);
              return (
                <div key={idx} className="bg-code border border-line rounded-xl p-3">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="text-[11px] text-faint flex items-center gap-1.5 font-mono">
                      <Terminal className="w-3.5 h-3.5 text-accent" />
                      <span className="text-muted">
                        {idx + 1}. {cmd.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => onToggleStep(stack.id, idx)}
                        className={`p-1.5 rounded-lg transition cursor-pointer ${
                          done ? 'text-accent bg-accent-soft border border-accent' : 'text-faint hover:text-muted'
                        }`}
                        title={done ? 'Done' : 'Mark as done'}
                      >
                        {done ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => handleCopy(cmd.code, idx)}
                        className="p-1.5 rounded-lg border border-line text-faint hover:text-main transition cursor-pointer"
                        title={t(language, 'copyCommand')}
                      >
                        {copiedIndex === idx ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <code className="block text-xs font-mono text-code break-words">{cmd.code}</code>
                </div>
              );
            })}
          </div>

          {/* Docs if external */}
          {(stack.docs || stack.repo) && (
            <div className="flex flex-wrap gap-2 pt-2 border-t border-line">
              {stack.docs && (
                <a
                  href={stack.docs}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> {t(language, 'docs')}
                </a>
              )}
              {stack.repo && (
                <a
                  href={stack.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> {t(language, 'repo')}
                </a>
              )}
            </div>
          )}

          {/* Add to compare */}
          <button
            onClick={() => onAddCompare(stack.id)}
            className="w-full px-3 py-2 rounded-lg text-xs font-mono bg-card text-muted border border-line hover:text-main hover:border-accent transition cursor-pointer"
          >
            + {t(language, 'compare')}
          </button>
        </div>
      </div>
    </div>
  );
}
