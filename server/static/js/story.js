

// let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let player3 = document.querySelector("#player3");



let nextButton = document.querySelector('#swiper-button-next');

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: 'fade',
  loop: false,
  preventClicks: false,
  preventClicksPropagation: false,
  speed: 300,
  simulateTouch: false,

  pagination: {
    el: '.swiper-pagination',
    clickable: false,
    dynamicBullets: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    Play: '.swiper-button-play',
  }

});


function typewritereffect($el) {
  const characters = $el.text().split('');
  $el.text('');
  characters.forEach(function(character) { 
    const $span = $("<span>");
    $span.text(character);
    $span.css({opacity:0}).appendTo($el);
    });
  const $spans = $("span", $el);
  $spans.each((i, el) => $(el).delay(40*i).animate({opacity: 1}), 100);
}

function runtypewriters() {
  $("p.typewriter").each((i,el) => typewritereffect($(el)));
}


swiper.on('slideChange', function() {
  runtypewriters();
  player2.play()
  player3.play();
  player3.seek(100);

});


runtypewriters();



const on = () => {
  document.getElementById("overlay").style.display = "block";
}

const off = () => {
  document.getElementById("overlay").style.display = "none";
}