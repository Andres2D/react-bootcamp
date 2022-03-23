class Machine extends React.Component {
    render() {
        const {s1,s2,s3} = this.props;
        return (
            <div>
                <p>{s1} {s2} {s3}</p>
                <p>
                    {
                        s1 === s2 && s2 === s3 
                        ? 'You win!'
                        : 'You Lose!' 
                    }
                </p>
            </div>
        )
    }
}
