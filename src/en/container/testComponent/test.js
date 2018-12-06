import React,{Component} from 'react';

import  './style.css';

import TextInput from '../../components/createLandLoard/inputGroup';
import SubTitle from '../../components/common/subTitle/subTitle';
import Droplist from '../../components/common/typeOfDropList/typeOfDropList';
import OptionDetails from '../../components/common/optionDetails/optionDetails';

import Rooms from '../../../assets/icons/rooms.svg'
import Checkbox from '../../components/common/textArea/textArea';





class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="test-container">
                 
                    <OptionDetails img={Rooms} />
                 
                      <div style={{width:"100%", height:700, margin:"auto"}}>
                        <Checkbox   />
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