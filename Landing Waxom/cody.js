//Скрипт адаптирования высоты для example-section
window.onload = function () {

}





//Элементы управления видео

window.onload = function () {
  let video, play, pause;
  video = document.getElementById('video');
  play = document.getElementById('play');
  pause = document.getElementById('pause');
  play.addEventListener('click', playOrPause);
  pause.addEventListener('click', playOrPause);

  function playOrPause() {
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
  }

  function pauseVideo() {
      video.pause();
      pause.classList.add('disabled');
      play.classList.remove('disabled');
  }
}
