// Select the mobile menu toggle button and the navbar
const menuToggle = document.querySelector('.menu-toggle'); // The hamburger icon button
const navbar = document.querySelector('.navbar ul'); // The navigation links

// Add a click event listener to the menu toggle button
menuToggle.addEventListener('click', () => {
  // Toggle between showing and hiding the navigation menu
  navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
  // If the menu is currently displayed ('flex'), hide it. Otherwise, show it.
});
console.log(menuToggle);