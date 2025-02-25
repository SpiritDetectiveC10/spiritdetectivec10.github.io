const bounceBall = () => {
    const ballElement = document.getElementById("ball");
    const bounceButton = document.getElementById("bounce-button");

    if (ballElement.classList.contains("bounce")) {
        ballElement.classList.remove("bounce");
        bounceBall.innerHTML = "Start";
    } else { 
        ballElement.classList.add("bounce");
        bounceButton.innerHTML = "Stop";
    }
};

const writeMessage = () => {
    const firstName = document.getElementById("txt-first-name").value;    
    alert(firstName);
};

window.onload = () => {
    document.getElementById("bounce-button").onclick = bounceBall;
    document.getElementById("message-button").onclick = writeMessage; 
};