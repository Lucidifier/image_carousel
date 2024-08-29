import disableArrowScrolling from "./disableArrowScrolling";
import disableNavButtonsStyle from "./disableNavButtonsStyle";

function enableArrowScrollingRight() {
  const navButtons = document.querySelectorAll('.nav_buttons_container > div');
  const imageContainer = document.querySelector('.image_container');
  const navButtonsArray = Array.from(navButtons);

  if(navButtonsArray[0].classList.contains('status_active')) {
    disableNavButtonsStyle();
    navButtonsArray[1].classList.add('status_active');
    imageContainer.classList.remove('position_one', 'position_three', 'position_four');
    imageContainer.classList.add('position_two');
  } else if(navButtonsArray[1].classList.contains('status_active')) {
    disableNavButtonsStyle();
    navButtonsArray[2].classList.add('status_active');
    imageContainer.classList.remove('position_two', 'position_one', 'position_four');
    imageContainer.classList.add('position_three');
  } else if (navButtonsArray[2].classList.contains('status_active')) {
    disableNavButtonsStyle();
    navButtonsArray[3].classList.add('status_active');
    imageContainer.classList.remove('position_two', 'position_three', 'position_one');
    imageContainer.classList.add('position_four');
  } else {console.log('rightArrowError')};
  disableArrowScrolling();
}

export default enableArrowScrollingRight;