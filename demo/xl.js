// Toggle menu visibility for small screens
document.getElementById('toggle-btn').addEventListener('click', function () {
    const menuItems = document.getElementById('menu-items');
    menuItems.classList.toggle('show');
    this.textContent = menuItems.classList.contains('show') ? '▲' : '▼';
});

// Switch between Exercise 1 and Exercise 2 sections
document.getElementById('exercise1').addEventListener('click', function () {
    document.getElementById('traveling').style.display = 'block';
    document.getElementById('color-heart').style.display = 'none';
});

document.getElementById('exercise2').addEventListener('click', function () {
    document.getElementById('traveling').style.display = 'none';
    document.getElementById('color-heart').style.display = 'block';
});

// Traveling section functionality
document.getElementById('transportation').addEventListener('input', function () {
    const transportation = this.value.toLowerCase();
    const img = document.getElementById('travel-img');
    
    if (transportation === 'bike') {
        img.src = 'https://example.com/bike.jpg'; // Replace with actual image URL
        img.style.display = 'block';
    } else if (transportation === 'scooter') {
        img.src = 'https://example.com/scooter.jpg'; // Replace with actual image URL
        img.style.display = 'block';
    } else if (transportation === 'car') {
        img.src = 'https://example.com/car.jpg'; // Replace with actual image URL
        img.style.display = 'block';
    } else if (transportation === 'skateboard') {
        img.src = 'https://example.com/skateboard.jpg'; // Replace with actual image URL
        img.style.display = 'block';
    } else {
        img.style.display = 'none';
    }
});

// Color My Heart functionality
function changeHeartColor(color) {
    document.getElementById('heart').style.backgroundColor = color;
}