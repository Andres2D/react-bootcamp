import React, { Component } from 'react';

class IconMutationState extends Component {
    static defaultProps = {
        options: [
            '🎨',
            '🔥',
            '🐛',
            '🚀',
            '✅',
            '🔒️',
            '🚧',
            '🚨',
            '💚',
            '👷',
            '🌐',
            '👽️',
            '📦️',
            '💩'
        ]
    }
    constructor(props){
        super(props);
        this.state = {
            icons: [ '🎨', '🔥' ]
        }
        this.addIcon = this.addIcon.bind(this);
    }

    // The bad way, working over the current state 
    // addIcon() {
    //     let idx = Math.floor(Math.random() * this.props.options.length);
    //     let newIcon = this.props.options[idx];
    //     let icons = this.state.icons;
    //     icons.push(newIcon);
    //     this.setState({icons: icons});
    // }

    // The React way it's create a copy of the current state and work on that copy
    addIcon() {
        let idx = Math.floor(Math.random() * this.props.options.length);
        let newIcon = this.props.options[idx];
        this.setState({icons: [...this.state.icons, newIcon]});
    }

    render() {
        const icons = this.state.icons.map((icon, index) => <small key={index}>{icon}</small>);
        return (
            <div>
                <h1>Icons: {icons}</h1>
                <button onClick={this.addIcon}>Add New Icon</button>
            </div>
        )
    }
}

export default IconMutationState;
