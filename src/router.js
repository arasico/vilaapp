import React, { Component } from 'react'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//
// ENglish Container ------------------------->
//
import HeaderEnglish from './en/components/header/header'
import Index from './en/container/index'





class RouterComponent extends Component {

    constructor(props) {
      super(props);
      this.state = {   } 
  } 
  
  
 
  
    render() {
  
  
      return (
        <Router>
            <div  >
        
              {/* <HeaderEnglish /> */}

              <Switch>
                    <Route exact init path="/" component={Index} /> 
              </Switch>
                  
            </div>
        </Router>
      );
    }
  }
  
  export default RouterComponent;