import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Header from '../../Components/UI/Header/Header'
import Footer from '../../Components/UI/Footer/Footer'

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Header />
                <div className="container-fluid main-container">
                    {this.props.children}
                </div>
                <Footer />
            </Aux>
        );
    }
}
export default Layout;