
import { render } from '@testing-library/react';
import { CounterApp } from '../CounterApp';

describe('Rendering CounterApp', () => { 
    test('should match with the snapshot', () => { 

        const { container } = render( <CounterApp defaultValue = {0} /> )
        
        expect( container ).toMatchSnapshot();
     })
 })