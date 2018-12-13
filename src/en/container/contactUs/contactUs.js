import React , { Component }  from 'react';
import './contactUs.css'

import SubTitle from '../../components/common/subTitle/subTitle'


class ContactUsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid">
                <div className="container">
                    <SubTitle label="Contact us" />
                    
                </div>
            </div>
         );
    }
}
 
export default ContactUsComponent;