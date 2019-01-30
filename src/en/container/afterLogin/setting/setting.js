import React, { Component } from 'react';

//
//
//
import SubTitle from '../../../components/common/subTitle/subTitle';
import Input from '../../../components/commonInput/InputGroup';
import Button from '../../../components/Button/Button';
import Token from '../../../components/api/token';

//
import './setting.css'

class Stting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPassword:' ' ,
            newPassword: ' ' ,
            reNewPassword: ' '
        }
    }


    componentDidMount() {
        console.log(Token)
        // if(Token !== null)
        // window.location.pathname="/"
    }

    changedHandler = async (e) =>{
        await this.setState({[e.target.name] : e.target.value})
        console.log(this.state)
    }


    successBox = React.createRef()
    errorBox = React.createRef()  


    callSubmit = async (event) => {
        event.preventDefault();
        this.setState({
            isLoading: true,
            currentPasswordError:'',
            newPasswordError: '',
            reNewPasswordError: '',
            errorHandleing: '',
            successMessage: ''
        })

        console.log(`
        the state is :
        --------------------------
        currentPassword:   ${this.state.currentPassword} 
        newPassword: ${this.state.newPassword}
        reNewPassword: ${this.state.reNewPassword}
        `);

        const data = {
            'currentPassword': this.state.currentPassword,
            'newPassword': this.state.newPassword,
            'reNewPassword': this.state.reNewPassword
        }

        await this.checkDataEntery()

        // after conterol input will be call ------->
        if (this.state.isCheck === false) {
            // const request = await this.postData(data, 'auth/email/register');
            const request = {
                status : 200
            }

            //  console.log(request.status)

            if (request.status === 200){  // response success and create account
                this.setState({
                    successMessage: 'Your account has been successfully created. '
                })
                this.successBox.current.className = "successBox"
            }

            if (request.status === 400) { // Email is already status code is 400
                this.setState({
                    errorHandleing: 'this email is exists.'
                })
                this.errorBox.current.className = "errorBox"
            }


            if (request.status !== 400 && request.status !== 200)  // Email is already status code is 400
            {
                this.setState({
                    errorHandleing: 'Oops something went wrong, please try again.'
                })
                console.log(`error : ststus code: ${request.status} - text:${request.data} `)
            }
        }


    }


    checkDataEntery() {
        const { currentPassword ,  newPassword , reNewPassword } = this.state;
        this.setState({ isCheck: false })

        if (currentPassword === null || currentPassword.trim() === '' || currentPassword.length < 6) {
            this.setState({ currentPasswordError: 'password is requirement.', isCheck: true });
        }
        if (newPassword === null || newPassword.trim() === '' || newPassword.length < 6) {
            this.setState({ newPasswordError: 'new password is requirement.', isCheck: true });
        }
        if (reNewPassword === null || reNewPassword.trim() === '' || reNewPassword.length < 6) {
            this.setState({ reNewPasswordError: 'password is requirement.', isCheck: true });
        }
        if (newPassword !== reNewPassword) {
            this.setState({ reNewPasswordError: 'confirm new password is not equal .', isCheck: true });
            console.log(newPassword !== reNewPassword)
        }

        // finish loading
        this.setState({ isLoading: false });

    }

    postData(data, key) {
        this.setState({
            isLoading: true,
            errorHandleing: '',
            successMessage: ''
        })

        const url = base.baseURL + key;

        return fetch(url, {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "language": "en",
                "agent": "web"
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
                this.setState({ isLoading: false })
                return ({ 'status': res, 'data': data.data })
            })
    }

    focucedHandler = () => {
        this.setState({
            currentPasswordError:'',
            newPasswordError: '',
            reNewPasswordError: '',
        })
    }
    closeSuccessMessage = () =>{
        this.successBox.current.className = "successBoxHidden" // change to initial success msg class
}
closeErrorMessage = () => {
        this.errorBox.current.className = "errorBoxHidden" // change to initial error msg class
}

    render() {
        return (
            <div className="container-fluid pb100 pt50">
                <div className="container pt100 pb100  ">
                    <SubTitle label="Setting" />

                    <form>
                        <Input
                            type={'password'}
                            name={'currentPassword'}
                            placeHolder={'Current Password'}
                            changed={this.changedHandler}
                            focuced={this.focucedHandler}
                            error={this.state.currentPasswordError}
                        />
                        <Input
                            type={'password'}
                            name={'newPassword'}
                            placeHolder={'New Password'}
                            changed={this.changedHandler}
                            focuced={this.focucedHandler}
                            error={this.state.newPasswordError}
                        />
                        <Input
                            type={'newPasswordAgain'}
                            name={'reNewPassword'}
                            placeHolder={'New Password again'}
                            changed={this.changedHandler}
                            focuced={this.focucedHandler}
                            error={this.state.reNewPasswordError}
                        />

                        <Button
                            isLoading={this.state.isLoading}
                            title={'Send'}
                            bgcolor={'#1FC056'}
                            hoverbgcolor={'#1fc056cc'}
                            click={this.callSubmit} />

                    </form>
                    <div className="successBoxHidden" ref={this.successBox} onClick={this.closeSuccessMessage} >
                        <p className="success-text" >
                            <span>{this.state.successMessage}</span>
                        </p>
                    </div>

                    <div className="errorBoxHidden" ref={this.errorBox} onClick={this.closeErrorMessage}>
                        <p className="error-text" >
                            <span>{'somthing is wrong'}</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Stting;



