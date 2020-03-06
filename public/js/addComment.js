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
    $("#commentList").html("<p style='text-align: center;'>There's no feedback on this assignment! Comment below to add your feedback!</p>");
  }

  else {
  
    var formatComment = $("#commentList").text();
    formatComment = formatComment.replace(/,/g, '<br />').replace('[object Object]', '<h5>Comments:</h5> ');
    $("#commentList").html(formatComment);

  }

}

$("#addTeammateBtn").click(clickAddBtn());


function clickAddBtn() {
  //e.preventDefault();
  var timeSinceLoad = Math.round(performance.now());
  //ga('create', 'UA-159497797-1', 'auto'); 
  ga('send', 'timing', 'addTeammate', 'click', timeSinceLoad);
  console.log(performance.now());
}
  


