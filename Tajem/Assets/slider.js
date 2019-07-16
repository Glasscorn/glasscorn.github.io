let arrowLeft = document.getElementById('control-left');
    arrowLeft.addEventListener('click', slideLeft);
let arrowRight = document.getElementById('control-right');
    arrowRight.addEventListener('click', slideRight);
let position = 0,
    slider = document.getElementById('slider-list'),
    listElems = document.getElementsByClassName('slider-image'),
    iconElems = document.getElementsByClassName('profession-slide'),
    currentIconIndex = 4;
toggleIconIndex();

function toggleIconIndex() {
  listElems[currentIconIndex].classList.add('current-slide');
  for (let i = 0; i < iconElems.length; i++) {
    iconElems[i].style.display = 'none';
    iconElems[i].style.opacity = '0';
  }
  iconElems[currentIconIndex].style.display = 'block';
  iconElems[currentIconIndex].style.opacity = '1';
  if (currentIconIndex > 0) {
  listElems[currentIconIndex-1].classList.remove('current-slide');
}
  if (currentIconIndex < 8) {
  listElems[currentIconIndex+1].classList.remove('current-slide');
}
  showOrHideControls();
}

function showOrHideControls(){
   if (currentIconIndex === 0){
     arrowLeft.style.display = 'none';
   } else {
     arrowLeft.style.display = 'inline';
   }
   if (currentIconIndex === 8){
     arrowRight.style.display = 'none';
   } else {
     arrowRight.style.display = 'inline';
   }
}

function slideRight () {
  position -= 90;
if (position < -360) {
  position = -360;
}
  slider.style.left = position + 'px';
if (currentIconIndex === 8) {
  toggleIconIndex();
} else {
  currentIconIndex++;
  toggleIconIndex();
}
}

function slideLeft () {
  position += 90;
  if (position > 360) {
    position = 360;
  }
  slider.style.left = position + 'px';
  if (currentIconIndex === 0) {
    toggleIconIndex();
  } else {
    currentIconIndex--;
    toggleIconIndex();
  }
}
