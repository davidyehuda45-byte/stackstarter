import { useEffect } from 'react';
import { X, ArrowLeftRight, Trash2 } from 'lucide-react';

export default function CompareModal({
  stacks,
  selectedTerminal,
  language,
  t,
  onRemove,
  onClear,
  onClose,
}) {
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

  if (!stacks.length) return null;

  const difficultyKey = (stack) => `difficulty${stack.difficulty || 'Medium'}`;
  const commandList = (stack) => stack.commands[selectedTerminal] || stack.commands.cmd || [];

  const rows = [
    { key: 'compareDesc', render: (stack) => (language === 'en' && stack.descriptionEn ? stack.descriptionEn : stack.description) },
    { key: 'compareCategory', render: (stack) => stack.category },
    { key: 'difficulty', render: (stack, t) => t(language, difficultyKey(stack)) },
    { key: 'comparePrereq', render: (stack) => stack.prerequisites?.join(', ') || '-' },
    { key: 'compareCommandCount', render: (stack) => `${commandList(stack).length} commands` },
  ];

  return (
    <div className="fixed inset-0 z-[110] overflow-y-auto bg-black/70 p-4 flex items-start justify-center" onClick={onClose}>
      <div
        className="relative w-full max-w-5xl bg-card border border-line rounded-2xl shadow-soft my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-line flex items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-main font-mono flex items-center gap-2">
              <ArrowLeftRight className="w-5 h-5 text-accent" />
              {t(language, 'compareTitle')}
            </h2>
            <p className="text-xs text-muted mt-1">{t(language, 'compareHint')}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg border border-line text-faint hover:text-main hover:border-line-strong transition cursor-pointer"
            title={t(language, 'close')}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 overflow-x-auto">
          <table className="w-full min-w-[720px] text-left border-collapse">
            <thead>
              <tr>
                <th className="text-[10px] uppercase font-mono text-faint py-2 pr-4 border-b border-line">#</th>
                {stacks.map((stack) => (
                  <th key={stack.id} className="py-2 px-3 border-b border-line">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="text-sm font-mono text-main font-bold">{stack.name}</div>
                        <div className="text-[10px] font-mono text-faint">{stack.category}</div>
                      </div>
                      <button
                        onClick={() => onRemove(stack.id)}
                        className="p-1.5 rounded text-faint hover:text-accent cursor-pointer"
                        title={t(language, 'compareRemove')}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.key}>
                  <td className="text-[10px] uppercase font-mono text-faint py-3 pr-4 border-b border-line align-top whitespace-nowrap">
                    {t(language, row.key)}
                  </td>
                  {stacks.map((stack) => (
                    <td key={stack.id} className="py-3 px-3 border-b border-line text-xs text-muted align-top">
                      {row.render(stack, t)}
                      {row.key === 'compareCommandCount' && (
                        <div className="mt-2 space-y-1 max-h-32 overflow-y-auto">
                          {commandList(stack).map((cmd, idx) => (
                            <div key={idx} className="bg-code border border-line rounded p-2 font-mono text-[10px] text-code">
                              <div className="text-faint mb-0.5">{cmd.label}</div>
                              <div className="break-all">{cmd.code}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-5 pb-5 flex items-center justify-between gap-3">
          <button
            onClick={onClear}
            className="px-3 py-1.5 rounded-lg text-[11px] font-mono border border-line text-muted hover:text-main hover:border-line-strong transition cursor-pointer"
          >
            {t(language, 'compareClear')}
          </button>
          <div className="text-[11px] font-mono text-faint">
            {stacks.length}/3
          </div>
        </div>
      </div>
    </div>
  );
}
