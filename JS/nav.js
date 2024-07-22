export function openNav() {
  $(".nav-side-bar").animate({ left: 0 }, 300, function () {
    $(".nav-content-ul li").slideDown(500);
  });
  $(".change-nav").addClass("fa-x");
  $(".change-nav").removeClass("fa-align-justify");
}
export function closeNav() {
  $(".nav-content-ul li").slideUp(500);
  $(".nav-side-bar").animate({ left: "-258px" }, 500);
  $(".change-nav").removeClass("fa-x");
  $(".change-nav").addClass("fa-align-justify");
}
