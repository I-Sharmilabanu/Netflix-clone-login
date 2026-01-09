import React from 'react'
import { useState, useEffect } from "react";
import MovieCard from './MovieCard'


const Dashboard = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=545a3df7928f91c4b55422eded866fe6`

    if (search) {
      url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=545a3df7928f91c4b55422eded866fe6`
       }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results)

      })
  }, [page, search])

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative">
      <img
        src="https://www.azcostadelsol.com/wp-content/uploads/2022/07/840_560.jpeg"
        className="fixed top-0 left-0 w-full h-full object-cover"
      />

      <div className="fixed top-0 left-0 w-full h-full bg-black/70"></div>
      <div className='p-4 pt-16 ' >
        <input type="text" className='p-2 border w-3/4 md:w-1/2 rounded-lg
        border-gray-800 bg-gray-900 opacity-60 text-white backdrop-blur-md mt-10
        fixed top-16 left-1/2 transform -translate-x-1/2 z-10 text-white '
          placeholder='Search Movie....'
          onChange={(e) => setSearch(e.target.value)} />
        <div className=" flex  overflow-x-scroll space-x-4 p-4 scrollbar-hide whitespace-nowrap
           mt-16 gap-6 ">

          {movies.map(movie => {
            return (
              <MovieCard key={movie.id} movie={movie} />
            )
          })}
</div>
 

      </div>

      <div className='relative z-20 flex flex-col justify-center items-center min-h-screen px-4  max-w-3xl'>
        <h1 className='text-4xl font-extrabold text-red-800 absolute top-0 left-48 md:left-2/3'>Explore more</h1></div>
    </div>


  )
}

export default Dashboard