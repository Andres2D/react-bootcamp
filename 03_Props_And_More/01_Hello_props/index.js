class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    to="Ringo" 
                    from="Paul"
                />
                <Hello 
                    to="Cher" 
                    from="Sony"
                />
                <Hello 
                    to="Cher" 
                    from="Sony" 
                    bangs={4}
                />
                <Hello 
                    to="Chad" 
                    from="Tom" 
                    bangs={14}
                    img="https://rickandmortyapi.com/api/character/avatar/4.jpeg"
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
