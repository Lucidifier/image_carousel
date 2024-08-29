function disableNavButtonsStyle() {
  const navButtons = document.querySelectorAll('.nav_buttons_container > div');
  for(const element of navButtons) {
    element.classList.remove('status_active');
  }
}

export default disableNavButtonsStyle;