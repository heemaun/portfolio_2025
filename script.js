$(document).ready(function(){
    $("#to_the_top").fadeOut();
});

$(window).on('scroll', function () {
    if ($(window).scrollTop() >= $(window).height() / 2) {
        $("#to_the_top").fadeIn(); // Or use .addClass('show') etc.
    } else {
        $("#to_the_top").fadeOut(); // Optional: hide again if scrolling up
    }
});

$("#to_the_top").click(function(){
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
});

$("#header_toggler").click(function(){
    $("nav").toggleClass("nav-hide");
    $(this).toggleClass("header-toggler-hide");
});