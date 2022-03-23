class Hello extends React.Component {
    static defaultProps = {
        from: 'Anonymus',
        bangs: 1
    }
    render() {
        console.log(this.props);
        const {from, to, bangs, img} = this.props;
        let bangsLabel = "!".repeat(bangs);
        return (
            <div>
                <p>Hi {to} from {from}{bangsLabel}</p>
                {
                    img && 
                    <img src={img} alt="img"/>
                }
            </div>
        ) 
    }
}
