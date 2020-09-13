import { breakpoints } from "./config";
export default class Carousel {
    carousel;
    carouselWrapper;
    slides;
    arrayOfSlides;
    slidesPerView;
    defaultSlideWidth;
    nextNav;
    prevNav;

    options = {
        slidesPerView: 1,
        navNext: '[data-carousel-nav="next"]',
        navPrev: '[data-carousel-nav="prev"]',
        breakpoints: {}
    };

    isMoving = false;

    constructor(selector, options = {}) {
        this.carousel = document.querySelector(selector);
        Object.assign(this.options, options);
        if (this.carousel) {
            this.carouselWrapper = document.querySelector('.carousel__wrapper');
            this.slides = document.querySelectorAll('.carousel__slide');
            this.arrayOfSlides = Array.prototype.slice.call(this.slides);

            this.nextNav = document.querySelector(this.options.navNext);
            if (this.nextNav) {
                this.nextNav.addEventListener('click', this.moveNext.bind(this));
            }
            this.prevNav = document.querySelector(this.options.navPrev);
            if (this.prevNav) {
                this.prevNav.disabled = true
                this.prevNav.addEventListener('click', this.movePrev.bind(this));
            }

            this.setSlidesPerView();
            window.addEventListener('resize', this.setSlidesPerView.bind(this));

            this.carouselWrapper.addEventListener('transitionend', () => {
                this.isMoving = false;
            });
        }
    }

    setSlidesPerView() {
        let activeBreakpoint;
        this.slidesPerView = this.options.slidesPerView;
        if (this.options.breakpoints) {
            activeBreakpoint = Object.entries(this.options.breakpoints).reduce(
                (maxKey, [currentKey, currentValue]) => {
                    return window.innerWidth >= breakpoints[currentKey] && (!maxKey || breakpoints[currentKey] > breakpoints[maxKey]) ? currentKey : maxKey;
                }, null
            );
        }
        if (activeBreakpoint && this.options.breakpoints[activeBreakpoint].slidesPerView) {
            this.slidesPerView = this.options.breakpoints[activeBreakpoint].slidesPerView;
        }
        this.setSlidesSize();
    }

    setSlidesSize() {
        this.defaultSlideWidth = (this.carousel.offsetWidth / this.slidesPerView);
        this.arrayOfSlides.forEach((el) => {
            el.style.width = this.defaultSlideWidth + "px";
        });
        this.carouselWrapper.style.width = this.defaultSlideWidth * this.arrayOfSlides.length + "px"
    }

    moveNext() {
        if (this.slidesPerView < this.arrayOfSlides.length && !this.isMoving) {
            const { x } = this.getTranslateValues(this.carouselWrapper);
            const newX = x - this.defaultSlideWidth;
            if (newX >= (this.slidesPerView - this.arrayOfSlides.length) * this.defaultSlideWidth) {
                this.move(newX);
            }
        }
    }


    movePrev() {
        if (this.slidesPerView < this.arrayOfSlides.length && !this.isMoving) {
            const { x } = this.getTranslateValues(this.carouselWrapper);
            const newX = x + this.defaultSlideWidth;
            if (newX <= 0) {
                this.move(newX);
            }
        }
    }

    move(newX) {
        window.requestAnimationFrame(() => {
            this.isMoving = true;
            this.carouselWrapper.style.transform = 'translateX(' + newX + 'px)'
            this.nextNav.disabled = (this.slidesPerView - this.arrayOfSlides.length) * this.defaultSlideWidth === newX;
            this.prevNav.disabled = newX === 0;
        });
    }

    //https://zellwk.com/blog/css-translate-values-in-javascript/
    getTranslateValues(element) {
        const style = window.getComputedStyle(element)
        const matrix = style.transform || style.webkitTransform || style.mozTransform

        // No transform property. Simply return 0 values.
        if (matrix === 'none') {
            return {
                x: 0,
                y: 0,
                z: 0
            }
        }

        // Can either be 2d or 3d transform
        const matrixType = matrix.includes('3d') ? '3d' : '2d'
        const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ')

        // 2d matrices have 6 values
        // Last 2 values are X and Y.
        // 2d matrices does not have Z value.
        if (matrixType === '2d') {
            return {
                x: parseFloat(matrixValues[4]),
                y: parseFloat(matrixValues[5]),
                z: 0
            }
        }

        // 3d matrices have 16 values
        // The 13th, 14th, and 15th values are X, Y, and Z
        if (matrixType === '3d') {
            return {
                x: parseFloat(matrixValues[12]),
                y: parseFloat(matrixValues[13]),
                z: parseFloat(matrixValues[14])
            }
        }
    }
}