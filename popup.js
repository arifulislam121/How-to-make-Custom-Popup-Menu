jQuery(document).ready(function( $ ){
    // Your code in here

//Panel Opening Event
	
	$("#menuicon").click(function(){
		$("#popwrap").addClass("new");
	});
	
// Pnale Close Event	 
	$("#closeicon").click(function() {
			$("#menucol").animate({
			'margin-left' : "50%",
			'opacity' : '0',
			},500);	
		 $("#imgcol").animate({
			'margin-right' : "50%",
			'opacity' : '0',
			},500); 
		//$("#popwrap").removeClass("new");
	
		 });


//Destroy CSS and class//
	
	$("#closeicon").click (function() {
        $("#popwrap").delay(1000).queue(function() {  // Wait for 1 second.
            $("#popwrap").removeClass("new").dequeue();
			$("#menucol").removeAttr("style");
			$("#imgcol").removeAttr("style");
	        });
	    }
	);

	
	
});
