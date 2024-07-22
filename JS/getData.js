import { displayMovies } from "./display.js";
let movieData;
export function returnData() {
  return movieData;
}
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzI3ZDQxNGJlYzJiYThlZjc3ZjEyYzk5YzYyNThjMiIsIm5iZiI6MTcyMTU0NjUzMy43MDk4NDYsInN1YiI6IjY2OWNhZGY0MTBiYTI4OGU0MDg4MDU3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nEh0Z-WftSkVR_ZXBZdevmriSI8sPHk7JqjACwq_UVc",
  },
};

export async function searchMovie(type) {
  let response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${type}&include_adult=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}`,
    options
  );
  movieData = await response.json();
  movieData = await movieData.results;
  if (movieData.length != 0) {
    SaveData();
    $("#htmlContainer").fadeOut(150, function () {
      displayMovies();
    });
    $("#htmlContainer").fadeIn(150, function () {});
  }
}

export async function getMovie(type) {
  let response = await fetch(`https://api.themoviedb.org/3/${type}`, options);
  movieData = await response.json();
  movieData = movieData.results;
  SaveData();

  $("#htmlContainer").fadeOut(150, function () {
    displayMovies();
  });
  $("#htmlContainer").fadeIn(150, function () {});
}

function SaveData() {
  if (movieData.length == 0) {
    movieData = localStorage.getItem("movieData");
  } else {
    localStorage.removeItem("movieData");
    localStorage.setItem("movieData", JSON.stringify(movieData));
  }
}
