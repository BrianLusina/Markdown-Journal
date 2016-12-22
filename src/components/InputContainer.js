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
            <div className="row">
                <div className="col s12">
                    <a id="save-journal" className="col s3 waves-effect waves-light btn">Save</a>
                    <a id="md-cheatsheet" className="col s3 waves-effect waves-light btn">Cheatsheet</a>                    
                </div>
                <div className="col s12 input-field">
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