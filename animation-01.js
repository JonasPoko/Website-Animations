document.addEventListener("DOMContentLoaded", function() {
  const headlines = document.querySelectorAll(".headline");

  function wrapCharacters(headlines) {
    headlines.forEach((headline) => {
      const text = headline.dataset.headline;
      headline.innerHTML = text
        .split("")
        .map(char => `<span class="char">${char}</span>`)
        .join("");
    });
  }

  function setupScrollAnimations(headlines) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    }, { threshold: 0.5 });

    headlines.forEach((headline) => observer.observe(headline));
  }

  wrapCharacters(headlines);
  setupScrollAnimations(headlines);
});
