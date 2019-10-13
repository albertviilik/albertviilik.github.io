import React from 'react';
import './App.css';
import Display from "../display/display";
import Dock from '../dock/dock'

const App: React.FC = () => {
    return (
        <div className="App">
            <Dock/>
            <Display/>
        </div>
    );
};

export default App;
