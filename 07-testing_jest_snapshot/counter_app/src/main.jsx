import React from 'react';
import reactDOM from 'react-dom/client';
import { HelloWorld } from "./HelloWorld";
import { CounterApp } from './CounterApp';
import './styles.css'; //imports styles.css




reactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
        <HelloWorld/>
        <CounterApp defaultValue = {0} />
    </React.StrictMode>
)