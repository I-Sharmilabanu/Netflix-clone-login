import React from 'react'


const MovieCard = ({ movie }) => {
  return (
    <div className='bg-gray-800 p-2 text-white 
    rounded-lg shadow-md relative hover:scale-95 hover:shadow-2xl transition-all duration-200 group border-2 border-blue-800'>

            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className='w-full h-80 object-contain rounded-sm ' />

            <h2 className="text-lg font-bold mt-4 text-white hover:text-blue-500">
                {movie.title}
            </h2>
            <p className='text-sm text-gray-400'>{movie.release_date}</p>
           
        </div>
  )
}
export default MovieCard