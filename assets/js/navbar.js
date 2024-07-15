// Add this to your JavaScript file or within a <script> tag
document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
  
    window.addEventListener("scroll", function() {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  });