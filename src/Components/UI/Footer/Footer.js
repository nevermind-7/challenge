
import React from 'react'
import ExitButton from '../Controls/ExitButton'

const Footer = props => {
    return (
        <nav className="navbar navbar-default footer">
            <div className="container-fluid">
                <div className="navbar-header">
                    <ExitButton />
                </div>
            </div>
        </nav>
    )
};

export default Footer;