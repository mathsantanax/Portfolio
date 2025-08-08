import React from 'react'
import LogoScroll from '../components/LogoScroll'

export default function Home() {
    
  return (
    <main id='Home' className=' h-screen top-0 grid grid-cols-2 gap-2  justify-center'>
        <div className='text-start ml-13 items-center flex'>
            <h2 className='drop-shadow-xl/50 text-[#1e1e1e] text-3xl'>
                Ajudando Pessoas e Empresas se conectarem atráves de soluções Tecnológicas.
            </h2>
        </div>
        <div className='h-screen'>
            <LogoScroll/>
        </div>
    </main>
  )
}