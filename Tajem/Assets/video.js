window.onload = function () {
  let video, play, pause, videoOverlay, videoText;
  video = document.getElementById('video');
  play = document.getElementById('play');
  pause = document.getElementById('pause');
  videoOverlay = document.getElementById('video-overlay');
  videoText = document.getElementById('video-text');
  play.addEventListener('click', playOrPause);
  pause.addEventListener('click', playOrPause);

  function playOrPause() {
    videoOverlay.classList.add('disabled');
    if (video.paused) {
      video.play();
      playVideo();
    } else {
      video.pause();
      pauseVideo();
    }
  }

  function playVideo(){
      video.play();
      play.classList.add('disabled');
      pause.classList.remove('disabled');
      videoText.classList.add('hidden');
  }

  function pauseVideo() {
      video.pause();
      pause.classList.add('disabled');
      play.classList.remove('disabled');
      videoText.classList.remove('hidden');
  }
}
