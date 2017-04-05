$(document).ready(function(){
    new WOW().init();

    $('.buttonNav').click(function() { // targets the button and adds event handler
    var target = $("#features");         // variable containing the target (in this case the contact form)
    var duration = 1000;			// variable containing the speed in which the animation occurs

    $('html, body').animate({       // scroll from the offset of the html document 
    	scrollTop: target.offset().top 
    }, duration);

});
});