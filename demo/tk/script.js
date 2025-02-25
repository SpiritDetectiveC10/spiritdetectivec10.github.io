// Select elements
const drawStairsBtn = document.getElementById('drawStairsBtn');
const climbStairsBtn = document.getElementById('climbStairsBtn');
const stairsContainer = document.getElementById('stairsContainer');
const stickPerson = document.getElementById('stickPerson');
const stickImage = document.getElementById('stickImage');

// Event listener for drawing stairs
drawStairsBtn.addEventListener('click', function() {
  // Create 10 treads
  for (let i = 0; i < 10; i++) {
    const stair = document.createElement('div');
    stair.classList.add('stair');
    stair.style.top = `${i * 30}px`; // Set the position for each stair
    stairsContainer.appendChild(stair);
  }

  // Show the climb button
  climbStairsBtn.style.display = 'inline-block';
  drawStairsBtn.disabled = true; // Disable the Draw Stairs button after clicking
});

// Event listener for climbing the stairs
climbStairsBtn.addEventListener('click', function() {
  let currentStep = 0;
  const totalSteps = 10; // There are 10 stairs
  const stepHeight = 30; // Each step is 30px

  // Disable the climb button to prevent multiple clicks
  climbStairsBtn.disabled = true;

  // Interval to animate the stick person climbing
  const climbInterval = setInterval(function() {
    // Move the stick figure up
    currentStep++;

    // Switch stick figure image
    if (currentStep % 2 === 0) {
      stickImage.src = 'stick-left.png'; // Left-facing image
    } else {
      stickImage.src = 'stick-right.png'; // Right-facing image
    }

    // Move the stick person upwards
    stickPerson.style.transform = `translateY(-${currentStep * stepHeight}px)`;

    // If the stick figure reaches the top, clear the interval
    if (currentStep >= totalSteps) {
      clearInterval(climbInterval);
      climbStairsBtn.disabled = false; // Re-enable the climb button after they reach the top
    }
  }, 500); // Adjust the speed by changing the interval time (500ms for each step)
});
