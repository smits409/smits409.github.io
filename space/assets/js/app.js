    

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



    $(".blanket").click(function() {
        console.log("you folded the blanket!");
        
        $(".blanket").css("display", "none");
        $(".blanketfolded").css("display", "block");
    });
        $(".blanketfolded").click(function() {
        console.log("you folded the blanket!");
        
        $(".blanket").css("display", "block");
        $(".blanketfolded").css("display", "none");
    });



    $(".candle").click(function() {
        console.log("you lit the candle!");
        
        $(".candle").css("display", "none");
        $(".candlelit").css("display", "block");
    });

        $(".candlelit").click(function() {
        console.log("you lit the candle!");
        
        $(".candle").css("display", "block");
        $(".candlelit").css("display", "none");
    });


