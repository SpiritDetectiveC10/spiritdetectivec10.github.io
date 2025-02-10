const bounceBall = () => {
    const ball = document.getElementById("ball");
    ball.classList.add("bounce"); 
};

const writeMessage = () => {
    const firstName = document.getElementById("txt-first-name").value;    
    alert(firstName);
};

window.onload = () => {
    document.getElementById("bounce-button").onclick = bounceBall;
    document.getElementById("message-button").onclick = writeMessage; 
};


