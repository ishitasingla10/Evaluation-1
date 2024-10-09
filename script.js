 window.onload = function() {
    alert("Welcome to our Bakery Shop!");
    
    
    const homeButton = document.getElementById('home-btn');
    homeButton.style.backgroundColor = 'orange';
  };


  const dateElement = document.getElementById('current-date');
  const today = new Date();
  dateElement.innerHTML = `Today's Date: ${today.toDateString()}`;

   
  const menuItems = document.querySelectorAll('.panel .box h1');
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      alert(`You clicked on: ${this.innerText}`);
    });
  });

 
  const panels = document.querySelectorAll('.panel');
  panels.forEach(panel => {
    panel.addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.05)';
      this.style.transition = 'transform 0.3s';
    });

    panel.addEventListener('mouseout', function() {
      this.style.transform = 'scale(1)';
    });
  });
  // Wait until the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Update the current date in the footer
  const dateElement = document.getElementById("current-date");
  const today = new Date();
  const formattedDate = today.toLocaleDateString();
  dateElement.innerText = "Current date: " + formattedDate;

  // Change the background color of the "Home" button to orange when the page loads
  const homeButton = document.getElementById("home-btn");
  homeButton.style.backgroundColor = "orange";

  // Tooltip when hovering over the Cakes section
  const cakeImage = document.querySelector(".img-thumbnail[alt='Cakes']");
  cakeImage.setAttribute("title", "Delicious homemade cakes!");

  // Tooltip when hovering over the Cookies section
  const cookieImage = document.querySelector(".img-thumbnail[alt='Cookies']");
  cookieImage.setAttribute("title", "Try our gluten-free cookies!");

  // Tooltip when hovering over the Bread section
  const breadImage = document.querySelector(".img-thumbnail[alt='Bread']");
  breadImage.setAttribute("title", "Freshly baked bread daily!");

  // Show an alert when clicking on the "Cakes" headline
  const cakesPanel = document.getElementById("content1-headline1");
  cakesPanel.addEventListener("click", function() {
    alert("You clicked on Cakes!");
  });

  
  cakesPanel.addEventListener("dblclick", function() {
    cakesPanel.innerText = "Delicious Homemade Cakes!";
  });

   
  const cookiesPanel = document.querySelector(".img-thumbnail[alt='Cookies']");
  cookiesPanel.addEventListener("click", function() {
    cookiesPanel.src = "new-cookie.jpg";   
  });
 
  const signUpButton = document.querySelector(".nav a[href='sig1.html']");
  signUpButton.addEventListener("click", function(event) {
    event.preventDefault();   
    const name = prompt("Please enter your name to sign up:");
    if (name && name.trim() !== "") {
      alert("Thank you for signing up, " + name + "!");
    } else {
      alert("Please enter a valid name.");
    }
  });
});
