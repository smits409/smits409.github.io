
  $(".trainscene").click(function() {
        console.log("sounds");
     
      var audio = new Audio('bridge1.mp3');
        audio.play();
     
});

  $(".kiss").click(function() {
        console.log("grab the camera");
        
        $(".kiss").css("display", "none");
        $(".backpack").css("display", "none");
        $(".camera").css("display", "block");
     
      var audio = new Audio('bridge2.mp3');
        audio.play();
 });
    


$(".camera").click(function() {
    console.log("flash");
    
     var audio = new Audio('flash.mp3');
        audio.play();
        
        $(".kiss").css("display", "none");
        $(".backpack").css("display", "none");
        $(".camera").css("display", "none");
        $(".camera2").css("display", "block");
        $(".flash").css("display", "block");
        
});



    
var images = [".polaroid1",".polaroid2",".polaroid3",".polaroid4",
".polaroid5",".polaroid6",".polaroid7",".polaroid8",".polaroid9",".polaroid10"];

$(".camera2").click(function() {
    console.log("taken photos");
    var randImg = images[Math.floor(Math.random()*images.length)];
    $(randImg).show();

    var audio = new Audio('camera.mp3');
        audio.play();
}); 