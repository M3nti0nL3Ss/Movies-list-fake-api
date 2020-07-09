import config from "../config.json";
import http from "./httpService";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";


export async function getMovies() {
  const movies = await http.get(config.movieapi);
  return movies;
}

export async function movieToRender(movie){
  const data = movie;
  data.clicked = farHeart;
  const genre = await http.get(data.genre);
  data.genre = genre.data;
  return data;
}

export async function saveMovie(movie) {
  const movies = await getMovies();
  let movieInDb = movies.data.find((m) => m.id === movie.id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = config.genre + movie.genreId + "/";
  movieInDb.stars = parseInt(movie.stars);
  if (!movieInDb.id) {
    await http.post(config.movieapi,movieInDb);
  }else
  await http.put(`${config.movieapi}${movie.id}/`,movieInDb);
  
  return await movieToRender(movieInDb);
}

export async function getMovieByName(name) {
  const movies = await getMovies();
  const moviesFound = [];
  let m = movies.data.find((m) => m.name.toLowerCase().includes(name.toLowerCase()));
  if(m){
    moviesFound.push(m);
    const moviesTorender = [];
    for(let row of moviesFound)
      moviesTorender.push(await movieToRender(row));
    return moviesTorender;
    }
  return [];
}

export function deleteMovie(id) {
  const movies = getMovies();
  let movieInDb = movies.find((m) => m.id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
