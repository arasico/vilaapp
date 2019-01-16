import React, {Component} from 'react';
import Header from "./header/header";
import Footer from "./footer/footer";
import HeaderComponentAfterLogin from './../components/afterLogin/header/header'
import Token from './api/token';


 
export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        console.log(Token)
 
    }

    componentWillReceiveProps(prevProps, prevState){
        // console.log("resive")
        // console.log(prevProps)
        // console.log(prevState)

 
    }

    render() { 
        return ( 
            <div>
                <div>
                    {Token === null ? ( <Header /> ): ( <HeaderComponentAfterLogin/> )}            

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
 
