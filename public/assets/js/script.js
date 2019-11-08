const openSlideMenu = () => {
  document.getElementById("side-menu").style.width = "250px";
  document.getElementById("tagline").style.marginLeft = "250px";
};

const closeSlideMenu = () => {
  document.getElementById("side-menu").style.width = "0px";
  document.getElementById("tagline").style.marginLeft = "0px";
};
