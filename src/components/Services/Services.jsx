import React from 'react';

const Services = () => {
  return (
    <>
      <div className="container mt-5">
        <h1 className='text-center text-primary'><i className="fa-solid fa-minus"></i> SERVICES <i className="fa-solid fa-minus"></i></h1>
        <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, quidem.</p>

        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"><i className="fa-solid fa-earth-europe fa-2x" style={{ color: "#74C0FC" }}></i></h5>
                  <p className='radious-for-'></p>
                  <h6 className="card-subtitle mb-2 mt-4 fw-bold">Lorem ipsum</h6>
                  <p className="card-text ">Some quick example text to build on the card title and make up the.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"><i className="fa-solid fa-file-contract fa-2x" style={{ color: "#74C0FC" }}></i></h5>
                  <h6 className="card-subtitle mb-2 mt-4">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"><i className="fa-solid fa-gauge-simple-high fa-2x" style={{ color: "#B197FC" }}></i></h5>
                  <h6 className="card-subtitle mb-2 mt-4">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"><i className="fa-solid fa-earth-americas fa-2x" style={{ color: "#74C0FC" }}></i></h5>
                  <h6 className="card-subtitle mb-2 mt-4">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services;
