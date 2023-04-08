import React from 'react';
import { HelloWorld } from "../HelloWorld";
import { CounterApp } from '../CounterApp';

describe('Rendering main app', () => { 
    test('should return the main app', () => { 
        <React.StrictMode>
        <HelloWorld/>
        <CounterApp defaultValue = {0} />
        </React.StrictMode>
        
     })
 })