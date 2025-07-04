// $(document).ready(function(){
//     $(".text-div p span").css();
// });

$("#to_the_top").click(function(){
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
});

$("#header_toggler").click(function(){
    $("nav").toggleClass("nav-hide");
    $(this).toggleClass("header-toggler-hide");
});