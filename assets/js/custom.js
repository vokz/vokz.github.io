$(function(i){function e(){var e=i(window).scrollTop();i(".sectionBlockE").css("background-position","center -"+.2*e+"px"),i(".sectionBlockE h3").css("top","-"+.5*e+"px"),i(".sectionBlockE p").css("top","-"+.8*e+"px")}var s=$boxslideUL.width()/$boxslideUL.css("column-count");i(window).resize(function(){s=$boxslideUL.width()/$boxslideUL.css("column-count"),$boxslideUL.animate({right:0},{queue:!1,duration:800}),newIndent=0}),$boxslideNavNext.click(function(i){var e=$boxslideUL.width()-s;newIndent<e&&(newIndent+=s,$boxslideUL.animate({right:newIndent},{queue:!1,duration:800}))}),$boxslideNavPrev.click(function(i){newIndent-=s,newIndent>=0?$boxslideUL.animate({right:newIndent},{queue:!1,duration:800}):newIndent=0}),i(window).bind("scroll",function(i){e()})}),$(document).ready(function(){$menuli.addClass("go"),$(".hasHover").mouseover(function(){var i=$(this).attr("src").split(".");$(this).attr("src",i[0]+"_hover."+i[1])}),$(".hasHover").mouseleave(function(){var i=$(this).attr("src").split(".");$(this).attr("src",i[0].replace("_hover","")+"."+i[1])}),$navicon.click(function(){$menuli.toggleClass("go"),$(this).toggleClass("open"),$header.toggleClass("slide-open").fade()})}),$(window).resize(function(){$(window).width()<990?$menuli.removeClass("go"):($header.removeClass("slide-open"),$navicon.removeClass("open"),$menuli.addClass("go"))}),$(window).on("scroll",function(){$(this).scrollTop()}),$(function(e){function s(){e(".navBullets li").click(function(i){var s=e(".sliderImg li").width();if(e(".sliderImg li.active").is(":first-child")){var l=e(this).index(),a=parseInt(e(".sliderImg li").css("left"))-s*l;e(".sliderImg li:eq("+l+")").addClass("active").siblings().removeClass("active"),e(".navBullets li:eq("+l+")").addClass("active").siblings().removeClass("active"),$slide.animate({left:a},{queue:!1,duration:800})}else if(e(".sliderImg li.active").is(":last-child")){var l=e(this).index()+1,a=parseInt(e(".sliderImg li").css("left"))+s*($imgcount-l);e(".sliderImg li:eq("+e(this).index()+")").addClass("active").siblings().removeClass("active"),e(".navBullets li:eq("+e(this).index()+")").addClass("active").siblings().removeClass("active"),$slide.animate({left:a},{queue:!1,duration:800})}else{var l=e(".sliderImg li.active").index()+1,t=e(this).index()+1;if(t<l){var a=parseInt(e(".sliderImg li").css("left"))+s*(l-t);e(".sliderImg li:eq("+e(this).index()+")").addClass("active").siblings().removeClass("active"),e(".navBullets li:eq("+e(this).index()+")").addClass("active").siblings().removeClass("active"),$slide.animate({left:a},{queue:!1,duration:800})}else{var a=parseInt(e(".sliderImg li").css("left"))-s*(t-l);e(".sliderImg li:eq("+e(this).index()+")").addClass("active").siblings().removeClass("active"),e(".navBullets li:eq("+e(this).index()+")").addClass("active").siblings().removeClass("active"),$slide.animate({left:a},{queue:!1,duration:800})}}})}function l(){var i=e(".sliderImg li").width(),s=parseInt($slide.css("left"))-i;e(".sliderImg li.active").is(":last-child")?($slide.animate({left:"0"},{queue:!1,duration:800}),e(".sliderImg li:first-child").addClass("active").siblings().removeClass("active"),e(".navBullets li:first-child").addClass("active").siblings().removeClass("active")):(e(".sliderImg li.active").next().addClass("active").siblings().removeClass("active"),e(".navBullets li.active").next().addClass("active").siblings().removeClass("active"),$slide.animate({left:s},{queue:!1,duration:800}))}var a=setInterval(function(){l()},5e3);for(e(".sliderImg").hover(function(){clearInterval(a)},function(){a=setInterval(function(){l()},5e3)}),s(),e(".sliderImg").width($imgcount*$slide.width()),i=1;i<=$imgcount;i++)e(".sliderImg li:nth-child("+i+")").hasClass("active")?$bullets.append("<li class='active'><div class='circle'></div></li>"):$bullets.append("<li><div class='circle'></div></li>");$rightNav.click(function(i){var s=e(".sliderImg li").width(),l=parseInt($slide.css("left"))-s;e(".sliderImg li.active").is(":last-child")?($slide.animate({left:"0"},{queue:!1,duration:800}),e(".sliderImg li:first-child").addClass("active").siblings().removeClass("active"),e(".navBullets li:first-child").addClass("active").siblings().removeClass("active")):(e(".sliderImg li.active").next().addClass("active").siblings().removeClass("active"),e(".navBullets li.active").next().addClass("active").siblings().removeClass("active"),$slide.animate({left:l},{queue:!1,duration:800}))}),$leftNav.click(function(i){var s=e(".sliderImg li").width(),l=parseInt($slide.css("left"))-s*($imgcount-1),a=parseInt($slide.css("left"))+s;e(".sliderImg li.active").is(":first-child")?($slide.animate({left:l},{queue:!1,duration:800}),e(".sliderImg li:last-child").addClass("active").siblings().removeClass("active"),e(".navBullets li:last-child").addClass("active").siblings().removeClass("active")):(e(".sliderImg li.active").prev().addClass("active").siblings().removeClass("active"),e(".navBullets li.active").prev().addClass("active").siblings().removeClass("active"),$slide.animate({left:a},{queue:!1,duration:800}))})}),$header=$("header"),$menuli=$("nav li"),$navicon=$("#nav-icon1");var $slider=$(".sliderImg"),$slide=$(".sliderImg li"),$rightNav=$(".sliderNavRight"),$leftNav=$(".sliderNavLeft"),$imgcount=$(".sliderImg li").length,$bullets=$(".navBullets"),num=40,$boxslideNavPrev=$(".Boxslide .navPrev"),$boxslideNavNext=$(".Boxslide .navNext"),$boxslideUL=$(".Boxslide ul"),$boxslideULRight=$(".Boxslide ul").position().right,newIndent=0;