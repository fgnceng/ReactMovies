import React from 'react'

export default function SearchMovies() {
  const searchMovies = async (e) => {
    e.preventDefault()
    console.log('submitting')
    const query = 'Jurassic Park'
    const url = `https://api.themoviedb.org/3/search/movie?api_key=1842f3d488132e6ef123ffc1f392bdd2&language=en-US&query=${query}&page=1&include_adult=false`

    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e Jurassic Park"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  )
}