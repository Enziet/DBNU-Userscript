// ==UserScript==
// @name         DBNU Helpfile Database Fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This makes the DBNU Helpfile Database page not look like it was made in 2002 by a highschool teenager, and many other random fixes/prettify
// @author       Julet@DBNU
// @match        http://dbnu.mudhosting.net/helps/
// @match        http://dbnu.mudhosting.net/helps/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function _addAllOfTheStyles(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    _addAllOfTheStyles('body { font-family: Hind,Arial,sans-serif !important; \
                        color: #FFCB9A !important; \
                        background-color: #1A1F1C !important; \
                        background-image: none !important; }');

    _addAllOfTheStyles('table { background-color: #1A1F1C !important; \
                        font-family: Hind,Arial,sans-serif !important; }');

    _addAllOfTheStyles('a:link { color: #116466; \
                                 text-decoration: none; \
                                 font-family: Hind,Arial,sans-serif;');

    _addAllOfTheStyles('a:hover { color: #D1E8E2; \
                                  text-decoration: none; }');
})();