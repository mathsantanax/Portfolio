import "../styles/contact.css";

const contacts = [
  {
    label: "E-mail",
    value: "matheus.santana7@hotmail.com",
    href: "mailto:matheus.santana7@hotmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "@matheus-santanax",
    href: "https://linkedin.com/in/matheus-santanax",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-3-1.83-3-1.83 0-2.1 1.43-2.1 2.9V21H9z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "(13) 98163-9944",
    href: "https://wa.me/5513981639944",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z" />
      </svg>
    ),
  },
];

export default function ContactCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {contacts.map((c) => (
        <a
          key={c.label}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card group flex flex-col gap-3 rounded-2xl p-6"
        >
          <span className="contact-icon inline-flex h-11 w-11 items-center justify-center rounded-xl">
            {c.icon}
          </span>
          <span className="contact-label font-semibold">{c.label}</span>
          <span className="contact-value truncate text-sm">{c.value}</span>
        </a>
      ))}
    </div>
  );
}