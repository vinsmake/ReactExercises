import { VinsmakeContext } from "./UserContext"

const user = {
    id: 1,
    name: 'vinsmake',
    email: 'ps.enrique.e@gmail.com'
}

export const UserProvider = ({children}) => {
    return (
        <VinsmakeContext.Provider value={{Hola: 'Mundo', user: user}}>
            {children}
        </VinsmakeContext.Provider>
    )
}