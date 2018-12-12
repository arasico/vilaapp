import React, { Component } from 'react';
import './view.css';

import one from '../../../assets/img/1.jpg'
import two from '../../../assets/img/2.jpg'
import three from '../../../assets/img/3.jpg'
import rooms from '../../../assets/icons/rooms.svg'
import area from '../../../assets/icons/area.svg'
import beds from '../../../assets/icons/beds.svg'
import persons from '../../../assets/icons/persons.svg'
import check from '../../../assets/icons/check.svg'
import location from '../../../assets/img/location.png'

// import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';

class View extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="view">
                <Carousel showThumbs={false} showStatus={false} showIndicators={false} emulateTouch>
                    <div>
                        <div style={{ backgroundImage: 'url(' + one + ')', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '100vh' }} ></div>
                    </div>
                    <div>
                        <div style={{ backgroundImage: 'url(' + two + ')', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '100vh' }} ></div>

                    </div>
                    <div>
                        <div style={{ backgroundImage: 'url(' + three + ')', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '100vh' }} ></div>

                    </div>
                </Carousel>

                <div className="two-part" >

                    <div className="book-request-parent view-container-part1" >

                        <div className="book-request-box" >
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
                                <div className="request-to-book" >Request to book</div>
                            </div>
                            <div className="contact-person" >
                                <h1  >Your contact person</h1>
                                <div className="contact-person-box">
                                    <img className="contact-person-img" src={one} alt="img" />
                                    <span>Sara Judish</span>
                                </div>
                                <div className="contact-number" >Contact Number</div>


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
                                    <span>2 Rooms </span>
                                </div>
                                <div className="apartmant-detail-box" >
                                    <div className="apartmant-detail-box-img" >
                                        <img src={beds} alt="img" />
                                    </div>
                                    <span>2 Bed </span>
                                </div>
                                <div className="apartmant-detail-box" >
                                    <div className="apartmant-detail-box-img" >
                                        <img src={persons} alt="img" />
                                    </div>
                                    <span>2 Person </span>
                                </div>
                                <div className="apartmant-detail-box" >
                                    <div className="apartmant-detail-box-img" >
                                        <img src={area} alt="img" />
                                    </div>
                                    <span>45 M </span>
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

                        <div className="my-line" ></div>
                        </div>



                        <div className="book-location" >
                            <h1>Location</h1>
                            <img src={location} alt="map" />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default View;