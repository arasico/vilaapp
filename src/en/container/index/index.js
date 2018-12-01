import React, {Component} from 'react';


import './index.css'
import Header from '../../components/header/header' 
import SaerchBox from '../../components/search-index/searchIndex' 
import EnjoyHousing from './enjoyHousing';
import WelcomeHome from './welcomeHome';


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid">
                 <div className="main-bord">
                    
                    <Header />

                        <div className="search-box-container">
                            <SaerchBox />
                        </div>

                </div>

                {/* Enjoy Housing as a Service */}
                <EnjoyHousing />


                {/* Welcome home — anywhere, anytime */}
                <WelcomeHome />
            </div>
       
         );
    }
}
 
export default Index;