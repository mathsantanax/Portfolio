import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import LogoIntro from "./components/LogoIntro";

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      <LogoIntro onFinish={() => setIntroFinished(true)} />
      {/* Header FORA do wrapper com opacity */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div
        className={`min-h-screen pb-28 transition-opacity duration-700 md:pt-24 md:pb-0 ${
          introFinished ? "opacity-100" : "opacity-0"
        }`}
      >
        <main>
          <Home />
        </main>
      </div>
    </>
  );
}

export default App;