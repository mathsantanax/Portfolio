import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import "../styles/hero.css";

export default function TypingPhrase() {
  const { t, i18n } = useTranslation();

  const [text, setText] = useState("");
  const [phase, setPhase] = useState(0);
  const [loopIndex, setLoopIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [startTyping, setStartTyping] = useState(false);

  // Frases traduzidas. O useMemo evita recriar o array a cada render.
  const first = t("typing.first");
  const second = t("typing.second");
  const arrayText = useMemo(
    () => [t("typing.loop1"), t("typing.loop2")],
    [t, i18n.language]
  );

  // Inicia a digitação (delay curto se a intro já foi vista)
  useEffect(() => {
    const introAlreadySeen = sessionStorage.getItem("introSeen") === "1";
    const delay = introAlreadySeen ? 0 : 1200;
    const timer = setTimeout(() => setStartTyping(true), delay);
    return () => clearTimeout(timer);
  }, []);

  // Cursor piscando
  useEffect(() => {
    const timer = setInterval(() => setShowCursor((p) => !p), 500);
    return () => clearInterval(timer);
  }, []);

  // Reset ao trocar de idioma
  useEffect(() => {
    setText("");
    setPhase(0);
    setLoopIndex(0);
    setIsDeleting(false);
  }, [i18n.language]);

  // Máquina de estados da digitação
  useEffect(() => {
    if (!startTyping) return;
    let timer;

    if (phase === 0) {
      if (text.length < first.length) {
        timer = setTimeout(() => setText(first.slice(0, text.length + 1)), 50);
      } else {
        timer = setTimeout(() => {
          setText("");
          setPhase(1);
        }, 1000);
      }
    } else if (phase === 1) {
      if (text.length < second.length) {
        timer = setTimeout(() => setText(second.slice(0, text.length + 1)), 50);
      } else {
        timer = setTimeout(() => {
          setText("");
          setPhase(2);
        }, 1000);
      }
    } else if (phase === 2) {
      const current = arrayText[loopIndex];
      if (!isDeleting && text.length < current.length) {
        timer = setTimeout(() => setText(current.slice(0, text.length + 1)), 50);
      } else if (!isDeleting && text.length === current.length) {
        timer = setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text.length > 0) {
        timer = setTimeout(() => setText(current.slice(0, text.length - 1)), 30);
      } else if (isDeleting && text.length === 0) {
        setIsDeleting(false);
        setLoopIndex((p) => (p + 1) % arrayText.length);
      }
    }
    return () => clearTimeout(timer);
  }, [text, phase, isDeleting, loopIndex, startTyping, first, second, arrayText]);

  const Cursor = ({ visible }) => (
    <span className="typing-cursor" aria-hidden="true">
      {visible ? "|" : "\u00A0"}
    </span>
  );

  return (
    <h1
      aria-live="polite"
      className="hero-title typing-fixed text-3xl md:text-5xl"
    >
      <span className="typing-line">
        {phase === 0 ? text : first}
        {phase === 0 && <Cursor visible={showCursor} />}
        {phase !== 0 && <span className="typing-cursor-space" aria-hidden="true" />}
      </span>

      <span className="typing-line">
        {phase === 1 ? text : phase >= 2 ? second : "\u00A0"}
        {phase === 1 && <Cursor visible={showCursor} />}
        {phase !== 1 && <span className="typing-cursor-space" aria-hidden="true" />}
      </span>

      <span className="typing-line">
        {phase === 2 ? text : "\u00A0"}
        {phase === 2 && <Cursor visible={showCursor} />}
        {phase !== 2 && <span className="typing-cursor-space" aria-hidden="true" />}
      </span>
    </h1>
  );
}