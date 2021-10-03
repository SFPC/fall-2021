function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

var colours = [
  "red",
  "cornflowerblue",
  "darkorchid",
  "blue",
  "orange"
];

function getColour() {
   return colours[
     Math.floor(Math.random() * colours.length)
   ];
}

document.documentElement.style.setProperty('--primary-color', getColour());


$(window).scroll(function(){
  var scrollTop = $(window).scrollTop();


  var pageHeight = $(document).height();

  var scaleScoll = scale (scrollTop, 0, pageHeight, 1, 5);
  var scaleOpacity = scale (scrollTop, 0, pageHeight, .9, .3);

    maxHeight = 150 - 75 * (((scrollTop-200) * 100)/200)/100;

  $('.portal').css({transform: 'scale('+scaleScoll+')'});

  $('.portal').css({opacity: scaleOpacity});



})
