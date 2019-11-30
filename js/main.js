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

/**Плавная прокрутка якорей**/
// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 300,
      framesCount = 20;

anchors.forEach(function(item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();
    
    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    
    // запускаем интервал, в котором
    let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;
      
      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});



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
