$(document).ready(function(){
	$('#js-navbar-icon').click(function(){
		$('#js-navbar').toggleClass('is-open');
	});
});

$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 700);
});