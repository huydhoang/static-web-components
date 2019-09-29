const modal = document.querySelector(".modal");
const btnClosePopup = document.querySelector(".btn-close-popup");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

window.addEventListener("load", toggleModal);
btnClosePopup.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
