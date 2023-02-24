const slides = document.querySelector('.slides');
const containerDots = document.querySelector('.container-dots');

// Global index to track image
let slideIndex = 1;

// Image Container
const images = [
  { src: 'css/images/tacos-pastor.jpg' },
  { src: 'css/images/tacos.jpeg'},
  { src: 'css/images/spices.jpg' },
];

// adding images and dots to the respective container
images.map((img) => {
  // creating image element and adding src of that image
  var imgTag = document.createElement('img');
  imgTag.src = img.src;

  // creating dot (div) element adding 'dot' class to it
  var dot = document.createElement('div');
  dot.classList.add('dot');

  // appending the image and dots to respective container
  slides.appendChild(imgTag);
  containerDots.appendChild(dot);
});

// adding EventListener to All dots so that when user clicks on it trigger move dots
const dots = containerDots.querySelectorAll('*').forEach((dot, index) => {
  dot.addEventListener('click', () => {
    moveDot(index + 1);
  });
});

// it helps to move the dot, it takes "index" as a parameter and updates the slideIndex
function moveDot(index) {
  slideIndex = index;
  updateImageAndDot();
}

// Update Image and Slide Dot according to the [data-active]
function updateImageAndDot(){
  // updating image
  const activeSlide = slides.querySelector("[data-active]");
  slides.children[slideIndex - 1].dataset.active = true;
  activeSlide && delete activeSlide.dataset.active;

  // updating dots
  const activeDot = containerDots.querySelector('[data-active]');
  containerDots.children[slideIndex - 1].dataset.active = true;
  activeDot && delete activeDot.dataset.active;
}

// slide next button click event
const nextSlide = () => {
  // it will update the slideIndex on the basis of images.length as it gets greater than images.length, this will initialize to 1
  if (slideIndex !== images.length) {
    ++slideIndex;
  } else if (slideIndex === images.length) {
    slideIndex = 1;
  }
  updateImageAndDot();
};

const nextBtn = document.querySelector('.next');
nextBtn.onclick = nextSlide;

// slide previous button click event
const prevSlide = () => {
  // It will check if the slideIndex is less equal to 1 then change it to the images.legnth, it will enable infinite scrolling
  if (slideIndex !== 1) {
    --slideIndex;
  } else if (slideIndex === 1) {
    slideIndex = images.length;
  }
  updateImageAndDot();
};

const prevBtn = document.querySelector('.prev');
prevBtn.onclick = prevSlide;

// show the image as the page loads;
updateImageAndDot();
