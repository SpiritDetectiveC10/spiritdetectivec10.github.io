// Initialize constants for DOM elements
const helloColumn = document.getElementById('helloColumn');
const helloCounter = document.getElementById('helloCounter');
const colorPicker = document.getElementById('colorPicker');
const star = document.getElementById('star');
const image = document.getElementById('image');

// Variable to store the "hello" count
let helloCount = 0;

// Arrow function to handle click event for "Say Hello" column
const handleHelloClick = () => {
  helloCount++;
  const helloText = 'hello';
  const helloParagraph = document.createElement('p');
  helloParagraph.textContent = helloText;
  helloCounter.appendChild(helloParagraph);
};

// Add event listener to the Hello column
helloColumn.addEventListener('click', handleHelloClick);

// Arrow function to handle the color change event
const handleColorChange = (event) => {
  const color = event.target.value;
  star.style.color = color;
};

// Add event listener for the color picker
colorPicker.addEventListener('input', handleColorChange);

// Arrow function to change the image on click
const handleImageChange = () => {
  if (image.src.includes('image1.jpg')) {
    image.src = 'image2.jpg'; // Swap to another image
  } else {
    image.src = 'image1.jpg'; // Swap back to the original image
  }
};








