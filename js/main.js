/**Скрипт скрывающий логотип */
window.addEventListener('scroll',function(){
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {       
        document.getElementById("block_hide").className = "hide"        
    }
    
    else {
        document.getElementById("block_hide").className = "";
      }
});

                                /*Cлайдер картинок*/


/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);


/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
    
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
    
}



/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
      
    }
    if (n < 1) {
        slideIndex = slides.length
        
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        
    }
    for (i = 0; i < dots.length; i++) {
              dots[i].classList.add("show");
              
            } 
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " show";
    }
   
                                  /*слайдер пунтков меню */
/* Индекс пункта по умолчанию */
var dotsIndex = 1;
showDots(dotsIndex);
/* Функция увеличивает индекс на 1, показывает следующй пункт*/
function plusDots() {
  showDots(dotsIndex += 1);
}
/* Функция уменьшяет индекс на 1, показывает предыдущий пункт*/
function minusDots() {
  showDots(dotsIndex -= 1);
}


/* Основная функция слайдера пунктов меню */
function showDots(p) {
  var d;
  var menuDots = document.getElementsByClassName("slider-dots_item");
  if (p > menuDots.length) {
    dotsIndex = 1
    
  }
  if (p < 1) {
    dotsIndex = menuDots.length
    
}
for (d = 0; d < menuDots.length; d++) {
  menuDots[d].className = menuDots[d].className.replace(" show", "");
}







}
