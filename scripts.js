// Function to toggle open/close on skill card containers when clicking
function toggleContent(element) {
  const cardContainer = element.querySelector('.skill-card-container'); // Find the .skill-card-container inside clicked element

  if (cardContainer.classList.contains('open')) {
    cardContainer.classList.remove('open'); // If already open, remove 'open' class to close
  } else {
    // Close other open containers
    document.querySelectorAll('.skill-card-container.open').forEach((container) => {
      container.classList.remove('open');
    });

    cardContainer.classList.add('open'); // Add 'open' class to open the clicked container
  }
}

// Function to show the current skill container
let currentSkillIndex = 0;
const skills = document.querySelectorAll('.skill-column');

function showSkill(index) {
  skills.forEach((skill, i) => {
    skill.style.display = (i === index) ? 'flex' : 'none';
  });
}

function prevSkill() {
  currentSkillIndex = (currentSkillIndex - 1 + skills.length) % skills.length;
  showSkill(currentSkillIndex);
}

function nextSkill() {
  currentSkillIndex = (currentSkillIndex + 1) % skills.length;
  showSkill(currentSkillIndex);
}

// Initialize with the first skill
showSkill(currentSkillIndex);

// Event listener for when the document has finished loading
document.addEventListener("DOMContentLoaded", function () {
  // Set video playback speed to 0.9x
  var video = document.getElementById("video-background");
  video.playbackRate = 0.9;

  // Smooth scroll for navigation links
  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetSection = document.querySelector(this.getAttribute("href")); // Get target section
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the target section
      }
    });
  });

  // Handling the Read More functionality
  const readMoreBtns = document.querySelectorAll('.read-more-btn');
  readMoreBtns.forEach(button => {
    button.addEventListener('click', function () {
      const projectDescription = this.closest('.project-description'); // Find the closest description container
      projectDescription.classList.toggle('expanded'); // Toggle expanded class to show/hide text

      // Change the button text based on expansion
      if (projectDescription.classList.contains('expanded')) {
        this.textContent = 'Read less';
      } else {
        this.textContent = 'Read more';
      }
    });
  });


  // Hamburger menu toggle functionality
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("active");
      navMenu.classList.toggle("show");
    });
  }

  // Handling form submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form from submitting the default way
      const formData = new FormData(this); // Create a FormData object from the form data

      // Send form data via fetch
      fetch(this.action, {
        method: this.method,
        body: formData,
        headers: { Accept: "application/json" },
      })
        .then((response) => {
          if (response.ok) {
            alert("Message sent!"); // If success, show success message and reset form
            this.reset();
          } else {
            return response.json().then((data) => {
              if (data.errors) {
                alert(data.errors.map((error) => error.message).join(", "));
              } else {
                alert("Oops! There was a problem submitting your form");
              }
            });
          }
        })
        .catch(() => {
          alert("Oops! There was a problem submitting your form"); // Handle any errors
        });
    });
  }

  // CV Modal functionality
  const cvButton = document.getElementById("cv-button");
  const cvModal = document.getElementById("cv-modal");
  const cvCloseBtn = document.querySelector(".cv-close-btn");

  cvButton.addEventListener("click", function (e) {
    e.preventDefault();
    cvModal.style.display = "block";
  });

  cvCloseBtn.addEventListener("click", function () {
    cvModal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === cvModal) {
      cvModal.style.display = "none";
    }
  });

  // Debugging to ensure the button is displayed
  const cvButtonDebug = document.querySelector(".cv-button");
  if (cvButtonDebug) {
    cvButtonDebug.style.border = "2px solid red"; // Highlight the button for visibility
    console.log("CV Button found and styled:", cvButtonDebug);
  } else {
    console.error("CV Button not found!");
  }
});
