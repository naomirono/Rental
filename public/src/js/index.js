const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const links = menu.querySelectorAll('.link');
const homeLink = menu.querySelector('.home');

// Add event listener to each link
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {
    // Remove active class from current active link
    var current = menu.querySelector('.active');
    current.classList.remove('active');
    
    // Add active class to clicked link
    this.classList.add('active');
    
    // Close the menu when a link is clicked
    menu.classList.remove('active');
    menuBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    body.classList.remove("disabledScroll");
  });
}

// Set home link as active by default
homeLink.classList.add('active');

menuBtn.addEventListener('click', function() {
  // Open the menu
  menu.classList.toggle('active');
  
  // Remove active class from any active link
  var current = menu.querySelector('.active');
  if (current) {
    current.classList.remove('active');
  }
  
  // Set home link as active
  homeLink.classList.add('active');
  
  // Show the menu button and hide the cancel button
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  
  // Disable scrolling
  body.classList.add("disabledScroll");
});

cancelBtn.addEventListener('click', function() {
  // Close the menu
  menu.classList.remove("active");
  
  // Show the menu button and hide the cancel button
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  
  // Enable scrolling
  body.classList.remove("disabledScroll");
});


  
  window.onscroll = ()=>{
    this.scrollY > 10 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
  }