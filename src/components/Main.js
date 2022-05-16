import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../pages/Home';
import Products from '../pages/Products';
import Reports from '../pages/Reports';
import Team from '../pages/Team';

const Main = () => {
    return (
        <div className="Main">
            <Home />
            <Reports />
            <Products />
            <Team />
        </div>
    )
}

export default Main