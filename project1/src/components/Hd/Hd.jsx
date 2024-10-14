import React from 'react'

import './Hd.css';
import Btn from '../Btn/Btn';



const Hd = ({ user }) => {
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
                                <Btn label="Log Out" />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='navbarContent'>
                                <Btn label="Log in" />
                                <Btn label="Sign up" />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Hd;