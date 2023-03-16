import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Technologies} from "./components/Technogies/Technologies";


function App() {
    return (
        <div className="App">
            <Header/>
            <Technologies/>
        </div>
    );
}

export default App;
