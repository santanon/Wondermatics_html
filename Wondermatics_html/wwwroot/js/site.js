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



    //$('#noti_Modal').modal('show');

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

    //$(window).on("scroll", function () {
    //    if ($(this).scrollTop() > 120) {
    //        $('.gototop').css('display','flex');
    //    } else {
    //        $('.gototop').hide();
    //    }
    //});
    //$('.gototop').click(function () {
    //    $("html, body").animate({ scrollTop: 0 }, 100);
    //});


    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        //console.log('Hello Mobile');
        $('#tracking_menu').hide();


    } else {

        //console.log('Hello Desktop');
        $('#tracking_menu').show();
    }

});



const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}
