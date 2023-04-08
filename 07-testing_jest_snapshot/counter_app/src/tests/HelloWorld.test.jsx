const { render } = require("@testing-library/react");
import { HelloWorld } from '../HelloWorld';

describe('Testing <Title/>', () => { 
    test('should match with the snapshot', () => { 

        render( <HelloWorld/> )

     })
 })