

// --ドロワーメニュー--
$(document).ready(function() {
  $('.drawer').drawer();
  $('button').on('click', function() {
    if($('.drawer--right').hasClass('drawer-open')) {
      $('.sr-only').addClass('change');
    } else {
      $('.sr-only').removeClass('change');
    }
  });
});

// --パララックス--
const mediaQuery = window.matchMedia('(max-width: 600px)');
const rellaxImage = document.querySelector('.f-rellax');
console.log(rellaxImage);
const listener = (e) => {
  if (e.matches) {
  } else {
    const image = new Rellax(".f-rellax", {
          speed: -3,
          center: true,
    });
  }
}
mediaQuery.addEventListener("change", listener);
listener(mediaQuery);


// --カルーセル--
const swiper1 = new Swiper('.slider1', {
  loop: true,
  slidesPerView: "auto",
  freeMode: true,
  speed: 12000,
  autoplay: {
    delay: 0,
  },
});
const swiper2 = new Swiper('.slider2', {
  loop: true,
  slidesPerView: "auto",
  freeMode: true,
  speed: 12000,
  autoplay: {
    delay: 0,
  },
});

// --ドロップダウン--
const questionDropDown = document.querySelectorAll(".question__content__items.q-line");
const plusIcon = document.querySelectorAll(".q-icon");
const minusIcon = document.querySelectorAll(".q-icon-m");
  for (let i = 0; i < questionDropDown.length; i++ ) {
    questionDropDown[i].addEventListener("click", () => {
      questionDropDown[i].children[1].classList.toggle("active");
      plusIcon[i].classList.toggle("action");
      minusIcon[i].classList.toggle("action");
    })
  }

// --スクロール--
  const topScrollButton = document.getElementById('arrow');
  topScrollButton.addEventListener('click' ,(e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0, 
    left: 0,
    behavior: 'smooth'});
});
