// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

$(document).ready(function () { // better to use $(document).ready(function(){
    let window_width = $(window).width();
    let imageWidth = getImageWidth(window_width);
    //let imageHeight = getImageHeight(window_width);

    const regexJpg = new RegExp('\/([a-zA-Z0-9\-]*\.jpg)$');

    $('img').each(function () {
        let source = $(this).attr('src');
        if (!isSvg(source)) {

            if (regexJpg.test(source))
            {
                let fileName = source.match(regexJpg)[1];
                let new_source = '/images/' + imageWidth + '/' + fileName;
                $(this).attr('src', new_source);
            }
        }
    });

    $('.navigation-link').on('click touchstart', function () {
        $("#hamburger").prop('checked', false);
    });

    $('#link-timeline').on('click touchstart', function () {
        window.location.href = '#timeline-intro';    
    });

    $('#link-where').on('click touchstart', function () {
        window.location.href = '#where-section';
    });

    $('#link-visit').on('click touchstart', function () {
        window.location.href = '#visit-section';
    });

    $('#link-faq').on('click touchstart', function () {
        window.location.href = '#faq-section';
    });

    $('#link-contact').on('click touchstart', function () {
        window.location.href = '#post-faq-section';
    });

    $("#other-language").on('click touchstart', function () {
        let lang = $(this).prop("lang");
        document.cookie = "UserCulture="+ lang;
        window.location.reload();
    });
});

let isSvg = function isSvg(source) {
    if (source.indexOf("svg") >= 0) {
        return true;
    }

    return false;
}

let getImageWidth = function getImageWidth(width) {
    if (width >= 1200) {
        return 1920;
    }
    else if (width < 1200 & width >= 992) {
        return 1200;
    }
    else if (width < 992 & width >= 768) {
        return 992;
    }
    else if (width < 768 & width > 576) {
        return 768;
    } else {
        return 576;
    }
}
