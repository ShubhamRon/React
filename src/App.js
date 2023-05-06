import './App.css';
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route, NavLink, Outlet, useSearchParams } from "react-router-dom"
import Phone from './pages/Phone';
import Email from './pages/Email';
import About from './pages/About';
import Authrization from './pages/Authrization';

import Login from './pages/Login'






function App() {

  const Classlist = {
    color: "red",
    fontSize: "5vh"
  }


  return (
    <>
      <BrowserRouter>


        <div className='Container'>

          <div className='LeftContainer'>
            <p><NavLink to="/" style={({ isActive }) => isActive ? Classlist : null}>Home</NavLink></p>
            <p><NavLink to="/about" style={({ isActive }) => isActive ? Classlist : null}>About</NavLink></p>
            <p><NavLink to="/contact" style={({ isActive }) => isActive ? Classlist : null}>Contact</NavLink></p>
          </div>

          <div className='RightContainer'>


            <Routes>

                <Route path="/" element={<Authrization />}>
                <Route index element={<Home/>}/>
                <Route path="/about" element={<About />} />
                <Route path='/contact' element={<Contact />}>
                  <Route path='phone' element={<Phone />} />
                  <Route path='email' element={<Email />} />
                </Route>
              </Route>
              <Route path='*' element={(<h1>Page Not Found</h1>)} />
              <Route path='/login' element={<Login />} />
              <Route path = '/login' element={<Login/>} />

            </Routes>
          </div>
        </div>
      </BrowserRouter>


    </>
  );
}

export default App;
