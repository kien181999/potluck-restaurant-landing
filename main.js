//====Slide====//

window.addEventListener("load", function(){
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const nextBtn = document.querySelector(".slider-next");
    const prevBtn = document.querySelector(".slider-prev");
    const sliderItems = document.querySelectorAll(".slider-item");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const slidesLength = sliderItems.length;
    let positionX = 0;
    let index = 0;

    nextBtn.addEventListener("click", function(){
        handleChangeSlide(-1)
    });

    prevBtn.addEventListener("click", function(){
        handleChangeSlide(1)
    });

    function handleChangeSlide(direction){
        if(direction == 1){
            index++;
            if(index >= slidesLength){ 
                index = slidesLength;
                return;
            }
            positionX = positionX - sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
        }else if(direction == -1){
            index--;
            if(index <= 0){
                index = 0;
                return;
            } 
            positionX = positionX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
        }
    }
})


//====Scroll====//

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1500,
    delay: 300
});

ScrollReveal().reveal('.category__left, .feature__button, .newsletter__right, .footer__bottom',{ delay: 400, origin: 'bottom' });
ScrollReveal().reveal('.category__right--title, .feature__text, .review__client, .footer__right',{ delay: 400, origin: 'right' });
ScrollReveal().reveal('.menu__item--menu, .feature__title, .newsletter__left, .footer__left',{ delay: 400, origin: 'left' });
ScrollReveal().reveal('.menu__title, .review__comment, .footer__up',{ delay: 400, origin: 'top' });
