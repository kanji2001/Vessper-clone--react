import React from 'react'

// import {faCheck} from "@fortawesome/free-solid-svg-icons"
// import {faMinus} from "@fortawesome/free-solid-svg-icons"


const AboutUs = () => {
    return (
        <>

            <div className='container mt-5 about_us'>
                <h1 className='text-center text-primary'><i class="fa-solid fa-minus"></i>ABOUT US <i class="fa-solid fa-minus"></i></h1>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis harum odit mollitia ipsum animi.
                            Nesciunt error corrupti.</p>

                        <ul class="list-unstyled py-1">

                            <li><i class="fa-solid fa-check-double" style={{ color: "#74C0FC" }}></i> Etim sed dolor ac diam voluted.</li>
                            <li><i class="fa-solid fa-check-double" style={{ color: "#74C0FC" }}></i> Erat volutpat aliquet imperdiet.</li>
                            <li><i class="fa-solid fa-check-double" style={{ color: "#74C0FC" }}></i> parus a odio finibus bibendum.</li>
                        </ul>
                    </div>

                    <div className='col-md-6'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis harum odit mollitia ipsum animi.
                            Nesciunt error corrupti temporibus, excepturi id tempora, quos expedita, harum deleniti atque pariatur
                            sint illum doloremque illum doloremque.</p>

                        <button type="button" class="btn btn-outline-primary rounded-pill text-center mt-1 btn-lg">Learn More</button>
                    </div>
                </div>
            </div>



        </>
    )
}

export default AboutUs;