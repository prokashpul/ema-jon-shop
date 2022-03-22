const openBar = () => {
  document.querySelector(".open-nav").style.display = "none";
  document.querySelector(".nav-items").style.left = "0";
  document.querySelector(".close-nav").style.display = "block";
};
const closeBar = () => {
  document.querySelector(".close-nav").style.display = "none";
  document.querySelector(".open-nav").style.display = "block";
  document.querySelector(".nav-items").style.left = "-100%";
};

export { openBar, closeBar };
