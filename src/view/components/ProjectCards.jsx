import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import "../styles/projects.css";

// Dados fixos dos projetos (nome, techs, links, imagem, badge key)
const projectsBase = [
  {
    title: "Maevor",
    descriptionKey: "projects.maevor",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind 4", "React Query", "Zod"],
    demo: "https://maevor.com.br",
    code: null,
    image: "/src/assets/maevor-preview.png",
    highlight: false,
  },
  {
    title: "AnimaDesk",
    descriptionKey: "projects.animadesk",
    tech: ["Vite", "React", "TypeScript", "Tailwind", "Supabase"],
    demo: "https://anima-desk.vercel.app",
    code: null,
    image: "/src/assets/anima-desk-preview.png",
    highlight: true,
    badgeKey: "projects.badgeSaas",
  },
  {
    title: "Aurum",
    descriptionKey: "projects.aurum",
    tech: ["C#", ".NET", "SQL Server", "Docker", "React", "IA"],
    demo: null,
    code: "https://github.com/mathsantanax/Aurum",
    image: "/src/assets/aurum-preview.png",
    highlight: true,
    badgeKey: "projects.badgeFullstack",
  },
  {
    title: "GitHub Cards",
    descriptionKey: "projects.githubcards",
    tech: ["TypeScript", "React", "API GitHub"],
    demo: "https://githubcard-zeta.vercel.app/",
    code: "https://github.com/mathsantanax/Github-card",
    image: "/src/assets/github-card.png",
  },
];

export default function ProjectCards() {
  const { t } = useTranslation();
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".project-item");
    const amount = card ? card.offsetWidth + 16 : 320;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="projects-carousel">
      <button
        type="button"
        aria-label={t("projects.previous")}
        onClick={() => scrollBy(-1)}
        className="projects-arrow projects-arrow-left"
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>

      <div ref={trackRef} className="projects-track">
        {projectsBase.map((p, i) => {
          const href = p.demo || p.code;
          const CardWrapper = href ? "a" : "div";
          const wrapperProps = href
            ? { href, target: "_blank", rel: "noopener noreferrer" }
            : {};

          return (
            <div key={p.title} className="project-item">
              <span className="project-rank" aria-hidden="true">
                {i + 1}
              </span>

              <CardWrapper
                {...wrapperProps}
                className={`project-card group relative flex flex-col overflow-hidden rounded-2xl ${
                  p.highlight ? "ring-2 ring-brand" : ""
                } ${href ? "cursor-pointer" : ""}`}
              >
                {p.highlight && p.badgeKey && (
                  <span className="absolute right-3 top-3 z-10 rounded-full bg-brand px-2 py-1 text-[10px] font-bold text-white">
                    {t(p.badgeKey)}
                  </span>
                )}

                <div className="project-preview flex h-40 items-center justify-center">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={`${t("projects.preview")} ${p.title}`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-sm">{t("projects.preview")}</span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="project-title text-lg font-semibold">{p.title}</h3>
                  <p className="project-desc mt-1 flex-1 text-sm">
                    {t(p.descriptionKey)}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((tech) => (
                      <span
                        key={tech}
                        className="project-tag rounded-full px-2 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-4 text-sm font-medium">
                    {p.demo && (
                      <span className="project-link link-underline inline-flex items-center gap-1">
                        {t("projects.demo")}
                        <span aria-hidden="true">→</span>
                      </span>
                    )}
                    {p.code && (
                      <span className="project-link link-underline">
                        {t("projects.code")}
                      </span>
                    )}
                  </div>
                </div>
              </CardWrapper>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        aria-label={t("projects.next")}
        onClick={() => scrollBy(1)}
        className="projects-arrow projects-arrow-right"
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
}