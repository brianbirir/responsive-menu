//responsive navigation
$(function() {
	var menuBtn 		= $('#menu-btn');
		menu 		= $('nav ul');
		menuHeight	= menu.height();
	$(menuBtn).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
});
$(window).resize(function(){
	var w = $(window).width();
	if(w > 320 && menu.is(':hidden')) {
		menu.removeAttr('style');
	}
});
