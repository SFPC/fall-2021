$(window).scroll(function(){
  var scrollTop = $(window).scrollTop();
  if(scrollTop < 200){
    maxHeight = 150;
  }else if(scrollTop > 400){
    maxHeight = 300;
  }else{
    maxHeight = 300 - 75 * (((scrollTop-300) * 100)/200)/100;
  }
  $('.portal').stop().animate({'max-height': maxHeight+"vh"}, 500);
})
