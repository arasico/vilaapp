import React, { Component } from 'react';

import SearchResultData from '../../components/searchResultData/searchResultData'
import SearchResultBox from '../../components/searchResultBox/searchResultBox'
import OptionButtonPlus from '../../components/common/optionButtonPlusMinus/optionButton'
import PriceMinMax from '../../components/common/priceMinMax.js/priceMinMax'
import SingleDate from '../../components/singleDate/singleDate'
import PriceInput from '../../components/priceInput/priceInput';

import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';


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

    static defaultProps = {
        numberOfMonths: 2,
    };
    constructor(props) {
        super(props);
        this.state = {
            selectFromTo: false,
            selectPerson: false,
            selectPrice: false,
            selectRoom: false,
            mapShow: true,
            showFilterMenu: false,
            searchResultBox: true,
            start:null,
            end:null,
            startDate: null,
            endDate: null,
            shortStart: '',
            shortEnd: '',
            value: null,
            person: 0,
            min: 0,
            max: 0,
            room: 0,
        };

        this.mapShowHandler = this.mapShowHandler.bind(this)
        this.handleDayClick = this.handleDayClick.bind(this);
        // this.handleResetClick = this.handleResetClick.bind(this);
        this.tomanShorter = this.tomanShorter.bind(this)

    }

    componentWillMount = async () => {


        await this.setState({
            start: new Date(this.getParms('startDate')),
            end: new Date(this.getParms('endDate')),
            startDate: this.getParms('startDate'),
            endDate: this.getParms('endDate'),
            from: new Date(this.getParms('startDate')),
            to: new Date(this.getParms('endDate')),
            person: this.getParms('person'),
            room: this.getParms('room'),
            min: this.getParms('min') || 100000,
            max: this.getParms('max') || 200000,
            shortStartShow:this.state.shortStart,
            shortEndShow:this.state.shortEnd,
            personShow:this.state.person,
            roomShow:this.state.room,
            minShow:this.state.min,
            maxShow:this.state.max,
        })

        console.log(this.state.startDate)

    }
    componentDidMount = async () => {
        window.addEventListener('scroll', this.handleScroll);
        await this.setState({
            personShow:this.state.person,
            roomShow:this.state.room,
            minShow:this.state.min,
            maxShow:this.state.max,
        })

        // for show in a pice of filter date 
        this.shortDate()

        await this.setState({
            shortStartShow:this.state.shortStart,
            shortEndShow:this.state.shortEnd,
        })

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
        }
            ,
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
        if (e.target.matches('.notCloseMenuLand') ||
            e.target.matches('.RangeExample') ||
            e.target.matches('.DayPicker-wrapper') ||
            e.target.matches('.DayPicker') ||
            e.target.matches('.DayPicker-NavButton') ||
            e.target.matches('.DayPicker-Weekday') ||
            e.target.matches('.DayPicker-Weekday abbr') ||
            e.target.matches('.DayPicker-Week') ||
            e.target.matches('.DayPicker-Months') ||
            e.target.matches('.DayPicker-Caption') ||
            e.target.matches('.DayPicker-Caption div') ||
            e.target.matches('.DayPicker-Day')
        ) {
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

    //apply FILTER
    applyFilter = () => {
        console.log(this.state)
        this.setState({ selectFromTo: false })
    }




    //select days in calender
    handleDayClick = async (day) => {
        const range = DateUtils.addDayToRange(day, this.state);

        await this.setState(range);
        await this.setState({
            start: range.from, end: range.to,
            startDate: new Intl.DateTimeFormat('en-US').format(range.from),
            endDate: new Intl.DateTimeFormat('en-US').format(range.to)
        })

        this.shortDate()
    }

    // short date for show in filter => 1/8 - 1/11
    shortDate = async () => {
        let startMonth = (this.state.start.getMonth() + 1);
        let startDay = this.state.start.getDate();

        let endMonth = (this.state.end.getMonth() + 1);
        let endDay = this.state.end.getDate();

        await this.setState({ shortStart: (startDay + '/' + startMonth), shortEnd: (endDay + '/' + endMonth) })
    }

    getParms(value) {

        let url_string = window.location.href
        let url = new URL(url_string);

        const val = url.searchParams.get(value);
        if (val !== null)
            return val;
        return 0
    }




    // change person filter
    handleFilterUpdatePerson = (newValue) => {
        this.setState({
            person: newValue
        });
    }

    // change room filter
    handleFilterUpdateRoom = (newValue) => {
        this.setState({
            room: newValue
        });
    }
    //change min max filter
    changeMinMax = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    tomanShorter(value) {
        const x = value.toString()
        if (x.length > 4)
            return x.slice(0, x.length - 3)
        return x
    }


    insertParam(key, value ) {
        console.log(key, value)

        key = encodeURI(key); value = encodeURI(value);
        var kvp = document.location.search.substr(1).split('&');
        var i = kvp.length; var x; while (i--) {
            x = kvp[i].split('=');

            if (x[0] === key) {
                x[1] = value;
                kvp[i] = x.join('=');
                break;
            }
        }

        if (i < 0) { kvp[kvp.length] = [key, value].join('=')  }
        // slice & to url ---->
        function getAnd() {
            if (window.location.href.indexOf('?') - window.location.href.trim().length === -1 || window.location.href.indexOf('?') === -1)
                return kvp.join('') 
            else
                return kvp.join('&') 
        }
        // add params in url ----->

        let url = this.props.history;
        console.log(this.props)
        url.push({
            ...url,
            pathname: 'search-result',
            search: getAnd() 
        })
    }



    // apply DATE button function
    applyDate = () => {
        this.insertParam('startDate', this.state.startDate)
        this.insertParam('endDate', this.state.endDate)

        this.setState({shortStartShow : this.state.shortStart , shortEndShow : this.state.shortEnd})
    }

    // apply PERSON button function
    applyPerson = () =>{
        this.insertParam('person', this.state.person)

        this.setState({personShow : this.state.person })

    }

    // apply MINMAX button function
    applyMinMax = () => {
        this.insertParam('min', this.state.min)
        this.insertParam('max', this.state.max)

        this.setState({minShow : this.state.min , maxShow : this.state.max})

    }

    // apply ROOM button function
    applyRoom = () =>{
        this.insertParam('room', this.state.room)

        this.setState({roomShow : this.state.room })

    }


    render() {

        // picker dates
        const { from, to } = this.state;
        const modifiers = { start: this.state.start, end: this.state.end };


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
            <div  >
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
                                <p className="filter-date-desc notCloseMenuLand" >{this.state.shortStartShow} - {this.state.shortEndShow}</p>
                                <p className="my-filter-action notCloseMenuLand" onClick={this.selectFromToHandler}></p>
                            </div>

                            {/* person person person person  */}
                            <div className="select-filter-child notCloseMenuLand">
                                <p className="filter-date-drop notCloseMenuLand" >Person</p>
                                <img src={arrow} style={{ marginLeft: 10, marginTop: -5, height: 11, width: 11, float: 'right' }} alt="arrow" />
                                <p className="filter-date-desc notCloseMenuLand" >{this.state.personShow} </p>
                                <p className="my-filter-action notCloseMenuLand" onClick={this.selectPersonHandler}></p>
                            </div>

                            {/* price  price price price */}
                            <div className="select-filter-child notCloseMenuLand">
                                <p className="filter-date-drop notCloseMenuLand" >Price</p>
                                <img src={arrow} style={{ marginLeft: 10, marginTop: -5, height: 11, width: 11, float: 'right' }} alt="arrow" />
                                <p className="filter-date-desc notCloseMenuLand" >{this.tomanShorter(this.state.minShow)} - {this.tomanShorter(this.state.maxShow)} </p>
                                <p className="my-filter-action notCloseMenuLand" onClick={this.selectPriceHandler}></p>
                            </div>

                            {/* room room room room  */}
                            <div className="select-filter-child notCloseMenuLand">
                                <p className="filter-date-drop notCloseMenuLand" >Rooms</p>
                                <img src={arrow} style={{ marginLeft: 10, marginTop: -5, height: 11, width: 11, float: 'right' }} alt="arrow" />
                                <p className="filter-date-desc notCloseMenuLand" >{this.state.roomShow} </p>
                                <p className="my-filter-action notCloseMenuLand" onClick={this.selectRoomHandler}></p>
                            </div>



                            {/* filter select box ====================== */}

                            <div className="select-date notCloseMenuLand" >
                                {this.state.selectFromTo ? <div className="select-from-to filter1 notCloseMenuLand" >
                                    <div className="from-to-box notCloseMenuLand"  >
                                        <div className="filter-children">
                                            <div className="RangeExample">
                                                <DayPicker
                                                    className="Selectable"
                                                    numberOfMonths={this.props.numberOfMonths}
                                                    selectedDays={[from, { from, to }]}
                                                    modifiers={modifiers}
                                                    onDayClick={this.handleDayClick}
                                                    disabledDays={[
                                                        {
                                                            before: new Date(),
                                                        },
                                                    ]}
                                                />

                                            </div>

                                        </div>
                                    </div>
                                    <div className="select-date-btn notCloseMenuLand"  >
                                        <button className="apply-btn " onClick={this.applyDate} >Apply</button>
                                    </div>
                                </div> : ''}
                            </div>

                            {/* person  */}
                            <div className="select-date" >
                                {this.state.selectPerson ? <div className="select-from-to filter2 notCloseMenuLand" >
                                    <div className="from-to-box notCloseMenuLand" >
                                        <OptionButtonPlus counter={this.state.person}
                                            change={this.handleFilterUpdatePerson}
                                            name={this.state.person} />
                                    </div>
                                    <div className="select-date-btn notCloseMenuLand" >
                                        <button className="apply-btn " name="person" onClick={this.applyPerson}>Apply</button>
                                    </div>
                                </div> : ''}
                            </div>

                            {/* min - max */}
                            <div className="select-date" >
                                {this.state.selectPrice ? <div className="select-min-max filter3 notCloseMenuLand" >
                                    <div className="price-min-max-filter" >
                                        <PriceMinMax changed={this.changeMinMax} max={this.state.max} min={this.state.min} />
                                    </div>
                                    <div className="select-date-btn notCloseMenuLand" >
                                        <button className="apply-btn " onClick={this.applyMinMax}>Apply</button>
                                    </div>
                                </div> : ''}
                            </div>

                            {/* room */}
                            <div className="select-date notCloseMenuLand" >
                                {this.state.selectRoom ? <div className="select-from-to filter4 notCloseMenuLand" >
                                    <div className="from-to-box notCloseMenuLand" >
                                        <OptionButtonPlus counter={this.state.room}
                                            change={this.handleFilterUpdateRoom}
                                            name={this.state.room} />
                                    </div>
                                    <div className="select-date-btn notCloseMenuLand" >
                                        <button className="apply-btn " name="room" onClick={this.applyRoom}>Apply</button>
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