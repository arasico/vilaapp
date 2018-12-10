
import React, {Component} from 'react';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';

import arrow from '../../../../assets/icons/arrow-down.svg'

import './style.css';

 

class Droplist extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectType:''
         }
         this.onSelectType = this.onSelectType.bind(this)
    }


    onSelectType({ key }) {  
        this.setState({selectType:key})
      }

    render() { 

        const SelectType = (
            <Menu onSelect={this.onSelectType}>
               
              <MenuItem key="Apartment" style={{fontSize: 16}}>Apartment</MenuItem>
              <Divider />
              <MenuItem key="Villa" style={{fontSize: 16}}>Villa</MenuItem>
              <Divider />
              <MenuItem key="House" style={{fontSize: 16}}>House</MenuItem>              
              <Divider />
              <MenuItem key="Wooden cottage" style={{fontSize: 16}}>Wooden cottage</MenuItem>
            </Menu>
          );
          

        return (

            <div>
                <div  className="select-type-container">
                        <span className="lbl-select-type">{this.props.label}</span>

                             <Dropdown
                                trigger={['click']}
                                overlay={SelectType}
                                animation="slide-up" 
                            >
                            <div className="select-type-drop-list">{this.state.selectType}<img src={arrow} style={{paddingLeft:10, paddingTop:5, height:11, width:11, float:'right' }}  alt="arrow"/> </div>
                        </Dropdown>

                    </div>
            </div>
          );
    }
}
 
export default Droplist;
