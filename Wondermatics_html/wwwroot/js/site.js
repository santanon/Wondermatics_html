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

    $('#noti_Modal').modal('show');

    $('.hamburger-menu').on('click', function () {
        $('.bar').toggleClass('animate');
        $('.menu--nav').toggleClass('hide show');
        $('.backdrop').toggleClass('hide show');
    });

    $('.menu-name').click(function () {
        $('.submenu--wrapper').removeClass('active');
        const menu_id = $(this).attr('id');
        $('#' + menu_id + '_sub').addClass('active');




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

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 120) {
            $('.gototop').css('display','flex');
        } else {
            $('.gototop').hide();
        }
    });
    $('.gototop').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 100);
    });


    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        //console.log('Hello Mobile');
        $('#tracking_menu').hide();


    } else {

        //console.log('Hello Desktop');
        $('#tracking_menu').show();
    }

});