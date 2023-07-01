import './App.css';
import Abbout from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import VansDeatatils from "./pages/vans"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"




function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">#VANLIFE</Link>
        <div>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </div>
      </nav>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Abbout />} />
        <Route path='/vans' element={<Contact />} />
        <Route path='/vans/:id' element={<VansDeatatils />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
