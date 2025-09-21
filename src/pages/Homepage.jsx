import axios from "axios"
import { useState, useEffect } from "react"

const Homepage = () => {

  const [movies, setMovies] = useState([])

  const fetchMovies = () => {
    axios.get('http://localhost:3000/db/movies').then(resp => {
      setMovies(resp.data);
    }).catch(err => console.log(err))
  }

  useEffect(fetchMovies, [])

  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 text-center mt-4">
          <h1 className='text-red'>Lista film</h1>
        </div>
      </div>
      <div className="row g-3 my-5">
        <div className='col-lg-4 col-6'>
          <div className="card">
            <img src="../inception.jpg" alt="" />
            <div className='overlay text-center'>
              <h3>Nome film</h3>
              <p>Regista</p>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-6'>
          <div className="card">
            <img src="../interstellar.jpg" alt="" />
            <div className='overlay text-center'>
              <h3>Nome film</h3>
              <p>Regista</p>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-6'>
          <div className="card">
            <img src="../matrix.jpg" alt="" />
            <div className='overlay text-center'>
              <h3>Nome film</h3>
              <p>Regista</p>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-6'>
          <div className="card">
            <img src="../the_godfather.jpg" alt="" />
            <div className='overlay text-center'>
              <h3>Nome film</h3>
              <p>Regista</p>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-6'>
          <div className="card">
            <img src="../titanic.jpg" alt="" />
            <div className='overlay text-center'>
              <h3>Nome film</h3>
              <p>Regista</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Homepage