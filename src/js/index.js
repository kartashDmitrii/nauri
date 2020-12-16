if (document.querySelector('section.banner')){
    let swiper = new Swiper('section.banner .swiper-container', {
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        }
    });
}
if (document.querySelector('section.brands')){
    document.querySelectorAll('section.brands').forEach( elem => {
        let swiper = new Swiper(elem.querySelector('.swiper-container'), {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 20,
            pagination: {
                el: elem.querySelector('.pagination'),
                clickable: true,
                renderBullet: function (index, className) {
                    return `<span class="dot ${className}"></span>`
                }
            },
        });
    })
}