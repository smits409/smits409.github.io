console.log("is it cold outside?");
console.log("let it snow let it snow let it snow!");


var symbols = ["*","_","*","_","*","_","*","_","*","_","*",]
var pattern = "";

for (var increment = 2; increment < 100; increment++) {
    console.log(pattern);
    if (increment == 50) {
      pattern = "";
    }
    pattern = pattern + symbols[Math.floor(Math.random() * symbols.length)]; 
    
      } 
