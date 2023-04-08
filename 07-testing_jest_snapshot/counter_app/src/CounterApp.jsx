import {useState} from 'react';
import PropTypes from 'prop-types';

export function CounterApp ({defaultValue}) {

    //this is the hook. 
    //--variable, action
    //[counting, setCounting]
    // hook to use (initial valor)
    //= useState( 0 );
    //useState changes the state of the --variable
    const [counting, setCounting] = useState( defaultValue );

    function plusClick() {
        //this is important because es changing the state, it's not counting++, its setCounting = counting +1; 
        setCounting(counting + 1)
    };

    const substractClick = () => {
        setCounting(counting - 1)
    };

    function resetClick(params) {
        setCounting(defaultValue)
    }


    return(
    <>
        <h2>This is a Counter App</h2>
        <h4>Which counts +1 every time it's clicked</h4>
        <h3 data-testid="IDcounterApp">{counting}</h3>
        <button onClick={substractClick}>
            -1</button>
        <button onClick={resetClick}>
            Reset</button>
        <button onClick={plusClick}>
            +1</button>
    </>
    );
}

CounterApp.propTypes = {
    //this means that counter mus be a number, this PropTypes comes from the import PropTypes. isRequired means that that valor must be defined
    counting: PropTypes.number.isRequired
}

CounterApp.defaultProps = {

}

