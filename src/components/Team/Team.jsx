import React from 'react'

const Team = () => {
    return (
        <>
            <div className="container mt-5 team">
                <h1 className='text-center text-primary'><i className="fa-solid fa-minus"></i> TEAM <i className="fa-solid fa-minus"></i></h1>
                <p className='text-center'>Necessitatibus elus consequter ex aliquid fuga eum quidem.</p>

            <div className="container text-center d-flex justify-content-center">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4 ">
                        <div class="card container" style={{width: "18rem"}}>
                            <img src="./img/team/team-1.jpg" class="card-img-top img-fluid" alt="..." />
                                <div class="card-body">
                                    <h6>walter white</h6>
                                    <p>Chief Executive Officer</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 ">
                    <div class="card container" style={{width: "18rem"}}>
                            <img src="./img/team/team-2.jpg" class="card-img-top img-fluid" alt="..." />
                                <div class="card-body">
                                    <h6>Sarah Jhonson</h6>
                                    <p>Product Manager</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                    <div class="card container" style={{width: "18rem"}}>
                            <img src="./img/team/team-3.jpg" class="card-img-top img-fluid" alt="..." />
                                <div class="card-body">
                                    <h6>William Andreson</h6>
                                    <p>CTO</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                    <div class="card container" style={{width: "18rem"}}>
                            <img src="./img/team/team-4.jpg" class="card-img-top img-fluid" alt="..." />
                                <div class="card-body">
                                    <h6>Amanda Jepson</h6>
                                    <p>Accounts</p>
                                </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Team