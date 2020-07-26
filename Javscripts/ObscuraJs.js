// JavaScript Document
var count = 1;
var fromOtherPageToPrjct = 0;
var projectImagesArrayCCTV = ["Images/services/EasyBuycopy.jpg","Images/services/GRANDMALL.jpg","Images/services/livein.jpg","Images/services/grandbakers.jpg","Images/services/Koot.jpg","Images/services/Resi.jpg"];
var projectImagesArrayAll = ["Images/services/EasyBuycopy.jpg","Images/services/GRANDMALL.jpg","Images/services/livein.jpg","Images/services/grandbakers.jpg","Images/services/Koot.jpg","Images/services/Resi.jpg"];
var projectImagesArrayINCOM = ["Images/services/AddNew.jpg","Images/services/AddNew.jpg","Images/services/AddNew.jpg","Images/services/AddNew.jpg","Images/services/AddNew.jpg","Images/services/AddNew.jpg"];
var projectImagesArrayNETW = ["Images/services/AddNew.jpg","Images/services/AddNew.jpg","Images/services/AddNew.jpg","Images/services/AddNew.jpg","Images/services/AddNew.jpg","Images/services/AddNew.jpg"];

$(document).ready(function(){
	count =1;		
	var clickCount =1;
	$(".serviceNext").css("display","none");
    owlcarosuelAuto();
	selectedProjects('All');
	$(".servicemenu, #menuList").mouseover(function(){$("#menuList").css("display","block");});
	$("#menuList").mouseout(function(){$("#menuList").css("display","none")});
	
	//$(".projectsmenu, #menuListPro").mouseover(function(){$("#menuListPro").css("display","block");});
	//$("#menuListPro").mouseout(function(){$("#menuListPro").css("display","none")});
		
	$(".service").mouseover(function(){
	 $(this).css("cursor","pointer");	
	});
	$(".categories").click(function(){
	$(".categories").removeClass("active");
	$(this).addClass("active");								
	});
	
	$(".service").mouseover(function(){
	$(this).find(".hoverText").css("display","block");
	});
	
	$(".service").mouseout(function(){
	$(this).find(".hoverText").css("display","none");
	});
	
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
	
})
	
$(".owl-item").mouseover(function(){
$(".owl-next").addClass("MouseEnabled");
$(this).css("cursor","pointer");
});

$(".owl-item").mouseout(function(){
$(".owl-next").removeClass("MouseEnabled");
$(this).css("cursor","normal");
});

setTimeout(function(){
$("#ftco-loader").css("display","none");
					},400);

$(".serviceDivHover").mouseover(function(){
$(this).css("background-color","#ff6c00");	
$(this).css("color","#FFFFFF");
});

$(".serviceDivHover").mouseout(function(){
$(this).css("background-color","#FFFFFF");	
$(this).css("color","Black");
});

$(".serviceDivHover").css("color","Black");

if($(".serviceDivHover").length > 0)
{
$(".owl-stage").css("width","100%");
$(".owl-item").css("width","100%");
}

$(".down").click(function(){
clickCount = clickCount + 1;
if(clickCount % 2==0)
{
	$(this).find("img").attr("src","Images/Icons/up.png");
}
else 
{
	$(this).find("img").attr("src","Images/Icons/16498948451579697358-48.png");
}
$(".serviceNext").slideToggle(800);	
});


$(".obscuraquote").fadeIn(2000);



// Select all links with hashes
$(".projectsmenu").click(function(event) {
    // On-page links	
    
      // Figure out element to scroll to
      var target = $("#our_projects");
      //target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      
    }
  });

//ready end


});


function hapyClientMotion(){
	setInterval(function(){
	$('.owl-carousel').owlCarousel();
	},1000);
}

$(window).scroll(function(){
if($(window).scrollTop() > 200 && $(window).scrollTop() <400 )
{
	//$(".contentarea").animate({marginTop : "5px"},1000);
}
else if($(window).scrollTop() > 600 && $(window).scrollTop() <800)
{
	//$("#lady").animate({marginLeft : "90px"},1000);
}
});

var isComplete = false;
function owlcarosuelAuto()
{
	setInterval(function(){
		if(!$(".owl-next").hasClass("disabled") && isComplete == false && !$(".owl-next").hasClass("MouseEnabled"))
		{
			$(".owl-next").click();
		}
		else
		{
			if(!$(".owl-next").hasClass("MouseEnabled"))
			{
			isComplete = true;
			$(".owl-prev").click();
			}
		}
		if($(".owl-prev").hasClass("disabled"))
		{
			isComplete = false;
		}
	},2000);
}
function test()
{
	if(count % 2 == 0)
	{
	$("#toggleMenu").animate({marginLeft:"-350px"},"slow");
	$(".Cname").css("visibility","visible");
	}
	else
	{
	 $("#toggleMenu").animate({marginLeft:"0px"},"slow");
	 $(".Cname").css("visibility","hidden");
	}
	count++;
}

function selectedProjects(projectType)
{
	var type = projectType;
	var rowCount = $(".serviceItem").find("img").length;
	for(var i = 1;i<=rowCount;i++)
	{
		if(type=="All"){
		$(".serviceItem_" + i).find("img").attr("src",projectImagesArrayAll[i-1]);
		$(".serviceItem_" + i).find("h4").innerHtml = "Grand Center Mall";
		}
		else if(type=="CCTV")
		{
			$(".serviceItem_" + i).find("img").attr("src",projectImagesArrayCCTV[i-1]);
		}
		else if(type=="Intercom")
		{
			$(".serviceItem_" + i).find("img").attr("src",projectImagesArrayINCOM[i-1]);
		}
		else if(type=="Networking")
		{
			$(".serviceItem_" + i).find("img").attr("src",projectImagesArrayNETW[i-1]);
		}
		
	}
}
var url="https://script.google.com/macros/s/AKfycbyEUfcpqES-c5D0gu8HY9GvkvZGyq3K0VYxsRWjmlI1bCX3QzQ/exec";
function sendEmailToUser()
{
	var callbackURL = url + "?callback=mailCallback";
	alert(callbackURL);
	var request = $.ajax({
	crossDomain:true,
	url: callbackURL,
	method: "GET",
	dataType: "jsonp"
	});
	
}

function mailCallback(e)
{
	alert("Successfuly send mail");
}
function fnNavigatetoProjects()
{
	alert('hi');
	$("body").animate( 
                { scrollTop: "100" }, 3000); 
}
