/**
 * Input container for the Markdown previewer. This is where the user input is recorded
 */
import React, { Component } from 'react';

export default class InputContainer extends Component{
    constructor(){
        super();

        this._update = this._update.bind(this);
    }

    _update(e){
        e.preventDefault();
        var modifiedValue = e.target.value;
        this.props.updateValue(modifiedValue);
    }

    render(){
        return(
            <div>
                <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>button</a>
                <div className="input-field">
                    <textarea id="md-input" className="materialize-textarea" rows="30" type="text" value={this.props.value} onChange={this._update} />
                </div>
            </div>
        )
    }
}

InputContainer.propTypes = {
    updateValue: React.PropTypes.func.isRequired,
    value: React.PropTypes.string.isRequired    
}