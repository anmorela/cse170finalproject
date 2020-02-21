'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

  if ($("#commentList").text() == "[object Object]") {
    console.log("WORKS");
    $("#commentList").html("<h5>No Comments To Display</h5>");
  }

  else {
  
    var formatComment = $("#commentList").text();
    formatComment = formatComment.replace(/,/g, '<br />').replace('[object Object]', '<h5>Comments:</h5> ');
    $("#commentList").html(formatComment);

  }
  
}
