import React, { Component } from 'react'; 
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Router ,  Route , browserHistory , IndexRoute  } from 'react-router'
import {Provider} from 'react-redux';
import store from './en/store';

 
//
// ENglish Container ------------------------->
//
import RootCom from './en/components/root';
import HeaderEnglish from './en/components/header/header'
import Index from './en/container/index'
import Landlord from './en/container/landlord/landloard'
  
import Create from './en/container/create/create'
import View from './en/container/view/view'
 
import ContactUs from './en/container/contactUs/contactUs'
 
import SerachResult from './en/container/searchResult/searchResult'
import TestComponent from './en/container/testComponent/test'
import page404 from './en/container/notFound/notFound'

// after login component ------>
import Setting from './en/container/afterLogin/setting/setting';
import Profile from './en/container/afterLogin/profile/profile';
import Mylist from './en/container/afterLogin/mylist/mylist';
 

import FooterComponent from './en/components/footer/footer'
 






class RouterComponent extends Component {

    constructor(props) {
      super(props);
      this.state = { current:false   } 
  } 
  
 
  
    render() {

 
      return (
        <Provider store={store}>
            <Router history={browserHistory}>
              <Route path="/" component={RootCom}>
                  <IndexRoute   component={Index} /> 
                  <Route   path="home" component={Index} /> 
                  <Route   path="landlord" component={Landlord} /> 
                  <Route   path="contact-us" component={ContactUs} /> 
                  <Route   path="create" component={Create} /> 
                  <Route exact  path="search-result" component={SerachResult}  />  
                  <Route   path="view/:id" component={View} /> 
                  <Route   path="profile" component={Profile} /> 
                  <Route   path="list" component={Mylist} /> 
                  <Route   path="setting" component={Setting} /> 
                  <Route exact  path="test" component={TestComponent} /> 
                  <Route path="*" component={page404} />
              </Route>
            </Router>
        </Provider>
      );
    }
  }
  
  export default RouterComponent;