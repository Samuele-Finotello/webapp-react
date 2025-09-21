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
        {movies.map(movie => {
          return (
            <div className='col-lg-4 col-6' key={movie.id}>
              <div className="card">
                <img src={movie.image} alt={movie.title} />
                <div className='overlay text-center'>
                  <h3>{movie.title}</h3>
                  <p>{movie.director}</p>
                  <p>{movie.abstract}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
        <div className='col-lg-4 col-6'>
          <div className="card">
            <img src="../inception.jpg" alt="" />
            <div className='overlay text-center'>
              <h3>Nome film</h3>
              <p>Regista</p>
              <p>Descrizione</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage