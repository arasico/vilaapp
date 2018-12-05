import React, { Component } from 'react'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//
// ENglish Container ------------------------->
//
import HeaderEnglish from './en/components/header/header'
import Index from './en/container/index'
import Landlord from './en/container/landlord/landloard'
import FooterComponent from './en/components/footer/footer'
import Create from './en/container/create/create'


import TestComponent from './en/container/testComponent/test'

 






class RouterComponent extends Component {

    constructor(props) {
      super(props);
      this.state = { current:false   } 
  } 
  
  // shouldComponentUpdate(){
  //   var xx =  window.location.pathname;
  //   console.log(xx)
  //   if(xx !== '/')
  //   this.setState({current:true})
  //   else
  //   this.setState({current:false})
  // }
 
  
    render() {

  
  
      return (
        <Router>
            <div  >
        
                <HeaderEnglish /> 

              <Switch>
                    <Route exact init path="/" component={Index} /> 
                    <Route exact init path="/landlord" component={Landlord} /> 
                    <Route exact init path="/create" component={Create} /> 


                    <Route exact init path="/test" component={TestComponent} /> 

                

              </Switch>
              <FooterComponent />
                  
            </div>
        </Router>
      );
    }
  }
  
  export default RouterComponent;