import React, {Component} from 'react';
import Header from "./header/header";
import Footer from "./footer/footer";
import HeaderComponentAfterLogin from './../components/afterLogin/header/header'


const token = 1;

export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    componentWillMount(){
        console.log("araea")
    }

    render() { 
        return ( 
            <div>
                <div>
                    {token === 2 ?  <Header /> :  <HeaderComponentAfterLogin/> }             
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
 
