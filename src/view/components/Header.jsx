import {SunIcon, MoonIcon} from "@heroicons/react/24/outline";


function Header({darkMode, SetDarkMode}) {
    return (
        <header className="fixed top-0 bg-[#EBEBEB] max-w-[70%] mx-auto w-full h-16 px-8 flex items-center justify-end">
            <ul className="flex items-center gap-5">
                <li>
                    <a href="#sobre" className="font-bold font-mono bg-transparent text-[#2e2e2e52] hover:text-[#2e2e2e]">Sobre</a>
                </li>
                <li>
                    <button onClick={() => SetDarkMode(!darkMode)}
                    className="p-2 rounded-full bg-transparent hover:bg-[#222b598c] transition cursor-pointer">
                    {darkMode ? (
                        <SunIcon className="w-6 h-6 text-[#2e2e2e] hover:text-[#fff]"/>
                    ): (
                        <MoonIcon className="w-6 h-6 text-[#2e2e2e] hover:text-[#fff] transition"/>
                    )}
                    </button>
                </li>
            </ul>
            
        </header>
    )
}

export default Header