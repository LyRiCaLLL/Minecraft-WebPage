function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
    
}

navSlide();




function toggleDropdown(showId, hideIds) {
  // hide all the other dropdowns
  for (let i = 0; i < hideIds.length; i++) {
    let hideDropdown = document.getElementById(hideIds[i]);
    hideDropdown.style.display = 'none';
  }
  
  // show the selected dropdown
  let showDropdown = document.getElementById(showId);
  showDropdown.style.display = 'block';
}


// Get all sections
const sections = document.querySelectorAll("section");

// Get navigation menu
const navMenu = document.querySelector("nav");

// Set initial active section
let activeSection = 0;

// Get the height of the navigation menu
const navHeight = navMenu.offsetHeight;

// Add event listener to the window object for scrolling
window.addEventListener("scroll", () => {
  // Get the current scroll position
  const scrollPosition = window.pageYOffset;

  // Loop through all sections
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Check if the current scroll position is within the bounds of the current section
    if (
      scrollPosition >= sectionTop - navHeight &&
      scrollPosition < sectionTop + sectionHeight - navHeight
    ) {
      // Set the active section
      activeSection = i;

      // Exit the loop
      break;
    }
  }

  // Get all navigation links
  const navLinks = document.querySelectorAll(".nav-links a");

  // Remove the "active" class from all navigation links
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Add the "active" class to the navigation link of the active section
  navLinks[activeSection].classList.add("active");
});
