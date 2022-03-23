class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Slot Machine!</h1>
                <Machine 
                    s1="🥵"
                    s2="🥵"
                    s3="🥵"
                />
                <Machine 
                    s1="s"
                    s2="🥵"
                    s3="🥵"
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
