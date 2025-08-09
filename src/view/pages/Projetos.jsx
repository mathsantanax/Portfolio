import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Cards from '../components/cards';

function Projetos() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 } // Ativa quando 10% da seção está visível
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className='h-screen flex justify-center items-center'>
      <motion.div
        initial={{ x: '100vw', opacity: 0 }} // Começa fora da tela à direita
        animate={isVisible ? { x: 0, opacity: 1 } : {}} // Animação quando isVisible é true
        transition={{ duration: 1 }} // Duração da animação
        className='bg-[#495bb688] w-9/10 h-9/15 rounded-4xl backdrop-blur-lg'>

      <Cards/>

      </motion.div>
    </div>
  );
}

export default Projetos;
