import React, { Component } from 'react';

import arrow from '../../../assets/icons/arrow-down.svg'
import PriceMinMax from '../../components/common/priceMinMax.js/priceMinMax'
import SearchResultData from '../../components/searchResultData/searchResultData'
import map from './../../../assets/img/map.png'

import './searchResult.css';



const styles = {
    map: {
        backgroundImage: 'url(' + map + ')',
        backgroundSize: 'cover',
    }
}


let ticking = false;

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

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    filter = React.createRef();
    listMap = React.createRef();

    handleScroll = () => {


        if (!ticking && window.scrollY >= 100) {
            window.requestAnimationFrame(() => {
                this.filter.current.style.top = `0px`;
                this.filter.current.style.position = `fixed`;
                ticking = false;
            });
            ticking = true;
        } else {
            window.requestAnimationFrame(() => {
                this.filter.current.style.top = `${0}px`;
                this.filter.current.style.position = `unset`;

                ticking = false;
            });
            ticking = true;
        }
    };

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

    mapShowHandler(e) {
        if (e.target.id === 'list') {
            this.setState({ mapShow: false })
        } else {
            this.setState({ mapShow: true })
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
                    <div className="filter-list-box" ref={this.filter} >

                        {/* date date date date  */}
                        <div className="select-filter notCloseMenuLand" >
                            <div className="select-filter-child notCloseMenuLand" >
                                <p className="filter-date-drop notCloseMenuLand"  >Dates</p>
                                <img src={arrow} style={{ marginLeft: 10, marginTop: -5, height: 11, width: 11, float: 'right' }} alt="arrow" className="notCloseMenuLand" />

                                <p className="filter-date-desc notCloseMenuLand" >From To</p>
                                <p className="my-filter-action notCloseMenuLand" onClick={this.selectFromToHandler}></p>
                            </div>

                            {/* person person person person  */}
                            <div className="select-filter-child notCloseMenuLand">
                                <p className="filter-date-drop notCloseMenuLand" >Person</p>
                                <img src={arrow} style={{ marginLeft: 10, marginTop: -5, height: 11, width: 11, float: 'right' }} alt="arrow" />

                                <p className="filter-date-desc notCloseMenuLand" >1 </p>
                                <p className="my-filter-action notCloseMenuLand" onClick={this.selectPersonHandler}></p>
                            </div>

                            {/* price  price price price */}
                            <div className="select-filter-child notCloseMenuLand">
                                <p className="filter-date-drop notCloseMenuLand" >Price</p>
                                <img src={arrow} style={{ marginLeft: 10, marginTop: -5, height: 11, width: 11, float: 'right' }} alt="arrow" />

                                <p className="filter-date-desc notCloseMenuLand" >Min Max </p>
                                <p className="my-filter-action notCloseMenuLand" onClick={this.selectPriceHandler}></p>
                            </div>

                            {/* room room room room  */}
                            <div className="select-filter-child notCloseMenuLand">
                                <p className="filter-date-drop notCloseMenuLand" >Rooms</p>
                                <img src={arrow} style={{ marginLeft: 10, marginTop: -5, height: 11, width: 11, float: 'right' }} alt="arrow" />

                                <p className="filter-date-desc notCloseMenuLand" >+1 </p>
                                <p className="my-filter-action notCloseMenuLand" onClick={this.selectRoomHandler}></p>
                            </div>

                             {/* filter selet box ====================== */}

                        <div className="select-date notCloseMenuLand" >
                            {this.state.selectFromTo ? <div className="select-from-to filter1 notCloseMenuLand" >
                                <div className="from-to-box notCloseMenuLand"  >
                                    <div className="select-from notCloseMenuLand" >From</div>
                                    <div className="select-to notCloseMenuLand" >To</div>
                                </div>
                                <div className="select-date-btn notCloseMenuLand"  >
                                    <button className="apply-btn notCloseMenuLand" >Apply</button>
                                </div>
                            </div> : ''}
                        </div>
                        <div className="select-date" >
                            {this.state.selectPerson ? <div className="select-from-to filter2 notCloseMenuLand" >
                                <div className="from-to-box notCloseMenuLand" >
                                    <div className="select-from notCloseMenuLand" >From</div>
                                    <div className="select-to notCloseMenuLand" >To</div>
                                </div>
                                <div className="select-date-btn notCloseMenuLand" >
                                    <button className="apply-btn notCloseMenuLand">Apply</button>
                                </div>
                            </div> : ''}
                        </div>
                        <div className="select-date" >
                            {this.state.selectPrice ? <div className="select-min-max filter3 notCloseMenuLand" >
                                <div className="min-to-max-box notCloseMenuLand" >
                                    <PriceMinMax />
                                </div>
                                <div className="select-date-btn notCloseMenuLand" >
                                    <button className="apply-btn notCloseMenuLand">Apply</button>
                                </div>

                            </div> : ''}
                        </div>
                        <div className="select-date notCloseMenuLand" >
                            {this.state.selectRoom ? <div className="select-from-to filter4 notCloseMenuLand" >
                                <div className="from-to-box notCloseMenuLand" >
                                    <div className="select-from notCloseMenuLand" >From</div>
                                    <div className="select-to notCloseMenuLand" >To</div>
                                </div>
                                <div className="select-date-btn notCloseMenuLand" >
                                    <button className="apply-btn notCloseMenuLand">Apply</button>
                                </div>
                            </div> : ''}
                        </div>
                        </div>
                        <div className="select-griding " ref={this.listMap}>
                            <div className={btnList.join(' ')}  >
                                <i className="fas fa-list-ul"></i>
                                <span className="select-list-btn"  >List</span>
                                <p className="full-btn" id="list" onClick={this.mapShowHandler} ></p>
                            </div>
                            <div className={btnMap.join(' ')}  >
                                <i className="fas fa-map-marker-alt"></i>
                                <span className="select-map-btn" onClick={this.mapShowHandler} >Map</span>
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
                            <SearchResultData />
                        </div>
                        <div className={searchMap.join(' ')} style={styles.map} >

                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default SerachResult;