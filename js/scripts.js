$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $("#mycarousel").carousel({interval: 1000});  // faster
    $("#carousel-button").click(function(){
        if($("#carousel-button").children("span").hasClass("fa-pause")){
            // if the button is pause button
            $("#mycarousel").carousel("pause");
            $("#carousel-button").children("span").removeClass("fa-pause");
            $("#carousel-button").children("span").addClass("fa-play")
        } else if($("#carousel-button").children("span").hasClass("fa-play")){
            // if the button is plau button
            $("#mycarousel").carousel("cycle");
            $("#carousel-button").children("span").removeClass("fa-plau");
            $("#carousel-button").children("span").addClass("fa-pause")
        }
    });
});