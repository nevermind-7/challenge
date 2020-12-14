import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Account extends Component {

    render() {
        const { accountNumber, accountType } = { ...this.props }

        return (
            <NavLink exact={true} to={"/details/" + accountNumber}>
                <div className="col col-md-4" >
                    <div className="account-item">
                        <div className="row">
                            <span>{accountType} </span>
                        </div>
                        <div className="row">
                            <span>Nro:{accountNumber} </span>
                        </div>
                    </div>
                </div>
            </NavLink>
        );
    }
}

export default Account;