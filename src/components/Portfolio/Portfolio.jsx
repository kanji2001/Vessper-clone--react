import React from 'react'

const Portfolio = () => {
    return (
        <>
            <div className="container mt-5">
                <h1 className='text-center text-primary'><i className="fa-solid fa-minus"></i> PORTFOLIO <i className="fa-solid fa-minus"></i></h1>
                <p className='text-center'>Necessitatibus elus consequter ex aliquid fuga eum quidem.</p>

                <div class="btn-toolbar d-flex justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
                    <div class="btn-group mx-2" role="group" aria-label="Third group">
                        <button type="button" class="btn btn-info">ALL</button>
                    </div>
                    <div class="btn-group mx-2 " role="group" aria-label="Third group">
                        <button type="button" class="btn btn-outline-primary">APP</button>
                    </div>
                    <div class="btn-group mx-2" role="group" aria-label="Third group">
                        <button type="button" class="btn btn-outline-primary">CARD</button>
                    </div>
                    <div class="btn-group mx-2" role="group" aria-label="Third group">
                        <button type="button" class="btn btn-outline-primary">WEB</button>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="row cards">
                        <div className="col-md-4 card col-6">
                            <img src="./img/portfolio/portfolio-1.jpg" alt="portfolio-img" className='card__img'/>
                        </div>
                        <div className="col-md-4 card col-6">
                            <img src="./img/portfolio/portfolio-2.jpg" alt="portfolio-img" className='card__img'/>
                        </div>
                        <div className="col-md-4 card col-6">
                            <img src="./img/portfolio/portfolio-3.jpg" alt="portfolio-img" className='card__img'/>
                        </div>
                        <div className="col-md-4 card col-6">
                            <img src="./img/portfolio/portfolio-4.jpg" alt="portfolio-img" className='card__img'/>
                        </div>
                        <div className="col-md-4 card col-6">
                            <img src="./img/portfolio/portfolio-5.jpg" alt="portfolio-img" className='card__img'/>
                        </div>
                        <div className="col-md-4 card col-6">
                            <img src="./img/portfolio/portfolio-6.jpg" alt="portfolio-img" className='card__img'/>
                        </div>
                        <div className="col-md-4 card col-6">
                            <img src="./img/portfolio/portfolio-7.jpg" alt="portfolio-img" className='card__img'/>
                        </div>
                        <div className="col-md-4 card col-6">
                            <img src="./img/portfolio/portfolio-8.jpg" alt="portfolio-img" className='card__img'/>
                        </div>
                        <div className="col-md-4 card col-6 ">
                            <img src="./img/portfolio/portfolio-9.jpg" alt="portfolio-img" className='card__img'/>
                        </div>
                        <div className="col-md-4 card col-6 d-xxl-none d-xl-none .d-xxl-block d-xl-none .d-xxl-block d-md-none .d-lg-block">
                            <img src="./img/portfolio/portfolio-2.jpg" alt="portfolio-img" className='card__img'/>
                        </div>
                    
                    </div>
                </div>

            </div>
        </>
    )
}

export default Portfolio;
