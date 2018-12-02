import React,{Component} from 'react';
import { NavLink  } from 'react-router-dom';

import './style.css';
import clock from '../../../assets/icons/clock.svg';
import chart from '../../../assets/icons/chart.svg';
import verify from '../../../assets/icons/verify.svg';
import tick from '../../../assets/icons/tick.svg';



class LandLoard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>

                <div className="container-fluid pb100 pt50" >
                    <div  className="container pt100 pb100 furnished ">
                        <h1 className="pt100">Rent out your </h1>
                        <h1 className="pb100">furnished apartment</h1>

                        <h3 className="pb50">
                            VilaApp makes it easy and convenient to reach thousands of reliable tenants that are looking for a furnished apartment. <br />List once - rent out safely forever
                        </h3>

                        <NavLink to="/#" className="btn  btn-green">Become a landlord</NavLink>
                    </div>
                </div>

                    <div className="container-fluid vilaapp-way" >
                        <div  className="container pt100  wilaap-way-container  ">
                            <h3>Rent out your apartment</h3>
                            <h1>the VilaApp way</h1>
                        </div>
                    </div>

                    <div className="container-fluid " >
                        <div className="container vilaapp-way-continu pt100">
                            <div className="vilaapp-way-continu-items">
                                <img src={clock} alt="Quick and easy process" />
                                <h1>Quick and easy process</h1>
                                <h3>Our fast and transparent booking processes help you rent out your apartment with ease and in no time.</h3>
                            </div>
                            <div className="vilaapp-way-continu-items">
                                <img src={verify} alt="Verified tenants" />
                                <h1>Verified tenants</h1>
                                <h3>We work with 2000+ corporate clients and verify every tenant’s employment relationship and income.</h3>
                            </div>
                            <div className="vilaapp-way-continu-items">
                                <img src={chart} alt="High occupancy rate" />
                                <h1>High occupancy rate</h1>
                                <h3>We make sure that your apartment is never empty.</h3>
                            </div>
                        </div>

                         <div className="container good-hands">
                            <h3>Your furnished apartment</h3>
                            <h1>is in good hands</h1>

                            <div className="good-hands-container">
                                <div className="good-hands-items">
                                    <h3>We know how difficult it can be to rent out an apartment to the right person. VilaApp makes sure that your furnished apartment gets tenants you are looking for.</h3>
                                    <h3>No matter if you want to rent out a furnished apartment, house, studio or a penthouse - once you list it on VilaApp, we take care of the rest.</h3>
                                    <NavLink to="/#" className="btn  btn-green">Become a landlord</NavLink>
                                </div>
                                <div className="good-hands-items">
                                    <ul>
                                        <li>Fast and secure contracting</li>
                                        <li>No exclusivity nor binding contracts</li>
                                        <li>You are in full control over any decision</li>
                                        <li>Professional apartment photo shooting</li>
                                        <li>Individual price and listing advice</li>
                                        <li>Only pay in case of successful bookings</li>
                                        <li>Professional support every working day</li>
                                    </ul>
                                </div>
                            </div>
                         </div>
                    </div>




        </div>
         );
    }
}
 
export default LandLoard;