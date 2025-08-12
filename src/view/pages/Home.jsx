import React, { useEffect, useState } from 'react';
import LogoScroll from '../components/LogoScroll';
import Projetos from './Projetos';
import Contato from './Contato';
import Sidebar from '../components/SideBar';
import TypingPhrase from '../components/TypingPhrase';

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
            <TypingPhrase />
          </div>
          <div className='h-screen'>
            <LogoScroll />
          </div>
        </section>

        <section id='projetos' className='h-screen'>
          <Projetos />
        </section>

        <section id='contato' className='h-screen'>
          <Contato />
        </section>
      </main>
    </div>
  );
}
