// WILLIAM GIBSON

// Offscreen navigation
var menuToggle = document.querySelector('.menu-toggle')
var bodyClass = document.querySelector('body').classList

menuToggle.addEventListener('click', function() {
  bodyClass.toggle('nav-active')
})
