
/*

$(document).ready(function () {
    $('.visitor').hover(function () {
        $(this).addClass('animated pulse');
    });
});

$(document).ready(function () {
    $('.publicAffairs').hover(function () {
        $(this).addClass('animated pulse');
    });
});

$(document).ready(function () {
    $('.depotStatus').hover(function () {
        $(this).addClass('animated pulse');
    });
});

*/

/**
 * Change the navBar tranpenracy on Scroll
 */
/*
$(function () {
    // declare variables
    var BgDark = $(".mod-bg-dark");
    var TxtWar = $(".text-warning");
    var BtnOutLine = $(".btn-outline-warning");
    /** 
      * JQuery-
      * Bind an event handler to the "scroll" JavaScript event, or trigger that event on an element.
      
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            // remove the current class from the nav-bar and add to the nav-bar
            BgDark.removeClass('mod-bg-dark').addClass("vlad-triple-x");
            TxtWar.removeClass('text-warning').addClass("vlad-triple-x");
            BtnOutLine.removeClass('btn-outline-warning').addClass("vlad-triple-x");
           // else put it BACK
        } else {
            BgDark.removeClass("vlad-triple-x").addClass('mod-bg-dark');
            TxtWar.removeClass('vlad-triple-x').addClass("text-warning");
            BtnOutLine.removeClass('vlad-triple-x').addClass("btn-outline-warning");
           
        }// end if (scroll >= 50)
    });
});
*/
/**
 * Loop thru the bacground images
 */
(function ($) {

$('.simpleslide100').each(function(){
    var delay = 7000;
    var speed = 1000;
    var itemSlide = $(this).find('.simpleslide100-item');
    var nowSlide = 0;

    $(itemSlide).hide();
    $(itemSlide[nowSlide]).show();
    nowSlide++;
    if(nowSlide >= itemSlide.length) {nowSlide = 0;}

    setInterval(function(){
        $(itemSlide).fadeOut(speed);
        $(itemSlide[nowSlide]).fadeIn(speed);
        nowSlide++;
        if(nowSlide >= itemSlide.length) {nowSlide = 0;}
    },delay);
});


})(jQuery);

function goodbye() {
    alert("goodbye!");
}
