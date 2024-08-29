import {navButtonStatusChange} from "./navButtons";
import disableArrowScrolling from "./disableArrowScrolling";
import enableArrowScrollingLeft from "./enableArrowScrollingLeft";
import enableArrowScrollingRight from "./enableArrowScrollingRight";

function addEventListeners() {
  const navButtons = document.querySelectorAll('.nav_buttons_container > div');
  const leftArrow = document.querySelector('.nav_left');
  const rightArrow = document.querySelector('.nav_right')

  //loop through nodelist of buttons and add event listener to every one of them
  for(const elem of navButtons) {
    elem.addEventListener('click', navButtonStatusChange);
  }

  disableArrowScrolling();
  leftArrow.addEventListener('click', enableArrowScrollingLeft);
  rightArrow.addEventListener('click', enableArrowScrollingRight);
}

export default addEventListeners;