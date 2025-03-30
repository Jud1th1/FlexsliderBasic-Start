//Hook up the flexsider
/* $(window).on('load', function() {
    $('.flexslider').flexslider({
      animation: "slide"
    });
  }); */
  

//Additional controls we can add to our slider:
//Set speed with slideshowSpeed: 3000,
//Set direction like up and down with direction: "vertical",
//Set reserve to true to go i.e from top to bottom to bottom to top  reverse: true;

$(window).on('load', function() {
    $('.flexslider').flexslider({
      animation: "slide",
      slideshowSpeed: 2000,
      reverse: false,
      pauseOnHover: true
    });
  });