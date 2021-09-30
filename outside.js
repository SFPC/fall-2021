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
var bg = bgImg.css('background-image');
var position = $(window).scrollTop();
var bgR, bgG, bgB;


activeLinks();


$(window).on("load", function() {
    $('<img src="bgImages/layer1.png" class="spiral" alt="" />').appendTo('.bgImg').hide().fadeIn(1000);
    $('<img src="bgImages/layer2.png" class="spiral" alt="" />').appendTo('.bgImg').hide().fadeIn(2000);
    $('<img src="bgImages/layer3.png" class="spiral" alt="" />').appendTo('.bgImg').hide().fadeIn(3000);
    $('<div class="break-sect"><center><img src="cocoonImages/cocoon' + ranCocoon + '.jpg"></center></div>').appendTo('#shell');
    $('<div class="again"><h2>(...over and over again)<BR><span>|</span><BR><span>|</span><BR><span>|</span><BR><span>|</span><BR><span>|</span><BR><span>↓</span></h2></div>').appendTo('#shell');



});

$(document).ready(function() {
    bgR = 239, bgG = 154, bgB = 131;
    // $("body").get(0).style.setProperty("--background", "rgb(" + bgR + "," + bgG + "," + bgB + ")");

    $('.intro1').removeClass('hideme').addClass('showme');

    $(window).scroll(function() {


    let mobileBrowser = checkMobile()
    if(mobileBrowser){
        $('.hideme').removeClass('hideme').addClass('showme')
    }
    else{
      $('.hideme').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('showme');
            }
            if( bottom_of_window < bottom_of_object ){
                $(this).removeClass('showme');
            }

        });
    }





        var scroll = $(window).scrollTop();
        var diff = $(document).height() - $(window).height();

        console.log("Scroll " + scroll);
        console.log("Diff " + diff);

        // console.log(diff);

        bgR = bgR + 5;
        bgG = bgG + 5;
        bgB = bgB + 5;

        if ((scroll + 100 >= diff && scroll <= diff)) {
            endlessScrollText();
            activeLinks();
            // lighterBG();
        };

        if ($(window).scrollTop() == 0) {
            fadeOutAtTop();
        }
    });

});

if ( window.location.hash === '#programs' ) {
  showPrograms();
}




$(".top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");

    fadeOutAtTop();
    return false;
});

// $(window).on('resize scroll', function() {
//     if ($('.intro1').isInViewport()) {
//         $('.intro1').addClass('introhover');
//     } else {
//         $('.intro1').removeClass('introhover');
//     }
//
//     if ($('.intro2').isInViewport()) {
//         $('.intro2').addClass('introhover');
//     } else {
//         $('.intro2').removeClass('introhover');
//     }
//
//     if ($('.intro3').isInViewport()) {
//         $('.intro3').addClass('introhover');
//     } else {
//         $('.intro3').removeClass('introhover');
//     }
// });


function showPrograms(){
    $(".programs-list").removeClass('hide');
    $(".programs span").fadeOut();
    $(".programs").addClass('active');
    return false;
}
function fadeOutAtTop() {
    $(".newBg").fadeOut(300, function() {
        $(this).remove();
    });

    $(".newText").fadeOut(300, function() {
        $(this).remove();
    });

    $(".break-new").fadeOut(300, function() {
        $(this).remove();
    });


    // $(".programs-list").addClass('hide');
    // $(".programs span").fadeIn();
    // $(".programs").removeClass('active');

    counter = 0;
}

function endlessScrollText() {
    let infoTextInner = $('#info').html();
    let bgImgLayer = $('.bgImg').html();
    // $('#shell').append(infoTextInner);
    $(infoTextInner).appendTo('#shell').addClass('newText');
    ran = Math.floor(Math.random() * 22);
    ran2 = Math.floor(Math.random() * 22);
    ran3 = Math.floor(Math.random() * 22);
    if (ran == ran2 || ran == ran3) {
        ran = Math.floor(Math.random() * 22);
    }
    if (ran2 == ran3) {
        ran2 = Math.floor(Math.random() * 22);
    }
    ranCocoon = Math.floor(Math.random() * 8);
    $('<div class="break-sect break-new"><center><img src="cocoonImages/cocoon' + ranCocoon + '.jpg"></center></div>').appendTo('#shell');

    $('<div class="again break-new"><h2>(...over and over again)<BR><span>|</span><BR><span>|</span><BR><span>|</span><BR><span>|</span><BR><span>|</span><BR><span>↓</span></h2></div>').appendTo('#shell');


    $('<img src="bgImages/layer' + ran + '.png" class="spiral newBg" alt="" />').appendTo('.bgImg').hide().fadeIn(1000);
    $('<img src="bgImages/layer' + ran + '.png" class="spiral newBg" alt="" />').appendTo('.bgImg').hide().fadeIn(2000);
    $('<img src="bgImages/layer' + ran2 + '.png" class="spiral newBg" alt="" />').appendTo('.bgImg').hide().fadeIn(3000);

    counter++
}

function activeLinks() {
    const shell = document.getElementById('shell');
    const info = document.getElementById('info');
    let expandableLinks = document.querySelectorAll('.expand');

    expandableLinks.forEach((link) => {
        link.addEventListener('click', function() {
            // console.log(link);
            showExpanded(link);
        })
        link.addEventListener('keypress', function() {
            // console.log(link);
            showExpanded(link);
        })
    })

    function lighterBG() {
        bgR += 1;
        bgG += 1;
        bgB += 1;
        //  $("body").get(0).style.setProperty("--background", "rgb(" + bgR + "," + bgG + "," + bgB + ")");
    }

    function showExpanded(link) {
        hideOtherExpandedLinks();
        link.classList.add('active');
        link.children[0].style.display = "inline";
    }

    function hideOtherExpandedLinks() {
        expandableLinks.forEach((link) => {
            if (link.classList.contains('active')) {
                link.classList.remove('active');
            }

            if (link.children.length > 0) {
                // console.log(link.children[0])
                link.children[0].style.display = "none";
            }
        })
    }

    shell.addEventListener('touchstart', function() {
        info.classList.add('touched');
    }, false);

    shell.addEventListener('touchend', function() {
        if (info.classList.contains('touched')) {
            info.classList.remove('touched');
        }
    }, false);
}

//
// $.fn.isInViewport = function() {
//     var elementTop = $(this).offset().top;
//     var elementBottom = elementTop + $(this).outerHeight();
//
//     var viewportTop = $(window).scrollTop();
//     var viewportBottom = viewportTop + $(window).height();
//
//     return elementBottom > viewportTop && elementTop < viewportBottom;
// };
function checkMobile(){
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}
