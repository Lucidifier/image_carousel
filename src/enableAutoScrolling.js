import disableNavButtonsStyle from "./disableNavButtonsStyle";
import disableArrowScrolling from "./disableArrowScrolling";

function enableAutoScrolling() {
  const navButtons = document.querySelectorAll('.nav_buttons_container > div');
  const imageContainer = document.querySelector('.image_container');
  const navButtonsArray = Array.from(navButtons);

  //every 5 seconds check which nav button has status active and move the slideshow to the right accordingly
  setInterval(function() {
    if(navButtonsArray[0].classList.contains('status_active')) {
      disableNavButtonsStyle();
      navButtonsArray[1].classList.add('status_active');
      imageContainer.classList.remove('position_one', 'position_three', 'position_four');
      imageContainer.classList.add('position_two');
      disableArrowScrolling();
    } else if(navButtonsArray[1].classList.contains('status_active')) {
      disableNavButtonsStyle();
      navButtonsArray[2].classList.add('status_active');
      imageContainer.classList.remove('position_two', 'position_one', 'position_four');
      imageContainer.classList.add('position_three');
      disableArrowScrolling();
    } else if(navButtonsArray[2].classList.contains('status_active')) {
      disableNavButtonsStyle();
      navButtonsArray[3].classList.add('status_active');
      imageContainer.classList.remove('position_two', 'position_three', 'position_one');
      imageContainer.classList.add('position_four');
      disableArrowScrolling();
    } else if(navButtonsArray[3].classList.contains('status_active')) {
      disableNavButtonsStyle();
      navButtonsArray[0].classList.add('status_active');
      imageContainer.classList.remove('position_two', 'position_three', 'position_four');
      imageContainer.classList.add('position_one');
      disableArrowScrolling();
    } else {console.log('autoscrollError')}
  }, 5000);
}

export default enableAutoScrolling;