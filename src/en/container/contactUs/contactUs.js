import React , { Component }  from 'react';
import { NavLink } from 'react-router-dom';

import './contactUs.css'

import SubTitle from '../../components/common/subTitle/subTitle'
import InputText from '../../components/commonInput/InputGroup'
import InputTextArea from '../../components/commonInput/InputTextArea'
import Button from '../../components/Button/Button'

// import Icons -------------------------------------------------------->
import Success from '../../../assets/icons/success.svg'
import ArrowRight2 from '../../../assets/icons/arrowright.svg'
import OurLogo from '../../../assets/icons/ourlogo.svg'
 


class ContactUsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    callSubmit(event){
        event.preventDefault();
        //alert("its submit!")
        document.getElementsByClassName('success-message-contact-us')[0].style.display= 'flex';
        document.getElementsByClassName('contact-us-form-container')[0].style.display= 'none'
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

                            <div className="success-message-contact-us fadeInUp"      >
                                    <div className="success-text">
                                        <img src={Success} alt="success" />
                                        <div>
                                            <h2>Your Message has been successfully Send.</h2>
                                            <h3> 
                                            We will read your message and we will respond to you in the shortest time
                                            </h3>
                                        </div>
                                    </div>


                                    <div className="create-btn-information-container-item" onClick={this.goToHome}>
                                        <div className="btn-create-continu btn-go-to-home">
                                            <NavLink to="/home">
                                                <div className="create-btn-container" >
                                                    <span style={{ color: '#8C8C8C' }}>Go to Main Home</span>
                                                    <img src={ArrowRight2} alt="s" style={{ float: "left", paddingLeft: 20 }} />
                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                                    <img className="our-logo" src={OurLogo} alt="vilaapp" />

                                </div>
                  
                    
                </div>
            </div>
         );
    }
}
 
export default ContactUsComponent;