import React from 'react';
import './App.css';
import Tictac from "./layout/Tictac";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
    return (
        <div className="container w-25">
            <Header/>
            <Tictac/>
            <Footer/>
        </div>
    );
}

export default App;
