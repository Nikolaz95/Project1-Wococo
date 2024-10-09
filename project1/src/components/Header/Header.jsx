import React from 'react'

import './Header.css';
import Button from '../Button/Button';


const Header = ({ user, onLogin, onLogout, onCreateAccount }) => {
    return (
        <header>
            <div className="headerWococo">
                <div className="tittleName">
                    Wococo
                </div>
                <div>
                    {user ? (
                        <>
                            <span className="welcome">
                                Welcome, <b>{user.name}</b>!
                            </span>
                            <Button label="Log Out" />
                        </>
                    ) : (
                        <>
                            <>
                                <Button label="Log in" />
                                <Button label="Sign up" />
                            </>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header