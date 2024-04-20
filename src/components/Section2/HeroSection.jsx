import React from 'react'

const HeroSection = () => {
    return (
        <>

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1>Grow your business with <br/> Vesperr</h1>

                        <p className='mt-1'>We are team of talented designers making <br/> with bootstrap</p>

                        <button type="button" class="btn btn-outline-primary rounded-pill text-center mt-3 btn-lg">Get Started</button>
                    </div>

                    <div className='col-md-6 animate'>
                        <img src="./img/hero-img.png" alt='hero_image' className='w-75'/>
                    </div>
                </div>
            </div>

            

        </>
    )
}

export default HeroSection;