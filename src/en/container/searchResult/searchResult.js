
//
//  import oring component 
//
import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import DayPicker, { DateUtils } from 'react-day-picker';

//
// import external component ------- >
//
import SearchResultData from '../../components/searchResultData/searchResultData'
import SearchResultBox from '../../components/searchResultBox/searchResultBox'
import OptionButtonPlus from '../../components/common/optionButtonPlusMinus/optionButton'
import PriceMinMax from '../../components/common/priceMinMax.js/priceMinMax'
import SingleDate from '../../components/singleDate/singleDate'
import PriceInput from '../../components/priceInput/priceInput';

//
// styles and icons ---------->
//
import 'react-day-picker/lib/style.css';
import './searchResult.css';
import arrow from '../../../assets/icons/arrow-down.svg'
import map from './../../../assets/img/map.png'





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
            // start: null,
            // end: null,
            startDate: null,
            endDate: null,
            shortStart: '',
            shortEnd: '',
            value: null,
            person: 0,
            min: 0,
            max: 0,
            room: 0,
            counter: 0,
        };
    }

    componentWillMount = async () => {

        await this.setState({
            // start: new Date(this.getParms('startDate')),
            // end: new Date(this.getParms('endDate')),
            startDate: this.getParms('startDate'),
            endDate: this.getParms('endDate'),
            from: new Date(this.getParms('startDate')),
            to: new Date(this.getParms('endDate')),
            person: this.getParms('person'),
            room: this.getParms('room'),
            min: this.getParms('min') || 100000,
            max: this.getParms('max') || 200000,
            personShow: this.state.person,
            roomShow: this.state.room,
            minShow: this.state.min,
            maxShow: this.state.max,
        })

    }
    componentDidMount = async () => {
        window.addEventListener('scroll', this.handleScroll);
        await this.setState({
            personShow: this.state.person,
            roomShow: this.state.room,
            minShow: this.state.min,
            maxShow: this.state.max,
        })

        // for show in a pice of filter date 
        this.shortDate(this.state.from, this.state.to)

        console.log(this.state)

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

    mapShowHandler = (e) => {
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

    goToView() {
        // window.location.pathname = '/view'
        browserHistory.push("/view/1")


    }

    //apply FILTER
    applyFilter = () => {
        console.log(this.state)
        this.setState({ selectFromTo: false })
    }




    //select days in calender
    handleDayClick = async (day) => {

        // const range = DateUtils.addDayToRange(day, this.state);

        await this.setState({ counter: this.state.counter + 1 })
        let range = {
            from: null,
            to: null
        }
        // set start date 
        if (this.state.counter % 2 === 1) {
            await this.setState({ selectStart: day, selectEnd: null })
            range = {
                from: this.state.selectStart,
                to: this.state.selectEnd
            }
        }
        // set end date
        else {
            await this.setState({ selectStart: this.state.selectStart, selectEnd: day })
            if (Math.round(new Date(this.state.selectStart.getTime())) > Math.round(new Date(day).getTime())) {
                range = {
                    from: this.state.selectEnd,
                    to: this.state.selectStart
                }
            }
            else {
                range = {
                    to: this.state.selectEnd,
                    from: this.state.selectStart
                }
            }
        }

        await this.setState(range);
        await this.setState({
            start: range.from, end: range.to,
            startDate: new Intl.DateTimeFormat('en-US').format(range.from),
            endDate: new Intl.DateTimeFormat('en-US').format(range.to)
        })

        console.log(this.state)



    }

    // short date for show in filter => 1/8 - 1/11
    shortDate = async (start, end) => {
        let startMonth = (start.getMonth() + 1);
        let startDay = start.getDate();

        let endMonth = (end.getMonth() + 1);
        let endDay = end.getDate();

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

    tomanShorter = (value) => {
        const x = value.toString()
        if (x.length > 4)
            return x.slice(0, x.length - 3)
        return x
    }


    insertParam = async (key, value) => {
        // push params in url location query
        await browserHistory.push({
            pathname: this.props.location.pathname,
            query: Object.assign({}, this.props.location.query, { [key]: value })
        });

        console.log(browserHistory.getCurrentLocation())
    }

    // apply DATE button function
    applyDate = async () => {

        if (this.state.selectEnd === null) {
            await this.setState({ selectEnd: this.state.selectStart })
            console.log('kos kesh', this.state)
        }

        // console.log(Math.round(new Date(this.state.startDate.getTime())))
        await this.insertParam('endDate', new Intl.DateTimeFormat('en-US').format(this.state.selectEnd))
        await this.insertParam('startDate', new Intl.DateTimeFormat('en-US').format(this.state.selectStart))

        // for show short date when first click > second click select date
        if (Math.round(new Date(this.state.selectStart).getTime()) > Math.round(new Date(this.state.selectEnd).getTime())) {
            this.shortDate(this.state.selectEnd || this.state.from, this.state.selectStart || this.state.to)
        } else {
            this.shortDate(this.state.selectStart || this.state.from, this.state.selectEnd || this.state.to)
        }

        this.setState({ counter: 0 })



    }

    // apply PERSON button function
    applyPerson = () => {
        this.insertParam('person', this.state.person)

        this.setState({ personShow: this.state.person })

    }

    // apply MINMAX button function
    applyMinMax = async () => {
        await this.insertParam('min', this.state.min)
        await this.insertParam('max', this.state.max)

        this.setState({ minShow: this.state.min, maxShow: this.state.max })

    }

    // apply ROOM button function
    applyRoom = async () => {
        await this.insertParam('room', this.state.room)
        // await this.insertParam('room', this.state.room)

        this.setState({ roomShow: this.state.room })

    }


    changeDateTablet = (value) =>{
       
        // convert timestamp to date format : dd/mm/yyyy ------>
        function timeConverter(value) {
            var a = new Date(value);
            return a.getDate() + '/' + (a.getMonth() + 1) + '/' + a.getFullYear();
        }

        if (this.state.date !== null)
            this.setState({ date: timeConverter(value) })

        this.togglePopup(); // close popup after select time
        console.log("Date picker called!")
        console.log(value)
    }
    onDateChangeTablet = (date) =>{
        this.setState({ date }); 
        this.changeDateTablet(date)
        console.log('2')
    }

    changePriceTablet = async (e) => {
       await this.setState({[e.target.name] : e.target.value})
        
    }
    
    changePersonTablet = async (value) => {
        await this.setState({person : value})
        console.log(this.state)         
     }
    changeRoomTablet = async (value) => {
        await this.setState({room : value})
        console.log(this.state)         
     }


    tabletFilterApply = () => {

    }




    render() {

        // picker dates
        const { from, to } = this.state;
        const modifiers = { start: this.state.from, end: this.state.to };


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
                                <p className="filter-date-desc notCloseMenuLand" >{this.state.shortStart} - {this.state.shortEnd}</p>
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
                                            <div className="date-box2">
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

                        {/* filter box tablet tablet TABLET size  */}
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
                                                <SingleDate name="from" onClick={this.changeDateTablet} 
                                                                        />
                                            </div>
                                            <div className="filter-child">
                                                <SingleDate name="to" onClick={this.changeDateTablet} 
                                                                      />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="filter-box filter-box-thin">
                                        <h1 className="filter-title" >Persons</h1>
                                        <div className="com-increase">
                                            <OptionButtonPlus counter={this.state.person}
                                                change={this.changePersonTablet}
                                                name={this.state.person} />
                                        </div>
                                    </div>
                                    <div className="filter-box filter-box-fat">
                                        <h1 className="filter-title" >Price</h1>

                                        <div className="min-to-max-box notCloseMenuLand" >
                                            <PriceInput name="min" changePriceTablet={this.changePriceTablet} />
                                            <PriceInput name="max" changePriceTablet={this.changePriceTablet} />
                                        </div>
                                    </div>
                                    <div className="filter-box filter-box-thin">
                                        <h1 className="filter-title" >Rooms</h1>
                                        <div className="com-increase" >
                                            <OptionButtonPlus counter={this.state.room}
                                                change={this.changeRoomTablet}
                                                name={this.state.person} />
                                        </div>
                                    </div>
                                </div>
                                <div className="apply-box" onClick={this.tabletFilterApply} ><p>Apply</p></div>
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