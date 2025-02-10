// Function to load HTML components dynamically
function loadComponent(id, file) {
    fetch(file)
      .then(response => response.text())
      .then(html => document.getElementById(id).innerHTML = html)
      .catch(error => console.error(`Error loading ${file}:`, error));
  }
  
  // Load head and navbar
  document.addEventListener("DOMContentLoaded", function () {
    loadComponent("head-container", "/components/head.html");
    loadComponent("navbar-container", "/components/navbar.html");
  });
  