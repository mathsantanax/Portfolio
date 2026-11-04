import { useState, useEffect, useRef } from "react";

export default function LogoIntro({ onFinish }) {
  const [text, setText] = useState("");
  const [fading, setFading] = useState(false);
  const [skip, setSkip] = useState(false);
  const finishedRef = useRef(false);

  const full = "Matheus Santana";
  const short = "MS";

  // Libera a página garantidamente, uma única vez
  const finish = () => {
    if (!finishedRef.current) {
      finishedRef.current = true;
      onFinish();
    }
  };

  useEffect(() => {
    // Se já viu nesta sessão, pula imediatamente
    if (sessionStorage.getItem("introSeen")) {
      setSkip(true);
      finish();
      return;
    }

    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    // Mobile ou reduced motion: pula sem animação
    if (isMobile || prefersReduced) {
      sessionStorage.setItem("introSeen", "1");
      setSkip(true);
      finish();
      return;
    }

    // Desktop: roda a animação
    let typingTimer;
    let backspaceTimer;
    let timeoutA;
    let timeoutB;
    let timeoutC;
    let cancelled = false;

    let i = 0;
    typingTimer = setInterval(() => {
      if (cancelled) return;
      i++;
      setText(full.slice(0, i));
      if (i >= full.length) {
        clearInterval(typingTimer);
        timeoutA = setTimeout(() => {
          if (cancelled) return;
          let j = full.length;
          backspaceTimer = setInterval(() => {
            if (cancelled) return;
            j--;
            setText(full.slice(0, j));
            if (j <= 0) {
              clearInterval(backspaceTimer);
              setText(short);
              timeoutB = setTimeout(() => {
                if (cancelled) return;
                setFading(true);
                timeoutC = setTimeout(() => {
                  if (cancelled) return;
                  sessionStorage.setItem("introSeen", "1");
                  finish();
                }, 500);
              }, 600);
            }
          }, 60);
        }, 500);
      }
    }, 80);

    // Safety net: se algo der errado, libera a página em 8s
    const safety = setTimeout(() => {
      sessionStorage.setItem("introSeen", "1");
      finish();
    }, 8000);

    return () => {
      cancelled = true;
      clearInterval(typingTimer);
      clearInterval(backspaceTimer);
      clearTimeout(timeoutA);
      clearTimeout(timeoutB);
      clearTimeout(timeoutC);
      clearTimeout(safety);
    };
  }, []);

  // Se pulou, não renderiza nada (página já liberada)
  if (skip) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-surface-light font-mono font-bold text-neutral-900 transition-opacity duration-500 dark:bg-surface-dark dark:text-white ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <span className="text-4xl md:text-6xl">
        {"{"}
        {text}
        <span className="animate-blink text-brand">|</span>
        {"}"}
      </span>
    </div>
  );
}