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
    $("#commentList").html("<p><h5>No Feedback To Display</h5></p>");
  }

  else {
    var formatComment = $("#commentList").text().replace(/,/g, ' ').replace('[object Object]', 'Feedback: ');
    $("#commentList").text(formatComment);
  }
  
}
