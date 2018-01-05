let video, controls, seeker;

window.onload = () => {
  video = document.querySelector('video');
  controls = document.querySelectorAll('.controls input');
  seeker = document.querySelector('.controls .seek-bar');

  video.volume = 0.5;
  seeker.min = 0;
  seeker.max = video.duration;
  seeker.value = 0;

  video.addEventListener('timeupdate', autoSeek);

  controls.forEach(input => {
    let eventType = input.classList.contains('play') ? 'click' : 'change';
    input.addEventListener(eventType, handleControls);
  });
}

function handleControls(e) { window[e.target.dataset.control](this); }

function play() { video.paused ? video.play() : video.pause(); }
function volume(range) { video.volume = range.value / 100; }
function speed(range) { video.playbackRate = range.value / 25; }

function seek(range) { video.currentTime = range.value; }
function autoSeek(e) { seeker.value = parseInt(video.currentTime); }