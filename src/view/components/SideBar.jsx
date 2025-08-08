import { useState } from "react";


export default function Sidebar() {
    const [activePage, setActivePage] = useState("home");

    const menuItems = [
    { id: "home", label: "Home" },
    { id: "projetos", label: "Projetos" },
    { id: "contato", label: "Contato" }
  ];

    return (
        <div className="flex">
        {/* Sidebar */}
            <aside className="w-[20%] top-0 h-lvh bg-transparent text-[#1a1a1a] fixed left-0 flex flex-col items-center justify-center pr-0">

                <nav className="list-disc flex flex-col gap-4 font-mono mg-2">
                    {menuItems.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => setActivePage(item.id)}
                                className={`
                                text-[1.8rem] transition cursor-pointer ease-in-out duration-200
                                ${activePage === item.id
                                    ? "font-bold border-b-2 border-[#ff6b6e] blur-none"
                                    : "blur-[2px] hover:blur-none hover:font-bold hover:border-b-2 hover:border-[#ff6b6e]"
                                }
                                `}
                            >
                                {item.label}
                            </li>
                            ))}
                </nav>
            </aside>
        </div>
    );
}
