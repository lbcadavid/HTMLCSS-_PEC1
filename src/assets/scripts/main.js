/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();


const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const menuOptions = document.querySelectorAll('.mobile-menu ul li a');

// Muestra el menu
menuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('active'); // Alterna la clase 'active'
});

//  Cerramos el menu al pulsar una opcion
menuOptions.forEach(option => {
  option.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});