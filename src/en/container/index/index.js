import React, {Component} from 'react';


import './index.css'
import Header from '../../components/header/header' 
import SaerchBox from '../../components/search-index/searchIndex' 


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
            </div>
       
         );
    }
}
 
export default Index;