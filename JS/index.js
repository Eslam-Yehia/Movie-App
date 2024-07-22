import { closeNav, openNav } from "./nav.js";
import { validateAll } from "./validation.js";
import { getMovie, searchMovie } from "./getData.js";
import { topZero, scroll } from "./scroll.js";

validateAll();
topZero();
scroll();
getMovie("movie/now_playing");

$("body").on("input", "#searchName", function (e) {
  if (e.target.value == "") {
    getMovie("movie/now_playing");
  } else {
    searchMovie(e.target.value);
  }
});
$(".nav-content-list-item a").click(function (e) {
  topZero();
  if (e.target.id == "trending") {
    let send = "trending/movie/day";
    getMovie(send);
  } else {
    getMovie("movie/" + e.target.id);
  }
  closeNav();
  
});
$("#navContact").click(function (e) {
  closeNav();
});
$("body").on("click", ".fa-align-justify", async function () {
  openNav();
});
$("body").on("click", ".fa-x", async function () {
  closeNav();
});
closeNav();

$(document).ready(function () {
  $(".loading").fadeOut(2000);
});
