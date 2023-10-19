// Video
const overlayImage = document.querySelector('.cover-img');
const playButton = document.querySelector('.play');
const videoIframe = document.querySelector('.video-iframe');

playButton.addEventListener('click', () => {
    videoIframe.src = 'https://www.youtube.com/embed/J5jl2ML7pe0?si=IFPFkC1mkOND5Fd0&autoplay=1';
    videoIframe.style.display = 'block';
    playButton.style.display = 'none';
    overlayImage.classList.add('fade-out');

    setTimeout(() => {
      coverImage.classList.remove('fade-out');
      coverImage.style.display = 'none';
    }, 2000);
});

const secondContent = document.querySelector('.secondContent');
const bigScreenNav = document.querySelector('.bigScreenNav');
const secondNav = document.querySelector('.secondnav');
window.addEventListener('scroll', function() {
  if (window.scrollY >= secondContent.offsetTop) {
    secondNav.classList.add('thirdsticky');
    bigScreenNav.classList.add('secondsticky');
    mobileMenu.classList.add('sticky');
  } else {
    secondNav.classList.remove('thirdsticky');
    bigScreenNav.classList.remove('secondsticky');
    mobileMenu.classList.remove('sticky');
  }
});

// Mobile Nav
const mobileMenu = document.querySelector('.mobileMenu');
const out = document.querySelector('.out');
const exit = document.querySelector('.exit');

mobileMenu.addEventListener('click', function() {
  mobileMenu.style.display = 'none';

  out.style.display = 'block';
});

exit.addEventListener('click', function() {
  mobileMenu.style.display = 'block';

  out.style.display = 'none';
});

//The game
document.querySelector('.thegame').addEventListener('click', function() {
  mobileMenu.style.display = 'block';
  out.style.display = 'none';
  window.scrollTo(0, document.querySelector('.firstContent').offsetTop);
});

//The company
document.querySelector('.thecompany').addEventListener('click', function() {
  mobileMenu.style.display = 'block';
  out.style.display = 'none';
  window.scrollTo(0, document.querySelector('.secondContent').offsetTop);
});

//The job
document.querySelector('.thejob').addEventListener('click', function() {
  mobileMenu.style.display = 'block';
  out.style.display = 'none';
  window.scrollTo(0, document.querySelector('.thirdContent').offsetTop);
});

//Working place
document.querySelector('.workingplace').addEventListener('click', function() {
  mobileMenu.style.display = 'block';
  out.style.display = 'none';
  window.scrollTo(0, document.querySelector('.forthContent').offsetTop);
});

// backtotop button
const backToTopButton = document.querySelector(".backtotop");

backToTopButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// //Slideshow
const slideshow = document.querySelector('.slideshow');
const slideshowImages = document.querySelectorAll('.slideshow-image');
const slideshowThumbnails = document.querySelectorAll('.slideshow-thumbnail');

let currentSlideIndex = 0;

function showSlide(slideIndex) {
  slideshowImages.forEach(image => image.classList.remove('active'));
  slideshowThumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));

  slideshowImages[slideIndex].classList.add('active');
  slideshowThumbnails[slideIndex].classList.add('active');

  // Scroll the slideshow thumbnails to the center of the element
  slideshowThumbnails.scrollLeft = slideshowThumbnails[slideIndex].offsetLeft - (slideshowThumbnails.clientWidth / 2) + (slideshowThumbnails[slideIndex].clientWidth / 2);
}

// Show the first slide by default
showSlide(currentSlideIndex);

// Add a click event listener to each slideshow thumbnail
slideshowThumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', function() {
    const slideshowImageIndex = thumbnail.dataset.index;
    showSlide(slideshowImageIndex);
  });
});

setInterval(nextSlide, 3000);

function nextSlide() {
  currentSlideIndex++;

  if (currentSlideIndex >= slideshowImages.length) {
    currentSlideIndex = 0;
  }

  showSlide(currentSlideIndex);
}