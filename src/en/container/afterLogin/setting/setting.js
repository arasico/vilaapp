import React, {Component} from 'react';

//
//
//
import SubTitle from '../../../components/common/subTitle/subTitle';
import Input from '../../../components/commonInput/InputGroup'
import Button from '../../../components/Button/Button'

class Stting extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }



    render() { 
        return ( 
            <div className="container-fluid pb100 pt50">
                   <div  className="container pt100 pb100  ">
                        <SubTitle label="Setting" />

                        <form>
                            <Input 
                                type={'password'} 
                                name={'currentPassword'}
                                placeHolder={'Current Password'}
                                changed={this.changedHandler}
                                error={this.state.forgetEmailError}
                            />
                            <Input 
                                type={'password'} 
                                name={'newPassword'}
                                placeHolder={'New Password'}
                                changed={this.changedHandler}
                                error={this.state.forgetEmailError}
                            />
                            <Input 
                                type={'newPasswordAgain'} 
                                name={'currentPassword'}
                                placeHolder={'New Password again'}
                                changed={this.changedHandler}
                                error={this.state.forgetEmailError}
                            />

                        </form>
                   </div>
            </div>
         );
    }
}
 
export default Stting;


 
