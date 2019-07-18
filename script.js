const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");


// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:


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
