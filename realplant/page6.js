
$(function() {
    $(".sun").click(function() {
        console.log("sun");
        
        $(".plant5").css("display", "none");
        $(".plant3").css("display", "none");
        $(".plant2").css("display", "none");
        $(".plant1").css("display", "block");
        $(".pot").css("display", "none");
        
        $(".rain1").css("display", "none");
        $(".cloud").css("display", "none");
        $(".cloud2").css("display", "block");
        
        
        $(".food").css("display", "none");
    });
});


$( ".cloud2" )
  .click(function() {
    $(".rain1").css("display", "block");
    console.log("cloud");
    
        $(".plant5").css("display", "none");
        $(".plant3").css("display", "none");
        $(".plant2").css("display", "block");
        $(".plant1").css("display", "none");
        $(".pot").css("display", "none");
        
        
        $(".cloud").css("display", "block");
        $(".food").css("display", "none");
  })

  
$( ".cloud" )
  .click(function() {
    $(".rain1").css("display", "block");
    console.log("can");
    
        $(".plant5").css("display", "none");
        $(".plant3").css("display", "block");
        $(".plant2").css("display", "none");
        $(".plant1").css("display", "none");
        $(".pot").css("display", "none");
       
        
        $(".food").css("display", "block");
        $(".rain1").css("display", "none");
        $(".cloud").css("display", "none");
        $(".cloud2").css("display", "none");
  })
  
  
$(function() {
    $(".food").click(function() {
        console.log("nextplant");
        
        $(".plant5").css("display", "block");
        $(".plant3").css("display", "none");
        $(".plant1").css("display", "none");
        $(".plant2").css("display", "none");
        $(".pot").css("display", "none");
        
        $(".rain1").css("display", "none");
        $(".cloud").css("display", "none");
        $(".cloud2").css("display", "none");
        
    });
});
 
 
$(function() {
    $(".plant5").click(function() {
        console.log("magic beans");
        
        $(".magic").css("display", "block");
        $(".plant5").css("display", "block");
        $(".plant3").css("display", "none");
        $(".plant1").css("display", "none");
        $(".plant2").css("display", "none");
        $(".pot").css("display", "none");
        
        $(".rain1").css("display", "none");
        
    });
});
 