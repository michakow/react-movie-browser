import { useState, useEffect } from "react"
import { apiKey } from "./apiKey.js"

export const useMoviesData = (query, page) => {
  const [movies, setMovies] = useState({
    state: 'loading'
  })

  useEffect(() => {
    setMovies({
      state: 'loading'
    })

    const fetchData = async () => {
      try{
        const path = query ? 
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}` 
        : 
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`

        const res = await fetch(path)
        if(!res.ok) throw new Error(res.statusText)
        const data = await res.json()
        const moviesData = data.results
        const pages = data.total_pages
        const results = data.total_results
        setMovies({
          state: 'success',
          moviesData,
          pages,
          results
        })
      } catch(error) {
        setMovies({
          state: 'error'
        })
        console.error('Oops, something bad happend')
      }
    }

    setTimeout(fetchData, 1000)
  }, [query, page])

  return movies
}