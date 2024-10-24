document.addEventListener("DOMContentLoaded", function() {
  const headlines = document.querySelectorAll(".headline");

  // Function to wrap characters of each headline
  function wrapCharacters(headlines) {
    headlines.forEach((headline) => {
      const text = headline.dataset.headline;
      headline.innerHTML = text
        .split("")
        .map(char => `<span class="char">${char}</span>`)
        .join("");
    });
  }

  // Function to handle scroll-triggered animations
  function setupScrollAnimations(headlines) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('In view:', entry.target);  // Debugging statement
          entry.target.classList.add("in-view");  // Add animation class when visible
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    }, { threshold: 0.5 });

    headlines.forEach((headline) => observer.observe(headline));
  }

  // Initialize animations for all headlines with the class 'headline'
  wrapCharacters(headlines);  // Wrap each character in spans
  setupScrollAnimations(headlines);  // Trigger animations on scroll
});
