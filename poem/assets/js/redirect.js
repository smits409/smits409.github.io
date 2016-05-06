function gotoRandom() {
  var pages = ["page1.html","page2.html","page3.html","page4.html"];
    location.href = pages[Math.floor(Math.random()*pages.length)];
}

gotoRandom();