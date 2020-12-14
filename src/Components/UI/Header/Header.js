
import React from 'react';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';

const Header = props => {
    return (
        <nav className="navbar navbar-default header">
            <div className="container-fluid">
                <div className="navbar-header">
                    <NavLink exact={true} to="/">
                        <Logo />
                    </NavLink>
                </div>
            </div>
        </nav>
    )
};

export default Header;