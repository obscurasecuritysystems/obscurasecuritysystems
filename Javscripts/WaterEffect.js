// JavaScript Document
$(document).ready(function(){
$(".serviceItem").mouseover(function(){$(this).addClass("mousehored");});
$(".serviceItem").mouseout(function(){$(this).removeClass("mousehored");});
$(".serviceItem").mousemove(function(){
if($(".serviceItem").hasClass("mousehored")){
mouseMoved(event);
}
else
{
	
}
});
$(".waterEffect").mousemove(function(){
mouseMoved(event);
});
});
var currentPostionX = 0;
var currentPostionY = 0;
function mouseMoved(event)
{
//alert("hi");
var MousePosX = event.clientX;
var mousePosY = event.clientY;
var newMousePosX = MousePosX * -1 / 15;
var newMousePosY = mousePosY * -1 / 15;
$(".waterEffect").css({"background-position" : newMousePosX  +'px ' + newMousePosY + 'px'});
}
