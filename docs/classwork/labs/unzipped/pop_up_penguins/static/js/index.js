
$(document).ready( function() {

    //This code will run after your page loads
	 $(".penguin9").mousedown(function() {
        alert("Yaaaarrrr!");
    });
	$("penguin1").mousedown(function(){
		var penguin = document.getElementById('../media/mound_1_hover.png');
		penguin.src = "../media/penguin1.png";
	});
	jQuery('penguin2').click(function(){
		jQuery(this).toggleClass('active');
	});
	jQuery('penguin3').click(function(){
		jQuery(this).toggleClass('active');
	});
	jQuery('penguin4').click(function(){
		jQuery(this).toggleClass('active');
	});
	jQuery('penguin5').click(function(){
		jQuery(this).toggleClass('active');
	});
	jQuery('penguin6').click(function(){
		jQuery(this).toggleClass('active');
	});
	jQuery('penguin7').click(function(){
		jQuery(this).toggleClass('active');
	});
	jQuery('penguin8').click(function(){
		jQuery(this).toggleClass('active');
	});
	
});
