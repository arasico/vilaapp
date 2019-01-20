import React, { Component } from 'react';

import {browserHistory} from 'react-router'
//
// external component ---->
//
import Button from '../../components/Button/Button'
import './notFound.css'

class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    goToHome = () => {
        browserHistory.push('/')
    }
    render() {
        return (
            <div className="container-fluid ">
                <div className="not-found" >
                    <div className="not-found-number">404</div>
                    <div className="not-found-text" >Page not found.</div>
                    <Button
                        isLoading={this.state.isLoading}
                        title={'Take me HOME'}
                        bgcolor={'#1FC056'}
                        hoverbgcolor={'#1fc056cc'}
                        click={this.goToHome} />
                </div>
            </div>
        );
    }
}

export default NotFound;
