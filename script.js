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

$("header nav ul li a").click(function(){
    $('html, body').animate({
      scrollTop: $($(this).attr("href")).offset().top
    }, 'slow');
    // console.log($(this).attr("href"));
    
});

$("#header_toggler").click(function(){
    $("nav").toggleClass("nav-hide");
    $(this).toggleClass("header-toggler-hide");
});

function isInViewport(element) {
    const rect = element[0].getBoundingClientRect();

    return (
        rect.top < window.innerHeight && 
        rect.bottom > 0
    );
}

function checkVisibility() {
    $('#skills').each(function () {
        const $el = $(this);

        if (isInViewport($el)) {
            $el.addClass('skills-visible');
        }

        else{
            $el.removeClass('skills-visible');
        }
    });
}

$(document).ready(function () {
    checkVisibility();
    $(window).on('scroll resize', checkVisibility);
});

$("#gallery button,.gallery-close").click(function(){
    $("#"+$(this).attr("data-target")).toggleClass("gallery-details-hide");
});

// $("#contacts .infos a").click(function(e){        
//     navigator.clipboard.writeText($(this).attr("data-content"))
//       .then(() => alert("Copied!"))
//       .catch(err => console.error("Failed to copy:", err));
// });