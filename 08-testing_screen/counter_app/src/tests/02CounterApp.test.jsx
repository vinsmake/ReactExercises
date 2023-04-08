import { fireEvent, render, screen } from '@testing-library/react';
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

      test('should increase when clic', () => { 
        
        render( <CounterApp defaultValue = {defaultValue} /> );
        fireEvent.click( screen.getByTestId("test-btn-+1") )
          expect( screen.getByTestId("IDcounterApp").innerHTML).toBe("1");
       })


      test('should decrease when clic', () => { 
        
        render( <CounterApp defaultValue = {defaultValue} /> );
        fireEvent.click( screen.getByTestId("test-btn--1") )
          expect( screen.getByTestId("IDcounterApp").innerHTML).toBe("-1");
       })


      test('should reset when clic', () => { 
        
        render( <CounterApp defaultValue = {defaultValue} /> );
        fireEvent.click( screen.getByTestId("test-btn-reset") )
          expect( screen.getByTestId("IDcounterApp").innerHTML).toBe("0");
       })


      test('should function every button when clic', () => { 
        //sujeto de prueba
        render( <CounterApp defaultValue = {defaultValue} /> ); 

        //estimulos
        fireEvent.click( screen.getByTestId("test-btn-reset") )
        fireEvent.click( screen.getByTestId("test-btn--1") )
        fireEvent.click( screen.getByTestId("test-btn--1") )
        fireEvent.click( screen.getByTestId("test-btn-reset") )
        fireEvent.click( screen.getByTestId("test-btn-+1") )
        fireEvent.click( screen.getByTestId("test-btn-+1") )
        fireEvent.click( screen.getByRole('button', {name: 'btn-reset'}) )

        //resultados
          expect( screen.getByTestId("IDcounterApp").innerHTML).toBe("0");
       })

       

 })