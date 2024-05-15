let goUp = document.querySelector(".fa-arrow-up");

// Show the Up button
window.onscroll = () => {
  if (window.scrollY >= 500) {
    goUp.style.display = "block";
  } else {
    goUp.style.display = "none";
  }
};

// Move to Up by Up button
goUp.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
