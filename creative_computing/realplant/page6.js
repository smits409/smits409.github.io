
$(function() {
    $(".sun").click(function() {
        console.log("cloud");
        
        $(".plant5").css("display", "none");
        $(".plant3").css("display", "none");
        $(".plant2").css("display", "none");
        $(".plant1").css("display", "block");
        $(".pot").css("display", "none");
        
        $(".rain1").css("display", "none");
        $(".cloud").css("display", "none");
        $(".cloud2").css("display", "block");
        
        $(".food").css("display", "none");
        $(".magic").css("display", "none");
        $(".meat").css("display", "none");
        
        $(".small").css("display", "none");
        $(".medium").css("display", "none");
        $(".big").css("display", "none");
        $(".chomp").css("display", "none");
    });
});


$( ".cloud2" )
  .click(function() {
    
    console.log("cloud2");
    
        $(".plant5").css("display", "none");
        $(".plant3").css("display", "none");
        $(".plant2").css("display", "block");
        $(".plant1").css("display", "none");
        $(".pot").css("display", "none");
        
        $(".cloud").css("display", "block");
        $(".cloud2").css("display", "none");
        $(".rain1").css("display", "block");
       
        $(".food").css("display", "none");
        $(".magic").css("display", "none");
        $(".meat").css("display", "none");
        
        $(".small").css("display", "none");
        $(".medium").css("display", "none");
        $(".big").css("display", "none");
        $(".chomp").css("display", "none");
  })

  
$( ".cloud" )
  .click(function() {
      
    console.log("plant3");
    
        $(".plant5").css("display", "none");
        $(".plant3").css("display", "block");
        $(".plant2").css("display", "none");
        $(".plant1").css("display", "none");
        $(".pot").css("display", "none");
      
        $(".rain1").css("display", "block");
        $(".cloud2").css("display", "none");
        
        $(".food").css("display", "none");
        $(".magic").css("display", "none");
        $(".meat").css("display", "none");
        
        $(".small").css("display", "none");
        $(".medium").css("display", "none");
        $(".big").css("display", "none");
        $(".chomp").css("display", "none");
  })
  
$( ".plant3" )
  .click(function() {
    console.log("can");
    
        $(".plant5").css("display", "none");
        $(".plant3").css("display", "block");
        $(".plant2").css("display", "none");
        $(".plant1").css("display", "none");
        $(".pot").css("display", "none");
      
        $(".rain1").css("display", "none");
        $(".cloud").css("display", "none");
        $(".cloud2").css("display", "none");
        
        $(".food").css("display", "block");
        $(".magic").css("display", "none");
        $(".meat").css("display", "none");
        
        $(".small").css("display", "none");
        $(".medium").css("display", "none");
        $(".big").css("display", "none");
        $(".chomp").css("display", "none");
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
        
        $(".magic").css("display", "none");
        $(".meat").css("display", "none");
        
        $(".small").css("display", "none");
        $(".medium").css("display", "none");
        $(".big").css("display", "none");
        $(".chomp").css("display", "none");
        
    });
});
 
 
$(function() {
    $(".plant5").click(function() {
        console.log("magic beans");
        
        $(".plant5").css("display", "block");
        $(".plant3").css("display", "none");
        $(".plant1").css("display", "none");
        $(".plant2").css("display", "none");
        $(".pot").css("display", "none");
        
        $(".cloud").css("display", "none");
        $(".cloud2").css("display", "none");
        $(".rain1").css("display", "none");
        
        $(".food").css("display", "none");
        $(".magic").css("display", "block");
        $(".meat").css("display", "none");
        
        $(".small").css("display", "none");
        $(".medium").css("display", "none");
        $(".big").css("display", "none");
        $(".chomp").css("display", "none");
        
    });
});
 
 
$(function() {
    $(".magic").click(function() {
        console.log("growing");
        
        $(".plant5").css("display", "none");
        $(".plant3").css("display", "none");
        $(".plant1").css("display", "none");
        $(".plant2").css("display", "none");
        $(".pot").css("display", "none");
        
        $(".cloud").css("display", "none");
        $(".cloud2").css("display", "none");
        $(".rain1").css("display", "none");
        
        $(".food").css("display", "none");
        $(".magic").css("display", "none");
        $(".meat").css("display", "none");
        
        $(".small").css("display", "block");
        $(".medium").css("display", "none");
        $(".big").css("display", "none");
        $(".chomp").css("display", "none");
        
    });
});

$(function() {
    $(".small").click(function() {
        console.log("medium");
        
        $(".plant5").css("display", "none");
        $(".plant3").css("display", "none");
        $(".plant1").css("display", "none");
        $(".plant2").css("display", "none");
        $(".pot").css("display", "none");
        
        $(".cloud").css("display", "none");
        $(".cloud2").css("display", "none");
        $(".rain1").css("display", "none");
        
        $(".food").css("display", "none");
        $(".magic").css("display", "none");
        $(".meat").css("display", "none");
        
        $(".small").css("display", "none");
        $(".medium").css("display", "block");
        $(".big").css("display", "none");
        $(".chomp").css("display", "none");
        
    });
});

$(function() {
    $(".medium").click(function() {
        console.log("big");
        
        $(".plant5").css("display", "none");
        $(".plant3").css("display", "none");
        $(".plant1").css("display", "none");
        $(".plant2").css("display", "none");
        $(".pot").css("display", "none");
        
        $(".cloud").css("display", "none");
        $(".cloud2").css("display", "none");
        $(".rain1").css("display", "none");
        
        $(".food").css("display", "none");
        $(".magic").css("display", "none");
        $(".meat").css("display", "none");
        
        $(".small").css("display", "none");
        $(".medium").css("display", "none");
        $(".big").css("display", "block");
        $(".chomp").css("display", "none");
        
      
    });
});


$(function() {
    $(".medium").click(function() {
        console.log("big");
        
        $(".plant5").css("display", "none");
        $(".plant3").css("display", "none");
        $(".plant1").css("display", "none");
        $(".plant2").css("display", "none");
        $(".pot").css("display", "none");
        
        $(".cloud").css("display", "none");
        $(".cloud2").css("display", "none");
        $(".rain1").css("display", "none");
        
        $(".food").css("display", "none");
        $(".magic").css("display", "none");
        $(".meat").css("display", "none");
        
        $(".small").css("display", "none");
        $(".medium").css("display", "none");
        $(".big").css("display", "block");
        $(".chomp").css("display", "none");
        
      
        $(".feed").css("display", "none");
    });
});

$(function() {
    $(".big").click(function() {
        console.log("big");
        
        $(".plant5").css("display", "none");
        $(".plant3").css("display", "none");
        $(".plant1").css("display", "none");
        $(".plant2").css("display", "none");
        $(".pot").css("display", "none");
        
        $(".cloud").css("display", "none");
        $(".cloud2").css("display", "none");
        $(".rain1").css("display", "none");
        
        $(".food").css("display", "none");
        $(".magic").css("display", "none");
        $(".meat").css("display", "none");
        
        $(".small").css("display", "none");
        $(".medium").css("display", "none");
        $(".big").css("display", "block");
        $(".chomp").css("display", "none");
        
      
        $(".feed").css("display", "block");
        
        
                  
    });
});



$(function() {
    $(".feed").click(function() {
        console.log("feeding");
        
        $(".plant5").css("display", "none");
        $(".plant3").css("display", "none");
        $(".plant1").css("display", "none");
        $(".plant2").css("display", "none");
        $(".pot").css("display", "none");
        
        $(".cloud").css("display", "none");
        $(".cloud2").css("display", "none");
        $(".rain1").css("display", "none");
        
        $(".food").css("display", "none");
        $(".magic").css("display", "none");
        $(".meat").css("display", "block");
        
        $(".small").css("display", "none");
        $(".medium").css("display", "none");
        $(".big").css("display", "block");
        $(".chomp").css("display", "none");
        $(".feed").css("display", "none");
        
          $(function() {
                 $(".big").mouseenter(function() {
                 console.log("eating");
        
        $(".plant5").css("display", "none");
        $(".plant3").css("display", "none");
        $(".plant1").css("display", "none");
        $(".plant2").css("display", "none");
        $(".pot").css("display", "none");
        
        $(".cloud").css("display", "none");
        $(".cloud2").css("display", "none");
        $(".rain1").css("display", "none");
        
        $(".food").css("display", "none");
        $(".magic").css("display", "none");
        $(".meat").css("display", "block");
        
        $(".small").css("display", "none");
        $(".medium").css("display", "none");
        $(".big").css("display", "none");
        $(".chomp").css("display", "block");
                  
            
                     });
                    });

            $(function() {
                 $(".big").mouseleave(function() {
                 console.log("eating");
        
        $(".plant5").css("display", "none");
        $(".plant3").css("display", "none");
        $(".plant1").css("display", "none");
        $(".plant2").css("display", "none");
        $(".pot").css("display", "none");
        
        $(".cloud").css("display", "none");
        $(".cloud2").css("display", "none");
        $(".rain1").css("display", "none");
        
        $(".food").css("display", "none");
        $(".magic").css("display", "none");
        $(".meat").css("display", "block");
        
        $(".small").css("display", "none");
        $(".medium").css("display", "none");
        $(".big").css("display", "block");
        $(".chomp").css("display", "none");
                  
             
                        });
                    });
        
  });
});

    


$(function() {
    $(".meat").click(function() {
        console.log("growing");
        
        $(".plant5").css("display", "none");
        $(".plant3").css("display", "none");
        $(".plant1").css("display", "none");
        $(".plant2").css("display", "none");
        $(".pot").css("display", "none");
        
        $(".cloud").css("display", "none");
        $(".cloud2").css("display", "none");
        $(".rain1").css("display", "none");
        
        $(".food").css("display", "none");
        $(".magic").css("display", "none");
        $(".meat").css("display", "none");
        
        $(".small").css("display", "none");
        $(".medium").css("display", "none");
        $(".big").css("display", "none");
        $(".chomp").css("display", "block");
                  
        
    });
});
 
