import enableArrowScrollingLeft from "./enableArrowScrollingLeft";
import enableArrowScrollingRight from "./enableArrowScrollingRight";

function disableArrowScrolling() {
  const navButtons = document.querySelectorAll('.nav_buttons_container > div');
  const navButtonsArray = Array.from(navButtons);
  const arrowScrollLeft = document.querySelector('.nav_left');
  const arrowScrollRight = document.querySelector('.nav_right');

  //disables left or right arrow if gallery is on the most left/right image
  if(navButtonsArray[0].classList.contains('status_active')) {
    arrowScrollLeft.classList.add('disabled_arrow');
  } else {
    arrowScrollLeft.classList.remove('disabled_arrow');
  }

  if(navButtonsArray[3].classList.contains('status_active')) {
    arrowScrollRight.classList.add('disabled_arrow');
  } else {
    arrowScrollRight.classList.remove('disabled_arrow');
  }
}

export default disableArrowScrolling;