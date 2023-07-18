import './App.css';
import BackStar from './comps/background'
import NavBar from "./comps/NavBar";
import React from "react";
import Cards from "./comps/Cards";
import Footer from "./comps/Footer";
import SkillCards from "./comps/SkillCards";

function App() {
    return (
        <div>
            <BackStar/>
            <NavBar/>
            <Cards/>
            <SkillCards/>
            <Footer/>
        </div>
    );
}

export default App;
