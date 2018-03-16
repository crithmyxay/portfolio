// var controller = new ScrollMagic.Controller();
// var scene = new ScrollMagic.Scene();

window.addEventListener('load', AOS.refresh)

$("#myNavBar").find("a").click(function(e) {
  e.preventDefault();
  var section = $(this).attr("href");
  $("html, body").animate({
      scrollTop: $(section).offset().top
  });
});

$("[data-collapse]").click(() => {
  console.log('clicked');
  $(".dropdown").toggleClass("hidden");
});