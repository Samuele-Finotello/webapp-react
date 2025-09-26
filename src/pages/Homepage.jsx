import axios from "axios"
import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"

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
          <h1 className='text-light-blue'>I migliori titoli in questo momento:</h1>
        </div>
      </div>
      <div className="row g-3 my-5">
        {movies.map(movie => {
          return (
            <MovieCard movie={movie} />
          )
        })}
      </div>
    </div>
  )
}

export default Homepage