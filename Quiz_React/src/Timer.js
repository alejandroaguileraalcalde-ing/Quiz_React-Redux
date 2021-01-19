import React from 'react';
export default class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date(), number: 60};

    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);

    }

    tick() {    this.setState({date: new Date()});
    if(this.state.number>0){
    this.setState({number: this.state.number -1});}
    else{
        this.props.onSubmit();
    }
    }
    render() {
        return (
            <div>
                <h2>Tiempo restante: {this.state.number} segundos</h2>
            </div>
        );
    }
}
