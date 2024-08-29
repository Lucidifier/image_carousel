import disableArrowScrolling from "./disableArrowScrolling";

function navButtonStatusChange() {
  const navButtons = document.querySelectorAll('.nav_buttons_container > div');
  const imageContainer = document.querySelector('.image_container');
  //reset all buttons
  for(const element of navButtons) {
    element.classList.remove('status_active')
  }
  //add active status to button clicked
  this.classList.add('status_active');
  //convert nodelist into an array so index can be accessed
  const navButtonsArray = Array.from(navButtons);
  let index = navButtonsArray.indexOf(this);
  //position image according to active button based on index of element clicked on
    switch(index) {
      case 0:
        imageContainer.classList.remove('position_two', 'position_three', 'position_four');
        imageContainer.classList.add('position_one');
        console.log('1');
        break;
      case 1:
        imageContainer.classList.remove('position_one', 'position_three', 'position_four');
        imageContainer.classList.add('position_two');
        console.log('2');
        break;
      case 2:
        imageContainer.classList.remove('position_two', 'position_one', 'position_four');
        imageContainer.classList.add('position_three');
        console.log('3');
        break;
      case 3:
        imageContainer.classList.remove('position_two', 'position_three', 'position_one');
        imageContainer.classList.add('position_four');
        console.log('4');
        break;
      default:
        console.log('error');
    }
    //run arrowScrolling test so arrows follow buttons scrolling
    disableArrowScrolling();
}

export {navButtonStatusChange};