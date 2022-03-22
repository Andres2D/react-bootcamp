function getNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNumber();
        return(
            <div>
                <h1> Your number is {num}</h1>
                <p>{num === 7 ? 'Congrats!' : 'You suck'}</p>
                {
                    num === 7 &&
                    <img src="https://media.giphy.com/media/NEvPzZ8bd1V4Y/giphy.gif" /> 
                }
            </div>
        )
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));
