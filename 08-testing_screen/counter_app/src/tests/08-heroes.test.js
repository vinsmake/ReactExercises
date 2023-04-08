import { getHeroeById } from "../base-pruebas/08-imp-exp";

describe('Gets an heroe by ID', () => { 
    test('should return an heroe by id', () => { 
        
        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);

     })
 })


