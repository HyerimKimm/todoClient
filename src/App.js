import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage';

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoadingPage/>}/>
      </Routes>
     </BrowserRouter>
  );
}

export default App;
