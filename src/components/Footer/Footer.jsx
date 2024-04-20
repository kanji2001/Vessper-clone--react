import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 text-center">
                    <p>© Copyright <b>Vesperr</b> All Rights Reserved 
                    <br />
                    Designed by <span className='text-primary'>BootstrapMade</span>
                    </p>
                    </div>

                    <div className="col-md-6">
                        <div className="nav d-flex justify-content-evenly align-items-center">
                            <li>Home</li>
                            <li>About</li>
                            <li>Privacy Policy</li>
                            <li>Terms Of Use</li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
