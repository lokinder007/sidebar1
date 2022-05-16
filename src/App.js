import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Errorpage from "./pages/Errorpage";
import Reports from './pages/Reports';
import Products from './pages/Products';
import Messages from './pages/Messages';
import Team from './pages/Team';
import Main from './components/Main';
// import Support from './pages/';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="main">
          <Sidebar />
          <Main />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/reports" exact element={<Reports />} />
            <Route path="/products" exact element={<Products />} />
            <Route path="/team" exact element={<Team />} />
            <Route path="/messages" exact element={<Messages />} />

            <Route path="*" element={<Errorpage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
