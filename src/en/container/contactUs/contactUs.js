import React , { Component }  from 'react';
import './contactUs.css'

import SubTitle from '../../components/common/subTitle/subTitle'
import InputText from '../../components/commonInput/InputGroup'
import InputTextArea from '../../components/commonInput/InputTextArea'
import Button from '../../components/Button/Button'


class ContactUsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    callSubmit(event){
        event.preventDefault();
        alert("its submit!")
    }
    render() { 
        return ( 
            <div className="container-fluid">
                <div className="container pt100">
                    <SubTitle label="Contact us" />
                    <div className="contact-us-note">
                    <h3>Customer Support</h3>
                    <p>
                    Thank you for using <b>VilaApp</b>! Please complete the form below, so we can provide quick and efficient service. if this is an urgent matter please contact Customer support: <b>support@vilaApp.ir</b>
                    </p>
                    </div>

                    <form className="contact-us-form-container" onSubmit={this.callSubmit}>
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

                          <div className="btn-container-form">
                            <Button title={'Send'} bgcolor={'#1FC056'} hoverbgcolor={'#1fc056cc'} />
                          </div>
                    </form>
                  
                    
                </div>
            </div>
         );
    }
}
 
export default ContactUsComponent;