import React, {Component} from 'react';

import './index.css'

//
// icons ------->
//
import Heart from '../../../assets/icons/index-heart.svg'
import Calender from '../../../assets/icons/index-calendar.svg'
import Star from '../../../assets/icons/index-star.svg'

class EnjoyHousing extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid pt100 pb200">
                <h1 className="center pb50 pt50">Enjoy Housing as a Service</h1>

                <div className="container ">
                        <div className="enjoy-container-item  pt100">
                            <div>
                                <img src={Heart} alt="heart" />
                                <h2>High-quality furnished apartments</h2>
                                <h3>Housing as a Service begins with the apartment. Our high quality standards include Wifi, washing machines and more for every home.</h3>
                            </div>
                            <div>
                                <img src={Calender} alt="calender" />
                                <h2>Book easily</h2>
                                <h3>You simply request an apartment, receive the confirmation and move in. VilaApp ensures fair rental contracts and also offers viewings</h3>
                            </div>
                            <div>
                                <img src={Star} alt="star" />
                                <h2>5-star service</h2>
                                <h3>VilaApp has 5 stars on Google. If something goes wrong, our diligent service team is there for you and happy to assist.</h3>
                            </div>
                        </div>
                </div>
            </div>
         );
    }
}
 
export default EnjoyHousing;