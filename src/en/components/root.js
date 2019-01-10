import React, {Component} from 'react';
import Header from "./header/header";
import Footer from "./footer/footer";
// import Header from "./header/HeaderEnglish";

  
export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div>
                     <Header />
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
 
