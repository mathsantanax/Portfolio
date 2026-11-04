import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import TypingPhrase from "../components/TypingPhrase";
import LogoScroll from "../components/LogoScroll";
import ProjectCards from "../components/ProjectCards";
import ContactCards from "../components/ContactCards";
import "../styles/hero.css";
import "../styles/about.css";
import "../styles/footer.css";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Home() {
  const { t } = useTranslation();

  const stats = [
    ["4+", t("stats.projects")],
    ["3", t("stats.stacks")],
    ["Front + Back", t("stats.focus")],
    ["PT/EN", t("stats.languages")],
  ];

  return (
    <>
      {/* HERO */}
      <section
        id="home"
        className="scroll-mt-24 grid items-center gap-6 px-5 pb-10 pt-6 md:mx-auto md:max-w-5xl md:grid-cols-2 md:gap-10 md:px-8 md:py-20"
      >
        <motion.div {...fadeUp} className="flex flex-col items-center md:items-start">
          {/* FOTO — mobile */}
          <div className="mb-4 h-24 w-24 shrink-0 overflow-hidden rounded-full ring-4 ring-brand/20 md:hidden">
            <img
              src="/src/assets/profile.jpg"
              alt="Foto de Matheus Santana"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>

          <p className="hero-badge mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold">
            {t("hero.badge")}
          </p>

          <TypingPhrase />

          <p className="hero-subtitle mt-4 max-w-md text-sm md:mt-6 md:text-base">
            {t("hero.subtitle")}
          </p>

          <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row md:mt-8 md:w-auto">
            <a
              href="#projetos"
              className="hero-btn-primary inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition active:scale-95"
            >
              {t("hero.btnProjects")}
            </a>
            <a
              href="#contato"
              className="hero-btn-ghost inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition active:scale-95"
            >
              {t("hero.btnContact")}
            </a>
          </div>

          <div className="mx-auto mt-6 w-full max-w-xs md:hidden">
            <LogoScroll />
          </div>
        </motion.div>

        {/* COLUNA DIREITA — desktop */}
        <motion.div
          {...fadeUp}
          className="hidden flex-col items-center justify-center gap-8 md:flex"
        >
          <div className="h-60 w-60 shrink-0 overflow-hidden rounded-full ring-4 ring-brand/20">
            <img
              src="/src/assets/profile.jpg"
              alt="Foto de Matheus Santana"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="w-full">
            <LogoScroll />
          </div>
        </motion.div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="section scroll-mt-24">
        <motion.h2 {...fadeUp} className="text-3xl font-bold md:text-4xl">
          {t("sections.projectsTitle")}
        </motion.h2>
        <motion.p {...fadeUp} className="section-subtitle mt-2">
          {t("sections.projectsSubtitle")}
        </motion.p>
        <div className="mt-10">
          <ProjectCards />
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="section scroll-mt-24">
        <motion.h2 {...fadeUp} className="text-3xl font-bold md:text-4xl">
          {t("sections.aboutTitle")}
        </motion.h2>
        <motion.div {...fadeUp} className="mt-6 grid gap-6 md:grid-cols-2">
          <p className="about-text">{t("sections.aboutText")}</p>
          <div className="grid grid-cols-2 gap-4">
            {stats.map(([k, v]) => (
              <div key={v} className="about-stat rounded-2xl p-4">
                <span className="about-stat-value block text-xl font-bold">{k}</span>
                <span className="about-stat-label text-xs">{v}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="section scroll-mt-24">
        <motion.h2 {...fadeUp} className="text-3xl font-bold md:text-4xl">
          {t("sections.contactTitle")}
        </motion.h2>
        <motion.p {...fadeUp} className="section-subtitle mt-2">
          {t("sections.contactSubtitle")}
        </motion.p>
        <div className="mt-10">
          <ContactCards />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer py-8 text-center text-sm">
        {t("footer", { year: new Date().getFullYear() })}
      </footer>
    </>
  );
}