import './App.css';
import Abbout from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"




function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">#VANLIFE</Link>
        <div>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Abbout />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
