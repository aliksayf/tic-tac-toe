import React from 'react';
import './App.css';
import Tictac from "./layout/Tictac";
import Header from "./layout/Header";

function App() {
    return (
        <div>
            <Header/>
            <Tictac/>
        </div>
    );
}

export default App;
