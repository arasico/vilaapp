import React, { Component } from 'react';

import arrow from '../../../assets/icons/arrow-down.svg'
import PriceMinMax from '../../components/common/priceMinMax.js/priceMinMax'
import SearchResultData from '../../components/searchResultData/searchResultData'
import map from './../../../assets/img/map.png'

import './searchResult.css';





class SerachResult extends Component {



    constructor(props) {
        super(props);
        this.state = {
            selectFromTo: false,
            selectPerson: false,
            selectPrice: false,
            selectRoom: false,
            mapShow: true
        };
        this.mapShowHandler = this.mapShowHandler.bind(this)
    }


    selectFromToHandler = (event) => {
        event.preventDefault();
        this.setState((prev) => {
            return {
                selectFromTo: !prev.selectFromTo, selectPerson: false, selectPrice: false, selectRoom: false
            }
        },
            () => {
                document.addEventListener('click', this.closeMenu);
            }
        )
    }
    selectPersonHandler = (event) => {
        event.preventDefault();
        this.setState((prev) => {
            return {
                selectPerson: !prev.selectPerson, selectFromTo: false, selectPrice: false, selectRoom: false,
            }
        },
            () => {
                document.addEventListener('click', this.closeMenu);
            }
        )
    }
    selectPriceHandler = (event) => {
        event.preventDefault();
        this.setState((prev) => {
            return {
                selectPrice: !prev.selectPrice, selectFromTo: false, selectPerson: false, selectRoom: false,
            }
        },
            () => {
                document.addEventListener('click', this.closeMenu);
            }
        )
    }
    selectRoomHandler = (event) => {
        event.preventDefault();
        this.setState((prev) => {
            return {
                selectRoom: !prev.selectRoom, selectPrice: false, selectFromTo: false, selectPerson: false,
            }
        },
            () => {
                document.addEventListener('click', this.closeMenu);
            }
        )
    }

    closeMenu = (e) => {

        if (e.target.matches('.notCloseMenuLand')) {
            this.setState(() => {
                document.addEventListener('click', this.closeMenu);
            });
        } else {
            this.setState({
                selectRoom: false, selectPrice: false, selectFromTo: false, selectPerson: false,
            })
            this.setState(() => {
                document.removeEventListener('click', this.closeMenu);
            });
        }

    }

    mapShowHandler (e) {
        if(e.target.id === 'list'){
            this.setState({mapShow : false})
        }else{
            this.setState({mapShow : true})
        }
    }


    render() {

        let btnList = ['listBtn select-listing-map']
        let btnMap = ['mapBtnActive select-listing-map']
        let searchList = ['searchList']
        let searchMap = ['searchMap']

        if (this.state.mapShow) {
            btnMap = ['mapBtnActive select-listing-map']
            searchMap = ['serachMapActive']
            searchList = ['searchList']
            btnList = ['listBtn select-listing-map']
        } else {
            btnMap = ['mapBtn select-listing-map']
            searchMap = ['searchMap']
            searchList = ['searchList100']
            btnList = ['listBtnActive select-listing-map']
        }


        return (
            <div >
                <div className="search-result-box"  >
                    <div className="filter-list-box" >

                        {/* date date date date  */}
                        <div className="select-filter notCloseMenuLand" >
                            <div className="select-filter-child notCloseMenuLand" >
                                <p className="filter-date-drop notCloseMenuLand" onClick={this.selectFromToHandler} >Dates</p>
                                <img src={arrow} style={{ marginLeft: 10, marginTop: -5, height: 11, width: 11, float: 'right' }} alt="arrow" className="notCloseMenuLand" />
                                <div className="select-date notCloseMenuLand" >
                                    {this.state.selectFromTo ? <div className="select-from-to notCloseMenuLand" >
                                        <div className="from-to-box notCloseMenuLand"  >
                                            <div className="select-from notCloseMenuLand" >From</div>
                                            <div className="select-to notCloseMenuLand" >To</div>
                                        </div>
                                        <div className="select-date-btn notCloseMenuLand"  >
                                            <button className="apply-btn notCloseMenuLand" >Apply</button>
                                        </div>
                                    </div> : ''}
                                </div>
                                <p className="filter-date-desc notCloseMenuLand" >From To</p>
                            </div>

                            {/* person person person person  */}
                            <div className="select-filter-child notCloseMenuLand">
                                <p className="filter-date-drop notCloseMenuLand" onClick={this.selectPersonHandler}>Person</p>
                                <img src={arrow} style={{ marginLeft: 10, marginTop: -5, height: 11, width: 11, float: 'right' }} alt="arrow" />
                                <div className="select-date" >
                                    {this.state.selectPerson ? <div className="select-from-to notCloseMenuLand" >
                                        <div className="from-to-box notCloseMenuLand" >
                                            <div className="select-from notCloseMenuLand" >From</div>
                                            <div className="select-to notCloseMenuLand" >To</div>
                                        </div>
                                        <div className="select-date-btn notCloseMenuLand" >
                                            <button className="apply-btn notCloseMenuLand">Apply</button>
                                        </div>
                                    </div> : ''}
                                </div>
                                <p className="filter-date-desc notCloseMenuLand" >1 </p>
                            </div>

                            {/* price  price price price */}
                            <div className="select-filter-child notCloseMenuLand">
                                <p className="filter-date-drop notCloseMenuLand" onClick={this.selectPriceHandler}>Price</p>
                                <img src={arrow} style={{ marginLeft: 10, marginTop: -5, height: 11, width: 11, float: 'right' }} alt="arrow" />
                                <div className="select-date" >
                                    {this.state.selectPrice ? <div className="select-min-max notCloseMenuLand" >
                                        <div className="min-to-max-box notCloseMenuLand" >
                                            <PriceMinMax />
                                        </div>
                                        <div className="select-date-btn notCloseMenuLand" >
                                            <button className="apply-btn notCloseMenuLand">Apply</button>
                                        </div>

                                    </div> : ''}
                                </div>
                                <p className="filter-date-desc notCloseMenuLand" >Min Max </p>
                            </div>

                            {/* room room room room  */}
                            <div className="select-filter-child notCloseMenuLand">
                                <p className="filter-date-drop notCloseMenuLand" onClick={this.selectRoomHandler}>Rooms</p>
                                <img src={arrow} style={{ marginLeft: 10, marginTop: -5, height: 11, width: 11, float: 'right' }} alt="arrow" />
                                <div className="select-date notCloseMenuLand" >
                                    {this.state.selectRoom ? <div className="select-from-to notCloseMenuLand" >
                                        <div className="from-to-box notCloseMenuLand" >
                                            <div className="select-from notCloseMenuLand" >From</div>
                                            <div className="select-to notCloseMenuLand" >To</div>
                                        </div>
                                        <div className="select-date-btn notCloseMenuLand" >
                                            <button className="apply-btn notCloseMenuLand">Apply</button>
                                        </div>
                                    </div> : ''}
                                </div>
                                <p className="filter-date-desc notCloseMenuLand" >+1 </p>
                            </div>
                        </div>
                        <div className="select-griding ">
                            <div className={btnList.join(' ')}  >
                                <i className="fas fa-list-ul"></i>
                                <span className="select-list-btn"  >List</span>
                                <p className="full-btn" id="list" onClick={this.mapShowHandler} ></p>
                            </div>
                            <div className={btnMap.join(' ')}  >
                                <i className="fas fa-map-marker-alt"></i>
                                <span className="select-map-btn"  onClick={this.mapShowHandler} >Map</span>
                                <p className="full-btn" id="map" onClick={this.mapShowHandler}></p>
                            </div>
                        </div>
                    </div>
                    <div className="map-list-box" >
                        <div className={searchList.join(' ')} >
                            <SearchResultData />
                            <SearchResultData />
                            <SearchResultData />
                            <SearchResultData />
                            <SearchResultData />
                            <SearchResultData />
                            <SearchResultData />
                            <SearchResultData />
                        </div>
                        <div className={searchMap.join(' ')} style={{backgroundImage:'url(' + map + ')' , backgroundSize: 'cover'   }} >

                        </div>
                    </div>
                </div>





            </div >
        );
    }
}

export default SerachResult;