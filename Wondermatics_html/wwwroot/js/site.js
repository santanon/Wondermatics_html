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
        console.log('Hello Mobile');
    } else {
        console.log('Hello Desktop');
    }


    //if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    //    // ทำอะไรบางอย่างถ้าเป็นอุปกรณ์พกพา
    //    alert("คุณกำลังใช้อุปกรณ์พกพา");
    //} else {
    //    // ทำอะไรบางอย่างถ้าไม่ใช่อุปกรณ์พกพา
    //    alert("คุณไม่ได้ใช้อุปกรณ์พกพา");
    //}
});