import React, { Component } from 'react';
import './mylist.css';

//
// Internal Component------->
//
import SubTitle from '../../../components/common/subTitle/subTitle';
import MylistData from '../../../components/mylistData/mylistData'

//
// icons and images ----->
//






class Mylist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status:1,
        }

    }


    render() {


        return (
            <div className="profile container">
               <SubTitle label="My List" />
                <div className="myLine" ></div>
                <div className="mylist-parent">
                    <div className="mylist-box" >
                        <MylistData  status={1} />
                    </div>
                    <div className="mylist-box"  >
                        <MylistData  status={0}/>
                    </div>
                    <div className="mylist-box" >
                        <MylistData    status={2}/>
                    </div>
                    <div className="mylist-box" >
                        <MylistData   status={0}/>
                    </div>
                    <div className="mylist-box" >
                        <MylistData  status={1}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mylist;