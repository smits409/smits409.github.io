    $(".closed").hover(function() {
        console.log("you hovered the door"); 
        $(".text").css("display", "block");
    });

    $(".text").hover(function() {
        console.log("you hovered the door"); 
        $(".text").css("display", "none");
    });


 	$(".closed").click(function() {
        console.log("you opened the door x1"); 
        $(".one").css("display", "block");
        $(".text").css("display", "none");
        $(".closed").css("display", "none");
    });

  	$(".one").click(function() {
        console.log("you opened the door x2");  
        $(".two").css("display", "block");
    });


    $(".two").click(function() {
        console.log("you opened the door x3");  
        $(".three").css("display", "block");
    });





    $(".first").hover(function() {
        console.log("you hovered the first image"); 
        $(".text2").css("display", "block");
    });


    $(".second").hover(function() {
        console.log("you hovered over nothing"); 
        $(".text2").css("display", "none");
        $(".text3").css("display", "none");
        $(".text4").css("display", "none");
        $(".text5").css("display", "none");
    });

    $(".third").hover(function() {
        console.log("you hovered the candle"); 
        $(".text3").css("display", "block");
        $(".text4").css("display", "none");
        $(".text5").css("display", "none");
    });

     $(".fourth").hover(function() {
        console.log("you hovered the bed"); 
        $(".text4").css("display", "block");
        $(".text2").css("display", "none");
        $(".text3").css("display", "none");
        $(".text5").css("display", "none");
    });

    $(".fifth").hover(function() {
        console.log("you hovered the coat"); 
        $(".text5").css("display", "block");
        $(".text2").css("display", "none");
        $(".text3").css("display", "none");
        $(".text4").css("display", "none");
    });

    $(".sixth").hover(function() {
        console.log("you hovered nothing"); 
        $(".text5").css("display", "none");
        $(".text2").css("display", "none");
        $(".text3").css("display", "none");
        $(".text4").css("display", "none");
    });




    $(".circle1").hover(function() {
        console.log("you hovered the circle"); 
        $(".circle1").css("background", "white");
    });

    $(".circle2").hover(function() {
        console.log("you hovered the circle"); 
        $(".circle2").css("background", "white");
    });

    $(".circle3").hover(function() {
        console.log("you hovered the circle"); 
        $(".circle3").css("background", "white");
    });

    $(".circle4").hover(function() {
        console.log("you hovered the circle"); 
        $(".circle4").css("background", "white");
    });














