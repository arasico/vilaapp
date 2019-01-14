import React, {Component} from 'react';
import Header from "./header/header";
import Footer from "./footer/footer";
import HeaderComponentAfterLogin from './../components/afterLogin/header/header'

export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div>
                     {/* <Header />  */}
                     <HeaderComponentAfterLogin/>
                </div>
                <div> 
                    {this.props.children}
                </div>
                <div>
                    <Footer />
                </div>
            </div>
         );
    }
}
 
