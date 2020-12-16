if (document.querySelector('.product-slider')){
    document.querySelectorAll('.product-slider').forEach( elem => {
        let swiper = new Swiper(elem.querySelector('.swiper-container'), {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20,
            pagination: {
                el: elem.querySelector('.pagination'),
                clickable: true,
                renderBullet: function (index, className) {
                    return `<span class="dot ${className}"></span>`
                }
            },
            navigation: {
                nextEl: elem.querySelector('.arrow.next'),
                prevEl: elem.querySelector('.arrow.prev')
            }
        });
    })
}