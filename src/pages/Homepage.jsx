import React from 'react'

const Homepage = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 text-center mt-4">
          <h1>Lista film</h1>
        </div>
      </div>
      <div className="row g-3">
        <div className='col-4'>
          <div className="card">
            <img src="../logo.png" alt="" />
          </div>
        </div>
        <div className='col-4'>
          <div className="card">
            <img src="../logo.png" alt="" />
          </div>
        </div>
        <div className='col-4'>
          <div className="card">
            <img src="../logo.png" alt="" />
          </div>
        </div>
        <div className='col-4'>
          <div className="card">
            <img src="../logo.png" alt="" />
          </div>
        </div>
        <div className='col-4'>
          <div className="card">
            <img src="../logo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage