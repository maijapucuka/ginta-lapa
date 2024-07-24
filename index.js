// REDIRECT TO MAIN PAGE

// This function will redirect the user after 3 seconds
function redirectToMain() {
  setTimeout(() => {
      window.location.href = "main.html"; // Replace with the URL you want to redirect to
  }, 3000); // 3000 milliseconds = 3 seconds
}

// MAIN PAGE INFINITE PIC CAROUSEL

const carousels = document.querySelectorAll(".infinite-carousel");

carousels.forEach(carousel => {
  console.log(carousels)

  const carouselInner = carousel.querySelector(".infinite-carousel div");
  const carouselContent = Array.from(carouselInner.children);
  carouselContent.forEach(item => {
    const duplicateItem = item.cloneNode(true);
    carouselInner.appendChild(duplicateItem);
    carouselInner.style.animation = "move 24s linear infinite";
  });
});

// ABOUT ME PAGE
let bgImg1 = document.querySelector('.background-img1');
let bgImg2 = document.querySelector('.background-img2');
let bgImg3 = document.querySelector('.background-img3');

let bgImgArr = [bgImg1, bgImg2, bgImg3];

let previousMove = null;

let img1 = document.querySelector('.images .img1 .img-container');
let img2 = document.querySelector('.images .img2 .img-container');
let img3 = document.querySelector('.images .img3 .img-container');

let imgArr = [img1, img2, img3];

let img1ZIndex = document.querySelector(".images .img1");
let img2ZIndex = document.querySelector(".images .img2");
let img3ZIndex = document.querySelector(".images .img3");

let imgZIndexArr = [img1ZIndex, img2ZIndex, img3ZIndex];

let img1FadeInBox = document.querySelector('.img1 .img-fade-in-box');
let img2FadeInBox = document.querySelector('.img2 .img-fade-in-box');
let img3FadeInBox = document.querySelector('.img3 .img-fade-in-box');

let imgFadeInBoxArr = [img1FadeInBox, img2FadeInBox, img3FadeInBox];

let leftBtn = document.getElementById('left-btn');
let rightBtn = document.getElementById('right-btn');

moveSliderLeft = () => {

  rightBtn.setAttribute('onClick', null);
  leftBtn.setAttribute('onClick', null);

  imgArr[0].style.transform = "rotateY(-40deg) translateX(280px) scale(0.55)";
  imgZIndexArr[0].style.zIndex = '100';

  imgArr[1].style.transform = "rotateY(40deg) translateX(-280px) scale(0.55)";
  imgZIndexArr[1].style.zIndex = '300';

  if (previousMove == "left") {
    bgImgArr[1].style.left = '-200vw';
  } else if (previousMove == null) {
    bgImgArr[1].style.left = '-150vw';
  } else if (previousMove == "right") {
    bgImgArr[1].style.left = '-100vw';
  }

  bgImgArr[1].style.opacity = '1';
  bgImgArr[1].style.zIndex = '150';
  imgFadeInBoxArr[1].classList.remove("fade-in-effect-lighten");
  imgFadeInBoxArr[1].classList.add("fade-in-effect-darken");

  imgArr[2].style.transform = "rotateY(0deg) scale(1)";
  imgZIndexArr[2].style.zIndex = '200';

  bgImgArr[2].style.left = '-150vw'
  bgImgArr[2].style.opacity = '1';
  bgImgArr[2].style.zIndex = '200';

  imgFadeInBoxArr[2].classList.remove("fade-in-effect-darken");
  imgFadeInBoxArr[2].classList.add("fade-in-effect-lighten");

  setTimeout(() => {

    bgImgArr[0].style.left = '-100vw';
    bgImgArr[0].style.opacity = '0';
    bgImgArr[0].style.zIndex = '100';

    bgImgArr[1].style.left = '-100vw';
    bgImgArr[1].style.opacity = '0';
    bgImgArr[1].style.zIndex = '100';

    previousMove = 'left';
    imgArr.push(imgArr.shift());
    bgImgArr.push(bgImgArr.shift());
    imgZIndexArr.push(imgZIndexArr.shift());
    imgFadeInBoxArr.push(imgFadeInBoxArr.shift());

    leftBtn.setAttribute('onClick', "javascript: moveSliderLeft();");
    rightBtn.setAttribute('onClick', "javascript: moveSliderRight();");
  }, 1250);
}

moveSliderRight = () => {

  rightBtn.setAttribute('onClick', null);
  leftBtn.setAttribute('onClick', null);

  imgArr[0].style.transform = "rotateY(0deg) scale(1)";
  imgZIndexArr[0].style.zIndex = '200';

  bgImgArr[0].style.left = '-50vw'
  bgImgArr[0].style.opacity = '1';
  bgImgArr[0].style.zIndex = '200';

  imgFadeInBoxArr[0].classList.remove("fade-in-effect-darken");
  imgFadeInBoxArr[0].classList.add("fade-in-effect-lighten");

  imgArr[1].style.transform = "rotateY(-40deg) translateX(280px) scale(0.55)";
  imgZIndexArr[1].style.zIndex = '300';

  if (previousMove == "right") {
    bgImgArr[1].style.left = '0vw';
  } else if (previousMove == null) {
    bgImgArr[1].style.left = '-50vw';
  } else if (previousMove == "left") {
    bgImgArr[1].style.left = '-100vw';
  }

  bgImgArr[1].style.opacity = '1';
  bgImgArr[1].style.zIndex = '150';
  imgFadeInBoxArr[1].classList.remove("fade-in-effect-lighten");
  imgFadeInBoxArr[1].classList.add("fade-in-effect-darken");

  imgArr[2].style.transform = "rotateY(40deg) translateX(-280px) scale(0.55)";
  imgZIndexArr[2].style.zIndex = '100';

  setTimeout(() => {

    bgImgArr[1].style.left = '-100vw';
    bgImgArr[1].style.opacity = '0';
    bgImgArr[1].style.zIndex = '100';

    bgImgArr[2].style.left = '-100vw';
    bgImgArr[2].style.opacity = '0';
    bgImgArr[2].style.zIndex = '100';

    previousMove = 'right';
    imgArr.unshift(imgArr.pop());
    bgImgArr.unshift(bgImgArr.pop());
    imgZIndexArr.unshift(imgZIndexArr.pop());
    imgFadeInBoxArr.unshift(imgFadeInBoxArr.pop());

    leftBtn.setAttribute('onClick', "javascript: moveSliderLeft();");
    rightBtn.setAttribute('onClick', "javascript: moveSliderRight();");
  }, 1250);
}

// MY VIDEOS PAGE

// BACK TO TOP

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

const contactMeButton = document.querySelector(".contact-me-btn");
let isContactMeRendered = false;

let alterStyles1 = (isContactMeRendered) => {
  contactMeButton.style.visibility = isContactMeRendered ? "visible" : "hidden";
  contactMeButton.style.opacity = isContactMeRendered ? 1 : 0;
  contactMeButton.style.transform = isContactMeRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    isContactMeRendered= true;
    alterStyles1(isContactMeRendered);
  } else {
    isContactMeRendered = false;
    alterStyles1(isContactMeRendered);
  }
});

// MY VIDEOS PAGE

document.querySelectorAll('.my-videos-video').forEach(video => {
  // Function to check if parent element is absolute
  const isParentAbsolute = (element) => {
      return window.getComputedStyle(element.parentElement).position === 'fixed';
  };

  // Play video on mouse enter if parent position is not absolute
  video.addEventListener('mouseenter', function() {
      if (!isParentAbsolute(this)) {
          this.play();
      }
  });

  // Pause video on mouse leave if parent position is not absolute
  video.addEventListener('mouseleave', function() {
      if (!isParentAbsolute(this)) {
          this.pause();
      }
  });

});

// ABSOLUTE VIDEO

const myVideos = document.querySelectorAll(".my-videos-video");
const closeBtn = document.querySelectorAll(".close-btn");

document.addEventListener('click', function(e){
    
  //Get the dataset attribute from the product that user clicked the add button for and create new item for this product
  if (e.target.dataset.open) {
    // console.log(e.target.dataset.open);

    for (let i = 0; i < myVideos.length; i++) {
      // console.log(myVideos[i].dataset.open);
      if (myVideos[i].dataset.open === e.target.dataset.open) {
        console.log(myVideos[i]);
        myVideos[i].parentNode.classList.add("absolute");
        myVideos[i].classList.remove("my-videos-video");
        myVideos[i].currentTime = 0;
        myVideos[i].play();

        for (let i = 0; i < closeBtn.length; i++) {
          if (closeBtn[i].id === e.target.dataset.open) {
            closeBtn[i].classList.add("close-btn-visible");
            closeBtn[i].classList.remove("close-btn-hidden");
          }
        }

        // Select all elements
        document.querySelector('.main-container').classList.add("filtered");

        setTimeout(() => {
          myVideos[i].controls = true;
        }, 500);

      }
    }
      

  } else if (e.target.dataset.close) {
    for (let i = 0; i < closeBtn.length; i++) {
      
      if (closeBtn[i].dataset.close === e.target.dataset.close) {
        console.log("test");
        closeBtn[i].classList.add("close-btn-hidden");
        closeBtn[i].classList.remove("close-btn-visible");
        closeBtn[i].parentNode.classList.remove("absolute");
        closeBtn[i].nextElementSibling.classList.add("my-videos-video");
        closeBtn[i].nextElementSibling.controls = false;
        closeBtn[i].nextElementSibling.pause();

        document.querySelector('.main-container').classList.remove("filtered");
      }
    }
  }

});

// CONTACT FORM

const contactBtn = document.getElementById("contact-me-btn");
const contactForm = document.getElementById("contact-form");
const contactFormCloseBtn = document.getElementById("contact-form-close-btn");

contactBtn.addEventListener("click", () => {
  contactForm.classList.remove("hidden");
  contactForm.classList.add("visible");
  document.querySelector('.main-container').classList.add("filtered");
});

contactFormCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contactForm.classList.remove("visible");
  contactForm.classList.add("hidden");
  document.querySelector('.main-container').classList.remove("filtered");
});

const contactMeCtaBtn = document.getElementById("contact-me-cta-btn");

contactMeCtaBtn.addEventListener("click", (e) => {
  e.preventDefault();
})

document.getElementById("contact-me-cta-btn-container").addEventListener("mouseenter", () => {
  document.getElementById("contact-me-cta-btn-arr").style.display = "inline";
  // contactMeCtaBtn.style.transform = "scale(1.2)";
  // document.getElementById("contact-me-cta-btn-arr").style.transform = "scale(1.3)";
  // document.getElementById("contact-me-cta-btn-arr").style.color = "red";
})

document.getElementById("contact-me-cta-btn-container").addEventListener("mouseleave", () => {
  document.getElementById("contact-me-cta-btn-arr").style.display = "none";
  // contactMeCtaBtn.style.transform = "scale(1)";
  // document.getElementById("contact-me-cta-btn-arr").style.transform = "scale(1)";
  // document.getElementById("contact-me-cta-btn-arr").style.color = "red";
})

// MOBILE MENU

const burgerMenuBtn = document.getElementById("burger-menu-btn");
const burgerMenuCloseBtn = document.getElementById("burger-menu-close-btn");

const mobileMenu = document.getElementById("mobile-menu");
const mainNav = document.getElementById("main-nav");

const myVideosNav = document.getElementById("my-videos-nav");

if (burgerMenuBtn) {
  burgerMenuBtn.addEventListener("click", () => {
    burgerMenuBtn.style.display = "none";
    burgerMenuCloseBtn.style.display= "flex";

    mainNav.style.position = "fixed";

    // Prevent default touch actions when the mobile nav is open
    mobileNav.addEventListener('touchmove', (e) => {
      e.preventDefault();
    }, { passive: false });

    mobileMenu.style.display = "flex";
    const langBtn = document.getElementById("lang-box");

      let isBackToTopRendered = false;

      let alterStyles = (isBackToTopRendered) => {
        langBtn.style.visibility = isBackToTopRendered ? "visible" : "hidden";
        langBtn.style.opacity = isBackToTopRendered ? 1 : 0;
        langBtn.style.transform = isBackToTopRendered
          ? "scale(1)"
          : "scale(0)";
      };

      window.addEventListener("scroll", () => {
        if (window.scrollY < 300) {
          isBackToTopRendered = true;
          alterStyles(isBackToTopRendered);
        } else {
          isBackToTopRendered = false;
          alterStyles(isBackToTopRendered);
        }
      });
  });
}

if (myVideosNav) {
  burgerMenuBtn.addEventListener("click", () => {
    burgerMenuBtn.style.display = "none";
    burgerMenuCloseBtn.style.display= "flex";
  
    myVideosNav.style.position = "fixed";
  
    mobileMenu.style.display = "flex";
    const langBtn = document.getElementById("lang-box");
  
      let isBackToTopRendered = false;
  
      let alterStyles = (isBackToTopRendered) => {
        langBtn.style.visibility = isBackToTopRendered ? "visible" : "hidden";
        langBtn.style.opacity = isBackToTopRendered ? 1 : 0;
        langBtn.style.transform = isBackToTopRendered
          ? "scale(1)"
          : "scale(0)";
      };
  
      window.addEventListener("scroll", () => {
        if (window.scrollY < 300) {
          isBackToTopRendered = true;
          alterStyles(isBackToTopRendered);
        } else {
          isBackToTopRendered = false;
          alterStyles(isBackToTopRendered);
        }
      });
  })
}

if (burgerMenuCloseBtn) {
  burgerMenuCloseBtn.addEventListener("click", () => {

    burgerMenuBtn.style.display = "flex";
    burgerMenuCloseBtn.style.display= "none";
  
    mobileMenu.style.display = "none";
    mainNav.style.position = "absolute";
  })
}

//MOBILE CONTACTS

const contactsBtn = document.getElementById("contact-btn");

contactsBtn.addEventListener("click", () => {

  burgerMenuBtn.style.display = "flex";
  burgerMenuCloseBtn.style.display= "none";

  mobileMenu.style.display = "none";
  mainNav.style.position = "absolute";
});


window.addEventListener('resize', function() {
  if (window.innerWidth >= 1600) {

      burgerMenuBtn.style.display = "none";
    
      burgerMenuCloseBtn.style.display= "none";

      mobileMenu.style.display = "none";

      mainNav.style.position = "absolute";
    
  }
});

window.addEventListener('resize', function() {
  if (window.innerWidth < 1600) {

    burgerMenuBtn.style.display = "flex";
    burgerMenuCloseBtn.style.display= "none";

    mobileMenu.style.display = "none";
  }
});

// COPY TO CLIPBOARD BTN

const copyToClipboard = document.getElementById("copy-to-clipboard-btn");

copyToClipboard.addEventListener("click", () => {

  // Get the text field
  const copyText = "gints@test.com";

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);

  // Alert the copied text
  // alert("Copied the text: " + copyText);

  const copiedAlert = document.getElementById("copy-to-clipboard-btn");

  copiedAlert.textContent = "NOKOPĒTS!"

  setTimeout(() => {
    copiedAlert.innerHTML = '<i class="fa fa-clone"></i>NOKOPĒT</button>'
  }, 1000)
});
