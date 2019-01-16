import React, { Component } from 'react';
import { Link } from 'react-router'; 
import { browserHistory, Redirect } from 'react-router' 

//
// import external Component    ---->
//
import './header.css'
import '../../header/header.css'


//
// impoert icons     ---->
//
import LogoColorly from '../../../../assets/img/logo-colorly.svg'
import welcomeuser from '../../../../assets/icons/welcomeuser.svg'
import avatar from '../../../../assets/icons/avatar.svg'
import mylist from '../../../../assets/icons/mylist.svg'
import setting from '../../../../assets/icons/setting.svg'
import logout from '../../../../assets/icons/logout.svg'


class HeaderComponentAfterLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isCheck: false,
            forgetPassword: false,
            openLoginModal: false,
            currentPage: false,
            openTabletMenu: false,
            isLoading: false,
            name: '',
            email: '',
            password: '',
            passwordError: '',
            emailError: '',
            registerNameError: '',
            registerEmailError: '',
            registerPasswordError: '',
            forgetEmailError: '',
            errorHandleing: '',
            loginErrorHandleing: '',
            successMessage: '',
            username: 'Aras',
            welcome: false,

        }
    }


    humberger = React.createRef()

   

    onLogOut(){
        localStorage.setItem('authorization', null) 
       // console.log( window.location.pathname)
       
        // Clear query in url ----- >
        browserHistory.push({
            pathname: window.location.pathname,
            query: null
        });
        // rediret in index page after logout ----- >
        window.location.pathname="/"
       
    }

    openTabletMenuHandler = (e) => {
        this.setState((prevState) => {
            return { openTabletMenu: !prevState.openTabletMenu };
        });
        if (this.state.openTabletMenu) {
            this.humberger.current.style.zIndex = '1'
        } else {
            this.humberger.current.style.zIndex = '6'
        }

        if (e.target.id === 'landlord') {
            browserHistory.push('/landlord')
        } else if (e.target.id === 'contact') {
            browserHistory.push('/contact-us')
        } else if (e.target.id === 'home') {
            browserHistory.push('/')
        }
        else {
            return false
        }

    }

    goToHome = () => {
        browserHistory.push('/')
    }

    render() {


        let tabletNav = ['tabletNavUp']
        let line1 = ['line line1']
        let line2 = ['line line2']
        let line3 = ['line line3']


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

                <div className="logo-container">
                    {/* {this.state.currentPage ?  <img src={LogoColorly} className="logo" alt="VilaApp logo"/> :  <img src={LogoWhit} className="logo" alt="VilaApp logo"/>} */}
                    <img src={LogoColorly} className="logo" alt="VilaApp logo" onClick={this.goToHome} />

                </div>
                <div className="navbar-container">
                    <ul className="desktop-nav" >
                        <li className="welcome-btn desktop-nav-child" >
                            <div className="welcome-box" onClick={this.dropDownHandler}>
                                <span className="welcome-text">Welcome , {this.state.username}</span>
                                <img className="welcome-img" src={welcomeuser} alt="welcome" />
                            </div>
                            <ul className="welcomeChilds" ref={this.welcomMenu}>
                                <li className="welcome-child" >
                                    <img className="welcome-child-img" src={avatar} alt="avatar" />
                                    <span className="welcome-child-text">My Profile</span>
                                </li>
                                <li className="welcome-child" >
                                    <img className="welcome-child-img" src={mylist} alt="mylist" />
                                    <span className="welcome-child-text">My List's</span>
                                </li>
                                <li className="welcome-child" >
                                    <Link to="/setting">
                                        <img className="welcome-child-img" src={setting} alt="setting" />
                                        <span className="welcome-child-text">Setting</span>
                                    </Link>
                                </li>
                                <li className="welcome-child" onClick={this.onLogOut} >
                                    <img className="welcome-child-img" src={logout} alt="logout" />
                                    <span className="welcome-child-text">Log Out</span>
                                </li>
                            </ul>
                        </li>|
                        <li className="desktop-nav-child"><Link to="/contact-us">Contact us</Link></li> |
                        <li className="desktop-nav-child"><Link to="/landlord">Become a landlord</Link></li>
                    </ul>

                    <div className="drawerMenu" onClick={(e) => this.openTabletMenuHandler(e)} ref={this.humberger}>
                        <span className={line1.join(' ')}></span>
                        <span className={line2.join(' ')} ></span>
                        <span className={line3.join(' ')} ></span>
                    </div>
                    <ul className={tabletNav.join(' ')} >
                        <li className="tabletNavLi" id="home" onClick={(e) => this.openTabletMenuHandler(e)} ><Link to="/home">Home</Link></li>
                        <li className="tabletNavLi" id="landlord" onClick={(e) => this.openTabletMenuHandler(e)} ><Link to="/landlord">Become a landlord</Link></li>
                        <li className="tabletNavLi" id="contact" onClick={(e) => this.openTabletMenuHandler(e)} ><Link to="/contact-us">Contact us</Link></li>
                        <li className="tabletNavLi" onClick={(e) => this.openTabletMenuHandler(e)} ><span className="login-link-t">Log out</span></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HeaderComponentAfterLogin;


