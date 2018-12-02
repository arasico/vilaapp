import React,{Component} from 'react';
import { NavLink  } from 'react-router-dom';

import './style.css';


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

                    <div className="container-fluid vilaapp-way-continu" >
                    
                    </div>




        </div>
         );
    }
}
 
export default LandLoard;