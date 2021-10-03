function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

var colors = [
  "red",
  "green",
  "lime",
  "purple",
  "blue"
];

function getColor() {
   return colors[
     Math.floor(Math.random() * colors.length)
   ];
}

document.documentElement.style.setProperty('--primary-color', getColor());


$(window).scroll(function(){
  var scrollTop = $(window).scrollTop();


  var pageHeight = $(document).height();

  var scaleScoll = scale (scrollTop, 0, pageHeight, 1, 5);
  var scaleOpacity = scale (scrollTop, 0, pageHeight, .9, .3);

    maxHeight = 150 - 75 * (((scrollTop-200) * 100)/200)/100;

  $('.portal').css({transform: 'scale('+scaleScoll+')'});

  $('.portal').css({opacity: scaleOpacity});



})
