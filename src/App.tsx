import './App.css';
import BackStar from './comps/background'
import NavBar from "./comps/NavBar";
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Cards from "./comps/Cards";
import Footer from "./comps/Footer";
import SkillCards from "./comps/SkillCards";

function App() {
    return (
        <div>
            <BackStar/>
            <Router basename={"/"}>
                <NavBar/>
                <Cards/>
                <SkillCards/>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
