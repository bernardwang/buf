$(document).ready(function(){
	$('#navbar-icon').click(function(){
		console.log(this);
		$(this).toggleClass('open');
	});
});