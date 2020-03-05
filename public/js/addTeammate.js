'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
 function initializePage() {
 	if($("#memberList").text() == "[object Object]"){
 		$("#memberList").html("<p><h5>No Teammates In This Group Yet!</h5></p>");
 	}

 	else {
 		var formatMember = $("#memberList").text();
    	formatMember = formatMember.replace(/,/g, '<br />').replace('[object Object]', '<h5>Comments:</h5> ');
    	$("#memberList").html(formatMember);
 	}
 }