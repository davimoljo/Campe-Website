document.getElementById("inicio").addEventListener("click", function (e) {
  e.preventDefault();

  const destino = document.getElementById("first-container");

  if (destino) {
    const offset = -130; // ajuste de pixels (negativo = para cima)
    const y = destino.getBoundingClientRect().top + window.scrollY + offset;

    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  }
});

document.getElementById("sobre").addEventListener("click", function (e) {
  e.preventDefault();

  const destino = document.getElementById("aboutus-container");

  if (destino) {
    const offset = -80; // ajuste de pixels (negativo = para cima)
    const y = destino.getBoundingClientRect().top + window.scrollY + offset;

    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  }
});
  
  document.getElementById("contato").addEventListener("click", scrollToSectionContato);
  function scrollToSectionContato() {
    document.getElementById("contactus-container").scrollIntoView({
      behavior: "smooth"
    });
  }

  