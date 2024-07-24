$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    //>=, not <=
    if (scroll >= 10) {
        //clearHeader, not clearheader - caps H
        $(".header--wrapper").addClass("sticky");
    } else {
        $(".header--wrapper").removeClass("sticky");
    }
}); //missing );


$(document).ready(function () {

    $('.hamburger-menu').on('click', function () {
        $('.bar').toggleClass('animate');
        $('.menu--nav').toggleClass('hide show');
        $('.backdrop').toggleClass('hide show');

    });


    $('#about').click(function () {
        $('.submenu--wrapper').addClass('active')
    });

    $('.icon-close').click(function () {
        $('.submenu--wrapper').removeClass('active');
    });
    
    $('.showDesc').click(function () {
        $(this).closest('.card--item').find('.card--back').addClass('show');
    });
    $('.hideDesc').click(function () {
        $(this).closest('.card--item').find('.card--back').removeClass('show');
    });

});