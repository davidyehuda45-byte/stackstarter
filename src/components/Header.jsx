import React from 'react';
import { Terminal, Monitor, Command } from 'lucide-react';

export default function Header({ selectedTerminal, setSelectedTerminal }) {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400">
            <Terminal className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-zinc-100 flex items-center gap-2 font-mono">
              StackStarter <span className="text-xs font-normal px-2 py-0.5 rounded bg-zinc-800 text-emerald-400 border border-zinc-700">v1.0</span>
            </h1>
            <p className="text-xs text-zinc-400">Direktori Inisialisasi Proyek CLI</p>
          </div>
        </div>

        {/* Global Terminal Selector */}
        <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 p-1.5 rounded-xl">
          <span className="text-[11px] font-mono text-zinc-500 px-2 hidden md:inline">Mode:</span>
          
          <button
            onClick={() => setSelectedTerminal('cmd')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition cursor-pointer flex items-center gap-1.5 ${
              selectedTerminal === 'cmd'
                ? 'bg-emerald-500 text-zinc-950 font-bold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            CMD
          </button>

          <button
            onClick={() => setSelectedTerminal('powershell')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition cursor-pointer flex items-center gap-1.5 ${
              selectedTerminal === 'powershell'
                ? 'bg-emerald-500 text-zinc-950 font-bold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            PowerShell
          </button>

          <button
            onClick={() => setSelectedTerminal('bash')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition cursor-pointer flex items-center gap-1.5 ${
              selectedTerminal === 'bash'
                ? 'bg-emerald-500 text-zinc-950 font-bold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Command className="w-3.5 h-3.5" />
            Mac/Linux/Bash
          </button>
        </div>
      </div>
    </header>
  );
}