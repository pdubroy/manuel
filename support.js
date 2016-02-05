var dpad = {};

function setButtonPressed(keyCode, isPressed) {
  if (keyCode === 37) {
    dpad.left = isPressed;
  } else if (keyCode === 39) {
    dpad.right = isPressed;
  }
}

window.onkeydown = function(e) {
  setButtonPressed(e.keyCode, true);
  e.preventDefault();
};

window.onkeyup = function(e) {
  setButtonPressed(e.keyCode, false);
  e.preventDefault();
};
