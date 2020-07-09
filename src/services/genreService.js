import http from "./httpService";
import config from "../config.json";

export async function getGenres() {
  const genres = await http.get(config.genre);
  return genres;
}
