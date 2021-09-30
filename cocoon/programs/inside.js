var counter = 0;
var bgImg = $('.layer1');
var ran, ran2, ran3;
ranCocoon = Math.floor(Math.random() * 12);
ran = Math.floor(Math.random() * 22);
ran2 = Math.floor(Math.random() * 22);
ran3 = Math.floor(Math.random() * 22);
if (ran == ran2 || ran == ran3) {
    ran = Math.floor(Math.random() * 22);
}
if (ran2 == ran3) {
    ran2 = Math.floor(Math.random() * 22);
}


$(window).on("load", function() {
  $('<img src="../bgImages/layer' + ran + '.png" class="spiral" alt="" />').appendTo('.bgImg.classPage').hide().fadeIn(1000);
  $('<img src="../bgImages/layer' + ran2 + '.png" class="spiral" alt="" />').appendTo('.bgImg.classPage').hide().fadeIn(3000);
    $('<div class="break-sect"><center><img src="../cocoonImages/cocoon' + ranCocoon + '.jpg"></center></div>').appendTo('.session-info');

});

$(window).scroll(function() {



});

$(".moreAbtCost").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-cost").offset().top - 100
    }, 1000);
});

$(".moreAbtSchol").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-scholarships").offset().top - 100
    }, 1000);
});

$(".moreAbtCovid").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-covid").offset().top - 100
    }, 1000);
});


$(".top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");

    fadeOutAtTop();
    return false;
});

function sectionJump(value){
  var top = document.getElementById(value).offsetTop - 100;
  window.scrollTo(0, top);
	//document.getElementById(value).scrollIntoView();
}
