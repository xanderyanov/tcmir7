var $window;
var prevWindowWidth = 0;
var windowWidth;

function siteResizeFunction() {
	prevWindowWidth = windowWidth;
	windowWidth = $window.width();

	// if (prevWindowWidth <= 800 && windowWidth > 800) {
	// }
	headerLanding();
}

function headerLanding() {
	var headerHeight = $(".l1_header__area").outerHeight();
	$(".l2").css({ paddingTop: headerHeight });
}

$(function () {
	$window = $(window);
	windowWidth = $window.width();
	headerLanding();

	$window.on("resize", siteResizeFunction);
});
