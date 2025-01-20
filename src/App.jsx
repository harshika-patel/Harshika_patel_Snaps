import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Photographs from './components/Photographs/Photographs'
import Tags from './components/Tags/Tags';
import { useState } from "react";

function App() {
  const [isTagsPanelOpen, setIsTagsPanelOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const handleTogglePanel = () => {
   
    setIsTagsPanelOpen((prev) => !prev);
};
  return (
    <>
    <Header handleTogglePanel={handleTogglePanel} isTagsPanelOpen={isTagsPanelOpen} />
    <main className="main">
    
    {isTagsPanelOpen && 
    <Tags selectedTag={selectedTag} setSelectedTag={setSelectedTag} />}
    <Hero />
    <Photographs selectedTag={selectedTag}/>
    </main>
    <Footer />

    </>
  )
}

export default App

