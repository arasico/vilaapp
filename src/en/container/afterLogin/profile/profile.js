import React, { Component } from 'react';
import './profile.css';

//
// Internal Component------->
//
import InputText from '../../../components/commonInput/InputGroup';
import Button from '../../../components/Button/Button';
import SubTitle from '../../../components/common/subTitle/subTitle';
import ReactDropzone from "react-dropzone";

//
// icons and images ----->
//
import imageload from '../../../../assets/icons/imageload.svg'
import Close from '../../../../assets/icons/close.svg'


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



class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            selectedFile: [],
            upload: false
        }
    }

    componentWillUnmount() {
        // Make sure to revoke the data uris to avoid memory leaks
        this.state.files.forEach(f => URL.revokeObjectURL(f.preview))
        window.removeEventListener('scroll', this.handleScroll);
    }

    onDrop = async (files) => {

        await this.setState({
            selectedFile: [],
        })

        await this.setState({
            selectedFile: this.state.selectedFile.concat(files),
        })

        console.log(this.state)

        await this.setState({
            files: this.state.selectedFile.map(file => ({
                ...file,
                preview: URL.createObjectURL(file)
            }))
        })
        console.log(this.state)
        if (this.state.files.length >= 1) {
            this.setState({ upload: true })
            console.log(this.state.upload)
        }


    }


    HandelDeleteImg(file, index) {
        const rs = this.state.files;
        delete rs[index];
        this.setState({ files: rs, upload: false })
        console.log(rs)

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


        return (
            <div className="profile container">

                <SubTitle label="My Profile" />
                <div className="myLine" ></div>
                <div className="detaile-upload">
                    {
                        this.state.upload ?
                            <div className="image-thumbnail" >
                                <div className="image-upload">
                                    <h1>Image Profile</h1>
                                    <div className="selected-files">
                                        {thumbs}
                                    </div>

                                    <p>click or drage ang drop your image for upoading</p>
                                </div>
                            </div>
                            :
                            <ReactDropzone
                                accept="image/*"
                                onDrop={this.onDrop.bind(this)}
                                className="app">

                                <div className="image-upload">
                                    <h1>Image Profile</h1>

                                    <div className="image-upload-logo">
                                        <img src={imageload} alt="imageload" ></img>
                                    </div>

                                    <p>click or drage ang drop your image for upoading</p>
                                </div>
                            </ReactDropzone>
                    }

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