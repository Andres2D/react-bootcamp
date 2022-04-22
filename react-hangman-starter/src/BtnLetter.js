import React, { Component } from 'react';

class BtnLetter extends Component {
    constructor(props) {
        super(props);
        this.handleKey = this.handleKey.bind(this);
    }

    handleKey() {
        this.props.selectKey(this.props.ltr);
    }

    render() {
        return(
            <button
                value={this.props.ltr}
                onClick={this.handleKey}
                disabled={this.props.disabled}
            >
                {this.props.ltr}
            </button>
        )
    }
}

export default BtnLetter;
