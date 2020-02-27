function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }

  // create some variables for working with the slider
  let prev;
  let current;
  let next;

  // select the elements needed for the slider
  const slides = slider.querySelector('.slider__slides');
  const prevButton = slider.querySelector('.controls__goToPrev');
  const nextButton = slider.querySelector('.controls__goToNext');
}

function startSlider() {
  current = slider.querySelector('.current') || slides.firstElementChild;
  prev = current.previousElementSibling || slides.lastElementChild;
  next = current.nextElementSibling || slides.firstElementChild;
  console.log({ current, prev, next });
}

const mySlider = Slider(document.querySelector('.slider'));

console.log('POOOORA!');

