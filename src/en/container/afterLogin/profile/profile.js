import React, { Component } from 'react';
import './profile.css';

//
// Internal Component------->
//
import InputText from '../../../components/commonInput/InputGroup';
import Button from '../../../components/Button/Button';
import SubTitle from '../../../components/common/subTitle/subTitle';
import ReactDropzone from "react-dropzone";
import EmailCheckerComponent from '../../../components/api/emailChecker';
import PhoneChecker from '../../../components/api/mobileNumberChecker';

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
            upload: false,

            isLoading:false,
            name:'',
            email:'',
            mobile:'',
            phone:'',
            address:'',
            emailError:'',
            registerNameError:'',
            registerEmailError:'',
            phoneError:'',
            MobileError:'',
            addressError:'',
            errorHandleing:'',
            successMessage:'',
            registerMobileError:''
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



    callSubmit = async(event) => {
        event.preventDefault();
        this.setState({
            isLoading:true,
            registerEmailError:'',
            registerNameError:'',
            phoneError:'',
            MobileError:'',
            addressError:'',
            errorHandleing:'',
            successMessage:''
        })

        console.log(`
        the state is :
        --------------------------
        name:    ${this.state.name}
        email:   ${this.state.email} 
        mobile: ${this.state.mobile}
        phone: ${this.state.phone}
        adress: ${this.state.address}
        `);

        const data = {
            'email':this.state.email,
            'name':this.state.name,
            'mobile':this.state.mobile,
            'phone':this.state.phone,
            'address':this.state.address
        }

       await this.checkDataEntery()

        // after conterol input will be call ------->
        if(this.state.isCheck === false) 
        {
            const request = await this.postData(data,'auth/email/register');
                
          //  console.log(request.status)

            if(request.status === 200)  // response success and create account
                this.setState({
                    successMessage:'Your account has been successfully created. '
                })
            if(request.status === 400)  // Email is already status code is 400
                this.setState({
                    errorHandleing:'this email is exists.'
                })
            if(request.status !== 400 && request.status !== 200)  // Email is already status code is 400
             {   
                 this.setState({
                    errorHandleing:'Oops something went wrong, please try again.'
                })
                console.log(`error : ststus code: ${request.status} - text:${request.data} `)
            }
       }

        
    }

    checkDataEntery(){
        const { name, email , phone , mobile , address} = this.state;
        this.setState({isCheck:false})

        if(name === null || name.trim() === '' )
        {
            this.setState({ registerNameError:'Name is requirement.', isCheck: true});
          
        }
        if(email === null || email.trim() === '' )
        {
            this.setState({ registerEmailError:'Email is requirement.', isCheck: true});
            
        }

        if(email !== null && email !== ''){
            if(EmailCheckerComponent(email) === false){
                this.setState({registerEmailError : 'Email is invalid!', isCheck: true})
            }
        }



        if(phone === null || phone.trim() === '' || phone.length !== 11){
            this.setState({ phoneError:'Phone is requirement.', isCheck: true});
        }

        if(phone.length === 11){
            if(PhoneChecker(phone) === false){
                this.setState({phoneError : 'Phone number is invalid.', isCheck: true})
            }
        }

        if(mobile === null || mobile.trim() === '' || mobile.length !== 11){
            this.setState({ mobileError:'Mobile is requirement.', isCheck: true});
        }
        if(mobile.length === 11){
            if(PhoneChecker(mobile) === false){
                this.setState({mobileError : 'Mobile number is invalid.', isCheck: true})
            }
        }
       


        if(address.length  < 2 ){
            this.setState({ addressError:'Adrress is requirement.', isCheck: true});
        }
           
        // finish loading
        this.setState({ isLoading:false });

    }


    postData(data,key) {
        this.setState({
            isLoading:true,
            errorHandleing:'',
            successMessage:''
        })

         const url =  base.baseURL + key;

          return fetch(url, {
              method: "POST", 
              cache: "no-cache",  
              headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                  "language" : "en",
                  "agent" : "web" 
              },
              redirect: "follow", 
              referrer: "no-referrer", 
              body: JSON.stringify(data), 
          })
          .then(response => {
            const statusCode = response.status
            const data = response.json()
            return Promise.all([statusCode, data])
          })
          .then(([res, data]) => {
            //console.log(res, data)
            this.setState({isLoading: false})
            return ({'status':res, 'data':data.data})
          })
      }
      changedHandler = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        });

   
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
                            name="name"
                            placeHolder={'Name and Family'}
                            changed={this.changedHandler}
                            error={this.state.registerNameError}
                            max={30}
                        />
                        <InputText
                            type='text'
                            name="email"
                            placeHolder={'Email'}
                            changed={this.changedHandler}
                            error={this.state.registerEmailError}
                            max={30}
                        />
                        <InputText
                            type='text'
                            name="mobile"
                            placeHolder={'Mobile'}
                            changed={this.changedHandler}
                            error={this.state.mobileError}
                            max={30}
                        />
                        <InputText
                            type='text'
                            name="phone"
                            placeHolder={'Telephone'}
                            changed={this.changedHandler}
                            error={this.state.phoneError}
                            max={30}
                        />
                        <InputText
                            type='text'
                            name="address"
                            placeHolder={'Address'}
                            changed={this.changedHandler}
                            error={this.state.addressError}
                            max={30}
                        />
                        <Button isLoading={this.state.isLoading} 
                                title="Save" 
                                bgcolor="#00C65D" 
                                hoverbgcolor="#00ad51"
                                click={this.callSubmit}
                                />

                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;