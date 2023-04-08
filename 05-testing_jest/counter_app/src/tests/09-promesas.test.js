import { getHeroeByIdAsync } from '../base-pruebas/09-promesas'

describe('prueba en asincron', () => {

    test('should return a hero', () => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual(
                    {
                        id: 1,
                        name: 'Batman',
                        owner: 'DC'
                    }
                )
                
            })
    })
})
