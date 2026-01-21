
function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }

// Wrap the code in a DOMContentLoaded event listener to ensure it runs only after the DOM is fully constructed:
document.addEventListener("DOMContentLoaded", () => {
    // Open default tab
    document.getElementById("defaultOpen").click();

    // Mobile nav dropdown toggle
    const navToggle = document.querySelector(".nav-toggle");
    const navActions = document.querySelector(".nav-actions");

    if (navToggle && navActions) {
      navToggle.addEventListener("click", () => {
        const isOpen = navActions.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
    }
});