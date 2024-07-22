export function topZero() {
  $("html, body").animate({ scrollTop: "0" }, 1000);
  // $("html, body").scrollTop(0);
}
export function scroll() {
  $(window).scroll(backToTop);
  function backToTop() {
    if (window.scrollY > 100) {
      $("#back-to-top").addClass("active");
    } else {
      $("#back-to-top").removeClass("active");
    }
  }
  $("#back-to-top").click(topZero);
}
