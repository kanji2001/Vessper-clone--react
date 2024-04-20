import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="container mt-5">
                <h1 className='text-center text-primary'><i className="fa-solid fa-minus"></i> CONTACT US <i className="fa-solid fa-minus"></i></h1>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <h1>Vesperr</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui provident nisi tempori doloribus! Officiis quibusdam eos debitis.</p>
                            <h6 className='text-primary'>
                                <i class="fa-brands fa-square-twitter fa-2xl mx-1"></i>
                                <i class="fa-brands fa-facebook fa-2xl mx-1"></i>
                                <i class="fa-brands fa-instagram fa-2xl mx-1"></i>
                                <i class="fa-brands fa-linkedin fa-2xl mx-1"></i>
                            </h6>
                        </div>

                        <div className="col-md-3">
                            <p><i class="fa-solid fa-location-dot fa-xl text-primary"></i> 132 Feet Ring Road, Navrangpura 380009, Ahmedabad.</p>
                            <p><i class="fa-solid fa-envelope-circle-check text-primary"></i> karan2001@gmial.com</p>
                            <p><i class="fa-solid fa-phone-volume text-primary"></i> +91 0123456789</p>
                        </div>

                        <div className="col-md-5">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Your Name" aria-label="Username" />
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Your Email" aria-label="Username" />
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Subject" aria-label="Username" />
                            </div>
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                <label for="floatingTextarea2">Comments</label>
                            </div>
                            <div class="d-grid gap-2 col-5 mx-auto mt-3">
                                <button class="btn btn-primary rounded-pill" type="button">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
