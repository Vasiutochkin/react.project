const baseURL = 'https://api.themoviedb.org/3';
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

const urlsMovie = {
    movies: '/discover/movie',
    genre: '/genre/movie/list',
    genreIds: '/discover/movie?with_genres=',
    movieById: '/movie/',
    searchMovie: '/search/movie?query='
}

export {
    baseURL,
    urlsMovie,
    imageBaseUrl
}