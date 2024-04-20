import React from 'react'
import { BsEmojiSmile } from "react-icons/bs";


const About2 = () => {
  return (
    <>
        <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-5'>
                        <img src='./img/counts-img.svg' alt='aboutUsImg' className='winner'/>
                    </div>
                    <div className='col-md-3'>
                    <h2><span className='text-primary'><BsEmojiSmile /></span><span className='p-2'>65</span></h2>
                    <p className='size'><b>Happy Clients</b> consequuntur volupts nostrum aliqid ipsam archito ut</p>

                    <h2><span className='text-primary'><i class="fa-solid fa-clock"></i></span><span className='p-2'>65</span></h2>
                    <p className='size'><b>Happy Clients</b> consequuntur volupts nostrum aliqid ipsam archito ut and volupts</p>

                    </div>
                    <div className='col-md-3'>
                    <h2><span className='text-primary'><i class="fa-solid fa-address-book"></i></span><span className='p-2'>65</span></h2>
                    <p className='size'><b>Years of experience</b> consequuntur volupts nostrum aliqid ipsam archito ut </p>

                    <h2><span className='text-primary'><i class="fa-solid fa-award"></i></span><span className='p-2'>65</span></h2>
                    <p className='size'><b>Awards</b> consequuntur volupts nostrum aliqid ipsam archito ut</p>
                    </div>
                </div>
            </div>
    </>
  )
}

export default About2;