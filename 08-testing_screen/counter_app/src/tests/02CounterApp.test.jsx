import { render, screen } from '@testing-library/react';
import { CounterApp } from '../CounterApp';

describe('Testing CounterApp', () => { 
    const defaultValue = 0;
    test('should match with the snapshot', () => { 

        const { container } = render( <CounterApp defaultValue = {defaultValue} /> )
        expect( container ).toMatchSnapshot();

     })

     test('should exist', () => { 
        
        render( <CounterApp defaultValue = {defaultValue} /> )
        
        expect( screen.getByTestId("IDcounterApp")).toBeTruthy();
      })

      test('should be 0', () => { 
        
        render( <CounterApp defaultValue = {defaultValue} /> )
        
        expect( screen.getByTestId("IDcounterApp").innerHTML).toBe("0");
      })

      test('should be 0 by rol heading lv3', () => { 
        
        render( <CounterApp defaultValue = {defaultValue} /> )
        
        expect( screen.getByRole('heading', { level: 3 }).innerHTML ).toContain("0");
      })
 })