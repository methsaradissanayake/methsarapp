
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import Contact from './components/Contact';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
