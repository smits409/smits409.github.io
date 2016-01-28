


var clicked = 0;

$(".button").click(userClicks);

function userClicks() 
{

    console.log("you clicked it")
    
  for (var i = 0; i <= 10, i++)
  {
  
    
         if (clicked == 1)
            { 
            $(this).attr('src', 'img/plant22.png');
            clicked++
            checkNums();
            }
                else if (clicked == 2)
                {  
                    $(this).attr('src', 'img/plant33.png');
                    clicked++
                    checkNums[2];
                }
                
                else if (clicked == 2)
                { 
                    $(this).attr('src', 'img/plant44.png');
                    clicked++
                    checkNums[3];
                }
    
    }
}
   
    
