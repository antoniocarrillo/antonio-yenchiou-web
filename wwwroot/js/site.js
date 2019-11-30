// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

$(document).ready(function () { // better to use $(document).ready(function(){
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
        window.location.href = '#visit´-section';
    });

    $('#link-faq').on('click touchstart', function () {
        window.location.href = '#faq-section';
    });
});