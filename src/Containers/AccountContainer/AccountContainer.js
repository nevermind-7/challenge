import React, { Component } from 'react'
import Aux from '../../Hoc/Auxiliary/Auxiliary'
import Account from '../../Components/Accounts/Account'
import { PAGE_SIZE } from '../../Configuration/constants'
import OptionsControl from '../../Components/UI/Controls/OptionsControl'

class AccountContainer extends Component {

    state = {
        page: 0
    };

    handleNextPage = () => {

        const value = this.state.page + 1

        this.setState({ page: value })
    }

    handlePreviousPage = () => {

        const value = this.state.page - 1

        if (value >= 0) {

            this.setState({ page: value })
        }
    }

    paginateDataSource() {

        const array = [...this.props.accountsList]

        let result = []

        for (let i = 0; i < array.length; i += PAGE_SIZE) {

            let chunk = array.slice(i, i + PAGE_SIZE)

            result.push(chunk)
        }

        return result
    }

    getAccountType(id) {

        const { accountsTypeList } = this.props

        const accountType = accountsTypeList.find(s => s.type === id)

        return accountType
    }

    renderAccounts(datasource) {


        const { page } = this.state

        let accounts = datasource[page].map((account) => {

            const accountType = this.getAccountType()

            return (
                <Account accountNumber={account.number} accountType={accountType.nombre} key={account.number} />
            )
        });

        return accounts
    }

    render() {

        const { accountsList } = this.props

        if (accountsList.length === 0) {
            return []
        }

        const datasource = this.paginateDataSource()

        const hasMorePages = datasource.length === this.state.page

        const isFirstPage = this.state.page === 0

        return (
            <Aux>
                { this.renderAccounts(datasource)}
                <OptionsControl textNextPage="Mas Opciones >>" hasMorePages={hasMorePages} isFirstPage={isFirstPage} textPreviousPage="Regresar" handleNextPage={this.handleNextPage} handlePreviousPage={this.handlePreviousPage} />
            </Aux>
        );
    }
}

export default AccountContainer;