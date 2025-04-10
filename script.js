document.getElementById("inicio").addEventListener("click", scrollToSectionInicio);
    
  function scrollToSectionInicio() {
    document.getElementById("first-container").scrollIntoView({
      behavior: "smooth"
    });
  }

  
  document.getElementById("sobre").addEventListener("click", scrollToSectionSobre);
  function scrollToSectionSobre() {
    document.getElementById("aboutus-container").scrollIntoView({
      behavior: "smooth"
    });
  }
  document.getElementById("contato").addEventListener("click", scrollToSectionContato);
  function scrollToSectionContato() {
    document.getElementById("contact-us").scrollIntoView({
      behavior: "smooth"
    });
  }