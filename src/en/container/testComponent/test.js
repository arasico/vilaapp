import React,{Component} from 'react';

import  './style.css';

import TextInput from '../../components/createLandLoard/inputGroup';





class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="test-container">
                    <p>Test Component</p>

                    <TextInput 
                        label="Name"
                        placeholder="Pleas insert"
                        error="please inser crot text"
                    />

            </div>
        );
    }
}
 
export default TestComponent;