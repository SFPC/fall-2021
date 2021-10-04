function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

var colours = [
  // "red",
  // "cornflowerblue",
  // "darkorchid",
  // "blue",
  // "orange"
  "#777744",
  "#aa6622",
  "#ee0011",
  "#aa6600",
  "#008855",
  "#dd1188",
  "#8866aa",
  "#4466ff"
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



});

function sectionJump(value){
  var top = document.getElementById(value).offsetTop - 100;
  window.scrollTo(0, top);
	//document.getElementById(value).scrollIntoView();
}


$(document).ready(function(){
    $("#changecolour").on('click', function(){
            document.documentElement.style.setProperty('--primary-color', getColour());
        });

        $('#class').fadeIn();
});
