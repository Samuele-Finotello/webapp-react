

const MovieCard = ({ movie }) => {
  return (
    <div className='col-sm-12 col-md-6 col-xl-4' key={movie.id}>
      <div className="card">
        <img src={movie.image} alt={movie.title} />
        <div className='overlay text-center'>
          <h2>{movie.title}</h2>
          <h4>{movie.director}</h4>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
