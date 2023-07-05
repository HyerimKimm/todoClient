import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage';
import TomorrowPage from './pages/TomorrowPage';
import { useEffect, useState } from 'react';
import MainPage from './pages/MainPage';
import { getAllDataService } from './services/api';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [todo, setTodo] = useState({
    TODAY_DATA: [],
    TOMORROW_DATA: [],
  });

  useEffect(()=>{
    getAllDataService()
        .then((res)=>res.data)
        .then((newTodo)=>{
          setTodo(newTodo);
          setIsLoading(false);
        });
  },[])

  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoadingPage/>}/>
        <Route path='/today' element={isLoading?<></>:<MainPage todo={todo.TODAY_DATA} setTodo={setTodo}/>}/>
        <Route path='/tomorrow' element={<TomorrowPage todo={todo.TOMORROW_DATA} setTodo={setTodo}/>}/>
      </Routes>
     </BrowserRouter>
  );
}

export default App;
