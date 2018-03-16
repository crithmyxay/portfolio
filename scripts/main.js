$(document).ready(function() {
  $(".dropdown").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
  });
});

$(document).ready(function() {
  $('button').click( function (event) {
    $('.dropdown').toggleClass('hidden');
    console.log('clicked');
  });
});