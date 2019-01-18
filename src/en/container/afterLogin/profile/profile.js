import React, { Component } from 'react';
import './profile.css';

//
// Internal Component------->
//
import InputText from '../../components/commonInput/InputGroup';
import Button from '../../components/Button/Button';
import SubTitle from '../../../components/common/subTitle';

//
// icons and images ----->
//
import imageload from './../../../assets/icons/imageload.svg'






class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }


    render() {




        return (
            <div className="profile container">
               <SubTitle label="My Profile" />
                <div className="myLine" ></div>
                <div className="detaile-upload">
                    <div className="image-upload">
                        <h1>Image Profile</h1>
                        <div className="image-upload-logo">
                            <img src={imageload} alt="imageload" ></img>

                        </div>
                        <p>click or drage ang drop your image for upoading</p>
                    </div>
                    <div className="detaile-input">
                        <InputText
                            type='text'
                            name="Name and Family"
                            placeHolder={'Name and Family'}
                            changed={this.changedHandler}
                            error={this.state.nameError}
                            max={20}
                        />
                        <InputText
                            type='text'
                            name="Email"
                            placeHolder={'Email'}
                            changed={this.changedHandler}
                            error={this.state.nameError}
                            max={20}
                        />
                        <InputText
                            type='text'
                            name="Mobile"
                            placeHolder={'Mobile'}
                            changed={this.changedHandler}
                            error={this.state.nameError}
                            max={20}
                        />
                        <InputText
                            type='text'
                            name="Telephone"
                            placeHolder={'Telephone'}
                            changed={this.changedHandler}
                            error={this.state.nameError}
                            max={20}
                        />
                        <InputText
                            type='text'
                            name="Address"
                            placeHolder={'Address'}
                            changed={this.changedHandler}
                            error={this.state.nameError}
                            max={20}
                        />
                        <Button title="Save" bgcolor="#00C65D" hoverbgcolor="#00ad51"></Button>

                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;