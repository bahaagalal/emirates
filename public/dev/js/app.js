jQuery(document).ready(function(){
	jQuery('#experiences').click(function(){
		jQuery('.trip-experiences-details').slideToggle();
	});

	jQuery('#lnk-1').click(function(){
		jQuery('#det-1').removeClass('display-none');
		jQuery('#exp-time').html('(5h 30m)');
	});

	jQuery('#lnk-2').click(function(){
		jQuery('#det-2').removeClass('display-none');
		jQuery('#exp-time').html('(-30m)');
		jQuery('#exp-time').addClass('warning');
	});

	jQuery('#rm-1').click(function(){
		jQuery('#det-2').addClass('display-none');
		jQuery('#exp-time').html('(5h 30m)');
		jQuery('#exp-time').removeClass('warning');
	});
});
