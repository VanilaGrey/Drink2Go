const sliderElement = document.querySelector('.splide');

if (sliderElement) {
  new Splide(sliderElement, {
    classes: {
      pagination: 'reviews__pagination',
      page: 'reviews__pagination-page',
    },
  }).mount();
}
