import React from 'react'

import './Footer.css';


const Footer = () => {
    return (
        <footer className='footerContent'>
            <div className="footerMainContent">
                <div className="foterLogo">
                    <h1>Wococo</h1>
                </div>
                <div>
                    <h1>Company</h1>
                    <p>Contact</p>
                    <p>News</p>
                    <p>Careers</p>
                </div>

                <div>
                    <h1>Quick Links</h1>
                    <p>Support Center</p>
                    <p>Service Status</p>
                    <p>Customers</p>
                </div>

                <div>
                    <h1>Legal</h1>
                    <p>Privacy Notice</p>
                    <p>Terms of Use</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer