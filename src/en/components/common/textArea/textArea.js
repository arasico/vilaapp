import React , {Component} from 'react';

import './style.css'


class TextArea extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="text-area-container">
                <span className="label-text-area">Pleas inser some ting</span>
                <textarea 
                    placeholder="This is an awesome comment box" 
                    rows="20" name="comment[text]" 
                    id="comment_text" 
                    cols="40" 
                    className="ui-autocomplete-input" 
                    autocomplete="off" 
                    role="textbox" 
                    aria-autocomplete="list" 
                    aria-haspopup="true">

                </textarea>
                
            </div>
         );
    }
}
 
export default TextArea;