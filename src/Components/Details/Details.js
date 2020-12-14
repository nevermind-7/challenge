import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Details extends Component {

    getAccount = () => {
        const { accountsList } = this.props
        const { accountNumber } = this.props.match.params;
        const account = accountsList.find(s => s.number === accountNumber)
        return account
    }

    getAccountType = (accountTypeId) => {
        const { accountsTypeList } = this.props
        const accountType = accountsTypeList.find(s => s.id === accountTypeId)
        return accountType
    }

    validateCredit = (value) => {

        if (!isNaN(value) && value > 0) {

            return value
        }

        return 0
    }

    render() {

        const account = this.getAccount()

        if (account === undefined) {
            this.props.history.push('/')
            return null
        }
        const accountType = this.getAccountType(account.type)

        if (accountType === undefined) {
            this.props.history.push('/')
            return null
        }

        return (
            <div className="account-status-container">
                <h3>Consulta de saldo</h3>
                <h2>Este es tu saldo actual</h2>
                <div className="detail-information" >
                    <h3>Saldo de la cuenta: {this.validateCredit(account.saldo)}</h3>
                    <h3>Tipo de cuenta: {accountType.nombre}</h3>
                    <h3>Número de cuenta: {account.number}</h3>
                </div>
            </div >
        );
    }
}

export default withRouter(Details);