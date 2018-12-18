import React, { Component } from 'react';

import SearchResultData from '../../components/searchResultData/searchResultData'
import SearchResultBox from '../../components/searchResultBox/searchResultBox'
import OptionButtonPlus from '../../components/common/optionButtonPlusMinus/optionButton'
import PriceMinMax from '../../components/common/priceMinMax.js/priceMinMax'
import SingleDate from '../../components/singleDate/singleDate'
import PriceInput from '../../components/priceInput/priceInput';

import arrow from '../../../assets/icons/arrow-down.svg'
import map from './../../../assets/img/map.png'

import './searchResult.css';



const styles = {
    map: {
        backgroundImage: 'url(' + map + ')',
        backgroundSize: 'cover',
    }
}


class SerachResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectFromTo: false,
            selectPerson: false,
            selectPrice: false,
            selectRoom: false,
            mapShow: true,
            showFilterMenu: false,
            searchResultBox: true
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
    mapListHome = React.createRef();

    handleScroll = () => {

        //for FILTER
        if (window.scrollY >= 100) {
            this.filter.current.style.top = `0px`;
            this.filter.current.style.position = `fixed`;
        } else {
            this.filter.current.style.top = `${0}px`;
            this.filter.current.style.position = `relative`;
        }

        // for MAP
        if (window.scrollY >= 100 && this.state.mapShow) {
            this.mapListHome.current.className = ['mapFix serachMapActive']
        }
        else if (window.scrollY < 100 && this.state.mapShow) {
            this.mapListHome.current.className = ['serachMapActive']
        }
        else {
            this.mapListHome.current.className = ['searchMap']
        }

        if (window.scrollY >= 100 && this.state.mapShow && ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 450)) {
            this.mapListHome.current.className = ['mapAbs serachMapActive']
            this.setState({ searchResultBox: false })
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

        window.scrollTo({
            top: '0px',
            behavior: "smooth"  // Optional, adds animation
        })
    }


    //show hide filter menu tablet size
    showFilterMenu = () => {
        this.setState((prev) => {
            return {
                showFilterMenu: !prev.showFilterMenu
            }
        })
    }

    closeResultBox = () => {
        this.setState((prev) => {
            return {
                searchResultBox: !prev.searchResultBox
            }
        })
    }

    goToView = () => {
        window.location.pathname = '/view'
    }
    render() {

        let btnList = ['listBtn select-listing-map']
        let btnMap = ['mapBtnActive select-listing-map']

        let searchList = ['searchList']
        let searchMap = ['searchMap']
        let searchResultBox = ['searchResultBox']

        let selectFilter = ['selectFilter']

        let dataShowBox = ['dataShowBox50']

        if (this.state.mapShow) {
            btnMap = ['mapBtnActive select-listing-map']
            searchList = ['searchList']
            btnList = ['listBtn select-listing-map']
            searchResultBox = ['searchResultBox']
            dataShowBox = ['dataShowBox50']
        } else {
            btnMap = ['mapBtn select-listing-map']
            searchList = ['searchList100']
            btnList = ['listBtnActive select-listing-map']
            searchResultBox = ['searchResultBoxHidden']
            dataShowBox = ['dataShowBox33']
        }

        if (window.scrollY >= 100 && this.state.mapShow) {
            searchMap = ['serachMapActive mapFix ']
        } else if (window.scrollY >= 100 && !this.state.mapShow) {
            searchMap = ['searchMap mapFix ']
        } else if (window.scrollY < 100 && this.state.mapShow) {
            searchMap = ['serachMapActive']
        } else {
            searchMap = ['searchMap']
        }

        if (this.state.showFilterMenu) {
            selectFilter = ['selectFilter']
        } else {
            selectFilter = ['selectFilterDown']
        }


        return (
            <div >
                <div className="search-result-box"  >
                    <div className="filter-list-box" ref={this.filter} >

                        <div className="show-filter-menu" onClick={this.showFilterMenu} >
                            <p>Filter</p>
                        </div>

                        <div className="select-filter notCloseMenuLand tabletHidden " >
                            {/* date date date date  */}
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



                            {/* filter select box ====================== */}

                            <div className="select-date notCloseMenuLand" >
                                {this.state.selectFromTo ? <div className="select-from-to filter1 notCloseMenuLand" >
                                    <div className="from-to-box notCloseMenuLand"  >
                                        <div className="filter-children">
                                            <div className="filter-child">
                                                <SingleDate name="from" />
                                            </div>
                                            <div className="filter-child">
                                                <SingleDate name="to" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="select-date-btn notCloseMenuLand"  >
                                        <button className="apply-btn notCloseMenuLand" >Apply</button>
                                    </div>
                                </div> : ''}
                            </div>
                            <div className="select-date" >
                                {this.state.selectPerson ? <div className="select-from-to filter2 notCloseMenuLand" >
                                    <div className="from-to-box notCloseMenuLand" >
                                        <OptionButtonPlus />

                                    </div>
                                    <div className="select-date-btn notCloseMenuLand" >
                                        <button className="apply-btn notCloseMenuLand">Apply</button>
                                    </div>
                                </div> : ''}
                            </div>
                            <div className="select-date" >
                                {this.state.selectPrice ? <div className="select-min-max filter3 notCloseMenuLand" >

                                    <div className="price-min-max-filter" >
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
                                        <OptionButtonPlus />

                                    </div>
                                    <div className="select-date-btn notCloseMenuLand" >
                                        <button className="apply-btn notCloseMenuLand">Apply</button>
                                    </div>
                                </div> : ''}
                            </div>
                        </div>

                        {/* filter box tablet size  */}
                        <div className={selectFilter.join(' ')} >
                            <div className="filter-close" >
                                <h1>Filter</h1>
                                <div className="close-filter-box" onClick={this.showFilterMenu} ></div>
                            </div>
                            <div className="filter-and-apply" >
                                <div className="filter-boxs">
                                    <div className="filter-box  ">
                                        <h1 className="filter-title" >Date</h1>
                                        <div className="filter-children">
                                            <div className="filter-child">
                                                <SingleDate name="from" />
                                            </div>
                                            <div className="filter-child">
                                                <SingleDate name="to" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="filter-box filter-box-thin">
                                        <h1 className="filter-title" >Persons</h1>
                                        <div className="com-increase">
                                            <OptionButtonPlus />
                                        </div>
                                    </div>
                                    <div className="filter-box filter-box-fat">
                                        <h1 className="filter-title" >Price</h1>

                                        <div className="min-to-max-box notCloseMenuLand" >

                                            <PriceInput name="min" />
                                            <PriceInput name="max" />
                                        </div>
                                    </div>
                                    <div className="filter-box filter-box-thin">
                                        <h1 className="filter-title" >Rooms</h1>
                                        <div className="com-increase" >
                                            <OptionButtonPlus />
                                        </div>
                                    </div>
                                </div>
                                <div className="apply-box" ><p>Apply</p></div>
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
                                <span className="select-map-btn"  >Map</span>
                                <p className="full-btn" id="map" onClick={this.mapShowHandler}></p>
                            </div>
                        </div>



                    </div>
                    <div className="map-list-box" >
                        <div className={searchList.join(' ')} >
                            <div className={dataShowBox.join(' ')} >
                                <SearchResultData click={this.goToView} />
                            </div>
                            <div className={dataShowBox.join(' ')} >
                                <SearchResultData click={this.goToView} />
                            </div>
                            <div className={dataShowBox.join(' ')} >
                                <SearchResultData click={this.goToView} />
                            </div>
                            <div className={dataShowBox.join(' ')} >
                                <SearchResultData click={this.goToView} />
                            </div>
                            <div className={dataShowBox.join(' ')} >
                                <SearchResultData click={this.goToView} />
                            </div>
                            <div className={dataShowBox.join(' ')} >
                                <SearchResultData click={this.goToView} />
                            </div>
                            <div className={dataShowBox.join(' ')} >
                                <SearchResultData click={this.goToView} />
                            </div>
                            <div className={dataShowBox.join(' ')} >
                                <SearchResultData click={this.goToView} />
                            </div>
                            <div className={dataShowBox.join(' ')} >
                                <SearchResultData click={this.goToView} />
                            </div>
                            <div className={dataShowBox.join(' ')} >
                                <SearchResultData click={this.goToView} />
                            </div>
                            <div className={dataShowBox.join(' ')} >
                                <SearchResultData click={this.goToView} />
                            </div>

                        </div>
                        <div>
                            <div className={searchMap.join(' ')} style={styles.map} ref={this.mapListHome} >
                            </div>
                            {this.state.searchResultBox ? <div className={searchResultBox.join(' ')}>
                                <SearchResultBox closeResultBox={this.closeResultBox} click={this.goToView} />
                            </div> : ' '}
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default SerachResult;