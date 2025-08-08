import { useState, useEffect } from "react";

function LogoIntro({onFinish}) {
    const [text, setText] = useState("");
    const [step, setStep] = useState("typing");
    const [inHeader, setInHeader] = useState(false);
    const fulltext = "Matheus Santana";
    const shortText = "MS";

    useEffect(() => {
        let i = 0;

        //Efeito de digitação 
        const typing = setInterval(() => {
            setText(fulltext.substring(0, i + 1));
            i++;
            if(i >= fulltext.length){
                clearInterval(typing);
                setTimeout(() => setStep("backspace"), 3000);
            }
        }, 100);

        return () => clearInterval(typing);
    }, []);

    useEffect(() => {
        if(step === "backspace"){
            let j = fulltext.length;
        const backspace = setInterval(() => {
            setText(fulltext.substring(0, j));
                j--;
            if(j < 0){
                clearInterval(backspace);
                setText(shortText);
                setStep("final");
                setTimeout(() => {
                    setInHeader(true);
                    onFinish();
                }, 700);
            }
        },100)
        return () => clearInterval(backspace);
        }
    }, [step, onFinish])

    return (
        <div
            className={`font-mono font-bold text-[#1a1a1a] border-r-4 border-[#1a1a1a] px-2 whitespace-nowrap overflow-hidden fixed z-50 transition-all duration-1000 ease-in-out
            ${inHeader ? "top-5 left-[15%] text-2xl scale-75%" : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl"}
            ${step === "final" ? "fixed animate-pulse text-[#1a1a1a]" : ""}
            `}
        >
            {"{"}
            {text}
            {"}"}
    </div>
    )
}

export default LogoIntro