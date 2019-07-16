let loadMoreNutton = document.getElementById('more-button'),
  hiddenWorks = document.getElementsByClassName('hidden-work');
  visible = false;

loadMoreNutton.addEventListener('click', moreOrLess);

function moreOrLess() {
  if (visible === false){
    for (let i = 0; i < hiddenWorks.length; i++) {
      hiddenWorks[i].style.display = 'block';
    }
    loadMoreNutton.value = 'Hide';
  }
  if (visible) {
    for (let i = 0; i < hiddenWorks.length; i++) {
      hiddenWorks[i].style.display = 'none';
    }
    loadMoreNutton.value = 'Load more';
  }
  visible = !visible;
}
