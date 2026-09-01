import { Terminal, Monitor, Command, Moon, Sun, Languages, Palette } from 'lucide-react';

const ACCENTS = [
  { id: 'emerald', label: 'Emerald', color: '#10b981' },
  { id: 'cyan', label: 'Cyan', color: '#06b6d4' },
  { id: 'violet', label: 'Violet', color: '#8b5cf6' },
  { id: 'amber', label: 'Amber', color: '#f59e0b' },
  { id: 'rose', label: 'Rose', color: '#f43f5e' },
  { id: 'blue', label: 'Blue', color: '#3b82f6' },
];

export default function Header({
  selectedTerminal,
  setSelectedTerminal,
  language,
  setLanguage,
  theme,
  setTheme,
  accent,
  setAccent,
  t,
}) {
  return (
    <header className="border-b border-line bg-app-translucent backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-accent-soft border border-accent rounded-lg text-accent">
            <Terminal className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-main flex items-center gap-2 font-mono">
              {t(language, 'appTitle')}
              <span className="text-xs font-normal px-2 py-0.5 rounded bg-muted text-accent border border-line-strong">
                {t(language, 'version')}
              </span>
            </h1>
            <p className="text-xs text-muted">{t(language, 'appSubtitle')}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 w-full md:w-auto">
          {/* Global Terminal Selector */}
          <div className="flex items-center gap-1.5 bg-card border border-line p-1.5 rounded-xl">
            <span className="text-[11px] font-mono text-faint px-2 hidden xl:inline">
              {t(language, 'mode')}
            </span>
            {[
              { id: 'cmd', label: t(language, 'cmd'), Icon: Monitor },
              { id: 'powershell', label: t(language, 'powershell'), Icon: Terminal },
              { id: 'bash', label: t(language, 'bash'), Icon: Command },
            ].map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => setSelectedTerminal(id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition cursor-pointer flex items-center gap-1.5 ${
                  selectedTerminal === id
                    ? 'bg-accent text-on-accent font-bold'
                    : 'text-muted hover:text-main hover:bg-app-soft'
                }`}
                title={label}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </button>
            ))}
          </div>

          {/* Theme / Accent / Language */}
          <div className="flex items-center gap-1.5 bg-card border border-line p-1.5 rounded-xl">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg text-muted hover:text-accent hover:bg-app-soft transition cursor-pointer"
              title={theme === 'dark' ? t(language, 'lightTheme') : t(language, 'darkTheme')}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <div className="flex items-center gap-1 px-1" title={t(language, 'accent')}>
              <Palette className="w-3.5 h-3.5 text-faint" />
              {ACCENTS.map((a) => (
                <button
                  key={a.id}
                  onClick={() => setAccent(a.id)}
                  className={`w-5 h-5 rounded-full transition cursor-pointer border-2 ${
                    accent === a.id ? 'border-line-strong scale-110' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: a.color }}
                  title={a.label}
                />
              ))}
            </div>

            <div className="flex items-center gap-1 px-1">
              <Languages className="w-3.5 h-3.5 text-faint" />
              {['id', 'en'].map((code) => (
                <button
                  key={code}
                  onClick={() => setLanguage(code)}
                  className={`px-2 py-1 rounded-lg text-[10px] font-mono transition cursor-pointer uppercase ${
                    language === code
                      ? 'bg-accent text-on-accent font-bold'
                      : 'text-muted hover:text-main hover:bg-app-soft'
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
