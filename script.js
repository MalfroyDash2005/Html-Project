document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel-container");

  carousels.forEach((carousel) => {
    const gallery = carousel.querySelector(".gallery");
    const leftArrow = carousel.querySelector(".arrow.left");
    const rightArrow = carousel.querySelector(".arrow.right");
    const items = Array.from(gallery.children); // Get all child elements (e.g., images or iframes)

    let currentIndex = 0;

    const updateScroll = () => {
      const itemWidth = gallery.clientWidth; // Width of visible area
      gallery.scrollLeft = currentIndex * itemWidth;
    };

    leftArrow.addEventListener("click", () => {
      if (currentIndex === 0) {
        currentIndex = items.length - 1; // Go to the last item
      } else {
        currentIndex -= 1;
      }
      updateScroll();
    });

    rightArrow.addEventListener("click", () => {
      if (currentIndex === items.length - 1) {
        currentIndex = 0; // Return to the first item
      } else {
        currentIndex += 1;
      }
      updateScroll();
    });

    // Ensure smooth scroll for browsers that don't support it natively
    gallery.style.scrollBehavior = "smooth";
  });
});