import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

//
// import external Component    ---->
//
import Input from '../commonInput/InputGroup'
import Button from '../Button/Button'

import "react-tabs/style/react-tabs.css";
import './header.css'

//
// impoert icons     ---->
//
import LogoColorly from '../../../assets/img/logo-colorly.svg'


class HeaderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            forgetPassword: false,
            openLoginModal: false,
            currentPage: false,
            openTabletMenu: false,
            name:'',
            email:'',
            password:'',
            passwordError:'',
            emailError:'',
            registerNameError:'',
            registerEmailError:'',
            registerPasswordError:'',
            forgetEmailError:''
         }
    } 



    // show hide login section
    modalHandler = () => {
        this.setState((prevState) => {
            return { openLoginModal: !prevState.openLoginModal };
        });
        this.setState({ forgetPassword: false, openTabletMenu: false })
    }

    // show hide Login/ForgetPassword section 
    forgetPasswordHandler = () => {
        this.setState((prevState) => {
            return { forgetPassword: !prevState.forgetPassword };
        });
    }

    changedHandler = (e) => {
        //console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        });

        console.log(`
        the state is :
        --------------------------
        name:    ${this.state.name}
        email:   ${this.state.email} 
        message: ${this.state.password}
        `);
    }


    humberger = React.createRef()

    openTabletMenuHandler = (e) => {
        this.setState((prevState) => {
            return { openTabletMenu: !prevState.openTabletMenu };
        });
        if (this.state.openTabletMenu) {
            this.humberger.current.style.zIndex = '1'
        } else {
            this.humberger.current.style.zIndex = '6'
        }

        if(e.target.id === 'landlord'){
            window.location.pathname = 'landlord'
        }else if(e.target.id === 'contact'){
            window.location.pathname = 'contact-us'
        }else if(e.target.id === 'home'){
            window.location.pathname = '/'
        }
        else{
            return false
        }

    }

    goToHome = () => {
        console.log(window.location.pathname)
        window.location.pathname = '/'
    }




    render() {
        let modalBox = ['modalBoxUp']
        let elevator = ['elevatorUp']
        let tabletNav = ['tabletNavUp']
        let line1 = ['line line1']
        let line2 = ['line line2']
        let line3 = ['line line3']

        if (this.state.openLoginModal) {
            modalBox = ['modalBoxDown']
        } else {
            modalBox = ['modalBoxUp']
        }

        if (this.state.forgetPassword) {
            elevator = ['elevatorDown']
        } else {
            elevator = ['elevatorUp']
        }

        if (this.state.openTabletMenu) {
            tabletNav = ['tabletNavDown']
            line1 = ['lineX line1move']
            line2 = ['lineX line2move']
            line3 = ['lineX line3move']
        } else {
            tabletNav = ['tabletNavUp']
            line1 = ['line line1']
            line2 = ['line line2']
            line3 = ['line line3']
        }


        return (

                <div className="header-container">
                    <div className={modalBox.join(' ')} >

                        <span className="close-login-modal" onClick={this.modalHandler} ></span>
                        <div className="login-modal" >
                            <div className={elevator.join(' ')} >
                                {/* forget password */}
                                <div className="forget-pw-box" >
                                    <p className="forget-pw-title" > <i className="far fa-envelope"></i> Forget Password!</p>
                                    <p className="forget-pw-desc" >If you forgot your password for reset your password please enter your email or phone number.</p>
                                    <Input 
                                        type={'text'} 
                                        name={'email'}
                                        name="forgetpassword"
                                        placeHolder={'Email'}
                                        changed={this.changedHandler}
                                        error={this.state.forgetEmailError}
                                    />
                                    <div className="back-reset" >
                                        <Button title={'Reset Password'} bgcolor={'#1FC056'} hoverbgcolor={'#1fc056cc'} />
                                        <p className="forget-pw-back" onClick={this.forgetPasswordHandler} > <i className="fas fa-arrow-left" ></i> Back</p>
                                    </div>
                                </div>
                                {/* login and register */}
                                <div className="my-tab">
                                    <Tabs >
                                        <TabList >
                                            <Tab className="left-tab" > <i className="fas fa-lock"></i>Sign In</Tab>
                                            <Tab className="right-tab" >Sign Up <i className="fas fa-user-lock"></i></Tab>
                                        </TabList>

                                        <TabPanel className="my-react-tab">
                                            <div className="login-box" >
                                                <Input 
                                                    type={'email'} 
                                                    name={'email'}
                                                    placeHolder={'Email/Mobile'} 
                                                    changed={this.changedHandler} 
                                                    error={this.state.emailError} />

                                                <Input 
                                                    type={'password'} 
                                                    name={'password'}
                                                    placeHolder={'Password'} 
                                                    changed={this.changedHandler} 
                                                    error={this.state.passwordError} />

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
                                                <Input 
                                                    type={'text'} 
                                                    name={'name'}
                                                    placeHolder={'Name and Family'} 
                                                    changed={this.changedHandler} 
                                                    error={this.state.registerNameError} />

                                                <Input 
                                                    type={'email'} 
                                                    name={'email'}
                                                    placeHolder={'Email'} 
                                                    changed={this.changedHandler} 
                                                    error={this.state.registerEmailError} />

                                                <Input 
                                                    type={'password'} 
                                                    name={'password'}
                                                    placeHolder={'password'} 
                                                    changed={this.changedHandler} 
                                                    error={this.state.registerPasswordError} />

                                                <Button title={'Register'} bgcolor={'#1FC056'} hoverbgcolor={'#1fc056cc'} />
                                            </div>
                                        </TabPanel>
                                    </Tabs>
                                </div>

                                {/* } */}
                            </div>




                        </div>
                    </div>
                    <div className="logo-container">
                        {/* {this.state.currentPage ?  <img src={LogoColorly} className="logo" alt="VilaApp logo"/> :  <img src={LogoWhit} className="logo" alt="VilaApp logo"/>} */}
                        <img src={LogoColorly} className="logo" alt="VilaApp logo" onClick={this.goToHome} />

                    </div>
                    <div className="navbar-container">
                        <ul className="desktop-nav" >
                            <li onClick={this.modalHandler} ><span className="login-link-d">Log in/Sign up</span></li>
                            <li><NavLink to="/contact-us">Contact us</NavLink></li>
                            <li><NavLink to="/landlord">Become a landlord</NavLink></li>
                        </ul>

                        <div className="drawerMenu" onClick={(e)=>this.openTabletMenuHandler(e)} ref={this.humberger}>
                            <span className={line1.join(' ')}></span>
                            <span className={line2.join(' ')} ></span>
                            <span className={line3.join(' ')} ></span>
                        </div>
                        <ul className={tabletNav.join(' ')} >
                            <li className="tabletNavLi" id="home" onClick={(e)=>this.openTabletMenuHandler(e)} ><NavLink to="/home">Home</NavLink></li>
                            <li className="tabletNavLi" id="landlord" onClick={(e)=>this.openTabletMenuHandler(e)} ><NavLink to="/landlord">Become a landlord</NavLink></li>
                            <li className="tabletNavLi" id="contact"  onClick={(e)=>this.openTabletMenuHandler(e)} ><NavLink to="/contact-us">Contact us</NavLink></li>
                            <li className="tabletNavLi" onClick={this.modalHandler} ><span className="login-link-t">Log in/Sign up</span></li>
                        </ul>
                    </div>
                </div>
        );
    }
}

export default HeaderComponent;


 