import React from 'react'

const Testimonial = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <h1 className='text-center text-primary'><i className="fa-solid fa-minus"></i> TESTIMONIALS <i className="fa-solid fa-minus"></i></h1>
        <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, quidem.</p>

        <div className="container testimonial-section">
          <div class="row">
            <div class="col-sm-12 col-lg-10 offset-lg-1 col-12">
              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                    aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                    aria-label="Slide 5"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="carousel-caption">
                      <img src="./img/testimonials/testimonials-1.jpg" alt="testimonial" />
                      <p>"Far far away, behind the word mountains, far fro, the countries Vokalia and Consonantia, there
                        live the blind texts</p>
                      <h5>Karan - Full Stack Developer</h5>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="carousel-caption">
                      <img src="./img/testimonials/testimonials-2.jpg" alt="testimonial" />
                      <p>"Far far away, behind the word mountains, far fro, the countries Vokalia and Consonantia, there
                        live the blind texts</p>
                      <h5>Karan - Full Stack Developer</h5>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="carousel-caption">
                      <img src="./img/testimonials/testimonials-3.jpg" alt="testimonial" />
                      <p>"Far far away, behind the word mountains, far fro, the countries Vokalia and Consonantia, there
                        live the blind texts</p>
                      <h5>Karan - Full Stack Developer</h5>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="carousel-caption">
                      <img src="./img/testimonials/testimonials-4.jpg" alt="testimonial" />
                      <p>"Far far away, behind the word mountains, far fro, the countries Vokalia and Consonantia, there
                        live the blind texts</p>
                      <h5>Karan - Full Stack Developer</h5>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="carousel-caption">
                      <img src="./img/testimonials/testimonials-5.jpg" alt="testimonial" />
                      <p>"Far far away, behind the word mountains, far fro, the countries Vokalia and Consonantia, there
                        live the blind texts</p>
                      <h5>Karan - Full Stack Developer</h5>
                    </div>
                  </div>


                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Testimonial
