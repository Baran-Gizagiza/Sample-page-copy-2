$(function() {
    $('.h-hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.h-nav').addClass('active');
        } else {
            $('.h-nav').removeClass('active');
        }
    });
});