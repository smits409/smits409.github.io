function gotoRandom() {
  var pages = ["page1.html","page2.html","page3.html","page4.html",
  			   "page5.html","page6.html","page7.html","page8.html",
  			   "page9.html","page10.html"];
    location.href = pages[Math.floor(Math.random()*pages.length)];
}

gotoRandom();