import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage';
import TomorrowPage from './pages/TomorrowPage';
import { useEffect, useState } from 'react';
import MainPage from './pages/MainPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const loadingChange = ()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },2000)
  }

  useEffect(()=>{
    loadingChange();
  },[])

  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={isLoading?<LoadingPage/>:<MainPage/>}/>
        <Route path='/tomorrow' element={<TomorrowPage/>}/>
      </Routes>
     </BrowserRouter>
  );
}

export default App;
