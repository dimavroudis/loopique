import './polyfill';

import PrimaryMenu from './nav';
import { AnimateOnEntry, Parallax, Header } from './animate';
import Form from './form';
import Carousel from './carousel';

/*
 * Menu
 */
const primaryMenu = new PrimaryMenu('#site-navigation', '.burger-trigger');

/*
 * Animations
 */
const header = new Header('masthead');
const animteOnEntry = new AnimateOnEntry(document.querySelectorAll('.animate-me'));
const parallax = new Parallax(document.querySelectorAll('.hero__content'));

/*
 * Form
 */
const footerform = new Form(document.getElementById('contactForm'), 'wp-json/loopique/v1/form');
const searchForm = new Form(document.getElementById('searchForm'));
const commentform = new Form(document.getElementById('commentform'));



const carousel = new Carousel('.carousel', {
    slidesPerView: 1,
    breakpoints: {
        md: {
            slidesPerView: 3,
        },
        xs: {
            slidesPerView:2
        }
    }
});


