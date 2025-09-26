import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const DetailMovie = () => {

  const { id } = useParams()

  const [movies, setMovies] = useState([])

  const fetchMovies = () => {
    axios.get(`http://localhost:3000/db/movies/${id}`).then(resp => {
      setMovies(resp.data)
    })
  }

  useEffect(fetchMovies, [])

  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 my-5 bg-red p-0 rounded-4">
          <div className="d-flex">
            <div className='me-4'>
              <img src={`../${movies.image}`} alt={movies.title} />
            </div>
            <div>
              <h2 className="mt-5 mb-3">{movies.title}</h2>
              <h4 className="">{movies.director}</h4>
              <h4 className="my-5">{movies.genre}</h4>
              <p className="fs-5">{movies.abstract}</p>
            </div>
          </div>
          <div>
            {movies.reviews.map(review => {
              return (
                { review }
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailMovie