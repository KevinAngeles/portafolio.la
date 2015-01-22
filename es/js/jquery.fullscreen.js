/*
 jquery.fullscreen 1.1.4
 https://github.com/kayahr/jquery-fullscreen-plugin
 Copyright (C) 2012 Klaus Reimer <k@ailis.de>
 Licensed under the MIT license
 (See http://www.opensource.org/licenses/mit-license)
*/
(function(){function d(a){var c,b;if(!this.length)return this;c=this[0];c.ownerDocument?b=c.ownerDocument:(b=c,c=b.documentElement);if(null==a)return b.cancelFullScreen||b.webkitCancelFullScreen||b.mozCancelFullScreen?(a=!!b.fullScreen||!!b.webkitIsFullScreen||!!b.mozFullScreen)?b.fullScreenElement||b.webkitCurrentFullScreenElement||b.mozFullScreenElement||a:a:null;a?(a=c.requestFullScreen||c.webkitRequestFullScreen||c.mozRequestFullScreen)&&(Element.ALLOW_KEYBOARD_INPUT?a.call(c,Element.ALLOW_KEYBOARD_INPUT):
a.call(c)):(a=b.cancelFullScreen||b.webkitCancelFullScreen||b.mozCancelFullScreen)&&a.call(b);return this}function e(a){jQuery(document).trigger(new jQuery.Event("fullscreenchange"))}function f(a){jQuery(document).trigger(new jQuery.Event("fullscreenerror"))}jQuery.fn.fullScreen=d;jQuery.fn.toggleFullScreen=function(){return d.call(this,!d.call(this))};(function(){var a,c;a=document;a.webkitCancelFullScreen?(a="webkitfullscreenchange",c="webkitfullscreenerror"):a.mozCancelFullScreen?(a="mozfullscreenchange",
c="mozfullscreenerror"):(a="fullscreenchange",c="fullscreenerror");jQuery(document).bind(a,e);jQuery(document).bind(c,f)})()})();