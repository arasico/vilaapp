import React,{Component} from 'react';

import  './style.css';

import TextInput from '../../components/createLandLoard/inputGroup';
import SubTitle from '../../components/common/subTitle/subTitle';
import Droplist from '../../components/common/typeOfDropList/typeOfDropList';
import OptionDetails from '../../components/common/optionDetails/optionDetails';

import Rooms from '../../../assets/icons/rooms.svg'




class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="test-container">
                 <div style={{width:500, margin:'auto'}}>
                    <OptionDetails img={Rooms} />
                 </div>

                    <SubTitle label="information" />

                    <Droplist  label="Select type"/> 

                    <TextInput 
                        label="Name"
                        placeholder="Pleas insert"
                        error=""
                        labelSecend="Toman/ Month"
                    />
               

            </div>
        );
    }
}
 
export default TestComponent;