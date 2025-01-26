import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Photographs from './components/Photographs/Photographs'
import Tags from './components/Tags/Tags';
import { API_KEY } from './Utils/api';
import { API_URL } from './Utils/api';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState ,useEffect} from "react";
import axios from 'axios';
import HomePage from './pages/HomePage/HomePage';
import PhotoDetailsPage from './pages/PhotoDetailsPage/PhotoDetailsPage'
function App() {
 
  const [isTagsPanelOpen, setIsTagsPanelOpen] = useState(false);
  const [photos,setPhotos]=useState([]);
  const [loading,setLoading]=useState(true);
  const[error,setError]=useState(null);
  
  
  useEffect(()=>{
    axios.get(`${API_URL}?api_key=${API_KEY}`)
    .then((response)=>{
      setPhotos(response.data);
      setLoading(false);
    })
    .catch((err)=>{
      console.error(err);
      setError("error fetching photo");
      setLoading(false);
    })
  },[])

  if(loading) return(<div>Loading......</div>)
    if (error) return(<div>{error}</div>)
  
  const handleTogglePanel = () => {
   
    setIsTagsPanelOpen((prev) => !prev);
};
  return (
    <>
    
   
    <BrowserRouter>
    <Header handleTogglePanel={handleTogglePanel}  />
   
    <main className="main">
    <Routes>
      <Route path="/" element={<HomePage isTagsPanelOpen={isTagsPanelOpen} photos={photos}/>}/>
      <Route path="/:photoId" element={<PhotoDetailsPage photos={photos}/>}/>
    </Routes>
    </main>
    
    <Footer />
    </BrowserRouter>

    </>
  )
}

export default App

