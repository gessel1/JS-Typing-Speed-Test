const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0]; //Holds the minutes, seconds, hundredth of seconds and thousandths of seconds.

// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:
function runTimer(){
    let currentTime = timer[0] + ":" + timer[1] + ":" + timer[2] 
    theTimer.innerHTML = currentTime;
    timer[3]++;
    
    timer[0] = Math.floor((timer[3]/100)/60) //Grab timer three, that would be the thousandth of a second, divided by 100 so that I get just seconds. And then divide that by 60, so I get minutes.
    
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60))
    /*Timer three divided by 100 and this time I'll subtract the value of timer zero, which is the minutes, times 60. And this time I'll subtract the value of timer zero, which is the minutes, times 60. So that every time we hit 60 seconds this value returns to zero.*/                      
                          
                          
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - timer[0] * 6000)             
     /* Grab timer three, that is the thousandth of a second. Then I'll subtract timer one times 100, that way we clear out every time we get to 100 hundredth of a second. Because that's now a second and we need to get back to zero. And I also subtract timer zero times 6,000. Now every time the minutes reach 100 so that we don't start counting upwards from there. */ 
    
}


// Match the text entered with the provided text on the page:
function spellCheck{
    let textEntered = testArea.value;
    console.log(textEntered)
    

// Start the timer:
function start(){
    let textEnteredLength = testArea.value.length;
    
    // If the content that currently sits there is equal to zero, then we start the timer(1000th of a second) 
    
    if (textEnteredLength === 0 ){
        setInterval(runTimer, 10);
        
    }
    
    console.log(textEnteredLength);
    
}
// Reset everything:
function reset() {
    console.log("reset button has been pressed")
    
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start,false); //Allows us to detect the first keystroke to start timer

testArea.addEventListener("keyup",spellCheck, false);

resetButton.addEventListener("click", reset, false);//We're detecting click, and when the click happens,we run the reset button
