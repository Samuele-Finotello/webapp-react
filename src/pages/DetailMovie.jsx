import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const DetailMovie = () => {

  const { id } = useParams()

  const [movie, setMovie] = useState({})

  const fetchMovie = () => {
    axios.get(`http://localhost:3000/db/movies/${id}`).then(resp => {
      setMovie(resp.data)
    })
  }

  useEffect(fetchMovie, [])

  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 my-5 bg-light-blue p-0 rounded-4">
          <div className="d-flex">
            <div className='me-4'>
              <img src={`../${movie.image}`} alt={movie.title} />
            </div>
            <div>
              <h2 className="mt-5 mb-3">{movie.title}</h2>
              <h4 className="">{movie.director}</h4>
              <h4 className="my-5">{movie.genre}</h4>
              <p className="fs-5">{movie.abstract}</p>
            </div>
          </div>
        </div>
        <h2 className="text-center text-light-blue mb-3">Reviews:</h2>
        {movie.reviews?.map(review => {
          return (
            <div className="col-12 my-3 bg-light-blue p-4 rounded-4">
              <h3>{review.name}</h3>
              <h4>{review.vote} <i class="fa-solid fa-star color-warning"></i></h4>
              <h4>{review.text}</h4>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DetailMovie