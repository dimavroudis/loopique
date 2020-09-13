import PrimaryMenu from './nav';
import { AnimateOnEntry, AnimateOnExit } from './animate';
import Form from './form';

/*
 * Menu
 */
const primaryMenu = new PrimaryMenu('#site-navigation', '.burger-trigger');

/*
 * Animations
 */
const animteOnEntry = new AnimateOnEntry(document.querySelectorAll('.animate-me'));
const animateOnExit = new AnimateOnExit(document.querySelectorAll('.hero__content'));

/*
 * Form
 */
const form = new Form(document.getElementById('contactForm'));

