const slides = document.querySelector('.slides');
const containerDots = document.querySelector('.container-dots');

// Global index to track image
let slideIndex = 1;

//Image Container
const images = {
  breakfast: [
    'css/images/chilaquiles.jpg',
    'css/images/huevosrancheros.jpg',
    'css/images/elote.jpg',
  ],
  lunch: [
    'css/images/tacosyjarritos.jpg',
    'css/images/burritos.jpg',
    'css/images/quesadillas.jpg',
  ],
  dinner: [
    'css/images/tamale.jpeg',
    'css/images/enchiladas.jpg',
    'css/images/chilesrellenos.jpg',
  ],
  desserts: [
    'css/images/keylimepie.jpg',
    'css/images/churros.jpg',
    'css/images/coffeecake.jpg',
  ],
  drinks: [
    'css/images/jarritos.jpg', 
    'css/images/margaritas.jpg', 
    'css/images/bloodymaria.jpg'
  ],
}

for (const category in images) {
  console.log(`Images for ${category}:`);
  images[category].forEach((imageUrl) => {
    let imgTag = document.createElement('img');
    imgTag.src = imageUrl;

    let dot = document.createElement('div');
    dot.classList.add('dot');

    slides.appendChild(imgTag);
    containerDots.appendChild(dot);
  });
}

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

// loops through each key in the images object and add the length of its corresponding array of images to the totalImages variable. 
let totalImages = 0;

for (const key in images) {
  if (Object.hasOwnProperty.call(images, key)) {
    const imageArray = images[key];
    totalImages += imageArray.length;
  }
}

// slide next button click event
const nextSlide = () => {
  // it will update the slideIndex on the basis of images.length as it gets greater than images.length, this will initialize to 1
  if (slideIndex !== totalImages) {
    ++slideIndex;
  } else if (slideIndex === totalImages) {
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
    slideIndex = totalImages;
  }
  updateImageAndDot();
};

const prevBtn = document.querySelector('.prev');
prevBtn.onclick = prevSlide;

// show the image as the page loads;
updateImageAndDot();