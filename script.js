$(".controller").click(function(){
    console.log($(this).css("--rotate")); 
    
    $("#arrow").css("--arrow-rotate",$(this).css("--rotate"));

    $("#container").removeClass("container-0");
    $("#container").removeClass("container-90");
    $("#container").removeClass("container-180");
    $("#container").removeClass("container-270");

    $("#container").addClass($(this).attr("data-class"));
});