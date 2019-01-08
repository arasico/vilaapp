import React , { Component }  from 'react';
import { NavLink } from 'react-router-dom';
import './contactUs.css';

//
// import external component -------------------------------------------->
//
import SubTitle from '../../components/common/subTitle/subTitle';
import InputText from '../../components/commonInput/InputGroup';
import InputTextArea from '../../components/commonInput/InputTextArea';
import Button from '../../components/Button/Button';
import EmailCheckerComponent from '../../components/api/emailChecker';
import PhoneChecker from '../../components/api/mobileNumberChecker';

//
// import Icons -------------------------------------------------------->
//
import Success from '../../../assets/icons/success.svg';
import ArrowRight2 from '../../../assets/icons/arrowright.svg';
import OurLogo from '../../../assets/icons/ourlogo.svg';
import base from '../../components/api/baseURL';



 


class ContactUsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isCheck : false,
            name:'',
            email:'',
            phone:'',
            message:'',
            isLoading:false,
            nameError:'',
            emailError:'',
            phoneError:'',
            messageError:'',



         }
    }

    callSubmit = async(event) => {
        event.preventDefault();

        // clase state bfor call function ----->
        this.setState({
            isLoading:true,
            nameError:'',
            emailError:'',
            phoneError:'',
            messageError:'',
        });

        // data for fetch  ----- >
        const data = {
            'email':this.state.email,
            'name':this.state.name,
            'phone':this.state.phone,
            'message':this.state.message
        }

        // cheack all data in input and if is valid return false
        // i change this function in other component but hear is ok , i dont chnage it.!
       await this.checkDataEntery()

        if(this.state.isCheck === false)
            this.postData(data);
            


    }

    checkDataEntery(){
        const { name, email, phone, message} = this.state;
        this.setState({isCheck:false})

        if(name === null || name.trim() === '' )
        {
            this.setState({ nameError:'Name is requirement.', isCheck: true});
          
        }
        if(email === null || email.trim() === '' )
        {
            this.setState({ emailError:'Email is requirement.', isCheck: true});
            
        }
        if(phone === null || phone.trim() === '' || phone.length !== 11)
        {
            this.setState({ phoneError:'Phone is requirement.', isCheck: true});
         
        }
        if(message === null || message.trim() === '' || message.length < 10)
        {
            this.setState({ messageError:'Message is requirement.', isCheck: true});
           
        }
        if(phone.length === 11){
            if(PhoneChecker(phone) === false){
                this.setState({phoneError : 'Phone number is invalid.', isCheck: true})
            }
        }
        if(email !== null && email !== ''){
            if(EmailCheckerComponent(email) === false){
                this.setState({emailError : 'Email is invalid!', isCheck: true})
            }
        }

      
        // finish loading
        this.setState({ isLoading:false })

        
    }


     postData(data) {
        this.setState({
            isLoading:true
        })
        //  const url =  'http://api.vilaapp.ir/api/v1/contactUs';
         const url =  base.baseURL + 'contactUs';
         console.log(url)
        // Default options are marked with *
    
          return fetch(url, {
              method: "POST", 
              mode: "cors", 
              cache: "no-cache", 
              credentials: "same-origin", 
              headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                  "language" : "en",
              },
              redirect: "follow", 
              referrer: "no-referrer", 
              body: JSON.stringify(data), 
          })
          .then(response =>  {
            response.json()
            // console.log(response.status)
            this.setState({isLoading:false})
            if(response.status === 200)
                this.successMessage(true)
    
          })
          .catch(error => console.log(error))
         
      }

      // when ststus code is 200 suucess message will be show
      successMessage(data){
        if(data === true){
            document.getElementsByClassName('success-message-contact-us')[0].style.display= 'flex';
            document.getElementsByClassName('contact-us-form-container')[0].style.display= 'none';
        }
      }

    changedHandler = (event) =>{
       // console.log(event.target.value)
   
        this.setState({
            [event.target.name]: event.target.value
        }) 
     
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

                    <form className="contact-us-form-container" >
                        <InputText
                            type='text'
                            name="name"
                            placeHolder={'Name'}
                            changed={this.changedHandler}
                            error={this.state.nameError}
                            max={20}
                        /> 

                              <InputText
                            type={'text'} 
                            name="email"
                            placeHolder={'Email'}
                            changed={this.changedHandler}
                            error={this.state.emailError}
                            max={50}
                        /> 

                              <InputText
                            type={'text'} 
                            name="phone"
                            placeHolder={'Phone Number'}
                            changed={this.changedHandler}
                            error={this.state.phoneError}
                            max={11}
                        /> 

                              <InputTextArea
                            type={'text'} 
                            name="message"
                            placeHolder={'Message'}
                            changed={this.changedHandler}
                            error={this.state.messageError}
                            max={2000}
                        /> 

                          <div className="btn-container-form">
                            <Button 
                                isLoading={this.state.isLoading} 
                                title={'Send'} 
                                bgcolor={'#1FC056'} 
                                hoverbgcolor={'#1fc056cc'}
                                click={this.callSubmit}/>
                                
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