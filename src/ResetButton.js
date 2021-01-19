import React from 'react';

export default class ResetButton extends React.Component{
    render() {
        return(
            <button className="reset" onClick={() => this.props.onReset()}>Reset</button>
        )
    }
}