jQuery(document).ready(function( $ ){
    // Your code in here
	
	$("#menuicon").click(function(){
		$("#popwrap").addClass("new");
	});
	
	 
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
	 
	$("#closeicon").click (function() {
        $("#popwrap").delay(1000).queue(function() {  // Wait for 1 second.
            $("#popwrap").removeClass("new").dequeue();
			$("#menucol").removeAttr("style");
			$("#imgcol").removeAttr("style");
        });
    }
);

	
	
});
