import navButtonStatusChange from "./navButtons";

function addEventListeners() {
  const navButtons = document.querySelectorAll('.nav_buttons_container > div');

  //loop through nodelist of buttons and add event listener to every one of them
  for(const elem of navButtons) {
    elem.addEventListener('click', navButtonStatusChange);
  }
}

export default addEventListeners;