
$(function() {
    $(".on").click(function() {
        console.log("you hit the switch off!");
        
        $(".off").css("display", "block");
        $(".on").css("display", "none");
        $(".lightsoff").css("display", "block");
        
    });
});

$(function() {
    $(".off").click(function() {
        console.log("you hit the switch on!");
        
        $(".off").css("display", "none");
        $(".on").css("display", "block");
        $(".lightsoff").css("display", "none");
        
    });
});