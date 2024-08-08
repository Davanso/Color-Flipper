// Define an array of hexadecimal characters
const hex = [0, 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , "A", "B", "C", "D", "E", "F"];

// Select the button and color elements
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Add an event listener to the reset button for 'click' events
resetBtn.addEventListener('click', function() {
   // Set the background color and text content to the default values
   document.body.style.backgroundColor = 'white'; // Default background color
   color.textContent = '#f1f5f8'; // Default text content
});

// Add an event listener to the button for 'click' events
btn.addEventListener("click", function (){ 
   let hexColor = '#';

    // Generate a random hex color code
   for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
   }

   // Update the background color of the document body and display the color code
   document.body.style.backgroundColor = hexColor;
   color.textContent = hexColor;
});

// Function to generate a random number between 0 and the length of the hex array
 function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
 }

 

 