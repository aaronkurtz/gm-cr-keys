// ==UserScript==
// @name           Send Keypresses to Comic Rocket
// @namespace      http://hardsun.net/gm
// @description    Allow websites to send keyboard shortcuts to Comic Rocket
// @include        *
// ==/UserScript==

var left_key = 44; // move left by pressing ,
// var left_key = 37; // move left by pressing left arrow key
var right_key = 46; // move right by pressing .
// var right_key = 39; // move right by pressing by arrow key

var no_alt_needed = true; // Set to true to enable switching through ,. only
//var no_alt_needed = false; // Set to false to require alt-, alt-.

window.addEventListener("keypress", function(e) { 
  if ((e.altKey ==1 )||(no_alt_needed)) {
    var key = e.keyCode ? e.keyCode : e.which;
    if (key == 44) {
        window.parent.frames[0].postMessage('l', 'https://www.comic-rocket.com/navbar');
    } 
    if (key == 46) {
        window.parent.frames[0].postMessage('r', 'https://www.comic-rocket.com/navbar');
    }
  }
}, false); 
