$(document).ready(function() {
    
	$(".max-min").click(function() {
		if($(this).html() == "-") {
			$(this).html("+");
		} else {
			$(this).html("-");
		}
		$(this).next().find(".faqs-info").slideToggle();
	});


});