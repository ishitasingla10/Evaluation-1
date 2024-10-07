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