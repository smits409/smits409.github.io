
 	

    $(".text").click(function() {
        console.log("you opened the portal"); 
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






    $(".circle1").hover(function() {
        console.log("you hovered the circle"); 
        $(".circle1").css("background", "#1E4378");
    });

    $(".circle2").hover(function() {
        console.log("you hovered the circle"); 
        $(".circle2").css("background", "#1E4378");
    });

    $(".circle3").hover(function() {
        console.log("you hovered the circle"); 
        $(".circle3").css("background", "#1E4378");
    });

    $(".circle4").hover(function() {
        console.log("you hovered the circle"); 
        $(".circle4").css("background", "#1E4378");
    });






















