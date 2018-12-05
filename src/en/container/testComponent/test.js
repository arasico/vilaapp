import React,{Component} from 'react';

import  './style.css';

import TextInput from '../../components/createLandLoard/inputGroup';
import SubTitle from '../../components/common/subTitle/subTitle';
import Droplist from '../../components/common/typeOfDropList/typeOfDropList';





class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="test-container">
                    <p>Test Component</p>

                    <SubTitle label="information" />

                    <Droplist  label="Select type"/> 

                    <TextInput 
                        label="Name"
                        placeholder="Pleas insert"
                        error=""
                        labelSecend="Toman/ Month"
                    />
                        <TextInput 
                        label="Price"
                        placeholder="Pleas insert"
                        error="sdsdsd"
                        labelSecend="Toman/ Month"
                    />

                        <TextInput 
                        label="Last Name"
                        placeholder="Pleas insert"
                        error=""
                        labelSecend="Toman/ Month"
                    />

            </div>
        );
    }
}
 
export default TestComponent;