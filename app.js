$(document).ready(function(){
	initializeDom();
	// code taken from http://stackoverflow.com/questions/20705905/bootstrap-3-jquery-event-for-active-tab-change
	$('.nav-tabs > li > a').on('click', function(e) {
		//prevents page jumping, but jumps to the top...
		e.preventDefault();
		//code selects the tab with class active and removes it
	    $('.nav-tabs > li.active').removeClass('active');
	    //code adds class active to the link that was just clicked
	    $(this).parent().addClass('active');

	    //code removes class in
	    $('.tab-content > div.active').hide().fadeOut(100);
	    $('.tab-content > div.active').removeClass('in active');
	    var $id = $(this).attr('href').toString();
	    console.log($id);
	    $($id).show().fadeIn(100);
	    $($id).addClass('in active');

	});

	// $('.subject').on('click', function(){
	// 	var $el = $(this).children().last();
	// 	$el.slideToggle(500);
	// });
	$('.subject > h2').on('click',function(){
		var $el = $(this).next();
	 	$el.slideToggle(500);
	 	$(this).children().first().toggleClass('transform');
	});
});


function initializeDom(){
	$('.subject > .extra').slideUp().hide();
}