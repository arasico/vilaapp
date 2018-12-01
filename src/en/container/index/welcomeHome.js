import React, {Component} from 'react';

import './index.css'


class WelcomeHome extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid bg-gradient-red">
                <div className="container pb50">
                    <h1 className="center pb50 pt50">Welcome home — anywhere, anytime</h1>

                </div>
            </div>
         );
    }
}
 
export default WelcomeHome;