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
                <div className='navbarContent'>
                    {user ? (
                        <>
                            <div>
                                <span className="welcome">
                                    Welcome, <b>{user.name}</b>!
                                </span>
                            </div>
                            <div>
                                <Button label="Log Out" />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='navbarContent'>
                                <Button label="Log in" />
                                <Button label="Sign up" />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header