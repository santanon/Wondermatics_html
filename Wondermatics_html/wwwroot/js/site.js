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
    $('#about').click(function () {
        $('.submenu--wrapper').addClass('active')
    });

    $('.icon-close').click(function () {
        $('.submenu--wrapper').removeClass('active');
    });
});