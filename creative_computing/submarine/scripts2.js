
    $(".on").click(function() {
        console.log("you hit the switch off!");
        
        $(".off").css("display", "block");
        $(".on").css("display", "none");
        $(".lightsoff").css("display", "block");
        
    });

    $(".off").click(function() {
        console.log("you hit the switch on!");
        
        $(".off").css("display", "none");
        $(".on").css("display", "block");
        $(".lightsoff").css("display", "none");
        
    });
    
     $(".radio").click(function() {
        console.log("you turned the radio on!");
        
       var audio = new Audio('audio3.mp3');
        audio.play();
        
    });
    
     $(".bed").click(function() {
        console.log("you turned on the lamp!");
        
        $(".bed").css("display", "none");
        $(".bedlight").css("display", "block");
        
    });
    
     $(".bedlight").click(function() {
        console.log("you turned on the lamp!");
        
        $(".bed").css("display", "block");
        $(".bedlight").css("display", "none");
        
    });


