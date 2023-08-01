import { useContext } from "react"
import { VinsmakeContext } from "./context/UserContext";

export const Home = () => {

    const {user} = useContext( VinsmakeContext );


    return (
    <>
        <h1>Home</h1>

        <pre>
            {JSON.stringify(user, null, 1)}
        </pre>
    </>
    )
}