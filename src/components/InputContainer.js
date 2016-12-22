/**
 * Input container for the Markdown previewer. This is where the user input is recorded
 */
import React, { Component }from 'react';

export default class InputContainer extends Component{
    constructor(){
        super();

        this._update = this._update.bind(this);
    }

    _update(){
        var modifiedValue = this.refs.inputValue.getDOMNode().value;
        this.props.updateValue(modifiedValue);
    }

    render(){
        return(
            <textarea rows="22" type="text" ref="inputValue" value={this.props.value} onChange={this._update} className="form-control" />
        )
    }
}
