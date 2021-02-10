import "./slider";
import modals from './modules/modules';
import tabs from "./modules/tabs";
import forms from "./modules/form"
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/image';



window.addEventListener('DOMContentLoaded', () => {

    const modalState  = {};
    changeModalState(modalState);
    modals();
    tabs('.glazing_slider','.glazing_block','.glazing_content','active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img','.big_img > img','.do_image_more','inline-block')
    forms(modalState);
    timer();
    images();
});
