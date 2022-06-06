import React, {useEffect, useState} from "react";
import './styles/App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Leagues from "./pages/Leagues";
import logo from "./images/logo.svg";

export default function App() {
    const spinner = document.getElementById('spinner');
    if (spinner && !spinner.hasAttribute('hidden')) {
        spinner.setAttribute('hidden', 'true');
    }
    if(window.location.pathname.toLowerCase().includes('/league?id=')){
        console.log('jskdjaskd', window.location.pathname)
    }
    function Header() {
        return (
            <header>
                <img src={logo} className="logo" alt="logo" />
                <a className="menu-leagues" href="/leagues"><div>Leagues</div></a>
                <a className="menu-teams" href="/teams"><div>Teams</div></a>
            </header>
        );
    }

    return (
        <Router>
            <Header/>
            <div>
                <Routes>
                    <Route exact path="/" element={
                        <div className="Leagues">
                            <Leagues />
                        </div>}/>

                    <Route exact path="/leagues" element={
                        <div className="Leagues">
                            <Leagues />
                        </div>}/>

                  {/*   <Route exact path="/league?id=5" element={
                        <div className="Leagues22">
                            <Leagues />
                        </div>}/> */}

                    <Route exact path="/teams" element={
                        <div className="League1">
                            <Leagues />
                        </div>}/>
                </Routes>
            </div>
        </Router>

    );
}