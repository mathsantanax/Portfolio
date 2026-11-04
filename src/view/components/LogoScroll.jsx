const techs = ["React", "JavaScript", "Tailwind", "Vite", "Git", "HTML", "CSS", "C#", ".NET", "TypeScript", "Node.js", "AspNet", "PostgreSQL", "SQL Server", "Docker", "REST", "API", "VS Code"];

export default function LogoScroll() {
  const items = [...techs, ...techs];

  return (
    <div className="relative flex h-full w-full items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface-light to-transparent dark:from-surface-dark" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface-light to-transparent dark:from-surface-dark" />
      <div className="flex w-max animate-marquee gap-4">
        {items.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="whitespace-nowrap rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 dark:border-neutral-800 dark:text-neutral-300"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}