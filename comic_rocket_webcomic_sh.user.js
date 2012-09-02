// ==UserScript==
// @name           Comic Rocket Webcomic Shortcuts Receiver
// @namespace      http://hardsun.net/gm
// @description    Allow Comic Rocket to receive shortcuts from websites
// @include        https://www.comic-rocket.com/navbar*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==

function receiveMessage(evt)
{	
        if (evt.data == 'l') {
            $("a[rel='prev']")[0].click();
        } else if (evt.data == 'r') {
            $("a[rel='next']")[0].click();
        }
}

window.addEventListener('message', receiveMessage, false);
