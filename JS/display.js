import { cardHoverIn, cardHoverOut } from "./cardHover.js";

let movieData, stars;
let imgPath = "https://image.tmdb.org/t/p/w500";
const defaultImg = "../images/default-movie.jpg";
function modifyData() {
  movieData = JSON.parse(localStorage.getItem("movieData"));
  stars = ``;
}

export function displayMovies() {
  modifyData();

  $("#htmlContainer").html("");
  for (let i = 0; i < movieData.length; i++) {
    checkMovieStars(movieData[i]);
    let movieImg =
    movieData[i].poster_path!=null? imgPath+movieData[i].poster_path :movieData[i].backdrop_path!=null?imgPath + movieData[i].backdrop_path:defaultImg;
    let title = movieData[i].title!=null? movieData[i].title:movieData[i].original_title;
    let rating;
    Math.round(movieData[i].vote_average * 10) / 10 == 0
      ? (rating = "0.0")
      : (rating = Math.round(movieData[i].vote_average * 10) / 10);

    $("#htmlContainer").append(`
        <div class="col-md-6 col-lg-4 html-card-container">
      <div
        class="Movie-card card-container rounded-2 overflow-hidden position-relative"
      >
        <img src="${movieImg}" alt="" class="w-100" />
        <div class="movie-layer card-layer position-absolute p-4 animate__animated">
          <h3 class="text-center text-white animate__animated animate__slideOutLeft">${
            movieData[i].title
          }</h3>
          <p class="gray-color text-start card-disc animate__animated animate__slideOutLeft">
            ${
              movieData[i].overview.length > 300
                ? movieData[i].overview.slice(0, 300) + "..."
                : movieData[i].overview
            }
          </p>
          <p class="gray-color text-start card-date animate__animated animate__slideOutLeft">
            Release Date: ${movieData[i].release_date}
          </p>
          <p class="gray-color text-start card-rate animate__animated animate__slideOutLeft">
            ${stars}
          </p>
          <p
            class="gray-color fs-5 d-flex justify-content-center align-items-center rounded-circle border border-3 border-success card-vote card-rate animate__animated animate__slideOutLeft"
          >
            ${rating}
          </p>
        </div>
      </div>
    </div>`);
  }
  $("#hero .row div").addClass("animate__fadeIn");
  $(".card-container").mouseenter(cardHoverIn);
  $(".card-container").mouseleave(cardHoverOut);
}

function checkMovieStars(value) {
  stars = ``;
  if (value.vote_average < 1) {
    stars = `<i class="fa-solid fa-star text-muted fs-6"></i>`;
  } else if (value.vote_average < 2) {
    stars = `<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
  } else if (value.vote_average < 3) {
    stars = `<i class="fa-solid fa-star text-warning fs-6"></i>`;
  } else if (value.vote_average < 4) {
    for (let i = 0; i < 1; i++) {
      stars += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
    }
    stars =
      stars +
      `<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
  } else if (value.vote_average < 5) {
    for (let i = 0; i < 2; i++) {
      stars += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
    }
  } else if (value.vote_average < 6) {
    for (let i = 0; i < 2; i++) {
      stars += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
    }
    stars =
      stars +
      `<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
  } else if (value.vote_average < 7) {
    for (let i = 0; i < 3; i++) {
      stars += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
    }
    stars = stars;
  } else if (value.vote_average < 8) {
    for (let i = 0; i < 3; i++) {
      stars += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
    }
    stars =
      stars +
      `<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
  } else if (value.vote_average < 9) {
    for (let i = 0; i < 4; i++) {
      stars += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
    }
  } else if (value.vote_average < 10) {
    for (let i = 0; i < 4; i++) {
      stars += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
    }
    stars =
      stars +
      `<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
  } else if ((value.vote_average = 10)) {
    for (let i = 0; i < 5; i++) {
      stars += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
    }
  }
}
