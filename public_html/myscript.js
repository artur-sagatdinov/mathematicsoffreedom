$(document).ready(function() {
    $('.header_burger, .menu_item').click(function(event) {
        $('.header_burger, .menu').toggleClass('active');
    });

    $('main').click(function(event) {
        $('.header_burger, .menu').removeClass('active');
    });
});