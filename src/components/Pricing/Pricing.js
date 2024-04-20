import React from 'react'

const Pricing = () => {
    return (
        <>
            <div className="container mt-5">
                <h1 className='text-center text-primary'><i className="fa-solid fa-minus"></i> PRISING <i className="fa-solid fa-minus"></i></h1>
                <p className='text-center'>Necessitatibus elus consequter ex aliquid fuga eum quidem.</p>

                <div className="container text-center">
                    <div class="row row-cols-1 row-cols-md-3 g-5">
                        <div class="col ">
                            <div class="card h-100 price">
                                <div class="card-body">
                                    <h5 class="card-title">Free</h5>
                                    <p class="card-text"><span className='fs-1 text-primary'>$0</span>/month</p>
                                    <p>add dare</p>
                                    <p>nec  feuigue nisi</p>
                                    <p>nulla at volupate dota</p>
                                    <p className='text-muted'><del>phara massa </del></p>
                                    <p className='text-muted'><del>Massa ultricies mi</del></p>
                                    <button type="button" class="btn btn-outline-primary rounded-pill">Buy Now</button>
                                </div>

                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 price">
                                <div class="card-body">
                                    <h6 class="card-title">Business</h6>

                                    <p class="card-text"><span className='fs-1 text-primary'>$19</span>/month</p>
                                    <p>add dare</p>
                                    <p>nec  feuigue nisi</p>
                                    <p>nulla at volupate dota</p>
                                    <p>phara massa </p>
                                    <p className='text-muted'><del>Massa ultricies mi</del></p>
                                    <button type="button" class="btn btn-outline-primary rounded-pill">Buy Now</button>
                                </div>

                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 price">
                                <div class="card-body">
                                    <h5 class="card-title">Developer</h5>
                                    <p class="card-text"><span className='fs-1 text-primary'>$29</span>/month</p>
                                    <p>add dare</p>
                                    <p>nec  feuigue nisi</p>
                                    <p>nulla at volupate dota</p>
                                    <p>phara massa </p>
                                    <p>Massa ultricies mi</p>
                                    <button type="button" class="btn btn-outline-primary rounded-pill">Buy Now</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Pricing