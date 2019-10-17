import axios from 'axios' 
const API_URL = 'http://www.omdbapi.com/?apikey=74f1367b&'

/*
    @param title: string que irá ser buscada na api
    @return movies: lista de filmes que compativeis com a string
*/
const getMovies = async (title) => {
    let query = `${API_URL}s=${title}`
    const { data } = await axios.get(query)
    
    const movies = await injectMovieData(data.Search)
    return movies

}
/*
    @param movies: uma lista valida de filmes
    @return promise: uma promise com a lista de filmes
                        com os dados que precisamos
*/
const injectMovieData = (movies) => {
    if (movies) {
      const moviesArr = movies.map(async m => {
          const movie = await getMovieId(m.imdbID)
          return movie
      })
      return new Promise((resolve, reject) => {
          Promise.all(moviesArr)
            .then(res => {
                resolve(res)
            })
            .catch(e => {
                reject({msg: e})
            })
      })
    }
}

/*
    @param id: imdbID do filme
    @return objeto com os dados do filme;
*/
const getMovieId = async (id) => {
    const { data } = await axios.get(`${API_URL}i=${id}`)
    return {
        title: data.Title,
        duration: data.Runtime,
        year: data.Year,
        plot: data.Plot,
        image: data.Poster
    }
}

export const Http = {
    getMovies
}