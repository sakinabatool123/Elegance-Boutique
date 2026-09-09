$("carousel").slick({
    autoplay : true
    autoplay speed : 5000
})

$(document).ready(function() {
    $(".why-card").click(function(){
        $(this).toggleClass("selected");
    });
    
});