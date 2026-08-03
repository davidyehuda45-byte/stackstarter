import React, { useState } from 'react';
import { Copy, Check, Terminal, Cpu } from 'lucide-react';

export default function StackCard({ stack, selectedTerminal }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Pilih instruksi perintah sesuai terminal aktif (fallback ke 'cmd' jika tidak terdefinisi)
  const currentCommands = stack.commands[selectedTerminal] || stack.commands.cmd || [];

  return (
    <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-5 hover:border-zinc-700 transition flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-lg font-bold text-zinc-100 font-mono">{stack.name}</h3>
          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700/50">
            {stack.category}
          </span>
        </div>

        <p className="text-xs text-zinc-400 mb-4 line-clamp-2">{stack.description}</p>

        {stack.prerequisites && (
          <div className="flex items-center gap-1.5 mb-4 text-[11px] text-zinc-500">
            <Cpu className="w-3.5 h-3.5 text-zinc-400" />
            <span>Syarat: <strong className="text-zinc-300 font-normal">{stack.prerequisites.join(', ')}</strong></span>
          </div>
        )}

        <div className="space-y-2.5 mb-2">
          {currentCommands.map((cmd, idx) => (
            <div key={idx} className="group">
              <div className="text-[11px] text-zinc-500 mb-1 flex items-center gap-1 font-mono">
                <Terminal className="w-3 h-3 text-emerald-500/70" />
                <span>{cmd.label}</span>
              </div>
              <div className="flex items-center justify-between gap-2 bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 font-mono text-xs text-emerald-400 group-hover:border-zinc-700 transition">
                <code className="truncate selection:bg-emerald-500 selection:text-zinc-950">{cmd.code}</code>
                <button
                  onClick={() => handleCopy(cmd.code, idx)}
                  className="p-1 text-zinc-500 hover:text-zinc-200 transition shrink-0 cursor-pointer"
                  title="Copy command"
                >
                  {copiedIndex === idx ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}