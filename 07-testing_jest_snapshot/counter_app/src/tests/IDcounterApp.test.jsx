
import { render } from '@testing-library/react';
import { CounterApp } from '../CounterApp';

describe('Rendering CounterApp', () => { 
    test('should match with 0', () => { 

        const { getByTestId } = render( <CounterApp defaultValue = {0} /> )
        
        expect( getByTestId("IDcounterApp").innerHTML ).toContain("0");
     })
 })