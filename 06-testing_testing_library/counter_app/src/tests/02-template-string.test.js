        
import { getSaludo } from "../base-pruebas/02-template-string";

describe('Test of getSaludo', () => { 
    
    test('should return hola vinsmake', () => { 
        
        const myName = 'vinsmake';
        
        expect(getSaludo(myName)).toBe(`Hola ${myName}`);

     })
 })

