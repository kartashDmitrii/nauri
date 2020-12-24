import popupFunc from "./components/popupFunc";

if (document.querySelector('section.comments')){
    new popupFunc(document.querySelector('section.comments .make-reply'), document.querySelector('.blog-popup'))
}