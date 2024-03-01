// // Simple script to handle the slide-in effect
// document.addEventListener('DOMContentLoaded', () => {
//     const menuToggle = document.getElementById('menuToggle');
//     const menu = document.getElementById('menu');
  
//     menuToggle.addEventListener('change', function() {
//       if (this.checked) {
//         menu.classList.remove('hidden');
//         menu.style.transform = 'translateX(-100%)';
//       } else {
//         menu.style.transform = 'translateX(100%)';
//         // Hide the menu after the transition ends
//         menu.addEventListener('transitionend', () => {
//           menu.classList.add('hidden');
//         }, { once: true });
//       }
//     });
//   });
  // Simple script to handle the slide-in effect
  document.addEventListener('DOMContentLoaded', () => {
    // Select all menu toggles
    const menuToggles = document.querySelectorAll('.menuToggle');
  
    menuToggles.forEach(toggle => {
      toggle.addEventListener('change', function() {
        // Find the menu corresponding to this toggle
        const menuId = this.getAttribute('data-menu');
        const menu = document.querySelector(`.menu[data-menu="${menuId}"]`);
  
        // Show or hide the menu based on the toggle state
        if (this.checked) {
          menu.style.transform = 'translateX(0)'; // Show the menu
        } else {
          menu.style.transform = 'translateX(100%)'; // Hide the menu
        }
      });
    });
  });
  