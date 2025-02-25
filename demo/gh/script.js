const drawButton = document.getElementById('draw-button');
const climbButton = document.getElementById('climb-button');
const staircase = document.getElementById('staircase');
const stickFigure = document.getElementById('stick-figure');

drawButton.addEventListener('click', () => {
    // Clear existing stairs if any
    staircase.innerHTML = '';

    // Draw stairs
    for (let i = 0; i < 10; i++) {
        const stair = document.createElement('div');
        stair.classList.add('stair');
        stair.style.top = `${i * 25}px`; // Adjust step height
        staircase.appendChild(stair);
    }

    // Show climb button and the stick figure in the starting position
    climbButton.style.display = 'inline-block';
    stickFigure.style.bottom = '0px';
    stickFigure.style.left = '50px';  // Reset stick figure position
});

climbButton.addEventListener('click', () => {
    let currentStep = 0;
    let positionY = 0;
    let positionX = 50; // X position of stick figure
    let isLeft = true;
    const interval = setInterval(() => {
        if (currentStep >= 10) {
            clearInterval(interval); // Stop once we reach the top
            return;
        }

        // Update stick figure position
        positionY = currentStep * 25;
        stickFigure.style.bottom = `${positionY}px`;
        stickFigure.style.left = `${positionX}px`;

        // Switch between left and right stick figure images to simulate walking
        if (isLeft) {
            stickFigure.src = 'left.png';
        } else {
            stickFigure.src = 'right.png';
        }
        isLeft = !isLeft;  // Toggle between left and right

        currentStep++;
    }, 200); // Adjust the speed of climbing by changing the interval time
});
