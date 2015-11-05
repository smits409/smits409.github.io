// NOTES ON JS AND JQUERY



$("body").css("background-color","pink");
$("h1").html("welcome home")

$(".bigredbutton").click(function() {
    console.log("you clicked it");
    $("h1").css("background-color","white");
}

function myfunction () {
    // do stuff
    console.log ("hello");
}

function addNums(num1, num2) {
    var sum = num1 + num2;
    return sum;
    
    
                // NOTES ON RANDOM IMAGES
    
      // cats [math.floor (Math.random()*4)] in console
      
      // var newCat = "<img src= 'img/cat2.jpg'>";
      
      // $("body").append("<img src= '" + cats [Math.floor(Math.random()*4)] + "'>")
      
      //                                                                *cats.length
      
     // var cats= [img/cat1.jpeg, etc.] is the array
    
    
        // NOTES ON RANDOM CSS THINGS
        
    // $(".ball").css("top" , "200px").css("left" , "300px")
    // var ballTop = Math.floor (Math.random() * 100) + px;  <- (add px so it knows its about location)
    // var ballLeft = Math.floor (Math.random() * 100) + px;
    
    // $(".ball").css("top" , ballTop).css("left" , "ballLeft")
    
    
    //    WINDOW RESIZING
    
    // $(window).width() -100     &      $(window).heigth() -100 
    
    // var ballLeft = Math.floor (Math.random() * ($(window).heigth() -100)) + px;
    
    // add the minus so that you have height of window minus height of object
    
        
        // LOOPS NOTES FOR EACH AND A LOT OF EACHES
        
    // for (var increment = 0; increment < 100; increment++){
        // $("body").append("<div class='ball'></div>");
        
        
       // $(".ball").each(function() {
       // var ballTop = Math.floor (Math.random() * ($(window).width() -100)) + px;
       // var ballLeft = Math.floor (Math.random() * ($(window).heigth() -100)) + px;
       // $(this).css("top" , ballTop).css("left" , "ballLeft");
       // console.log (this);
       
   //   DONT FORGET TO CREATE A DIV ON YOUR ORIGINAL HTML DOC-
   
   
   // append adds on but if your div is blank it just adds to doc
   // add + " " to add spaces between words
    
    
    
    
    
    
    
