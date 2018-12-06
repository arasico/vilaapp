import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Input from '../commonInput/InputGroup'
import Button from '../Button/Button'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import './header.css'

// import LogoWhit from '../../../assets/img/logo-vilaap-fff.png'
import LogoColorly from '../../../assets/img/logo-colorly.svg'


class HeaderComponent extends Component {

    state = {
        forgetPassword : false,
        openLoginModal:false,
        currentPage: false 
    }

    componentWillMount(){
        console.log(this.state)
    }

    //     componentDidMount(){
    //         var xx =  window.location.pathname;
    //         console.log(xx + "its is -----")
    //         if(xx !== '/')
    //         this.setState({currentPage:true})
    //         else
    //         this.setState({currentPage:false})
    //   }

    modalHandler = () =>{
        this.setState( ( prevState ) => {
            return { openLoginModal: !prevState.openLoginModal };
        } );
    }

    forgetPasswordHandler = () => {
        this.setState({ forgetPassword: true })
    }

    backToLogin = () => {
        this.setState({ forgetPassword: false })
    }


    

   

    render() {
        let modalBox = ['modalBoxUp']
        if(this.state.openLoginModal){
            modalBox = ['modalBoxDown']
        }else{
            modalBox = ['modalBoxUp']
        }
        return (
            <div className="header-container shadow-box">
                 <div className={modalBox.join(' ')} >

                    <span className="close-login-modal" onClick={this.modalHandler} ></span>
                    <div className="login-modal" >
                        {this.state.forgetPassword ? 
                            <div className="forget-pw-box" >
                                <p className="forget-pw-title" > <i className="far fa-envelope"></i> Forget Password!</p>
                                <p className="forget-pw-desc" >If you forgot your password for reset your password please enter your email or phone number.</p>
                                <Input type={'password'} name="forgetpassword" 
                                       placeHolder={'Password'} 
                                       error={'password error'}
                                       />
                                <div className="back-reset" >
                                    <Button title={'Reset Password'} bgcolor={'#1FC056'} hoverbgcolor={'#1fc056cc'} />
                                    <p className="forget-pw-back" onClick={this.backToLogin} > <i className="fas fa-arrow-left" ></i> Back</p>
                                </div>
                            </div>
                            :
                            <Tabs >
                                <TabList  >
                                    <Tab className="left-tab" > <i className="fas fa-lock"></i>Sign In</Tab>
                                    <Tab className="right-tab" >Sign Up <i className="fas fa-user-lock"></i></Tab>
                                </TabList>

                                <TabPanel className="my-react-tab">
                                    <div className="login-box" >
                                        <Input type={'text'} placeHolder={'Email/Mobile'} error={'email or number error'} />
                                        <Input type={'password'} placeHolder={'Password'} error={'password error'} />
                                        <div className="cntr">
                                            <input className="hidden-xs-up" id="cbx" type="checkbox" />
                                            <label className="cbx" htmlFor="cbx"></label>
                                            <label className="checkbox-label" htmlFor="cbx">Keep my password </label>
                                        </div>
                                        <Button title={'Login'} bgcolor={'#0090CF'} hoverbgcolor={'#0090cfcc'} />
                                        <p className="forget-pw-text" onClick={this.forgetPasswordHandler} >Do you forget your password ?</p>
                                    </div>
                                </TabPanel>
                                <TabPanel className="my-react-tab">
                                    <div className="login-box" >
                                        <Input type={'text'} placeHolder={'Name and Family'} error={'name error'}/>
                                        <Input type={'email'} placeHolder={'Email'} error={'email error'}/>
                                        <Input type={'text'} placeHolder={'Mobile'} error={'number error'}/>
                                        <Input type={'password'} placeHolder={'password'} error={'password error'}/>
                                        <Button title={'Register'} bgcolor={'#1FC056'} hoverbgcolor={'#1fc056cc'} />
                                    </div>
                                </TabPanel>
                            </Tabs>

                        }



                    </div>
                </div> 
                <div className="logo-container">
                    {/* {this.state.currentPage ?  <img src={LogoColorly} className="logo" alt="VilaApp logo"/> :  <img src={LogoWhit} className="logo" alt="VilaApp logo"/>} */}
                    <img src={LogoColorly} className="logo" alt="VilaApp logo" />

                </div>
                <div className="navbar-container">
                    <ul>
                        <li onClick={this.modalHandler} ><a href="#home">Log in/Sign up</a></li>
                        <li><NavLink to="/home">Contact us</NavLink></li>
                        <li><NavLink to="/landlord">Become a landlord</NavLink></li>
                    </ul>

                    <div className="drawerMenu">

                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;

        //                