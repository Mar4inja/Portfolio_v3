document.addEventListener("DOMContentLoaded", function() {
    // Set video playback speed
    var video = document.getElementById('video-background');
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
  
    // "Read more" button functionality
    document.querySelectorAll(".read-more-btn").forEach((button) => {
      button.addEventListener("click", function () {
        const parent = this.parentNode;
        const hiddenText = parent.querySelector(".hidden-text");
        const moreText = parent.querySelector(".more-text");
  
        if (hiddenText) {
          hiddenText.style.display = hiddenText.style.display === "block" ? "none" : "block";
          this.textContent = hiddenText.style.display === "block" ? "Read less" : "Read more";
        } else if (moreText) {
          moreText.style.display = moreText.style.display === "block" ? "none" : "block";
          this.textContent = moreText.style.display === "block" ? "Read less" : "Read more";
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
    document.addEventListener("DOMContentLoaded", function() {
      // Add stars to the background
      const numStars = 100;
      for(let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.position = 'absolute';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite alternate`;
        document.body.appendChild(star);
      }
    });
    
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
  
  // Add keyframes for twinkling stars
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes twinkle {
      0% { opacity: 0.5; }
      100% { opacity: 1; }
    }
  `;
  document.head.appendChild(style);
  