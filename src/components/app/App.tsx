import React from 'react';
import './App.css';
import {Dock} from "../dock/dock";

const App: React.FC = () => {
    return (
        <div className="App">
            <Dock buttons={"Folder"}/>
        </div>
    );
};

export default App;
