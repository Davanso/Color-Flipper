// Define an array of color names
const colors = ["green", "red", "blue", "white", "black" ,"orange", "purple"];

// Select the button and color elements
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Add an event listener to the button for 'click' events
btn.addEventListener('click', function(){ 
    // get random number between 0 and 3 colors[]
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    
    // change the background color of the body to the random color from the array
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

// Add an event listener to the reset button for 'click' events
resetBtn.addEventListener('click', function() {
    // Set the background color and text content to the default values
    document.body.style.backgroundColor = 'white'; // Default background color
    color.textContent = ''; // Default text content
});

/*
This function generates a random number between 0 and the length of the 'colors' array.
The random number is used to select a random color from the 'colors' array.
*/
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}