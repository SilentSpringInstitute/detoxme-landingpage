$(document).ready(function() {
  $("#fullpage").fullpage({
    anchors: ['first'],
    scrollBar: true,
    controlArrows: false,
    responsiveWidth: 660,
    autoScrolling: false,
    animateAnchor: false,
    fitToSection: false,
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
      // Update the menu
      $(".menu li").removeClass('active');
      $(".menu li").eq(nextSlideIndex).addClass('active');

      // Change the background colors
      // this is so that if the user overscrolls (say on an iPhone)
      // they will see the slide color, not the default background color

      var color = "rgb(41, 98, 255)";
      switch(nextSlideIndex) {
        case 1:
          color = "rgb(255, 82, 82)";
          break;
        case 2:
          color = "rgb(22, 175, 137)";
          break;
        case 3:
          color = "rgb(255, 147, 29)";
          break;
        case 4:
          color = "rgb(22, 175, 137)";
          break;
        case 5:
          color = "rgb(161, 189, 65)";
          break;
      }

      $("html").css('background-color', color);
    }
  });

  var slideHeight = $(document).height();
  if(slideHeight < 720) {
    slideHeight = 720;
  }

  $(".slide").css('height', slideHeight + 'px');

  $("#left").on('click', function() {
    $.fn.fullpage.moveSlideLeft();
    return false;
  });

  $("#right").on('click', function() {
    $.fn.fullpage.moveSlideRight();
    return false;
  });
});
