let imgArray = {
  'images': [
    {
      'src': './images/neebo-edit.jpg'
    },
    {
      'src': './images/code.jpeg'
    }
  ]
}

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

function makeImages() {
  var imgPath = imgArray.images
  var slideArray = [];
  for (i=0; i<imgPath.length; i++) {
      var $drawLink = $('<a>', {
          class: 'slideLinks fade',
          href: 'https://github.com/crithmyxay/robot-car',
          'data-slide-image': ''
      })
      var $drawImg = $('<img>', {
      src: imgPath[i].src,
      alt: '#'
      }) 
      $drawLink.append($drawImg);
      slideArray.push($drawLink);
  }
  return slideArray;
}

function makeDots() {
  var imgPath = imgArray.images
  var dotsArray = [];
  for (i=0; i<imgPath.length; i++) {
      var $drawDot = $('<span>', {
      class: 'dot'
      })
      dotsArray.push($drawDot);
  }
  return dotsArray;
}

function addSlide(slide) {
  $('[data-slide]').append(slide);
}

function drawDots(dots) {
  $('[data-dot]').append(dots);
}

function eraseCurrentSlide() {
  $('[data-slide-image]').remove();
}

function removeActiveDotClass(dots, currentSlide) {
  $(dots[currentSlide]).removeClass("active");
}

function addActiveDotClass(dots, currentSlide) {
  $(dots[currentSlide]).attr("class", "dot active");
}

//Takes images from an array and turns them into a slideshow for main viewing page. 
function slideShow() {
  var slide = makeImages();
  var dots = makeDots();
  var currentSlide = 0;
  var activeDot = $(dots[currentSlide]).attr("class", "dot active");
  addSlide(slide[currentSlide]);
  drawDots(dots);
  $('[data-prev]').on('click', function(){
    console.log('clicked');
    removeActiveDotClass(dots, currentSlide);
    currentSlide--
    if (currentSlide < 0) {
        currentSlide = 1;
    }
    eraseCurrentSlide()
    addSlide(slide[currentSlide]);
    addActiveDotClass(dots, currentSlide);
  })
  $('[data-next]').on('click', function(){
    console.log('clicked');
    removeActiveDotClass(dots, currentSlide);
    currentSlide++
    if (currentSlide > 1) {
        currentSlide = 0;
    }
    eraseCurrentSlide();
    addSlide(slide[currentSlide]);
    addActiveDotClass(dots, currentSlide);
  })
}

$(document).ready(slideShow)