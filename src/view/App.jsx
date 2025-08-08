import './App.css'
import Header from './components/Header'
import LogoIntro from './components/LogoIntro'
import LogoScroll from './components/LogoScroll'
import Sidebar from './components/SideBar'
import Home from './pages/Home'
import { useState } from "react";

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  return (
    <>
        <LogoIntro onFinish={() => setIntroFinished(true)} />
      <div className={`max-w-[70%] mx-auto transition-opacity duration-700 ${introFinished ? "opacity-100" : "opacity-0"}`}>
        <Header/>
        <Sidebar/>
        <Home/>

      </div>
    </>
  )
}

export default App
