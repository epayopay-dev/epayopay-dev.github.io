// Turns every <div class="carousel"> into a slideshow.
// Each <figure> inside is one slide; its <figcaption> travels with it.
document.querySelectorAll('.carousel').forEach(function (carousel) {
  var slides = carousel.querySelectorAll('figure');
  if (slides.length < 2) return;

  var index = 0;

  var controls = document.createElement('div');
  controls.className = 'carousel-controls';

  var prev = document.createElement('button');
  prev.type = 'button';
  prev.setAttribute('aria-label', 'Previous image');
  prev.textContent = '‹';

  var counter = document.createElement('span');
  counter.className = 'carousel-counter';

  var next = document.createElement('button');
  next.type = 'button';
  next.setAttribute('aria-label', 'Next image');
  next.textContent = '›';

  controls.append(prev, counter, next);
  carousel.appendChild(controls);

  function show(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach(function (slide, j) {
      slide.hidden = j !== index;
    });
    counter.textContent = (index + 1) + ' / ' + slides.length;
  }

  prev.addEventListener('click', function () { show(index - 1); });
  next.addEventListener('click', function () { show(index + 1); });

  show(0);
});
