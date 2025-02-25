const helloColumn = document.getElementById("helloColumn");
const helloCounter = document.getElementById("helloCounter");
const colorPicker = document.getElementById("colorPicker");

let helloCount = 0;

const handleHelloClick = () => {
  helloCount++;
  const helloText = "hello";
  const helloParagraph = document.createElement("p");
  helloParagraph.textContent = helloText;
  helloCounter.appendChild(helloParagraph);
};

const handleImageChange = () => {
  if (image.src.includes("porygon.png")) {
    image.src = "porygon2.png"; 
  } else {
    image.src = "porygon1.png"; 
  }
}; 




