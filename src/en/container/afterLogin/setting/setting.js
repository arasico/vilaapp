import React, {Component} from 'react';

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
        this.state = {  }
    }


    componentDidMount(){
        console.log(Token)
        // if(Token !== null)
        //      window.location.pathname="/"
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

                            <Button                                                                  
                                isLoading={this.state.isLoading}                                    
                                title={'Send'}                                                      
                                bgcolor={'#1FC056'}                                                 
                                hoverbgcolor={'#1fc056cc'}                                          
                                click={this.callSubmit}/>      

                        </form>
                   </div>
            </div>
         );
    }
}
 
export default Stting;


 
