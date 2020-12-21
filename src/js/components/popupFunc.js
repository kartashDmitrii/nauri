export default class popupFunc {
    constructor(button,popup) {
        this.button = button;
        this.popup = popup;
        this.openPopupFunc = this.openPopup.bind(this);
        this.closePopupFunc = this.closePopup.bind(this);
        if ( Array.isArray(this.button)){
            this.button.forEach( elem => {
                elem.addEventListener('click', this.openPopupFunc);
            })
        } else {
            this.button.addEventListener('click', this.openPopupFunc);
        }
        if (Array.isArray(this.popup)){
            this.popup.forEach( elem => {
                elem.querySelectorAll('.close').forEach(elem => elem.addEventListener('click', this.closePopupFunc));
            })
        } else {
            this.popup.querySelectorAll('.close').forEach(elem => elem.addEventListener('click', this.closePopupFunc));
        }
        if (document.querySelector('.popup-wrapper')) {
            document.querySelector('.popup-wrapper').addEventListener('click', this.closePopupFunc);
        }
    }
    openPopup(event){
        if(event.target.dataset.stopEvent === undefined) {
            if (Array.isArray(this.popup)){
                this.popup.forEach( elem => {
                    elem.classList.add('active');
                    if (elem.parentNode.classList.contains('wrapper')) {
                        elem.parentNode.classList.add('active');
                    }
                    if (window.screen.width < 768) {
                        document.body.classList.add('hidden')
                    }
                });
                if (document.querySelector('.popup-wrapper')) {
                    document.querySelector('.popup-wrapper').classList.add('active');
                }
            } else {
                this.popup.classList.add('active');
                if (this.popup.parentNode.classList.contains('wrapper')) {
                    this.popup.parentNode.classList.add('active');
                }
                if (window.screen.width < 768) {
                    document.body.classList.add('hidden')
                }
                if (document.querySelector('.popup-wrapper')) {
                    document.querySelector('.popup-wrapper').classList.add('active');
                }
            }
        }
    }
    closePopup(event){
        if (!event.target.classList.contains('close') && event.target.closest(`.${this.button.dataset.popup}`) !== null){
            event.stopPropagation();
        } else {
            if (Array.isArray(this.popup)){
                this.popup.forEach( elem => {
                    elem.classList.remove('active');
                    if (elem.parentNode.classList.contains('wrapper')) {
                        elem.parentNode.classList.remove('active');
                    }
                    if (window.screen.width < 768) {
                        document.body.classList.remove('hidden')
                    }
                })
            } else {
                this.popup.classList.remove('active');
                if (this.popup.parentNode.classList.contains('wrapper')) {
                    this.popup.parentNode.classList.remove('active');
                }
                if (window.screen.width < 768) {
                    document.body.classList.remove('hidden')
                }
            }
        }
        if (document.querySelector('.popup-wrapper')) {
            document.querySelector('.popup-wrapper').classList.remove('active');
        }
    }
}