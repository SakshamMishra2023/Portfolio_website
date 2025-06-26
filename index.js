document.addEventListener('DOMContentLoaded', function() {
  const bodyContent = document.body.children;
  for (let i = 0; i < bodyContent.length; i++) {
    if (bodyContent[i].tagName !== 'SCRIPT') {
      bodyContent[i].style.display = 'none';
    }
  }

  const doorOverlay = document.createElement('div');
  doorOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const doorGif = document.createElement('img');
  doorGif.src = './assets/vhs_distortion.gif';
  doorGif.style.cssText = `
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  `;
  doorOverlay.appendChild(doorGif);
  document.body.appendChild(doorOverlay);
  
  doorGif.onload = function() {
    setTimeout(function() {
      doorOverlay.style.transition = 'opacity 1s ease-out';
      doorOverlay.style.opacity = '0';
      // Show all content after door animation fades out
      setTimeout(function() {
        // Remove door overlay
        if (doorOverlay.parentNode) {
          doorOverlay.parentNode.removeChild(doorOverlay);
        }
        // Show all content
        for (let i = 0; i < bodyContent.length; i++) {
          if (bodyContent[i].tagName !== 'SCRIPT') {
            bodyContent[i].style.display = '';
          }
        }
        // Ensure vanta-bg is visible
        const vantaBg = document.getElementById('vanta-bg');
        if (vantaBg) {
          vantaBg.style.display = 'block';
        }
        // Run the rest of the animations after content is visible
        runPageAnimations();
        // Start typewriter animation for hero text
        const typewriterText = document.getElementById('typewriter-text');
        const mainText = "Hi, I'm Saksham Mishra";
        let i = 0;
        typewriterText.textContent = "";
        function typeWriter() {
          if (i < mainText.length) {
            typewriterText.textContent += mainText.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
          }
        }
        typeWriter();
      }, 1000);
    }, 3000);
  };
});

function runPageAnimations() {
  console.log('Running page animations...');
  
  setTimeout(() => {
    console.log('Initializing Vanta.js background...');
    
    if (typeof VANTA !== 'undefined' && VANTA.NET) {
      VANTA.NET({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x4ecdc4,
        backgroundColor: 0x000000,
        points: 12.00,
        maxDistance: 35.00,
        spacing: 25.00,
        showLines: true,
        lineColor: 0x4ecdc4,
        lineWidth: 1.00,
        pointSize: 2.00
      });
      
      // Mark as initialized
      const vantaBg = document.getElementById('vanta-bg');
      if (vantaBg) {
        vantaBg.setAttribute('data-vanta-initialized', 'true');
        console.log('Vanta.js background initialized successfully');
      } else {
        console.error('Vanta.js background element not found');
      }
    } else {
      console.error('VANTA.NET library not available');
    }
  }, 100);
}

// Letter-by-letter animation function
function typeWriter(element, text, speed = 50) {
  element.innerHTML = '';
  let i = 0;
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Global flag to prevent re-animation
let experienceAnimationCompleted = false;

// Scroll-triggered animation
function handleScrollAnimations() {
  const experienceHeading = document.querySelector('.mk-heading-YIH');
  const bioParagraphs = document.querySelectorAll('.par1');
  
  // Check if experience section is in view
  const experienceSection = document.querySelector('.mk-container');
  if (experienceSection && !experienceAnimationCompleted) {
    const rect = experienceSection.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isInView && !experienceSection.classList.contains('animated')) {
      experienceAnimationCompleted = true;
      experienceSection.classList.add('animated');
      
      // Animate heading and paragraphs with bounce effect
      if (experienceHeading) {
        experienceHeading.classList.add('bounce-in');
      }
      bioParagraphs.forEach((paragraph, index) => {
        setTimeout(() => {
          paragraph.classList.add('bounce-in');
        }, 800 + (index * 400));
      });
    }
  }
}

// Add scroll event listener
window.addEventListener('scroll', handleScrollAnimations);

// Initial check for elements already in view
window.addEventListener('load', handleScrollAnimations);

// Project image hover blur effect
document.addEventListener('DOMContentLoaded', function() {
  const projectImages = document.querySelectorAll('.project-image img');
  const projectBoxes = document.querySelectorAll('.project-box');
  
  projectImages.forEach((image, index) => {
    const currentBox = projectBoxes[index];
    
    image.addEventListener('mouseenter', function() {
      // Blur all other project boxes
      projectBoxes.forEach((box, boxIndex) => {
        if (boxIndex !== index) {
          box.classList.add('blurred');
        }
      });
      
      // Focus the current box
      currentBox.classList.add('focused');
    });
    
    image.addEventListener('mouseleave', function() {
      // Remove blur from all boxes
      projectBoxes.forEach(box => {
        box.classList.remove('blurred');
        box.classList.remove('focused');
      });
    });
  });
});

// Skills section functionality
document.addEventListener('DOMContentLoaded', function() {
  const skillOptions = document.querySelectorAll('.skill-option');
  const hardwareCarousel = document.getElementById('hardware-carousel');
  const softwareCarousel = document.getElementById('software-carousel');
  const movingPaneContainer = document.querySelector('.moving-pane-container');
  
  skillOptions.forEach(option => {
    option.addEventListener('click', function() {
      const type = this.getAttribute('data-type');
      
      // Remove active class from all options
      skillOptions.forEach(opt => opt.classList.remove('active'));
      
      // Add active class to clicked option
      this.classList.add('active');
      
      // Activate the moving pane container
      movingPaneContainer.classList.add('active');
      
      // Hide all carousels first
      hardwareCarousel.classList.remove('active');
      softwareCarousel.classList.remove('active');
      
      // Show the selected carousel
      if (type === 'hardware') {
        hardwareCarousel.classList.add('active');
      } else if (type === 'software') {
        softwareCarousel.classList.add('active');
      }
    });
  });
});

// Changing text animation
document.addEventListener('DOMContentLoaded', function() {
  const changingTextButton = document.getElementById('changing-text-button');
  const words = [
    {text: "Web Dev", color: "#4ecdc4"},
    {text: "Game Dev", color: "#ff6b6b"},
    {text: "IoT Enthusiast", color: "#feca57"}
  ];
  let idx = 0;
  function animateChange(wordObj) {
    changingTextButton.style.animation = 'fadeOutDown 0.5s forwards';
    setTimeout(() => {
      changingTextButton.textContent = wordObj.text;
      changingTextButton.style.color = wordObj.color;
      changingTextButton.style.animation = 'fadeInUp 0.6s forwards';
    }, 500);
  }
  // Initial
  changingTextButton.textContent = words[idx].text;
  changingTextButton.style.color = words[idx].color;
  changingTextButton.style.animation = 'fadeInUp 0.6s forwards';
  setInterval(() => {
    idx = (idx + 1) % words.length;
    animateChange(words[idx]);
  }, 2000);
});

function typeWriterEffect(element, text, speed, callback) {
  let i = 0;
  element.textContent = "";
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }
  type();
}

let typewriterStarted = false;
window.addEventListener('scroll', function() {
  const expSection = document.getElementById('years-experience');
  const heading = document.getElementById('exp-typewriter');
  const paragraphs = document.querySelectorAll('.exp-fade');
  const text = "ABOUT MYSELF";
  if (!typewriterStarted && expSection) {
    const rect = expSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      typewriterStarted = true;
      typeWriterEffect(heading, text, 80, function() {
        heading.classList.add('exp-pop-in');
        setTimeout(() => {
          paragraphs.forEach((p, idx) => setTimeout(() => p.classList.add('visible'), 400 * idx));
        }, 700);
      });
    }
  }
});

// Dashboard modal logic
document.addEventListener('DOMContentLoaded', function() {
  const dashboardBtn = document.getElementById('dashboard-btn');
  const dashboardModal = document.getElementById('dashboard-modal');
  const dashboardClose = document.getElementById('dashboard-close');
  const dashboardLinks = document.querySelectorAll('.dashboard-link');

  dashboardBtn.addEventListener('click', () => {
    dashboardModal.classList.add('open');
  });
  dashboardClose.addEventListener('click', () => {
    dashboardModal.classList.remove('open');
  });
  dashboardModal.addEventListener('click', (e) => {
    if (e.target === dashboardModal) dashboardModal.classList.remove('open');
  });
  dashboardLinks.forEach(link => {
    link.addEventListener('click', function() {
      const target = document.querySelector(this.getAttribute('data-target'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        dashboardModal.classList.remove('open');
      }
    });
  });
});

// EmailJS for contact form
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) contactForm.reset();
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('.contact-btn');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Get form data
    const formData = {
      title: contactForm.querySelector('input[name="title"]').value,
      name: contactForm.querySelector('input[name="name"]').value,
      time: new Date().toLocaleString(),
      message: contactForm.querySelector('textarea[name="message"]').value,
      email: contactForm.querySelector('input[name="email"]').value
    };
    
    emailjs.send('service_p10gzri', 'template_0yuqguu', formData)
      .then(function(response) {
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.background = 'linear-gradient(90deg, #4ecdc4 0%, #44a08d 100%)';
        contactForm.reset();
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.background = 'linear-gradient(90deg, #7b0cfb 0%, #4ecdc4 100%)';
          submitBtn.disabled = false;
        }, 3000);
      }, function(error) {
        submitBtn.textContent = 'Failed to send';
        submitBtn.style.background = 'linear-gradient(90deg, #ff6b6b 0%, #ee5a52 100%)';
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.background = 'linear-gradient(90deg, #7b0cfb 0%, #4ecdc4 100%)';
          submitBtn.disabled = false;
        }, 3000);
      });
  });
});

// Initialize EmailJS
(function() {
  emailjs.init("SVdAn2-oFbiwgZUGq");
})();

// Fallback Vanta.js initialization in case door animation doesn't trigger
document.addEventListener('DOMContentLoaded', function() {
  // Check if Vanta.js hasn't been initialized after 5 seconds
  setTimeout(() => {
    const vantaBg = document.getElementById('vanta-bg');
    if (vantaBg && !vantaBg.hasAttribute('data-vanta-initialized')) {
      console.log('Fallback Vanta.js initialization');
      
      // Check if VANTA.NET is available
      if (typeof VANTA !== 'undefined' && VANTA.NET) {
        VANTA.NET({
          el: "#vanta-bg",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x4ecdc4,
          backgroundColor: 0x000000,
          points: 12.00,
          maxDistance: 35.00,
          spacing: 25.00,
          showLines: true,
          lineColor: 0x4ecdc4,
          lineWidth: 1.00,
          pointSize: 2.00
        });
        
        // Mark as initialized
        vantaBg.setAttribute('data-vanta-initialized', 'true');
        console.log('Fallback Vanta.js background initialized successfully');
      } else {
        console.error('VANTA.NET library not available for fallback initialization');
      }
    }
  }, 5000);
});
