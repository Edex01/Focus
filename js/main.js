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

// decrease work time

var decreaseWork = document.getElementById("minusWorkButton");
decreaseWork.addEventListener("click", function(){
	workClicks-= 1;
	workDisplay.innerHTML = workClicks;
	if(workClicks < 1){
		workClicks = 1;
		workDisplay.innerHTML = workClicks;
	} // end of if
});

// decrease break time

var decreaseBreak = document.getElementById("minusBreakButton");
decreaseBreak.addEventListener("click", function(){
	breakClicks-= 1;
	breakDisplay.innerHTML = breakClicks;
	if(breakClicks < 1){
	   breakClicks = 1;
	   breakDisplay.innerHTML = breakClicks;	
	} // end of if 
}, false);
// increase break time

var increaseBreak = document.getElementById("addBreakButton");
increaseBreak.addEventListener("click", function(){
	breakClicks+= 1;
	breakDisplay.innerHTML = breakClicks;
}, false);
