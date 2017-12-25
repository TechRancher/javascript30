document.addEventListener('keydown', function(event) {
  var key = toggleActive();

  if (key) {
    key.classList.add('active');

    var fileName = key.childNodes[3].innerText;
    var audio = new Audio('sounds/' + fileName + '.mp3');
    audio.play();
  }
});

document.addEventListener('keyup', function(event) {
  toggleActive();
});

function toggleActive() {
  var key = document.querySelector("[data-key='" + event.keyCode + "']");

  key && key.classList.toggle('active');
  return key;
}
