import React, { Component } from 'react';
import Color from './Color';
import './Box.css';

class Box extends Component {
    static defaultProps = {
        boxes: 18
    }

    render() {
        return(
            <div className="box-colors">
                {
                    Array.from({length: this.props.boxes})
                        .map((c,i) => <Color key={i} />)
                }
            </div>
        )
    }
}

export default Box;
