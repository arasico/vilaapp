import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Map, Marker, MarkerLayout } from 'yandex-map-react';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';
import ReactDropzone from "react-dropzone";

import baseURL from '../../components/api/baseURL';
import MapPicker from '../../components/createLandLoard/mapPicker/mapPicker';

import './style.css';
// import Icons -------------------------------------------------------->
import Pin from '../../../assets/icons/pin.svg';
import arrow from '../../../assets/icons/arrow-down.svg'
import Magnifier from '../../../assets/icons/magnifier.svg'
import ArrowRight from '../../../assets/icons/arrow-right-light.svg'
import ArrowLeft from '../../../assets/icons/arrow-left.svg'
import Close from '../../../assets/icons/close.svg'
import Megaphone from '../../../assets/icons/megaphone.svg'
import Success from '../../../assets/icons/success.svg'
import ArrowRight2 from '../../../assets/icons/arrowright.svg'
import OurLogo from '../../../assets/icons/ourlogo.svg'

import Floors from '../../../assets/icons/floors.svg'
import Beds from '../../../assets/icons/beds.svg'
import Persons from '../../../assets/icons/persons.svg'
import Area from '../../../assets/icons/area.svg'
import Rooms from '../../../assets/icons/rooms.svg'

//
//  ---- End of Icons -------------------------------------------------->
//

import Input from '../../components/commonInput/InputGroup';
import Subtitle from '../../components/common/subTitle/subTitle';
import TypeOfList from '../../components/common/typeOfDropList/typeOfDropList';
import Chechbox from '../../components/common/checkbox/checkbox';
import OptionButton from '../../components/common/optionDetails/optionDetails';
import TextArea from '../../components/common/textArea/textArea';



const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    marginBottom: 8,
    marginRight: 8,
    width: '200px',
    height: '200px',
    padding: 4,
    boxSizing: 'border-box',
    marginTop: 50
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    border: '3px solid #D9D9D9',
    borderRadius: '5px',
    position: 'relative',

}

const img = {
    display: 'block',
    height: '100%',
    textAlign: 'center',
    margin: 'auto',
};




class CreateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: '',
            selectCity: 'Select City',
            person: '',
            files: [],
            selectedFile: [],
            addressValid: true,
            infoValid: true,
            imageValid: true,
        };
        this.onSelectCity = this.onSelectCity.bind(this);
        this.callSearch = this.callSearch.bind(this);
        this.HandelDeleteImg = this.HandelDeleteImg.bind(this);
    }

    tabOne = React.createRef();
    tabTwo = React.createRef();
    tabThree = React.createRef();
    successPart = React.createRef()
    addImagePart = React.createRef()

    tabOneNumber = React.createRef();
    tabOneText = React.createRef();
    tabTwoNumber = React.createRef();
    tabTwoText = React.createRef();
    tabThreeNumber = React.createRef();
    tabThreeText = React.createRef();


    componentDidMount() {
        this.tabOne.current.style.display = 'flex'
        this.tabTwo.current.style.display = 'none'
        this.tabThree.current.style.display = 'none'

        this.tabOneNumber.current.style.backgroundColor = '#C50143'
        this.tabOneNumber.current.style.color = '#fff'
        this.tabOneText.current.style.color = '#C50143'

        window.addEventListener('scroll', this.handleScroll);
        this.getAllCity()

    }

    onDrop = async (files) => {

        await this.setState({
            selectedFile: this.state.selectedFile.concat(files),
        })
        await this.setState({
            files: this.state.selectedFile.map(file => ({
                ...file,
                preview: URL.createObjectURL(file)
            }))
        })
    }

    getAllCity = () => {

        let url = baseURL.baseURL + 'country?country=IR';

        fetch(url, {
            method: "GET",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "language": "en",
            },
        })
            .then(
                res => res.json()
            )
            .then(
                data => {
                    this.setState({ allCity: data.data })
                }
            )

    }


    componentWillUnmount() {
        // Make sure to revoke the data uris to avoid memory leaks
        this.state.files.forEach(f => URL.revokeObjectURL(f.preview))
        window.removeEventListener('scroll', this.handleScroll);
    }

    informationBtns = React.createRef()
    imageBtns = React.createRef()
    myspan1 = React.createRef()
    myspan2 = React.createRef()

    handleScroll = () => {
        if ((window.innerHeight + window.scrollY) >= this.myspan1.current.offsetTop + 200) {
            this.informationBtns.current.className = ['notFixCreateBtn']
        } else if ((window.innerHeight + window.scrollY) < this.myspan1.current.offsetTop + 200) {
            this.informationBtns.current.className = ['fixCreateBtn']
        }

        if ((window.innerHeight + window.scrollY) >= this.myspan2.current.offsetTop + 200) {
            this.imageBtns.current.className = ['notFixCreateBtn']
        } else if ((window.innerHeight + window.scrollY) < this.myspan2.current.offsetTop + 200) {
            this.imageBtns.current.className = ['fixCreateBtn']
        }

    };


    HandelDeleteImg(file, index) {
        const rs = this.state.files;
        delete rs[index];
        this.setState({ files: rs })
        console.log(rs)
    }


    openCity(cityName) {
        var i;
        var x = document.getElementsByClassName("city");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        // console.log(cityName)
        document.getElementById(cityName).style.display = "block";

    }




    goToSecondStep = () => {
        if (this.state.addressValid) {
            this.tabOne.current.style.display = 'none'
            this.tabTwo.current.style.display = 'block'

            this.tabOneNumber.current.style.backgroundColor = '#6FCF97'
            this.tabOneNumber.current.style.color = '#fff'
            this.tabOneText.current.style.color = '#6FCF97'

            this.tabTwoNumber.current.style.backgroundColor = '#C50143'
            this.tabTwoNumber.current.style.color = '#fff'
            this.tabTwoText.current.style.color = '#C50143'
        }
    }

    backToFirstStep = () => {
        this.tabOne.current.style.display = 'block'
        this.tabTwo.current.style.display = 'none'

        this.tabOneNumber.current.style.backgroundColor = '#C50143'
        this.tabOneNumber.current.style.color = '#fff'
        this.tabOneText.current.style.color = '#C50143'

        this.tabTwoNumber.current.style.backgroundColor = '#fff'
        this.tabTwoNumber.current.style.color = '#B3B3B3'
        this.tabTwoText.current.style.color = '#B3B3B3'

    }


    goToThirdStep = () => {
        if (this.state.infoValid) {
            this.tabTwo.current.style.display = 'none'
            this.tabThree.current.style.display = 'block'

            this.tabTwoNumber.current.style.backgroundColor = '#6FCF97'
            this.tabTwoNumber.current.style.color = '#fff'
            this.tabTwoText.current.style.color = '#6FCF97'

            this.tabThreeNumber.current.style.backgroundColor = '#C50143'
            this.tabThreeNumber.current.style.color = '#fff'
            this.tabThreeText.current.style.color = '#C50143'

            // window.scrollTo({
            //     top: '0px',
            //     behavior: "smooth"  // Optional, adds animation
            // })
            // ReactDOM.findDOMNode(this.successPart).focus();
            // ReactDOM.findDOMNode(this.refs.dropdown).focus();

            // ReactDOM.findDOMNode(this.successPart).scrollTo({
            //     top: '0px',
            //     behavior: "smooth"  // Optional, adds animation
            // })
        }
        this._input.focus();

    }

    backToSecondStep = () => {
        this.tabTwo.current.style.display = 'block'
        this.tabThree.current.style.display = 'none'

        this.tabTwoNumber.current.style.backgroundColor = '#C50143'
        this.tabTwoNumber.current.style.color = '#fff'
        this.tabTwoText.current.style.color = '#C50143'

        this.tabThreeNumber.current.style.backgroundColor = '#fff'
        this.tabThreeNumber.current.style.color = '#B3B3B3'
        this.tabThreeText.current.style.color = '#B3B3B3'
    }

    finishStep = () => {
        if (this.state.imageValid) {
            this.tabThreeNumber.current.style.backgroundColor = '#6FCF97'
            this.tabThreeNumber.current.style.color = '#fff'
            this.tabThreeText.current.style.color = '#6FCF97'

            this.successPart.current.style.transform = 'translateX(0px)'
            this.addImagePart.current.style.transform = 'translateX(3000px)'
            this.tabThree.current.style.height = '500px'
            window.scrollTo({
                top: this.successPart.current.offsetTop,
                behavior: "smooth"  // Optional, adds animation
            })

        }
    }
    goToHome = () => {
        this.props.history.push("/");
    }




    onSelectCity = async (e) => {
        await this.setState({ selectCity: e.item.props.title, selectCityTitle: e.item.props.title });
        console.log(e)
    }

    callSearch() {
        alert("serch!")
    }



    render() {

        const { files } = this.state;

        const thumbs = files.map((file, index) => (
            <div key={index} style={thumb}>
                <div style={thumbInner}>
                    <img
                        src={file.preview}
                        style={img}
                        alt={"Privew"}
                    />
                    <div className="imge-uploader-delete-container" onClick={() => this.HandelDeleteImg(files, index)}>
                        <img src={Close} alt="Delete" />
                    </div>
                </div>
            </div>
        ));

        let cities = []
        for (let key in this.state.allCity){
            cities.push({
                config : this.state.allCity[key]
            })
        }

        const SelectCityMenu = (
            <Menu onSelect={this.onSelectCity}>
                {cities.map(data => (
                    <MenuItem key={data.config.id} style={{ fontSize: 16 }} title={data.config.city_en}>{data.config.city_en}</MenuItem>
                ))}
            </Menu>
        )






        return (
            <div className="container-fluid">
                <div className="three-part">
                    <input ref={c => (this._input = c)} className="xxxx" />
                    <div className="container pt120">
                        <div className="tabs-menu-container">
                            <div className="menu-item" id="address" onClick={() => this.openCity('tabOne')}>
                                <div className="tabs-circle-container" ref={this.tabOneNumber}>
                                    1
                            </div>
                                <div className="tabs-circle-container-text" ref={this.tabOneText}>Address</div>
                            </div>

                            <div className="menu-item" id="address" onClick={() => this.openCity('tabTwo')}>
                                <div className="tabs-circle-container" ref={this.tabTwoNumber}>
                                    2
                            </div>
                                <div className="tabs-circle-container-text" ref={this.tabTwoText}>Information</div>
                            </div>

                            <div className="menu-item" id="address" onClick={() => this.openCity('tabThree')}>
                                <div className="tabs-circle-container" ref={this.tabThreeNumber}>
                                    3
                            </div>
                                <div className="tabs-circle-container-text" ref={this.tabThreeText} >Images</div>
                            </div>

                        </div>
                    </div>

                    <div className="container-fluid">


                        <div id="tabOne" ref={this.tabOne} className="basic-tab city ">
                            {/* <Map width="100%" onAPIAvailable={function () { console.log('API loaded'); }} center={[40.754734, 40.583314]} zoom={10}>
                                <Marker lat={40.783379} lon={40.775575} lang={'tr-TR'} >
                                    <MarkerLayout>
                                        <div style={{ borderRadius: '50%', overflow: 'hidden' }}>
                                            <img src="http://loremflickr.com/80/80" alt="Example" />
                                        </div>
                                    </MarkerLayout>
                                </Marker>
                            </Map> */}

                            {/* <div className="map-search-container">
                                <div className="search-box-create-container">
                                    <ul>
                                        <li> <img src={Pin} style={{ height: 25, width: 25 }} alt="pin" /></li>
                                        <li className="where-is" ><h1> Where is your apartment? </h1></li>
                                        <li style={{ paddingRight: 15 }}>
                                            <Dropdown
                                                trigger={['click']}
                                                overlay={SelectCityMenu}
                                                animation="slide-up"
                                            >
                                                <div className="drop-down-list">{this.state.selectCity}<img src={arrow} style={{ marginTop: 5, height: 11, width: 11, float: 'right' }} alt="arrow" /> </div>
                                            </Dropdown>
                                        </li>
                                        <li className="input-create-search" >
                                            <input type="text" className="create-input-location" placeholder="Street No., zip code, City" />
                                        </li>
                                        <li style={{ float: "right", paddingTop: 5 }}>
                                            <div className="search-button" onClick={this.callSearch}>
                                                <img src={Magnifier} style={{ height: 20, width: 20 }} alt="arrow" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>


                            </div> */}

                            <MapPicker/>

                            <div className="create-map-footer" onClick={this.goToSecondStep}>
                                <div className="btn-create-continu  btn-yellow">
                                    <div className="create-btn-container">
                                        <span>Next Step</span>
                                        <img src={ArrowRight} alt="s" className="btn-arrow-right" />
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div id="tabTwo" ref={this.tabTwo} className="basic-tab city container">

                            <div className="create-form-container">
                                <Subtitle label="Basic Infromation" />
                                <div style={{ margin: 10 }}>
                                    <Input type={'text'} placeHolder={'Title'} changed={this.changedHandler} error={'title error'} />
                                </div>
                                <div style={{ margin: 10 }}>
                                    <Input type={'text'} placeHolder={'Daily price'} changed={this.changedHandler} error={'Daily error'} />
                                </div>


                                <div className="create-basic-info-type-container">
                                    <div className="create-basic-info-type-item">
                                        <TypeOfList label="Type of Place" />
                                    </div>
                                    <div className="create-basic-info-type-item">
                                        <OptionButton img={Floors} maxLength={2} maxValue={20} label="Floors" />
                                    </div>

                                </div>

                                <Subtitle label="More details" />

                                <div className="create-basic-info-type-container">
                                    <div className="create-basic-info-type-item">
                                        <OptionButton img={Rooms} maxLength={2} maxValue={20} label="Total Rooms" />
                                    </div>
                                    <div className="create-basic-info-type-item">
                                        <OptionButton img={Beds} maxLength={2} maxValue={20} label="Total Beds" />
                                    </div>
                                </div>
                                <div className="create-basic-info-type-container">
                                    <div className="create-basic-info-type-item">
                                        <OptionButton img={Persons} maxLength={2} maxValue={20} label="Max Persons" />
                                    </div>
                                    <div className="create-basic-info-type-item">
                                        <OptionButton img={Area} maxLength={4} maxValue={9999} label="Total Area M²" />
                                    </div>
                                </div>

                                <Subtitle label="All Service" />

                                <div className="create-checkbox-container">
                                    <ul>
                                        <li>
                                            <Chechbox label="Parking" Id="pool" />
                                        </li>
                                        <li>
                                            <Chechbox label="internet WIFI" Id="dool" />
                                        </li>
                                        <li>
                                            <Chechbox label="have a Lundray" Id="rool" />
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Chechbox label="Heating system" Id="zool" />
                                        </li>
                                        <li>
                                            <Chechbox label="Electrick" Id="kool" />
                                        </li>
                                        <li>
                                            <Chechbox label="have a Pool" Id="boon" />
                                        </li>
                                    </ul>
                                </div>

                                <Subtitle label="Description" />

                                <TextArea label="About this listing" placeholder="please write something about your Home and condition of it . . ." />

                                <span ref={this.myspan1} ></span>

                                <div className="fixCreateBtn" ref={this.informationBtns}>
                                    <div className="create-btn-information-container-item" onClick={this.backToFirstStep}>
                                        <div className="btn-create-continu  btn-silver">
                                            <div className="create-btn-container">
                                                <img src={ArrowLeft} alt="s" className="btn-arrow-left" />
                                                <span style={{ color: '#8C8C8C' }}>Back</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="create-btn-information-container-item" onClick={this.goToThirdStep}>
                                        <div className="btn-create-continu  btn-yellow">
                                            <div className="create-btn-container">
                                                <span>Next Step</span>
                                                <img src={ArrowRight} alt="s" className="btn-arrow-right" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div id="tabThree" ref={this.tabThree} className="basic-tab city container">

                            <div className="box-form"  >
                                <div className="moving-image-box" ref={this.addImagePart}>

                                    <div className="box-image">
                                        <ReactDropzone
                                            accept="image/*"
                                            onDrop={this.onDrop.bind(this)}
                                            className="app">
                                            {
                                                <div className="darg-image-box" >
                                                    {/* <img src={Attach} className="attach-img"  alt="logo" /> */}
                                                    <button className="select-image-btn" >Select your images</button>
                                                    <p className="drag-drop-text" >Drag and Drop or click here for upload photo</p>
                                                </div>
                                            }
                                        </ReactDropzone>
                                        <div className="selected-files">
                                            {thumbs}
                                        </div>

                                    </div>
                                    <div className="line-seprator"></div>

                                    <span ref={this.myspan2} ></span>

                                    <div className="create-btn-information-container" ref={this.imageBtns}>
                                        <div className="create-btn-information-container-item" onClick={this.backToSecondStep}>
                                            <div className="btn-create-continu  btn-silver">
                                                <div className="create-btn-container">
                                                    <img src={ArrowLeft} alt="s" className="btn-arrow-left" />
                                                    <span style={{ color: '#8C8C8C' }}>Back</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="create-btn-information-container-item" onClick={this.finishStep}>
                                            <div className="btn-create-continu  btn-save-list">
                                                <div className="create-btn-container">
                                                    <span style={{ color: '#fff' }} >Save your list</span>
                                                    <img src={Megaphone} className="megaphone" alt="s" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="success-part" ref={this.successPart}  >
                                    <div className="success-text" ref="dropdown">
                                        <img src={Success} alt="success" />
                                        <div>
                                            <h2>Your property has been successfully Added.</h2>
                                            <h3> After reviewing us, it will be placed on the site a few minutes later.</h3>
                                        </div>
                                    </div>


                                    <div className="create-btn-information-container-item" onClick={this.goToHome}>
                                        <div className="btn-create-continu btn-go-to-home">
                                            <div className="create-btn-container">
                                                <span style={{ color: '#8C8C8C' }}>Go to Main Home</span>
                                                <img src={ArrowRight2} alt="go home" className="goHomeIcon" />
                                            </div>
                                        </div>
                                    </div>
                                    <img className="our-logo" src={OurLogo} alt="vilaapp" />

                                </div>

                            </div>


                        </div>

                    </div>

                </div>


            </div>
        );
    }
}

export default CreateComponent;