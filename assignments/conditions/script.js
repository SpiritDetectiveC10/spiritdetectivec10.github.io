
document.getElementById('toggle-btn').addEventListener('click', function () {
    const menuItems = document.getElementById('menu-items');
    menuItems.classList.toggle('show');
    this.textContent = menuItems.classList.contains('show') ? '▲' : '▼';
});

document.getElementById("exercise1").addEventListener("click", function () {
    document.getElementById('traveling').style.display = "block'; 
    document.getElementById('color-heart').style.display = 'none';
});

document.getElementById('exercise2').addEventListener("click", function () {
    document.getElementById('traveling').style.display = "none";
    document.getElementById('color-heart').style.display = "block";
});

document.getElementById("transportation").addEventListener("input", function () {
    const transportation = this.value.toLowerCase();
    const img = document.getElementById('travel-img');
    
    if (transportation === "bike") {
        img.src = "https://example.com/bike.jpg"; 
        img.style.display = 'block';
    } else if (transportation === 'scooter') {
        img.src = "https://example.com/scooter.jpg"; 
        img.style.display = 'block';
    } else if (transportation === 'car') {
        img.src = "https://example.com/car.jpg"; 
        img.style.display = 'block';
    } else if (transportation === 'skateboard') {
        img.src = 'https://example.com/skateboard.jpg'; 
        img.style.display = 'block';
    } else {
        img.style.display = 'none';
    }
});

function changeHeartColor(color) {
    document.getElementById('heart').style.backgroundColor = color;
}