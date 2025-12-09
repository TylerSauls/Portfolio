// Navbar Scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    const navHeight = document.querySelector('nav').offsetHeight || 0;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 10;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// Animations
const options = {
  root: null,
  rootMargin: '0px 0px -18% 0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const slides = entry.target.querySelectorAll('.slide');
      slides.forEach((slide, i) => {
        slide.style.transitionDelay = `${i * 100}ms`;
        slide.classList.add('show');
      });
      obs.unobserve(entry.target);
    }
  });
}, options);

document.querySelectorAll('.project-fullscreen').forEach(row => {
  observer.observe(row);
});

// Snow effect
document.addEventListener('DOMContentLoaded', function(){
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function(){
        particlesJS("snow", {
            "particles": {
                "number": { "value": 200, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ffffff" },
                "opacity": { "value": 0.7 },
                "size": { "value": 5, "random": true },
                "line_linked": { "enable": false },
                "move": { "enable": true, "speed": 5, "direction": "bottom", "random": true, "straight": false, "out_mode": "out" }
            },
            "interactivity": { "events": { "onhover": { "enable": false }, "onclick": { "enable": false }, "resize": false } },
            "retina_detect": true
        });
    };
    document.head.append(script);
});

(function() {
  emailjs.init("C_ZeXVsLMR2_lwzDA"); 
})();

// EmailJS Contact Form
window.onload = function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    emailjs.send("service_oqqkqie", "template_11keqvp", templateParams)
      .then(function(response) {
        alert("Email sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
        form.reset();
      },  function(error) {
        alert("Failed to send email. Check console for details.");
        console.error("FAILED...", error);
      });
  });
};

