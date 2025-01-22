// Sample menu items
const restaurantMenu = [
    { name: 'Classic Caesar Salad', price: '$12' },
    { name: 'Grilled Salmon', price: '$28' },
    { name: 'Beef Tenderloin', price: '$34' },
    { name: 'Pasta Primavera', price: '$18' }
];

const barMenu = [
    { name: 'Classic Martini', price: '$12' },
    { name: 'House Wine', price: '$8' },
    { name: 'Craft Beer', price: '$6' },
    { name: 'Signature Cocktail', price: '$14' }
];

// Populate menu items
function populateMenu() {
    const restaurantMenuEl = document.getElementById('restaurant-menu');
    const barMenuEl = document.getElementById('bar-menu');

    restaurantMenu.forEach(item => {
        const li = document.createElement('li');
        li.className = 'menu-item';
        li.innerHTML = `${item.name} - ${item.price}`;
        restaurantMenuEl.appendChild(li);
    });

    barMenu.forEach(item => {
        const li = document.createElement('li');
        li.className = 'menu-item';
        li.innerHTML = `${item.name} - ${item.price}`;
        barMenuEl.appendChild(li);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateMenu();
});