import './App.css';
import About from "./pages/About"
import Home from "./pages/home"
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
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
