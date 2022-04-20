import React, { Component } from 'react';
import Button from './Button';
import './ButtonList.css';

class ButtonList extends Component {
    static defaultProps = {
        colors: ['#ff0100','#00a0ff','#95c11e','#8a8a8a']
    }

    constructor(props) {
        super(props);
        this.state = {
            color: 'white'
        }
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(color) {
        this.setState({color});
        console.log(this.state);
    }

    render() {
        return(
            <div className='button-list' style={{backgroundColor: this.state.color}}>
                {
                    this.props.colors.map((c, i) => {
                        return <Button key={i} color={c} changeColor={this.changeColor} />
                    })
                }
            </div>
        )
    }
}

export default ButtonList;
