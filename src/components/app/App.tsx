import React from 'react';
import './App.css';
import {Desktop} from "../desktop/desktop";
import {Dock} from "../dock/dock";

const App: React.FC = () => {
    return (
        <div className="App">
            <Desktop>
                <Dock/>
            </Desktop>
        </div>
    );
};

export default App;
