
    $(".candle").click(function() {
        console.log("you lit the candle!");
        
        $(".candle").css("display", "none");
        $(".candlelit").css("display", "block");
        $(".candleout").css("display", "none");
    });

        $(".candlelit").click(function() {
        console.log("you blew out the candle!");
        
        $(".candle").css("display", "none");
        $(".candlelit").css("display", "none");
        $(".candleout").css("display", "block");
    });

        $(".candleout").click(function() {
        console.log("the candle is out");
        
        $(".candle").css("display", "block");
        $(".candlelit").css("display", "none");
        $(".candleout").css("display", "none");
    });




    $(".blanket").click(function() {
        console.log("you messed up the blanket!");
        
        $(".blanket").css("display", "none");
        $(".blanketmess").css("display", "block");
        $(".blanketfolded").css("display", "none");
    });
        $(".blanketmess").click(function() {
        console.log("you folded the blanket!");
        
        $(".blanket").css("display", "none");
         $(".blanketmess").css("display", "none");
        $(".blanketfolded").css("display", "block");
    });
        $(".blanketfolded").click(function() {
        console.log("you remessed up the blanket!");
        
        $(".blanket").css("display", "block");
        $(".blanketmess").css("display", "none");
        $(".blanketfolded").css("display", "none");
    });






    $(".coat").click(function() {
        console.log("you folded the coat!");
        
        $(".coat").css("display", "none");
        $(".coatfolded").css("display", "block");
    });

        $(".coatfolded").click(function() {
        console.log("you folded the coat!");
        
        $(".coat").css("display", "block");
        $(".coatfolded").css("display", "none");
    });







