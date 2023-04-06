
import PropTypes from 'prop-types';



export function HelloWorld({myName, myGithub}) {

    
    return (
    <>
        <h1>Hello World!!! </h1>
        <p>My name is {myName}, i'm learning React!, you can see my other projects in {myGithub}</p>
        <p>This is an react counter app</p>
    </>
    );
};

//here we declare the conditions of the propTypes
HelloWorld.propTypes = {
    //this means that myName mus be a string, this PropTypes comes from the import PropTypes. isRequired means that that valor must be defined
    myName: PropTypes.string.isRequired,
    myGithub: PropTypes.string
}

HelloWorld.defaultProps = {
    myName: 'Vinsmake',
    myGithub: 'github.com/vinsmake'
}