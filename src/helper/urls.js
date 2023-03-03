const apiKey = '3d9eb4a6f1a06ab7fbc462142526fee1';

export const URL = {
   getMoviesByCategory : (category,page) => `movie/${category}?api_key=${apiKey}&language=en-US&page=${page}`,
   getMovieByID : (movie_id) => `movie/${movie_id}?api_key=${apiKey}&language=en-US`,
   getMovieByQuery : (query) => `search/movie?api_key=${apiKey}&query=${query}`
}