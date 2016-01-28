
$(window).click(function(event) {
    console.log(event.clientX);
    
    var newLeft = event.clientX +"px";
    var newTop = event.clientY + "px";
    $(".button").css("top",newTop)
    $(".button").css("left",newLeft)
    $("body").append("Hello world");
    
});

$(window).keypress(function(event) {
    console.log(event);
    
    if(event.keyCode == 114) {
        $("body").css("background-color", "red");
            //user pressed r
    }
    
     if(event.keyCode == 103) {
        $("body").css("background-color", "lime");
            //user pressed g
     }
     
     if(event.keyCode == 98) {
        $("body").css("background-color", "blue");
        //user pressed b
    }
    
});



$(window).resize(function(event) {
    console.log(event);
    
    if ($(window).width() > 800) {
        $(".button").css("width", "200px");
    }    
          else {
              $(".button").css("width", "100px");
          }
    
});