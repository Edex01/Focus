// global variables

var workClicks = 20;
var breakClicks = 5;
var workDisplay = document.getElementById("work-display");
var breakDisplay = document.getElementById("break-display");
var count = 0;
var workSession;
var breakSession;

// increase work

var increaseWork = document.getElementById("addWorkButton");
increaseWork.addEventListener("click", function(){
	workClicks+= 1;
	workDisplay.innerHTML = workClicks;
}, false);