import React, { useEffect, useState } from 'react';
import LogoScroll from '../components/LogoScroll';
import ProjectCards from '../components/ProjectCards';
import Sidebar from '../components/SideBar';
import TypingPhrase from '../components/TypingPhrase';
import { AnimatePresence, motion } from 'framer-motion';
import ContactCards from '../components/ContactCards';

export default function Home() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActivePage(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1">
        <section id='home' className='h-screen grid grid-cols-2 gap-2 justify-center'>
          <div className='text-start ml-13 items-center flex'>
            <TypingPhrase />
          </div>
          <div className='h-screen'>
            <LogoScroll />
          </div>
        </section>

        {/* Div fixa com animação */}
        <AnimatePresence>
          {(activePage === 'projetos' || activePage === 'contato') && (
            <motion.div
              key="fixedCard"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/5
                        w-[65%] h-[70%] rounded-3xl backdrop-blur-lg bg-[#222b59a1] shadow-xg z-50 flex items-center justify-center"
            >
              <AnimatePresence mode="wait">
                {activePage === 'projetos' && (
                  <motion.div
                    key="projetos"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full p-6"
                  >
                    <ProjectCards/>
                  </motion.div>
                )}

                {activePage === 'contato' && (
                  <motion.div
                    key="contato"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full p-6"
                  >
                    <ContactCards/>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Seções para scroll */}
        <section id='projetos' className='h-screen'></section>
        <section id='contato' className='h-screen'></section>
      </main>
    </div>
  );
}
