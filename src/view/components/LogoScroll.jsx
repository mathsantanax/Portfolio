import { motion, useScroll, useTransform, easeInOut } from "framer-motion";
import { useRef } from "react";
import Parte1 from "../../assets/parte-1.svg";
import Parte2 from "../../assets/parte-2.svg";

export default function LogoScroll() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calcula posições
  const startX = window.innerWidth / 2 - -50; // centro (ajuste conforme tamanho)
  const startY = window.innerHeight / 2 - 100;
  const endX = window.innerWidth - 450; // canto direito
  const endY = window.innerHeight - 190; // canto inferior

  const x = useTransform(scrollYProgress, [0, 1], [startX, endX], { ease: easeInOut });
  const y = useTransform(scrollYProgress, [0, 1], [startY, endY], { ease: easeInOut });
  const scale = useTransform(scrollYProgress, [0, 1], [2.8, 0.5], { ease: easeInOut });

  return (
    <div ref={containerRef} className="h-[200vh]">
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x,
          y,
          scale,
          zIndex: 50,
        }}
        className="flex items-center justify-center pointer-events-none"
      >
        {/* Contêiner do logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center"
        >
          {/* Parte 1 */}
          <motion.img
            src={Parte1}
            alt="Parte 1"
            className="w-[150px] Logo ml-28 drop-shadow-[15px_0px_8px_#ff6b6e]"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 7.5 }}
          />

          {/* Parte 2 */}
          <motion.img
            src={Parte2}
            alt="Parte 2"
            className="w-[150px]  mt-8.5 drop-shadow-[15px_0px_8px_#ff3b3e] absolute"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 7.5 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
