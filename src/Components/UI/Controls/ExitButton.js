import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class ExitButton extends Component {

    handleOnSubmit = () => {

        this.props.history.push('/')
    };

    render() {
        return (
            <button onClick={this.handleOnSubmit} className="btn btn-defaut btn-theme">Salir</button>
        );
    }
};

export default withRouter(ExitButton)
