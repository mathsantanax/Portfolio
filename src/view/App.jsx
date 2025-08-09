import './App.css'
import Header from './components/Header'
import LogoIntro from './components/LogoIntro'
import Sidebar from './components/SideBar'
import Home from './pages/Home'
import { useState } from "react";
import Projetos from './pages/Projetos'

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  return (
    <>
        <LogoIntro onFinish={() => setIntroFinished(true)} />
      <div className={`max-w-[70%] mx-auto transition-opacity duration-700 ${introFinished ? "opacity-100" : "opacity-0"}`}>
        <Sidebar/>
        <Home/>
        <Header/>
      </div>
    </>
  )
}

export default App
