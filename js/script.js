function popUp() {
    const popup = document.getElementById("myPopUp");
    const gallery = document.getElementById("gallery");
    const game = document.getElementById("game");
    const form = document.getElementById("form");
    const shop = document.getElementById("shop");
    const home = document.getElementById("home");
    popup.style.display = "flex";
    setTimeout(() => {
      popup.classList.add("open");
    }, 50); // Add a slight delay for a smoother animation
    gallery.style.display = "block";
    game.style.display = "block";
    form.style.display = "block";
    shop.style.display = "block";
    home.style.display = "block";
  }
  
  function closePopUp() {
    const popup = document.getElementById("myPopUp");
    popup.classList.remove("open");
    popup.classList.add("close");
    setTimeout(() => {
      popup.style.display = "none";
      popup.classList.remove("close");
    }, 500); // Adjust the delay to match the animation duration
  }
  