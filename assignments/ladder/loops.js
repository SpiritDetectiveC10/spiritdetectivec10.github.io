const drawStairsButton = document.getElementById("drawStairsButton");
const climbStairsButton = document.getElementById("climbStairsButton");
const stairsContainer = document.getElementById("stairsContainer");
const stickPerson = document.getElementById("stickPerson");
const personImage = document.getElementById("person");

let currentStep = 0;
let climbInterval;

drawStairsButton.addEventListener("click", drawStairs);
climbStairsButton.addEventListener("click", climbStairs);

function drawStairs() {
    for (let i = 0; i < 10; i++) {
        const stair = document.createElement("div");
        stair.classList.add("stairs");
        stair.style.top = `${i * 40}px`;
        stairsContainer.appendChild(stair);
    }

    climbStairsButton.style.display = "inline-block";
    stickPerson.style.display = "block";
    stickFigure.style.bottom = "0px";
    stickFigure.style.left = "50px";
}

function climbStairs() {
    climbStairsButton.disabled = true;
    currentStep = 0;

    climbInterval = setInterval(() => {
        if (currentStep < 10) {
            currentStep++;
            stickPerson.style.bottom = `${currentStep * 40}px`;
            personImage.src = currentStep % 2 === 0 ? "stickone.png" : "right.png"; 
        } else {
            if (currentStep >= totalSteps) {
            clearInterval(climbInterval);
            climbStairsBtn.disabled = false;
            }
        }
    }, 500); 
}
