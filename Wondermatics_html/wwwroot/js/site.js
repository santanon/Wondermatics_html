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

    //Image Banner Modal
    $('.image-banner img').each(function () {
        var img = $(this);
        var imgSrc = img.attr('src');
        console.log(imgSrc);

        $.ajax({
            url: imgSrc,
            type: 'HEAD',
            error: function () {
                $('#noti_Modal').modal('hide');
            },
            success: function () {
                $('#noti_Modal').modal('show');
            }
        });
    });


    $('#lang_Swtich').change(function () {
        const pathname = $(location).attr("pathname")
        const valLang = $(this).val();
        const dataLang = $(this).attr('data-lang');
        //console.log('pathname Select :' + pathname);
        //console.log('valLang Select :' + valLang);
        //console.log('dataLang Default :' + dataLang);

        if (pathname.includes('/en')) {
            var redirectDefault = pathname.replace('/en', '');
            //console.log('redirectDefaultBefore : ' + redirectDefault);
            if (redirectDefault === '') {
                redirectDefault = '/';

                //console.log('redirectDefaultAfter : ' + redirectDefault);
            }
            window.location.href = redirectDefault;

        } else{
            const redirectEN = '/en' + pathname;
            //console.log('redirectEN : ' + redirectEN);
            window.location.href = redirectEN;
        }    
    });


    var pathnameMobile = $(location).attr("pathname")
    console.log(pathnameMobile);

    if (pathnameMobile.includes('/en')) {
        var linkhref_th = pathnameMobile.replace('/en', '');
        var linkhref_en = pathnameMobile;
        console.log('redirectDefaultBefore : ' + linkhref_th);
        if (linkhref_th === '') {
            linkhref_th = '/';

            console.log('redirectDefaultAfter : ' + linkhref_th);
        }
        $('.link-lang__th').attr('href', linkhref_th);
        $('.link-lang__en').attr('href', linkhref_en);

    } else {
        var linkhref_th = pathnameMobile.replace('/en', '');
        var linkhref_en = '/en' + pathnameMobile;
        console.log('redirectEN : ' + linkhref_en);
        $('.link-lang__th').attr('href', linkhref_th);
        $('.link-lang__en').attr('href', linkhref_en);
    }


    $('.icon-lang').click(function () {
        
        if (pathname.includes('/en')) {
            var linkDefault = pathname.replace('/en', '');
            //console.log('redirectDefaultBefore : ' + redirectDefault);
            if (linkDefault === '') {
                linkDefault = '/';

                //console.log('redirectDefaultAfter : ' + redirectDefault);
            }
            window.location.href = linkDefault;

        } else {
            const redirectEN = '/en' + pathname;
            //console.log('redirectEN : ' + redirectEN);
            window.location.href = redirectEN;
        }

    });


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
