(function(g,c){function h(b){g.fn.cycle.debug&&a(b)}function a(){window.console&&console.log&&console.log("[cycle] "+Array.prototype.join.call(arguments," "))}function l(b,f,a){var d=g(b).data("cycle.opts");if(d){var c=!!b.cyclePause;c&&d.paused?d.paused(b,d,f,a):!c&&d.resumed&&d.resumed(b,d,f,a)}}function k(b,f,d){function k(b,f,d){if(!b&&!0===f){b=g(d).data("cycle.opts");if(!b)return a("options not found, can not resume"),!1;d.cycleTimeout&&(clearTimeout(d.cycleTimeout),d.cycleTimeout=0);x(b.elements,
b,1,!b.backwards)}}b.cycleStop===c&&(b.cycleStop=0);if(f===c||null===f)f={};if(f.constructor==String)switch(f){case "destroy":case "stop":var t=g(b).data("cycle.opts");if(!t)return!1;b.cycleStop++;b.cycleTimeout&&clearTimeout(b.cycleTimeout);b.cycleTimeout=0;t.elements&&g(t.elements).stop();g(b).removeData("cycle.opts");"destroy"==f&&m(b,t);return!1;case "toggle":return b.cyclePause=1===b.cyclePause?0:1,k(b.cyclePause,d,b),l(b),!1;case "pause":return b.cyclePause=1,l(b),!1;case "resume":return b.cyclePause=
0,k(!1,d,b),l(b),!1;case "prev":case "next":t=g(b).data("cycle.opts");if(!t)return a('options not found, "prev/next" ignored'),!1;"string"==typeof d&&(t.oneTimeFx=d);g.fn.cycle[f](t);return!1;default:f={fx:f}}else if(f.constructor==Number){t=f;f=g(b).data("cycle.opts");if(!f)return a("options not found, can not advance slide"),!1;if(0>t||t>=f.elements.length)return a("invalid slide index: "+t),!1;f.nextSlide=t;b.cycleTimeout&&(clearTimeout(b.cycleTimeout),b.cycleTimeout=0);"string"==typeof d&&(f.oneTimeFx=
d);x(f.elements,f,1,t>=f.currSlide);return!1}return f}function d(b,f){if(!g.support.opacity&&f.cleartype&&b.style.filter)try{b.style.removeAttribute("filter")}catch(a){}}function m(b,f){f.next&&g(f.next).unbind(f.prevNextEvent);f.prev&&g(f.prev).unbind(f.prevNextEvent);(f.pager||f.pagerAnchorBuilder)&&g.each(f.pagerAnchors||[],function(){this.unbind().remove()});f.pagerAnchors=null;g(b).unbind("mouseenter.cycle mouseleave.cycle");f.destroy&&f.destroy(f)}function p(b,f,q,k,t){var u,e=g.extend({},g.fn.cycle.defaults,
k||{},g.metadata?b.metadata():g.meta?b.data():{}),h=g.isFunction(b.data)?b.data(e.metaAttr):null;h&&(e=g.extend(e,h));e.autostop&&(e.countdown=e.autostopCount||q.length);var m=b[0];b.data("cycle.opts",e);e.$cont=b;e.stopCount=m.cycleStop;e.elements=q;e.before=e.before?[e.before]:[];e.after=e.after?[e.after]:[];!g.support.opacity&&e.cleartype&&e.after.push(function(){d(this,e)});e.continuous&&e.after.push(function(){x(q,e,0,!e.backwards)});n(e);g.support.opacity||!e.cleartype||e.cleartypeNoBg||v(f);
"static"==b.css("position")&&b.css("position","relative");e.width&&b.width(e.width);e.height&&"auto"!=e.height&&b.height(e.height);e.startingSlide!==c?(e.startingSlide=parseInt(e.startingSlide,10),e.startingSlide>=q.length||0>e.startSlide?e.startingSlide=0:u=!0):e.startingSlide=e.backwards?q.length-1:0;if(e.random){e.randomMap=[];for(h=0;h<q.length;h++)e.randomMap.push(h);e.randomMap.sort(function(b,f){return Math.random()-.5});if(u)for(u=0;u<q.length;u++)e.startingSlide==e.randomMap[u]&&(e.randomIndex=
u);else e.randomIndex=1,e.startingSlide=e.randomMap[1]}else e.startingSlide>=q.length&&(e.startingSlide=0);e.currSlide=e.startingSlide||0;var r=e.startingSlide;f.css({position:"absolute",top:0,left:0}).hide().each(function(b){b=e.backwards?r?b<=r?q.length+(b-r):r-b:q.length-b:r?b>=r?q.length-(b-r):r-b:q.length-b;g(this).css("z-index",b)});g(q[r]).css("opacity",1).show();d(q[r],e);e.fit&&(e.aspect?f.each(function(){var b=g(this),f=!0===e.aspect?b.width()/b.height():e.aspect;e.width&&b.width()!=e.width&&
(b.width(e.width),b.height(e.width/f));e.height&&b.height()<e.height&&(b.height(e.height),b.width(e.height*f))}):(e.width&&f.width(e.width),e.height&&"auto"!=e.height&&f.height(e.height)));!e.center||e.fit&&!e.aspect||f.each(function(){var b=g(this);b.css({"margin-left":e.width?(e.width-b.width())/2+"px":0,"margin-top":e.height?(e.height-b.height())/2+"px":0})});!e.center||e.fit||e.slideResize||f.each(function(){var b=g(this);b.css({"margin-left":e.width?(e.width-b.width())/2+"px":0,"margin-top":e.height?
(e.height-b.height())/2+"px":0})});if((e.containerResize||e.containerResizeHeight)&&1>b.innerHeight()){for(var p=h=u=0;p<q.length;p++){var z=g(q[p]),A=z[0],y=z.outerWidth(),B=z.outerHeight();y||(y=A.offsetWidth||A.width||z.attr("width"));B||(B=A.offsetHeight||A.height||z.attr("height"));u=y>u?y:u;h=B>h?B:h}e.containerResize&&0<u&&0<h&&b.css({width:u+"px",height:h+"px"});e.containerResizeHeight&&0<h&&b.css({height:h+"px"})}var E=!1;e.pause&&b.bind("mouseenter.cycle",function(){E=!0;this.cyclePause++;
l(m,!0)}).bind("mouseleave.cycle",function(){E&&this.cyclePause--;l(m,!0)});if(!1===w(e))return!1;var F=!1;k.requeueAttempts=k.requeueAttempts||0;f.each(function(){var b=g(this);this.cycleH=e.fit&&e.height?e.height:b.height()||this.offsetHeight||this.height||b.attr("height")||0;this.cycleW=e.fit&&e.width?e.width:b.width()||this.offsetWidth||this.width||b.attr("width")||0;if(b.is("img")&&0===this.cycleH&&0===this.cycleW&&!this.complete){if(t.s&&e.requeueOnImageNotLoaded&&100>++k.requeueAttempts)return a(k.requeueAttempts,
" - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH),setTimeout(function(){g(t.s,t.c).cycle(k)},e.requeueTimeout),F=!0,!1;a("could not determine size of image: "+this.src,this.cycleW,this.cycleH)}return!0});if(F)return!1;e.cssBefore=e.cssBefore||{};e.cssAfter=e.cssAfter||{};e.cssFirst=e.cssFirst||{};e.animIn=e.animIn||{};e.animOut=e.animOut||{};f.not(":eq("+r+")").css(e.cssBefore);g(f[r]).css(e.cssFirst);if(e.timeout)for(e.timeout=parseInt(e.timeout,10),e.speed.constructor==
String&&(e.speed=g.fx.speeds[e.speed]||parseInt(e.speed,10)),e.sync||(e.speed/=2),u="none"==e.fx?0:"shuffle"==e.fx?500:250;e.timeout-e.speed<u;)e.timeout+=e.speed;e.easing&&(e.easeIn=e.easeOut=e.easing);e.speedIn||(e.speedIn=e.speed);e.speedOut||(e.speedOut=e.speed);e.slideCount=q.length;e.currSlide=e.lastSlide=r;e.random?(++e.randomIndex==q.length&&(e.randomIndex=0),e.nextSlide=e.randomMap[e.randomIndex]):e.nextSlide=e.backwards?0===e.startingSlide?q.length-1:e.startingSlide-1:e.startingSlide>=q.length-
1?0:e.startingSlide+1;if(!e.multiFx)if(u=g.fn.cycle.transitions[e.fx],g.isFunction(u))u(b,f,e);else if("custom"!=e.fx&&!e.multiFx)return a("unknown transition: "+e.fx,"; slideshow terminating"),!1;b=f[r];e.skipInitializationCallbacks||(e.before.length&&e.before[0].apply(b,[b,b,e,!0]),e.after.length&&e.after[0].apply(b,[b,b,e,!0]));e.next&&g(e.next).bind(e.prevNextEvent,function(){return C(e,1)});e.prev&&g(e.prev).bind(e.prevNextEvent,function(){return C(e,0)});(e.pager||e.pagerAnchorBuilder)&&D(q,
e);G(e,q);return e}function n(b){b.original={before:[],after:[]};b.original.cssBefore=g.extend({},b.cssBefore);b.original.cssAfter=g.extend({},b.cssAfter);b.original.animIn=g.extend({},b.animIn);b.original.animOut=g.extend({},b.animOut);g.each(b.before,function(){b.original.before.push(this)});g.each(b.after,function(){b.original.after.push(this)})}function w(b){var f,d,c=g.fn.cycle.transitions;if(0<b.fx.indexOf(",")){b.multiFx=!0;b.fxs=b.fx.replace(/\s*/g,"").split(",");for(f=0;f<b.fxs.length;f++){var k=
b.fxs[f];d=c[k];d&&c.hasOwnProperty(k)&&g.isFunction(d)||(a("discarding unknown transition: ",k),b.fxs.splice(f,1),f--)}if(!b.fxs.length)return a("No valid transitions named; slideshow terminating."),!1}else if("all"==b.fx)for(f in b.multiFx=!0,b.fxs=[],c)c.hasOwnProperty(f)&&(d=c[f],c.hasOwnProperty(f)&&g.isFunction(d)&&b.fxs.push(f));if(b.multiFx&&b.randomizeEffects){d=Math.floor(20*Math.random())+30;for(f=0;f<d;f++)c=Math.floor(Math.random()*b.fxs.length),b.fxs.push(b.fxs.splice(c,1)[0]);h("randomized fx sequence: ",
b.fxs)}return!0}function G(b,f){b.addSlide=function(a,d){var c=g(a),k=c[0];b.autostopCount||b.countdown++;f[d?"unshift":"push"](k);if(b.els)b.els[d?"unshift":"push"](k);b.slideCount=f.length;b.random&&(b.randomMap.push(b.slideCount-1),b.randomMap.sort(function(b,f){return Math.random()-.5}));c.css("position","absolute");c[d?"prependTo":"appendTo"](b.$cont);d&&(b.currSlide++,b.nextSlide++);g.support.opacity||!b.cleartype||b.cleartypeNoBg||v(c);b.fit&&b.width&&c.width(b.width);b.fit&&b.height&&"auto"!=
b.height&&c.height(b.height);k.cycleH=b.fit&&b.height?b.height:c.height();k.cycleW=b.fit&&b.width?b.width:c.width();c.css(b.cssBefore);(b.pager||b.pagerAnchorBuilder)&&g.fn.cycle.createPagerAnchor(f.length-1,k,g(b.pager),f,b);if(g.isFunction(b.onAddSlide))b.onAddSlide(c);else c.hide()}}function x(b,f,a,d){function k(){var a=0;f.timeout&&!f.continuous?(a=y(b[f.currSlide],b[f.nextSlide],f,d),"shuffle"==f.fx&&(a-=f.speedOut)):f.continuous&&l.cyclePause&&(a=10);0<a&&(l.cycleTimeout=setTimeout(function(){x(b,
f,0,!f.backwards)},a))}var l=f.$cont[0],e=b[f.currSlide],m=b[f.nextSlide];a&&f.busy&&f.manualTrump&&(h("manualTrump in go(), stopping active transition"),g(b).stop(!0,!0),f.busy=0,clearTimeout(l.cycleTimeout));if(f.busy)h("transition active, ignoring new tx request");else if(l.cycleStop==f.stopCount&&(0!==l.cycleTimeout||a))if(a||l.cyclePause||f.bounce||!(f.autostop&&0>=--f.countdown||f.nowrap&&!f.random&&f.nextSlide<f.currSlide)){var p=!1;if(!a&&l.cyclePause||f.nextSlide==f.currSlide)k();else{var p=
!0,r=f.fx;e.cycleH=e.cycleH||g(e).height();e.cycleW=e.cycleW||g(e).width();m.cycleH=m.cycleH||g(m).height();m.cycleW=m.cycleW||g(m).width();f.multiFx&&(d&&(f.lastFx===c||++f.lastFx>=f.fxs.length)?f.lastFx=0:!d&&(f.lastFx===c||0>--f.lastFx)&&(f.lastFx=f.fxs.length-1),r=f.fxs[f.lastFx]);f.oneTimeFx&&(r=f.oneTimeFx,f.oneTimeFx=null);g.fn.cycle.resetState(f,r);f.before.length&&g.each(f.before,function(b,a){l.cycleStop==f.stopCount&&a.apply(m,[e,m,f,d])});var n=function(){f.busy=0;g.each(f.after,function(b,
a){l.cycleStop==f.stopCount&&a.apply(m,[e,m,f,d])});l.cycleStop||k()};h("tx firing("+r+"); currSlide: "+f.currSlide+"; nextSlide: "+f.nextSlide);f.busy=1;if(f.fxFn)f.fxFn(e,m,f,n,d,a&&f.fastOnEvent);else if(g.isFunction(g.fn.cycle[f.fx]))g.fn.cycle[f.fx](e,m,f,n,d,a&&f.fastOnEvent);else g.fn.cycle.custom(e,m,f,n,d,a&&f.fastOnEvent)}if(p||f.nextSlide==f.currSlide)f.lastSlide=f.currSlide,f.random?(f.currSlide=f.nextSlide,++f.randomIndex==b.length&&(f.randomIndex=0,f.randomMap.sort(function(b,f){return Math.random()-
.5})),f.nextSlide=f.randomMap[f.randomIndex],f.nextSlide==f.currSlide&&(f.nextSlide=f.currSlide==f.slideCount-1?0:f.currSlide+1)):f.backwards?(a=0>f.nextSlide-1)&&f.bounce?(f.backwards=!f.backwards,f.nextSlide=1,f.currSlide=0):(f.nextSlide=a?b.length-1:f.nextSlide-1,f.currSlide=a?0:f.nextSlide+1):(a=f.nextSlide+1==b.length)&&f.bounce?(f.backwards=!f.backwards,f.nextSlide=b.length-2,f.currSlide=b.length-1):(f.nextSlide=a?0:f.nextSlide+1,f.currSlide=a?b.length-1:f.nextSlide-1);p&&f.pager&&f.updateActivePagerLink(f.pager,
f.currSlide,f.activePagerClass)}else f.end&&f.end(f)}function y(b,f,a,g){if(a.timeoutFn){for(b=a.timeoutFn.call(b,b,f,a,g);"none"!=a.fx&&250>b-a.speed;)b+=a.speed;h("calculated timeout: "+b+"; speed: "+a.speed);if(!1!==b)return b}return a.timeout}function C(b,a){var d=a?1:-1,c=b.elements,k=b.$cont[0],l=k.cycleTimeout;l&&(clearTimeout(l),k.cycleTimeout=0);if(b.random&&0>d)b.randomIndex--,-2==--b.randomIndex?b.randomIndex=c.length-2:-1==b.randomIndex&&(b.randomIndex=c.length-1),b.nextSlide=b.randomMap[b.randomIndex];
else if(b.random)b.nextSlide=b.randomMap[b.randomIndex];else if(b.nextSlide=b.currSlide+d,0>b.nextSlide){if(b.nowrap)return!1;b.nextSlide=c.length-1}else if(b.nextSlide>=c.length){if(b.nowrap)return!1;b.nextSlide=0}k=b.onPrevNextEvent||b.prevNextClick;g.isFunction(k)&&k(0<d,b.nextSlide,c[b.nextSlide]);x(c,b,1,a);return!1}function D(b,a){var d=g(a.pager);g.each(b,function(c,k){g.fn.cycle.createPagerAnchor(c,k,d,b,a)});a.updateActivePagerLink(a.pager,a.startingSlide,a.activePagerClass)}function v(b){function a(b){b=
parseInt(b,10).toString(16);return 2>b.length?"0"+b:b}function d(b){for(;b&&"html"!=b.nodeName.toLowerCase();b=b.parentNode){var c=g.css(b,"background-color");if(c&&0<=c.indexOf("rgb"))return b=c.match(/\d+/g),"#"+a(b[0])+a(b[1])+a(b[2]);if(c&&"transparent"!=c)return c}return"#ffffff"}h("applying clearType background-color hack");b.each(function(){g(this).css("background-color",d(this))})}g.expr[":"].paused=function(b){return b.cyclePause};g.fn.cycle=function(b,f){var d={s:this.selector,c:this.context};
if(0===this.length&&"stop"!=b){if(!g.isReady&&d.s)return a("DOM not ready, queuing slideshow"),g(function(){g(d.s,d.c).cycle(b,f)}),this;a("terminating; zero elements found by selector"+(g.isReady?"":" (DOM not ready)"));return this}return this.each(function(){var c=k(this,b,f);if(!1!==c){c.updateActivePagerLink=c.updateActivePagerLink||g.fn.cycle.updateActivePagerLink;this.cycleTimeout&&clearTimeout(this.cycleTimeout);this.cycleStop=this.cycleTimeout=this.cyclePause=0;var l=g(this),m=c.slideExpr?
g(c.slideExpr,this):l.children(),e=m.get();if(2>e.length)a("terminating; too few slides: "+e.length);else{var n=p(l,m,e,c,d);!1!==n&&(l=n.continuous?10:y(e[n.currSlide],e[n.nextSlide],n,!n.backwards))&&(l+=n.delay||0,10>l&&(l=10),h("first timeout: "+l),this.cycleTimeout=setTimeout(function(){x(e,n,0,!c.backwards)},l))}}})};g.fn.cycle.resetState=function(b,a){a=a||b.fx;b.before=[];b.after=[];b.cssBefore=g.extend({},b.original.cssBefore);b.cssAfter=g.extend({},b.original.cssAfter);b.animIn=g.extend({},
b.original.animIn);b.animOut=g.extend({},b.original.animOut);b.fxFn=null;g.each(b.original.before,function(){b.before.push(this)});g.each(b.original.after,function(){b.after.push(this)});var d=g.fn.cycle.transitions[a];g.isFunction(d)&&d(b.$cont,g(b.elements),b)};g.fn.cycle.updateActivePagerLink=function(b,a,d){g(b).each(function(){g(this).children().removeClass(d).eq(a).addClass(d)})};g.fn.cycle.next=function(b){C(b,1)};g.fn.cycle.prev=function(b){C(b,0)};g.fn.cycle.createPagerAnchor=function(b,
a,d,c,k){g.isFunction(k.pagerAnchorBuilder)?(a=k.pagerAnchorBuilder(b,a),h("pagerAnchorBuilder("+b+", el) returned: "+a)):a='<a href="#">'+(b+1)+"</a>";if(a){var m=g(a);if(0===m.parents("body").length){var e=[];1<d.length?(d.each(function(){var b=m.clone(!0);g(this).append(b);e.push(b[0])}),m=g(e)):m.appendTo(d)}k.pagerAnchors=k.pagerAnchors||[];k.pagerAnchors.push(m);d=function(a){a.preventDefault();k.nextSlide=b;a=k.$cont[0];var f=a.cycleTimeout;f&&(clearTimeout(f),a.cycleTimeout=0);a=k.onPagerEvent||
k.pagerClick;g.isFunction(a)&&a(k.nextSlide,c[k.nextSlide]);x(c,k,1,k.currSlide<b)};/mouseenter|mouseover/i.test(k.pagerEvent)?m.hover(d,function(){}):m.bind(k.pagerEvent,d);/^click/.test(k.pagerEvent)||k.allowPagerClickBubble||m.bind("click.cycle",function(){return!1});var n=k.$cont[0],p=!1;k.pauseOnPagerHover&&m.hover(function(){p=!0;n.cyclePause++;l(n,!0,!0)},function(){p&&n.cyclePause--;l(n,!0,!0)})}};g.fn.cycle.hopsFromLast=function(b,a){var d=b.lastSlide,g=b.currSlide;return a?g>d?g-d:b.slideCount-
d:g<d?d-g:d+b.slideCount-g};g.fn.cycle.commonReset=function(b,a,d,c,k,l){g(d.elements).not(b).hide();"undefined"==typeof d.cssBefore.opacity&&(d.cssBefore.opacity=1);d.cssBefore.display="block";d.slideResize&&!1!==c&&0<a.cycleW&&(d.cssBefore.width=a.cycleW);d.slideResize&&!1!==k&&0<a.cycleH&&(d.cssBefore.height=a.cycleH);d.cssAfter=d.cssAfter||{};d.cssAfter.display="none";g(b).css("zIndex",d.slideCount+(!0===l?1:0));g(a).css("zIndex",d.slideCount+(!0===l?0:1))};g.fn.cycle.custom=function(b,a,d,c,
k,l){var e=g(b),h=g(a),m=d.speedIn;b=d.speedOut;var n=d.easeIn;a=d.easeOut;h.css(d.cssBefore);l&&(m="number"==typeof l?b=l:b=1,n=a=null);var p=function(){h.animate(d.animIn,m,n,function(){c()})};e.animate(d.animOut,b,a,function(){e.css(d.cssAfter);d.sync||p()});d.sync&&p()};g.fn.cycle.transitions={fade:function(b,a,d){a.not(":eq("+d.currSlide+")").css("opacity",0);d.before.push(function(b,a,d){g.fn.cycle.commonReset(b,a,d);d.cssBefore.opacity=0});d.animIn={opacity:1};d.animOut={opacity:0};d.cssBefore=
{top:0,left:0}}};g.fn.cycle.ver=function(){return"3.0.2"};g.fn.cycle.defaults={activePagerClass:"activeSlide",after:null,allowPagerClickBubble:!1,animIn:null,animOut:null,aspect:!1,autostop:0,autostopCount:0,backwards:!1,before:null,center:null,cleartype:!g.support.opacity,cleartypeNoBg:!1,containerResize:1,containerResizeHeight:0,continuous:0,cssAfter:null,cssBefore:null,delay:0,easeIn:null,easeOut:null,easing:null,end:null,fastOnEvent:0,fit:0,fx:"fade",fxFn:null,height:"auto",manualTrump:!0,metaAttr:"cycle",
next:null,nowrap:0,onPagerEvent:null,onPrevNextEvent:null,pager:null,pagerAnchorBuilder:null,pagerEvent:"click.cycle",pause:0,pauseOnPagerHover:0,prev:null,prevNextEvent:"click.cycle",random:0,randomizeEffects:1,requeueOnImageNotLoaded:!0,requeueTimeout:250,rev:0,shuffle:null,skipInitializationCallbacks:!1,slideExpr:null,slideResize:1,speed:1E3,speedIn:null,speedOut:null,startingSlide:c,sync:1,timeout:4E3,timeoutFn:null,updateActivePagerLink:null,width:null}})(jQuery);
(function(g){g.fn.cycle.transitions.none=function(c,h,a){a.fxFn=function(a,c,d,h){g(c).show();g(a).hide();h()}};g.fn.cycle.transitions.fadeout=function(c,h,a){h.not(":eq("+a.currSlide+")").css({display:"block",opacity:1});a.before.push(function(a,c,d,h,p,n){g(a).css("zIndex",d.slideCount+(!0!==n?1:0));g(c).css("zIndex",d.slideCount+(!0!==n?0:1))});a.animIn.opacity=1;a.animOut.opacity=0;a.cssBefore.opacity=1;a.cssBefore.display="block";a.cssAfter.zIndex=0};g.fn.cycle.transitions.scrollUp=function(c,
h,a){c.css("overflow","hidden");a.before.push(g.fn.cycle.commonReset);c=c.height();a.cssBefore.top=c;a.cssBefore.left=0;a.cssFirst.top=0;a.animIn.top=0;a.animOut.top=-c};g.fn.cycle.transitions.scrollDown=function(c,h,a){c.css("overflow","hidden");a.before.push(g.fn.cycle.commonReset);c=c.height();a.cssFirst.top=0;a.cssBefore.top=-c;a.cssBefore.left=0;a.animIn.top=0;a.animOut.top=c};g.fn.cycle.transitions.scrollLeft=function(c,h,a){c.css("overflow","hidden");a.before.push(g.fn.cycle.commonReset);c=
c.width();a.cssFirst.left=0;a.cssBefore.left=c;a.cssBefore.top=0;a.animIn.left=0;a.animOut.left=0-c};g.fn.cycle.transitions.scrollRight=function(c,h,a){c.css("overflow","hidden");a.before.push(g.fn.cycle.commonReset);c=c.width();a.cssFirst.left=0;a.cssBefore.left=-c;a.cssBefore.top=0;a.animIn.left=0;a.animOut.left=c};g.fn.cycle.transitions.scrollHorz=function(c,h,a){c.css("overflow","hidden").width();a.before.push(function(a,c,d,h){d.rev&&(h=!h);g.fn.cycle.commonReset(a,c,d);d.cssBefore.left=h?c.cycleW-
1:1-c.cycleW;d.animOut.left=h?-a.cycleW:a.cycleW});a.cssFirst.left=0;a.cssBefore.top=0;a.animIn.left=0;a.animOut.top=0};g.fn.cycle.transitions.scrollVert=function(c,h,a){c.css("overflow","hidden");a.before.push(function(a,c,d,h){d.rev&&(h=!h);g.fn.cycle.commonReset(a,c,d);d.cssBefore.top=h?1-c.cycleH:c.cycleH-1;d.animOut.top=h?a.cycleH:-a.cycleH});a.cssFirst.top=0;a.cssBefore.left=0;a.animIn.top=0;a.animOut.left=0};g.fn.cycle.transitions.slideX=function(c,h,a){a.before.push(function(a,c,d){g(d.elements).not(a).hide();
g.fn.cycle.commonReset(a,c,d,!1,!0);d.animIn.width=c.cycleW});a.cssBefore.left=0;a.cssBefore.top=0;a.cssBefore.width=0;a.animIn.width="show";a.animOut.width=0};g.fn.cycle.transitions.slideY=function(c,h,a){a.before.push(function(a,c,d){g(d.elements).not(a).hide();g.fn.cycle.commonReset(a,c,d,!0,!1);d.animIn.height=c.cycleH});a.cssBefore.left=0;a.cssBefore.top=0;a.cssBefore.height=0;a.animIn.height="show";a.animOut.height=0};g.fn.cycle.transitions.shuffle=function(c,h,a){c=c.css("overflow","visible").width();
h.css({left:0,top:0});a.before.push(function(a,c,d){g.fn.cycle.commonReset(a,c,d,!0,!0,!0)});a.speedAdjusted||(a.speed/=2,a.speedAdjusted=!0);a.random=0;a.shuffle=a.shuffle||{left:-c,top:15};a.els=[];for(c=0;c<h.length;c++)a.els.push(h[c]);for(c=0;c<a.currSlide;c++)a.els.push(a.els.shift());a.fxFn=function(a,c,d,h,p){d.rev&&(p=!p);var n=p?g(a):g(c);g(c).css(d.cssBefore);var w=d.slideCount;n.animate(d.shuffle,d.speedIn,d.easeIn,function(){for(var c=g.fn.cycle.hopsFromLast(d,p),k=0;k<c;k++)p?d.els.push(d.els.shift()):
d.els.unshift(d.els.pop());if(p)for(c=0,k=d.els.length;c<k;c++)g(d.els[c]).css("z-index",k-c+w);else c=g(a).css("z-index"),n.css("z-index",parseInt(c,10)+1+w);n.animate({left:0,top:0},d.speedOut,d.easeOut,function(){g(p?this:a).hide();h&&h()})})};g.extend(a.cssBefore,{display:"block",opacity:1,top:0,left:0})};g.fn.cycle.transitions.turnUp=function(c,h,a){a.before.push(function(a,c,d){g.fn.cycle.commonReset(a,c,d,!0,!1);d.cssBefore.top=c.cycleH;d.animIn.height=c.cycleH;d.animOut.width=c.cycleW});a.cssFirst.top=
0;a.cssBefore.left=0;a.cssBefore.height=0;a.animIn.top=0;a.animOut.height=0};g.fn.cycle.transitions.turnDown=function(c,h,a){a.before.push(function(a,c,d){g.fn.cycle.commonReset(a,c,d,!0,!1);d.animIn.height=c.cycleH;d.animOut.top=a.cycleH});a.cssFirst.top=0;a.cssBefore.left=0;a.cssBefore.top=0;a.cssBefore.height=0;a.animOut.height=0};g.fn.cycle.transitions.turnLeft=function(c,h,a){a.before.push(function(a,c,d){g.fn.cycle.commonReset(a,c,d,!1,!0);d.cssBefore.left=c.cycleW;d.animIn.width=c.cycleW});
a.cssBefore.top=0;a.cssBefore.width=0;a.animIn.left=0;a.animOut.width=0};g.fn.cycle.transitions.turnRight=function(c,h,a){a.before.push(function(a,c,d){g.fn.cycle.commonReset(a,c,d,!1,!0);d.animIn.width=c.cycleW;d.animOut.left=a.cycleW});g.extend(a.cssBefore,{top:0,left:0,width:0});a.animIn.left=0;a.animOut.width=0};g.fn.cycle.transitions.zoom=function(c,h,a){a.before.push(function(a,c,d){g.fn.cycle.commonReset(a,c,d,!1,!1,!0);d.cssBefore.top=c.cycleH/2;d.cssBefore.left=c.cycleW/2;g.extend(d.animIn,
{top:0,left:0,width:c.cycleW,height:c.cycleH});g.extend(d.animOut,{width:0,height:0,top:a.cycleH/2,left:a.cycleW/2})});a.cssFirst.top=0;a.cssFirst.left=0;a.cssBefore.width=0;a.cssBefore.height=0};g.fn.cycle.transitions.fadeZoom=function(c,h,a){a.before.push(function(a,c,d){g.fn.cycle.commonReset(a,c,d,!1,!1);d.cssBefore.left=c.cycleW/2;d.cssBefore.top=c.cycleH/2;g.extend(d.animIn,{top:0,left:0,width:c.cycleW,height:c.cycleH})});a.cssBefore.width=0;a.cssBefore.height=0;a.animOut.opacity=0};g.fn.cycle.transitions.blindX=
function(c,h,a){c=c.css("overflow","hidden").width();a.before.push(function(a,c,d){g.fn.cycle.commonReset(a,c,d);d.animIn.width=c.cycleW;d.animOut.left=a.cycleW});a.cssBefore.left=c;a.cssBefore.top=0;a.animIn.left=0;a.animOut.left=c};g.fn.cycle.transitions.blindY=function(c,h,a){c=c.css("overflow","hidden").height();a.before.push(function(a,c,d){g.fn.cycle.commonReset(a,c,d);d.animIn.height=c.cycleH;d.animOut.top=a.cycleH});a.cssBefore.top=c;a.cssBefore.left=0;a.animIn.top=0;a.animOut.top=c};g.fn.cycle.transitions.blindZ=
function(c,h,a){h=c.css("overflow","hidden").height();c=c.width();a.before.push(function(a,c,d){g.fn.cycle.commonReset(a,c,d);d.animIn.height=c.cycleH;d.animOut.top=a.cycleH});a.cssBefore.top=h;a.cssBefore.left=c;a.animIn.top=0;a.animIn.left=0;a.animOut.top=h;a.animOut.left=c};g.fn.cycle.transitions.growX=function(c,h,a){a.before.push(function(a,c,d){g.fn.cycle.commonReset(a,c,d,!1,!0);d.cssBefore.left=this.cycleW/2;d.animIn.left=0;d.animIn.width=this.cycleW;d.animOut.left=0});a.cssBefore.top=0;a.cssBefore.width=
0};g.fn.cycle.transitions.growY=function(c,h,a){a.before.push(function(a,c,d){g.fn.cycle.commonReset(a,c,d,!0,!1);d.cssBefore.top=this.cycleH/2;d.animIn.top=0;d.animIn.height=this.cycleH;d.animOut.top=0});a.cssBefore.height=0;a.cssBefore.left=0};g.fn.cycle.transitions.curtainX=function(c,h,a){a.before.push(function(a,c,d){g.fn.cycle.commonReset(a,c,d,!1,!0,!0);d.cssBefore.left=c.cycleW/2;d.animIn.left=0;d.animIn.width=this.cycleW;d.animOut.left=a.cycleW/2;d.animOut.width=0});a.cssBefore.top=0;a.cssBefore.width=
0};g.fn.cycle.transitions.curtainY=function(c,h,a){a.before.push(function(a,c,d){g.fn.cycle.commonReset(a,c,d,!0,!1,!0);d.cssBefore.top=c.cycleH/2;d.animIn.top=0;d.animIn.height=c.cycleH;d.animOut.top=a.cycleH/2;d.animOut.height=0});a.cssBefore.height=0;a.cssBefore.left=0};g.fn.cycle.transitions.cover=function(c,h,a){var l=a.direction||"left",k=c.css("overflow","hidden").width(),d=c.height();a.before.push(function(a,c,h){g.fn.cycle.commonReset(a,c,h);h.cssAfter.display="";"right"==l?h.cssBefore.left=
-k:"up"==l?h.cssBefore.top=d:"down"==l?h.cssBefore.top=-d:h.cssBefore.left=k});a.animIn.left=0;a.animIn.top=0;a.cssBefore.top=0;a.cssBefore.left=0};g.fn.cycle.transitions.uncover=function(c,h,a){var l=a.direction||"left",k=c.css("overflow","hidden").width(),d=c.height();a.before.push(function(a,c,h){g.fn.cycle.commonReset(a,c,h,!0,!0,!0);"right"==l?h.animOut.left=k:"up"==l?h.animOut.top=-d:"down"==l?h.animOut.top=d:h.animOut.left=-k});a.animIn.left=0;a.animIn.top=0;a.cssBefore.top=0;a.cssBefore.left=
0};g.fn.cycle.transitions.toss=function(c,h,a){var l=c.css("overflow","visible").width(),k=c.height();a.before.push(function(a,c,h){g.fn.cycle.commonReset(a,c,h,!0,!0,!0);h.animOut.left||h.animOut.top?h.animOut.opacity=0:g.extend(h.animOut,{left:2*l,top:-k/2,opacity:0})});a.cssBefore.left=0;a.cssBefore.top=0;a.animIn.left=0};g.fn.cycle.transitions.wipe=function(c,h,a){var l=c.css("overflow","hidden").width(),k=c.height();a.cssBefore=a.cssBefore||{};var d;a.clip&&(/l2r/.test(a.clip)?d="rect(0px 0px "+
k+"px 0px)":/r2l/.test(a.clip)?d="rect(0px "+l+"px "+k+"px "+l+"px)":/t2b/.test(a.clip)?d="rect(0px "+l+"px 0px 0px)":/b2t/.test(a.clip)?d="rect("+k+"px "+l+"px "+k+"px 0px)":/zoom/.test(a.clip)&&(c=parseInt(k/2,10),h=parseInt(l/2,10),d="rect("+c+"px "+h+"px "+c+"px "+h+"px)"));a.cssBefore.clip=a.cssBefore.clip||d||"rect(0px 0px 0px 0px)";c=a.cssBefore.clip.match(/(\d+)/g);var m=parseInt(c[0],10),p=parseInt(c[1],10),n=parseInt(c[2],10),w=parseInt(c[3],10);a.before.push(function(a,c,d){if(a!=c){var h=
g(a),D=g(c);g.fn.cycle.commonReset(a,c,d,!0,!0,!1);d.cssAfter.display="block";var v=1,b=parseInt(d.speedIn/13,10)-1;(function q(){var a=m?m-parseInt(m/b*v,10):0,c=w?w-parseInt(w/b*v,10):0,d=n<k?n+parseInt(v*((k-n)/b||1),10):k,e=p<l?p+parseInt(v*((l-p)/b||1),10):l;D.css({clip:"rect("+a+"px "+e+"px "+d+"px "+c+"px)"});v++<=b?setTimeout(q,13):h.css("display","none")})()}});g.extend(a.cssBefore,{display:"block",opacity:1,top:0,left:0});a.animIn={left:0};a.animOut={left:0}}})(jQuery);