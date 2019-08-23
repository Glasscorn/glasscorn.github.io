let arrowDown = document.getElementById('arrow__down');
    arrowDown.addEventListener('click', slideDown);
let arrowUp = document.getElementById('arrow__top');
    arrowUp.addEventListener('click', slideUp);
let position = 0,
    index = 0;
    slider = document.getElementById('slider__wrapper'),
    listElems = document.querySelectorAll('comment');

function slideDown () {
  position = position - 294;
if (position <-588) {
  position = 0;
}
  slider.style.top = position + 'px';
}

function slideUp () {
  position = position + 294;
  if (position > 0) {
    position = -588;
  }
  slider.style.top = position + 'px';
}


function teamSlider(event){
  if (event.target.className == 'team_icon'){
  let index = event.target.getAttribute('index'),
      array = document.getElementsByClassName('slider__team_content');
  for (var i = 0; i < array.length; i++) {
    if (index==i || event.target.className != 'active__team_icon') {
      event.target.classList.add('active__team_icon');
    } else {
      event.target.style.display = 'none';
    }
  }
}
}

let slideClick = document.getElementsByClassName('team_slider_wrapper')[0];
    slideClick.addEventListener('click', teamSlider)
