// Home.js
import React, { useEffect, useState } from 'react';
import LogoScroll from '../components/LogoScroll';
import Projetos from './Projetos';
import Contato from './Contato';
import Sidebar from '../components/Sidebar'; // Importando a Sidebar

export default function Home() {
  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActivePage(entry.target.id);
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main>
        <section id='home' className='h-screen top-0 grid grid-cols-2 gap-2 justify-center'>
          <div className='text-start ml-13 items-center flex'>
            <h2 className='drop-shadow-xl/50 text-[#1e1e1e] text-3xl'>
              Ajudando Pessoas e Empresas se conectarem através de soluções Tecnológicas.
            </h2>
          </div>
          <div className='h-screen'>
            <LogoScroll />
          </div>
        </section>

        <section id='projetos'>
          <Projetos />
        </section>

        <section id='contato'>
          <Contato />
        </section>
      </main>
    </div>
  );
}
