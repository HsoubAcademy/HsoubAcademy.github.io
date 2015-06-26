$(document).ready(function() {
  var slider = $("#slideshow");
  var slider_nav = $("#slideshow-nav");
  slider_nav.find("a[href=#slide1]").addClass("active");

  slider_nav.localScroll({
    target:'#slideshow',
    axis: 'x'
  });

  slider_nav.find("a").click(function(){
    slider_nav.find("a").removeClass("active");
    $(this).addClass("active");
  });
});
