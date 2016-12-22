/**
 * Display container. This is the Display container for the Markdown previewer.
 * This will display the Markdown text.
 */
import React, { Component } from "react";
import InputContainer from './InputContainer';
import marked from 'marked';

export default class DisplayContainer extends Component{
    constructor(){
        super();
        this.state = {
            value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
        }

        this._updateValue = this._updateValue.bind(this);
        this._rawMarkup = this._rawMarkup.bind(this);
    }
    render(){
        return(
            <div className="row">
                <div className="col s6">
                    <InputContainer value={this.state.value} updateValue={ this._updateValue } />
                </div>
                <div className="col-md-6">
                    <span dangerouslySetInnerHTML={this._rawMarkup(this.state.value)}>
                    </span>
                </div>
            </div>
        )
    }

    //convert the text to markdown
    _rawMarkup(value){
        var rawMarkup = marked(value, { sanitize: true });
        return {__html: rawMarkup};
    }

    _updateValue(modifiedValue){
       this.setState({
            value: modifiedValue
        });
    }
}
