import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../styles/card.css";

const contacts = [
  { label: "E-mail", value: "matheus.santana7@hotmail.com", href: "mailto:matheus.santana7@hotmail.com" },
  { label: "LinkedIn", value: "@matheus-santanax", href: "https://linkedin.com/in/matheus-santanax" },
  { label: "WhatsApp", value: "(13) 98163-9944", href: "https://wa.me/5513981639944" },
];

const projects = [
  { title: "GitHub Cards", tech: "TypeScript · React", href: "https://github.com/mathsantanax/Github-card" },
  { title: "API QR Code Generator", tech: "C# · .NET", href: "https://github.com/mathsantanax/Api-QrCode-Generator" },
];

export default function Card() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t("card.pageTitle");
  }, [t, i18n.language]);

  return (
    <div className="card-page min-h-screen px-5 py-10">
      <div className="mx-auto max-w-md">
        <div className="flex flex-col items-center text-center">
          <div className="card-avatar h-24 w-24 overflow-hidden rounded-full">
            <img
              src="/src/assets/profile.jpg"
              alt="Matheus Santana"
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="card-title mt-4 text-2xl font-bold">Matheus Santana</h1>
          <p className="card-subtitle mt-1 text-sm">
            {t("card.role")}
          </p>
          <p className="card-muted mt-3 max-w-xs text-sm">
            {t("card.bio")}
          </p>
        </div>

        <div className="mt-8 space-y-2">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-surface flex items-center justify-between rounded-xl px-4 py-3 text-sm"
            >
              <span className="card-title font-medium">{c.label}</span>
              <span className="card-muted truncate">{c.value}</span>
            </a>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="card-label text-xs font-semibold uppercase tracking-wider">
            {t("card.featured")}
          </h2>
          <div className="mt-3 space-y-2">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface block rounded-xl px-4 py-3"
              >
                <span className="card-title block font-medium">{p.title}</span>
                <span className="card-muted text-xs">{p.tech}</span>
              </a>
            ))}
          </div>
        </div>

        <a
          href="/"
          className="card-cta mt-8 block rounded-xl px-4 py-3 text-center text-sm font-semibold"
        >
          {t("card.cta")}
        </a>

        <p className="card-muted mt-8 text-center text-xs">
          © {new Date().getFullYear()} Matheus Santana
        </p>
      </div>
    </div>
  );
}