import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  SunIcon,
  MoonIcon,
  LanguageIcon,
  HomeIcon,
  FolderIcon,
  UserIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import "../styles/header.css";

export default function Header({ darkMode, setDarkMode }) {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState("home");

  // Links construídos DENTRO do componente (t já existe aqui)
  const links = [
    { id: "home", label: t("nav.home"), icon: HomeIcon },
    { id: "projetos", label: t("nav.projects"), icon: FolderIcon },
    { id: "sobre", label: t("nav.about"), icon: UserIcon },
    { id: "contato", label: t("nav.contact"), icon: EnvelopeIcon },
  ];

  // Detecta a seção ativa no scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  const toggleLang = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ============ DESKTOP: header no topo ============ */}
      <header className="app-header-desktop fixed inset-x-0 top-4 z-40 hidden px-4 md:block">
        <div className="app-header relative mx-auto flex h-14 w-full max-w-5xl items-center justify-between rounded-2xl px-3">
          <a
            href="#home"
            className="app-header-logo rounded-xl px-2 py-1 font-mono text-base font-bold transition"
          >
            {"{"}MS{"}"}
          </a>

          <nav className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`app-header-link rounded-xl px-3 py-1.5 text-sm font-medium transition ${
                  active === l.id ? "app-header-link-active" : ""
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Alternar tema"
              className="app-header-icon-btn rounded-xl p-2 transition"
            >
              {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
            <button
              onClick={toggleLang}
              aria-label="Alternar idioma"
              className="app-header-icon-btn flex items-center gap-1 rounded-xl px-2 py-1.5 text-xs font-semibold transition"
            >
              <LanguageIcon className="h-4 w-4" />
              <span>{i18n.language.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </header>

      {/* ============ MOBILE: barra inferior flutuante ============ */}
      <nav
        aria-label="Navegação principal"
        className="app-header-mobile fixed inset-x-0 bottom-3 z-40 mx-auto w-[calc(100%-1.5rem)] max-w-md px-3 md:hidden"
      >
        <div className="app-header flex items-center justify-around rounded-2xl px-2 py-2">
          {links.map((l) => {
            const Icon = l.icon;
            const isActive = active === l.id;
            return (
              <button
                key={l.id}
                onClick={() => goTo(l.id)}
                aria-label={l.label}
                aria-current={isActive ? "page" : undefined}
                className={`app-bottom-item flex flex-1 flex-col items-center gap-0.5 rounded-xl py-1.5 transition ${
                  isActive ? "app-bottom-item-active" : ""
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-[10px] font-medium leading-none">{l.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}