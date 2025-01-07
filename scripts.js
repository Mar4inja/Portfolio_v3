function toggleContent(element) {
  // Meklē `skill-card-container`, kas ir iekšā klikšķinātajā `skill-column`
  const cardContainer = element.querySelector('.skill-card-container');

  // Ja elements jau ir atvērts (ar klasi `open`), tad slēdz to
  if (cardContainer.classList.contains('open')) {
    cardContainer.classList.remove('open');
  } else {
    // Slēdz visus citus atvērtos kontainerus
    document.querySelectorAll('.skill-card-container.open').forEach((container) => {
      container.classList.remove('open');
    });

    // Atver izvēlēto
    cardContainer.classList.add('open');
  }
}


document.addEventListener("DOMContentLoaded", function () {
  // Set video playback speed
  var video = document.getElementById("video-background");
  video.playbackRate = 0.9;

  // Smooth scroll navigation
  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute("href"));
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

// Saglabājam visus 'read-more-btn' elementus
const readMoreBtns = document.querySelectorAll('.read-more-btn');

// Iegūstam katru pogu un pievienojam notikumu
readMoreBtns.forEach(button => {
  button.addEventListener('click', function () {
    // Atrast vecāko projekta aprakstu (pirmais <p> ar klase 'project-description')
    const projectDescription = this.closest('.project-description');

    // Mainām 'expanded' klasi, lai parādītu/slēptu papildu tekstu
    projectDescription.classList.toggle('expanded');

    // Mainām pogas tekstu uz 'Read less' vai 'Read more'
    if (projectDescription.classList.contains('expanded')) {
      this.textContent = 'Read less';
    } else {
      this.textContent = 'Read more';
    }
  });
});



  // Hamburger menu animation
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("active");
      navMenu.classList.toggle("show");
    });
  }
  // Form submission
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(this);

      fetch(this.action, {
        method: this.method,
        body: formData,
        headers: { Accept: "application/json" },
      })
        .then((response) => {
          if (response.ok) {
            alert("Message sent!");
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
          alert("Oops! There was a problem submitting your form");
        });
    });
  }
});

