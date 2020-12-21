import popupFunc from "./components/popupFunc";
import hideList from "./components/hideList";

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
            },
            breakpoints: {
                1001: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                },
                768: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                },
                0: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 5,
                }

            }
        });
    })
}
if (document.querySelector('.header')){
    new popupFunc(document.querySelector('header .header .mobile-buttons .menu'), [document.querySelector('.header .contacts'), document.querySelector('.header .refs')])
    new popupFunc(document.querySelector('header .header .mobile-buttons .search'), document.querySelector('#search'))
}

if (document.querySelector('.header li.has_child')){
    document.querySelectorAll('.header .refs>.container>li.has_child').forEach( menu => {
        let menuContainer = document.querySelector('.header .refs>.container');
        let maxWidth = menuContainer.offsetLeft + menuContainer.offsetWidth;
        let subMenu = menu.querySelector('.sub_menu.level_2');
        let subMenuOffsetLeft = menuContainer.offsetLeft + menu.offsetLeft + subMenu.offsetWidth;
        if (subMenuOffsetLeft > maxWidth){
            subMenu.style.marginLeft = `-${subMenu.offsetWidth - menu.offsetWidth}px`
        }
        if (menu.querySelector('.sub_menu.level_3')){
            menu.querySelectorAll('.sub_menu.level_3').forEach( menuLevel3 => {
                if (menuContainer.offsetLeft + menu.offsetLeft + subMenu.offsetWidth + menuLevel3.offsetWidth > maxWidth){
                    menuLevel3.style.left = 'auto';
                    menuLevel3.style.right = '100%';
                }
            })
        }
    })
}
if (document.querySelector('.header li.has_child') && window.screen.width < 768){
    document.querySelectorAll('.header li.has_child').forEach( elem => {
        let ref = elem.querySelector("a");
        let flag = false;
        function closeMenu(event){
            if (!event.target.closest('.dropdown-menu')){
                ref.classList.remove('active')
                if (elem.querySelector('.dropdown-menu')) {
                    elem.querySelector('.dropdown-menu').style.display = 'none'
                } else {
                    elem.querySelector('.sub_menu').style.display = 'none'
                }
                flag = false;
                window.removeEventListener('click', closeMenu)
            }
        }
        ref.addEventListener('click', function (e) {
            let menuList;
            if (elem.querySelector('.dropdown-menu')) {
                menuList = elem.querySelector('.dropdown-menu')
            } else {
                menuList = elem.querySelector('.sub_menu')
            }
            if (flag && menuList.style.display === 'flex'){
                return true
            } else {
                flag = true;
                e.preventDefault();
                e.stopPropagation();
                document.querySelectorAll('.header li.has_child .sub_menu').forEach( menu => {
                    if (menu.classList.contains('level_3')){
                        menu.style.display = 'none';
                        menu.parentNode.querySelector('a').classList.remove('active')
                    }
                });
                ref.classList.add('active');
                menuList.style.display = 'flex';
                window.addEventListener('click', closeMenu)
            }
        })
    })
}

if (document.querySelector('[data-hide]')){
    document.querySelectorAll('[data-hide]').forEach(elem => {
        if (elem.classList.contains('custom-filter')) {
            new hideList(elem, 360)
        } else {
            new hideList(elem)
        }
    })
}