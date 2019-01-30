import React, { Component } from 'react';

//
//
//
import SubTitle from '../../../components/common/subTitle/subTitle';
import Input from '../../../components/commonInput/InputGroup';
import Button from '../../../components/Button/Button';
import Token from '../../../components/api/token';

class Stting extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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

    callSubmit = async (event) => {
        event.preventDefault();
        this.setState({
            isLoading: true,
            registerPasswordError: '',
            registerRePasswordError: '',
            errorHandleing: '',
            successMessage: ''
        })

        console.log(`
        the state is :
        --------------------------
        currentPassword:   ${this.state.currentPassword} 
        password: ${this.state.password}
        rePassword: ${this.state.rePassword}
        `);

        const data = {
            'currentPassword': this.state.currentPassword,
            'password': this.state.password,
            'rePassword': this.state.rePassword
        }

        await this.checkDataEntery()

        // after conterol input will be call ------->
        if (this.state.isCheck === false) {
            // const request = await this.postData(data, 'auth/email/register');
            const request = {
                status : 200
            }

            //  console.log(request.status)

            if (request.status === 200)  // response success and create account
                this.setState({
                    successMessage: 'Your account has been successfully created. '
                })
            if (request.status === 400)  // Email is already status code is 400
                this.setState({
                    errorHandleing: 'this email is exists.'
                })
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
        const { currentPassword ,  password , rePassword } = this.state;
        this.setState({ isCheck: false })

        if (currentPassword === null || currentPassword.trim() === '' || currentPassword.length < 6) {
            this.setState({ currentPasswordError: 'password is requirement.', isCheck: true });
        }
        if (password === null || password.trim() === '' || password.length < 6) {
            this.setState({ passwordError: 'password is requirement.', isCheck: true });
        }
        if (rePassword === null || rePassword.trim() === '' || rePassword.length < 6) {
            this.setState({ rePasswordError: 'password is requirement.', isCheck: true });
        }
        if (password !== rePassword) {
            this.setState({ rePasswordError: 'new password is not equal .', isCheck: true });
            console.log(password !== rePassword)
        }else{
            this.setState({ rePasswordError: '', isCheck: true });
            
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
                            error={this.state.currentPasswordError}
                        />
                        <Input
                            type={'password'}
                            name={'password'}
                            placeHolder={'New Password'}
                            changed={this.changedHandler}
                            error={this.state.passwordError}
                        />
                        <Input
                            type={'newPasswordAgain'}
                            name={'rePassword'}
                            placeHolder={'New Password again'}
                            changed={this.changedHandler}
                            error={this.state.rePasswordError}
                        />

                        <Button
                            isLoading={this.state.isLoading}
                            title={'Send'}
                            bgcolor={'#1FC056'}
                            hoverbgcolor={'#1fc056cc'}
                            click={this.callSubmit} />

                    </form>
                </div>
            </div>
        );
    }
}

export default Stting;



