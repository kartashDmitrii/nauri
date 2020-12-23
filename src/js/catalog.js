import popupFunc from "./components/popupFunc";
import tabs from "./components/tabs";

if (document.querySelector('aside.catalog-aside')){
    new popupFunc(document.querySelector('.sort-filter .filter-btn'), document.querySelector('aside.catalog-aside'))
}
if (document.querySelector('section.product-tabs')){
    new tabs([...document.querySelectorAll('section.product-tabs .tab-link')], [...document.querySelectorAll('section.product-tabs .tab')])
}
console.log(document.querySelectorAll('.big-hor-news'))