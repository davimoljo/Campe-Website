// Add a click event listener to the element with ID "inicio"
document.getElementById("inicio").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default anchor behavior (jump to the section)

  const destino = document.getElementById("first-container"); // Get the target section

  if (destino) {
    const offset = -130; // Offset to adjust the final scroll position (e.g., for fixed headers)
    const y = destino.getBoundingClientRect().top + window.scrollY + offset; // Calculate the scroll position

    // Smoothly scroll to the calculated position
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }
});

// Add a click event listener to the element with ID "sobre"
document.getElementById("sobre").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default anchor behavior

  const destino = document.getElementById("aboutus-container"); // Get the target section

  if (destino) {
    const offset = -80; // Offset to adjust for fixed headers or spacing
    const y = destino.getBoundingClientRect().top + window.scrollY + offset; // Calculate the scroll position

    // Smoothly scroll to the calculated position
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }
});

// Add a click event listener to the element with ID "contato"
document
  .getElementById("contato")
  .addEventListener("click", scrollToSectionContato);

// Define the function to scroll to the contact section
function scrollToSectionContato() {
  // Smoothly scroll to the element with ID "contactus-container"
  document.getElementById("contactus-container").scrollIntoView({
    behavior: "smooth",
  });
}
