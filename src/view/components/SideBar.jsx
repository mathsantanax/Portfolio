// Sidebar.js
import { useState, useEffect } from "react";

export default function Sidebar({ activePage, setActivePage }) {
    const menuItems = [
        { id: "home", label: "Home" },
        { id: "projetos", label: "Projetos" },
        { id: "contato", label: "Contato" },
    ];

    const handleNavigation = (id) => {
        setActivePage(id);
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <aside className="w-[20%] top-0 h-lvh bg-transparent fixed left-0 flex flex-col items-center justify-center pr-0">
            <nav className="list-disc flex flex-col gap-4 mg-2">
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => handleNavigation(item.id)}
                        className={`
                            text-[1.8rem] transition cursor-pointer ease-in-out duration-200
                            ${activePage === item.id
                                ? "border-b-2 border-[#ff6b6e] blur-none"
                                : "blur-[3px] hover:blur-none hover:border-b-2 hover:border-[#ff6b6e]"
                            }
                        `}
                    >
                        {item.label}
                    </li>
                ))}
            </nav>
        </aside>
    );
}
