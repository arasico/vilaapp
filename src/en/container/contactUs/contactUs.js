import React , { Component }  from 'react';
import './contactUs.css'

import SubTitle from '../../components/common/subTitle/subTitle'
import InputText from '../../components/commonInput/InputGroup'
import InputTextArea from '../../components/commonInput/InputTextArea'


class ContactUsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid">
                <div className="container pt100">
                    <SubTitle label="Contact us" />

                    <form>
                        <InputText
                            type={'text'} name="name"
                            placeHolder={'Name'}
                            changed={this.changedHandler}
                            error={'name is error'}
                        /> 

                              <InputText
                            type={'text'} name="email"
                            placeHolder={'Email'}
                            changed={this.changedHandler}
                            error={'Email is error'}
                        /> 

                              <InputText
                            type={'text'} name="phone"
                            placeHolder={'Phone Number'}
                            changed={this.changedHandler}
                            error={'Phone is error'}
                        /> 

                              <InputTextArea
                            type={'text'} name="message"
                            placeHolder={'Message'}
                            changed={this.changedHandler}
                            error={'name is error'}
                        /> 
                        
                    </form>
                    
                </div>
            </div>
         );
    }
}
 
export default ContactUsComponent;