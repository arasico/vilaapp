import React, { Component } from 'react';

import arrow from '../../../assets/icons/arrow-down.svg'

import './style.css';





class SerachResult extends Component {



    constructor(props) {
        super(props);
        this.state = {
            selectFromTo: false
        };

        this.selectFromToHandler = this.selectFromToHandler.bind(this);
    }


    selectFromToHandler = () => {
        this.setState((prev) => {
            return {
                selectFromTo: !prev.selectFromTo
            }
        })
    }


    render() {


        return (
            <div >

                <div className="search-result-box" >
                    <div className="filter-list-box" >
                        <div className="select-filter">
                            <div className="select-filter-child" onClick={this.selectFromToHandler}>
                                <p className="filter-date-drop">Dates</p>
                                <img src={arrow} style={{ marginLeft: 10, marginTop: 5, height: 11, width: 11, float: 'right' }} alt="arrow" />
                                <div className="select-date" >

                                    {this.state.selectFromTo ? <div className="select-from-to" >
                                        <div className="select-from" >From</div>
                                        <div className="select-to" >To</div>
                                    </div> : ''}
                                </div>
                                <p className="filter-date-desc" >From To</p>
                            </div>
                            <div className="select-filter-child">
                                <div>Person</div>
                                <span>1 </span>
                            </div>
                            <div className="select-filter-child">
                                <div>Price</div>
                                <span>Min Max</span>
                            </div>
                            <div className="select-filter-child">
                                <div>Rooms</div>
                                <span>1+</span>
                            </div>
                        </div>
                        <div className="select-griding">
                            <div><i className="fas fa-list-ul"></i><span>List</span></div>
                            <div><i className="fas fa-map-marker-alt"></i><span>Map</span></div>
                        </div>
                    </div>
                    <div>
                        <div className="serach-map-box" >
                            MAP
                        </div>
                        <div className="search-show-box" >
                            LAZY SHOW
                        </div>
                    </div>
                </div>





            </div >
        );
    }
}

export default SerachResult;