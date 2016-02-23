    

    $(".coat").click(function() {
        console.log("you folded the coat!");
        
        $(".coat").css("display", "none");
        $(".coatfolded").css("display", "block");
    });

    $(".blanket").click(function() {
        console.log("you folded the blanket!");
        
        $(".blanket").css("display", "none");
        $(".blanketfolded").css("display", "block");
    });

    $(".candle").click(function() {
        console.log("you lit the candle!");
        
        $(".candle").css("display", "none");
        $(".candlelit").css("display", "block");
    });


