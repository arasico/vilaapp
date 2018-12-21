import React, { Component } from 'react';
import './view.css';

import one from '../../../assets/img/1.jpg'
import two from '../../../assets/img/2.jpg'
import three from '../../../assets/img/3.jpg'
import four from '../../../assets/img/4.jpg'
import five from '../../../assets/img/5.jpg'
import six from '../../../assets/img/6.jpg'
import seven from '../../../assets/img/7.jpg'
import eight from '../../../assets/img/8.jpg'
import pro from '../../../assets/img/pro.jpg'
import location from '../../../assets/img/location.png'

import rooms from '../../../assets/icons/rooms.svg'
import area from '../../../assets/icons/area.svg'
import beds from '../../../assets/icons/beds.svg'
import persons from '../../../assets/icons/persons.svg'
import check from '../../../assets/icons/check.svg'
import callVolum from '../../../assets/icons/callvolume.svg'

// import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';



class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cModal: false,
            showContact:false,
            rooms:2,
            beds:1,
            persons:10,
            area:5000
        }
    }

    showModal = () => {
        this.setState((prevState) => {
            return { cModal: !prevState.cModal };
        });
    }


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    bookRequestBox = React.createRef()

    handleScroll = () => {

        if (window.scrollY >= 700) {
            window.requestAnimationFrame(() => {
                this.bookRequestBox.current.className = ['go-to-fixed book-request-box']
            });
        } else {
            window.requestAnimationFrame(() => {
                this.bookRequestBox.current.className = ['book-request-box']
            });
        }
        // console.log(this.requestBook.current.offsetTop)
        if (window.scrollY > (this.requestBook.current.offsetTop - 700)) {
            this.goToRequest.current.className = ['request-button-box-none']
        } else {
            this.goToRequest.current.className = ['request-button-box']
        }

    };


    goToRequest = React.createRef()
    requestBook = React.createRef()
    
    goToRequestBook = () => {
        window.scrollTo({
            top: this.requestBook.current.offsetTop,
            behavior: "smooth"  // Optional, adds animation
        })

    }


    contactNumberBox = React.createRef()

    contactNumber = () =>{

        this.setState((prevState) => {
            return { showContact: !prevState.showContact };
        });
        
        if(this.state.showContact){
            this.contactNumberBox.current.style.top = '30px'
        }else{
            this.contactNumberBox.current.style.top = '-30px'
        }
    }


    render() {

        let secondCarousel = ['secondCarousel']
        if (this.state.cModal) {
            secondCarousel = ['secondCarouselShow']
        } else {
            secondCarousel = ['secondCarousel']
        }


        return (
            <div className="view">
                <div className="request-button-box" ref={this.goToRequest}  >
                    <p onClick={this.goToRequestBook} className="request-button-tablet" >Request to book</p>
                </div>

                <div className="slider-box">

                    <Carousel showThumbs={false} showStatus={false} showIndicators={false} >
                        <div onClick={this.showModal} style={{ backgroundImage: 'url(' + seven + ')', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '100vh', cursor: 'zoom-in' }} ></div>
                        <div onClick={this.showModal} style={{ backgroundImage: 'url(' + two + ')', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '100vh', cursor: 'zoom-in' }} ></div>
                        <div onClick={this.showModal} style={{ backgroundImage: 'url(' + three + ')', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '100vh', cursor: 'zoom-in' }} ></div>
                        <div onClick={this.showModal} style={{ backgroundImage: 'url(' + four + ')', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '100vh', cursor: 'zoom-in' }} ></div>
                        <div onClick={this.showModal} style={{ backgroundImage: 'url(' + five + ')', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '100vh', cursor: 'zoom-in' }} ></div>
                        <div onClick={this.showModal} style={{ backgroundImage: 'url(' + six + ')', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '100vh', cursor: 'zoom-in' }} ></div>
                        <div onClick={this.showModal} style={{ backgroundImage: 'url(' + one + ')', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '100vh', cursor: 'zoom-in' }} ></div>
                        <div onClick={this.showModal} style={{ backgroundImage: 'url(' + eight + ')', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '100vh', cursor: 'zoom-in' }} ></div>
                    </Carousel>
                    <div className={secondCarousel.join(' ')}  >
                        <span className="close-carousel-modal" onClick={this.showModal} ></span>

                        <div className="modal-carousel">
                            <Carousel showStatus={false} showIndicators={false}>
                                <div>
                                    <img src={seven} alt="modal" />
                                </div>
                                <div>
                                    <img src={two} alt="modal" />
                                </div>
                                <div>
                                    <img src={three} alt="modal" />
                                </div>
                                <div>
                                    <img src={four} alt="modal" />
                                </div>
                                <div>
                                    <img src={five} alt="modal" />
                                </div>
                                <div>
                                    <img src={six} alt="modal" />
                                </div>
                                <div>
                                    <img src={one} alt="modal" />
                                </div>
                            </Carousel>
                        </div>

                    </div>
                </div>


                <div className="two-part" >

                    <div className="book-request-parent view-container-part1" ref={this.requestBook}>
                        <div className="book-request-box" ref={this.bookRequestBox} >
                            <div className="book-request-form" >
                                <h1>New booking request</h1>
                                <div className="book-request-form-box" >
                                    <div className="book-select-time" >
                                        <span>From</span>
                                    </div>
                                    <div className="book-select-time" >
                                        <span>To</span>
                                    </div>
                                </div>
                                <span className="few-day" >2 days with 2 persons</span>
                                <div className="request-to-book" >Request to book</div>
                            </div>
                            <div className="contact-person" >
                                <h1  >Your contact person</h1>
                                <div className="contact-person-box">
                                    <img className="contact-person-img" src={pro} alt="img" />
                                    <span>Sara Judish</span>
                                </div>
                                <div className="contact-number" onClick={this.contactNumber} >
                                    <div className="contact-number-box" ref={this.contactNumberBox} >
                                        <p className="owner-press" >Contact Number</p>
                                        <p className="owner-number" > <img src={callVolum} alt="callVolum" />0936 491 86 06</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="view-container-part2" >


                        <div className="book-price" >
                            <span>1.200.000</span><span> T / Per month</span>
                        </div>

                        <div className="book-apartmant-detail" >
                            <h1>Great and lovely loft in Kish</h1>
                            <p>Apartmant, Floor: 1</p>
                            <div className="apartmant-detail" >
                                <div className="apartmant-detail-box" >
                                    <div className="apartmant-detail-box-img" >
                                        <img src={rooms} alt="img" />
                                    </div>
                                    <span>{this.state.rooms} Rooms </span>
                                </div>
                                <div className="apartmant-detail-box" >
                                    <div className="apartmant-detail-box-img" >
                                        <img src={beds} alt="img" />
                                    </div>
                                    <span>{this.state.beds} Bed </span>
                                </div>
                                <div className="apartmant-detail-box" >
                                    <div className="apartmant-detail-box-img" >
                                        <img src={persons} alt="img" />
                                    </div>
                                    <span>{this.state.persons} Person </span>
                                </div>
                                <div className="apartmant-detail-box" >
                                    <div className="apartmant-detail-box-img" >
                                        <img src={area} alt="img" />
                                    </div>
                                    <span>{this.state.area}  M² </span>
                                </div>
                            </div>

                            <div className="my-line" ></div>
                        </div>


                        <div className="book-about" >


                            <h1>About this listing</h1>
                            <p>I rent a spacious, bright 1.5-room apartment with anteroom and private bath on the 1st floor of a very quiet and conveniently located family home. The house entrance is in common, except for the apartment to be rented are still my study and another room, which is hardly used, on the floor. I myself mostly stay on the ground floor.
            I rent a spacious, bright 1.5-room apartment with anteroom and private bath on the 1st floor of a very quiet and conveniently located family home. The house entrance is in common, except for the apartment to be rented are still my study and another room, which is hardly used, on the floor. I myself mostly stay on the ground floor.I rent a spacious, bright 1.5-room apartment with anteroom and private bath on the 1st floor of a very quiet and conveniently located family home. The house entrance is in common, except for the apartment to be rented are still my study and another room, which is hardly used, on the floor. I myself mostly stay on the ground floor.

    I rent a spacious, bright 1.5-room apartment with anteroom and private bath on the 1st floor of a very quiet and conveniently located family home. The house entrance is in common, except for the apartment to be rented are still my study and another room, which is hardly used, on the floor. I myself mostly stay on the ground floor.</p>
                            <div className="my-line" ></div>
                        </div>





                        <div className="book-services" >
                            <h1>Services</h1>
                            <div className="book-services-box" >
                                <div className="book-service-option" >
                                    <img src={check} alt="img" />
                                    <span>Parking</span>
                                </div>
                                <div className="book-service-option" >
                                    <img src={check} alt="img" />
                                    <span>Wifi</span>
                                </div>
                                <div className="book-service-option" >
                                    <img src={check} alt="img" />
                                    <span>Lundray</span>
                                </div>
                                <div className="book-service-option" >
                                    <img src={check} alt="img" />
                                    <span>Security</span>
                                </div>
                                <div className="book-service-option" >
                                    <img src={check} alt="img" />
                                    <span>Electrick</span>
                                </div>
                            </div>

                            <div className="my-line tablet" ></div>
                        </div>



                        <div className="book-location" >
                            <h1>Location</h1>
                            <img src={location} alt="map" />
                            <div className="my-line" ></div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default View;