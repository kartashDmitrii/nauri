if (document.querySelector('section.payment')){
    let swiper = new Swiper('section.payment .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        autoHeight: true,
        navigation: {
            nextEl: 'section.payment .buttons .next',
            prevEl: 'section.payment .buttons .prev',
        },
        pagination: {
            formatFractionCurrent: function(number) {
                if (number < 10) {
                    number = '0' + number;
                }
                return number;
            },
            formatFractionTotal: function(number) {
                if (number < 10) {
                    number = '0' + number;
                }
                return number;
            },
            el: '.swiper-pagination',
            type: 'fraction',
        },
        breakpoints: {
            768: {
                slidesPerView: 2
            }
        }
    });
}