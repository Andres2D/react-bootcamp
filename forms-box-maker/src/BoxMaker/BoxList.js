import React, { Component } from 'react';
import Box from './Box';
import BoxForm from './BoxForm';
import './Boxes.css';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        }
        this.create = this.create.bind(this);
    }

    create(newBox) {
        this.setState({
            boxes: [...this.state.boxes, newBox]
        });
    }

    remove(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        })
    }

    render() {
        const boxes = this.state.boxes.map(box => (
            <Box 
                key={box.id}
                id={box.id}
                height={box.height}
                width={box.width}
                color={box.color}
                removeBox={() => this.remove(box.id)}
            />
        ))
        return(
            <div className='box-list'>
                <h1>Color Box Maker</h1>
                <BoxForm createBox={this.create} />
                {boxes}
            </div>
        )
    }
}

export default BoxList;
