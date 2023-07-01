import './App.css';
import Abbout from "./pages/About"
import Contact from "./pages/Contact"
import VansDeatatils from "./pages/vans"
import Home from "./pages/Home"
import Layout from "./Component/layout"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Dashboard from './Host/Dashboard';
import Reviews from './Host/Reviews';
import Income from './Host/Income';
import HostLayout from './Host/HostLayout';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<Abbout />} />
          <Route path='vans' element={<Contact />} />
          <Route path='vans/:id' element={<VansDeatatils />} />
          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
