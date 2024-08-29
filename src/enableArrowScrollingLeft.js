import disableNavButtonsStyle from "./disableNavButtonsStyle";
import disableArrowScrolling from "./disableArrowScrolling";

function enableArrowScrollingLeft() {
  const navButtons = document.querySelectorAll('.nav_buttons_container > div');
  const imageContainer = document.querySelector('.image_container');
  const navButtonsArray = Array.from(navButtons);

  //checks the position of gallery based on status of nav buttons, and changes the slides and nav button status accordingly
  if(navButtonsArray[1].classList.contains('status_active')) {
    disableNavButtonsStyle();
    navButtonsArray[0].classList.add('status_active');
    imageContainer.classList.remove('position_two', 'position_three', 'position_four');
    imageContainer.classList.add('position_one');
  } else if(navButtonsArray[2].classList.contains('status_active')) {
    disableNavButtonsStyle();
    navButtonsArray[1].classList.add('status_active');
    imageContainer.classList.remove('position_one', 'position_three', 'position_four');
    imageContainer.classList.add('position_two');
  } else if (navButtonsArray[3].classList.contains('status_active')) {
    disableNavButtonsStyle();
    navButtonsArray[2].classList.add('status_active');
    imageContainer.classList.remove('position_two', 'position_one', 'position_four');
    imageContainer.classList.add('position_three');
  } else {console.log('leftArrowError')};
  disableArrowScrolling();
}

export default enableArrowScrollingLeft;