import React,{Component} from 'react';
import { NavLink  } from 'react-router-dom';

import './style.css';
import clock from '../../../assets/icons/clock.svg';
import chart from '../../../assets/icons/chart.svg';
import verify from '../../../assets/icons/verify.svg';


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
                    </div>




        </div>
         );
    }
}
 
export default LandLoard;