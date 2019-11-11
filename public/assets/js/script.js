const openSlideMenu = () => {
  document.getElementById("side-menu").style.width = "250px";
  document.getElementById("tagline").style.marginLeft = "250px";
};

const closeSlideMenu = () => {
  document.getElementById("side-menu").style.width = "0px";
  document.getElementById("tagline").style.marginLeft = "0px";
};

const openModal = () => {
  const modal = document.getElementById("simpleModal");
  modal.style.display = "block";
};

const closeModal = () => {
  const modal = document.getElementById("simpleModal");
  modal.style.display = "none";
};
