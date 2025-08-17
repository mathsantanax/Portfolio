import React, { useState, useEffect } from "react";

export default function TypingPhrase() {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState(0); // 0=primeira, 1=segunda, 2=loop
  const [loopIndex, setLoopIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [startTyping, setStartTyping] = useState(false); 

  const first = "Mais que Código.";
  const second = "Mais que Programação.";
  const arrayText = [
    "Gerando Conexões.",
    "Criando Soluções Inovadoras.",
    "Impulsionando Negócios.",
    "Construindo Experiências Digitais."
  ];

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStartTyping(true);
    }, 7000);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  useEffect(() => {
    if (!startTyping) return;

    let timer;

    if (phase === 0) {
      if (text.length < first.length) {
        timer = setTimeout(() => setText(first.slice(0, text.length + 1)), 50);
      } else {
        timer = setTimeout(() => setPhase(1), 1000);
      }
    } 
    
    else if (phase === 1) {
      if (text.length < second.length) {
        timer = setTimeout(() => setText(second.slice(0, text.length + 1)), 50);
      } else {
        timer = setTimeout(() => { 
          setPhase(2);
          setText("");
        }, 1000);
      }
    } 
    
    else if (phase === 2) {
      const currentPhrase = arrayText[loopIndex];
      if (!isDeleting && text.length < currentPhrase.length) {
        timer = setTimeout(() => setText(currentPhrase.slice(0, text.length + 1)), 50);
      } else if (!isDeleting && text.length === currentPhrase.length) {
        timer = setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text.length > 0) {
        timer = setTimeout(() => setText(currentPhrase.slice(0, text.length - 1)), 30);
      } else if (isDeleting && text.length === 0) {
        setIsDeleting(false);
        setLoopIndex((prev) => (prev + 1) % arrayText.length);
      }
    }

    return () => clearTimeout(timer);
  }, [text, phase, isDeleting, loopIndex, startTyping]);

  return (
    <h2 className="drop-shadow-xl/50 text-[#1e1e1e] text-3xl">
      {phase === 0 && startTyping && (
        <>
          {text}
          <span className="text-[#ff6b6e]">{showCursor && "|"}</span>
        </>
      )}
      {phase === 1 && (
        <>
          {first}
          <br />
          {text}
          <span className="text-[#ff6b6e]">{showCursor && "|"}</span>
        </>
      )}
      {phase === 2 && (
        <>
          {first}
          <br />
          {second}
          <br />
          {text}
          <span className="text-[#ff6b6e]">{showCursor && "|"}</span>
        </>
      )}
    </h2>
  );
}
