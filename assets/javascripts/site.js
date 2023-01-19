$(document).ready(function () {
	// CLONE NAVIGATION TO MOBILE //
	$("nav a").clone().appendTo(".sidenav");
});

// MOBILE NAV //
function openNav() {
	document.getElementById("mySidenav").style.cssText = "left:0em; width:100vw";
}
function closeNav() {
	document.getElementById("mySidenav").style.cssText = "opacity:0; width:0vw";
	document.getElementById("main").style.marginLeft = "0";
}

// FADE HEADER ON SCROLL //

$(window).scroll(function () {
	$(".bgImg").css(
		"opacity",
		1 - ($(window).scrollTop() / $(".bgImg").height()) * 2
	);
});
