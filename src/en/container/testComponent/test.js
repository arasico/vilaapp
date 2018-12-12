import React,{Component} from 'react';

import  './style.css';

import OptionButton from '../../components/common/optionButtonPlusMinus/optionButton';


 


class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }




     

  
    render() { 

 
  
          

        return (  
            <div className="test-container">
                 
                <OptionButton title="Person" />

            </div>
        );
    }
}
 
export default TestComponent;