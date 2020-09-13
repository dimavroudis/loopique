export class AnimateOnEntry {

    elements;

    observer = new IntersectionObserver(
        this.observerCallback,
        {
            root: null,
            rootMargin: '0px',
            threshold: this.buildThresholdList(10),
        }
    );

    constructor(elements) {
        this.elements = elements
        this.elements.forEach((element) => {
            this.observer.observe(element);
        });
    }

    buildThresholdList(numSteps = 10) {
        let thresholds = [];

        for (let i = 1.0; i <= numSteps; i++) {
            let ratio = i / numSteps;
            thresholds.push(ratio);
        }

        thresholds.push(0);
        return thresholds;
    }

    observerCallback(entries) {
        entries.forEach((entry) => {
            if (
                (entry.target.dataset.ratio &&
                    entry.intersectionRatio >= entry.target.dataset.ratio) ||
                (!entry.target.dataset.ratio && entry.isIntersecting)
            ) {
                entry.target.classList.add('animated');
            }
        });
    }
}

export class Parallax {

    elements;

    observer = new IntersectionObserver(
        this.observerCallback,
        {
            root: null,
            rootMargin: '0px',
            threshold: this.buildThresholdList(100),
        }
    );

    constructor(elements) {
        this.elements = elements
        this.elements.forEach((element) => {
            if (element.dataset.animateParent) {
                const parentElement = element.closest(element.dataset.animateParent);
                if (parentElement.animateOnExit) {
                    parentElement.animateOnExit.push(element);
                } else {
                    parentElement.animateOnExit = [element]
                }
                this.observer.observe(parentElement);
                return;
            }
            this.observer.observe(element);
        });
    }

    buildThresholdList(numSteps = 20) {
        let thresholds = [];

        for (let i = 1.0; i <= numSteps; i++) {
            let ratio = i / numSteps;
            thresholds.push(ratio);
        }

        thresholds.push(0);
        return thresholds;
    }

    observerCallback(entries) {
        entries.forEach((entry) => {
            const sizeRatio = window.innerHeight / entry.target.offsetHeight;
            if (entry.target.animateOnExit) {
                let opacity = 1, transform = '';
                if (sizeRatio >= 1) {
                    opacity = Math.pow(entry.intersectionRatio, 4);
                    transform = (Math.sqrt(1 - entry.intersectionRatio, 2) * 100);
                } else {
                    opacity = Math.pow(entry.intersectionRatio + (1 - sizeRatio), 3);
                    transform = (1 - entry.intersectionRatio - (1 - sizeRatio)) * 1.5 * 100;
                }
                entry.target.animateOnExit.forEach((element) => {
                    element.style.opacity = opacity;
                    element.style.transform = 'translateY(-' + transform > 0 + '%)';
                })

            } else {
                entry.target.style.opacity = Math.pow(entry.intersectionRatio, 4);
                entry.target.style.transform = 'translateY(-' + (Math.sqrt(1 - entry.intersectionRatio, 3) * 100) + '%)';
            }
        });
    }
}

export class Header {
    header;
    last_known_scroll_position = 0;
    ticking = false;

    constructor(id) {
        this.header = document.getElementById(id);
        if (this.header) {
            window.addEventListener('scroll', (e) => {
                if (!this.ticking) {
                    window.requestAnimationFrame(() => {
                        this.toggleHeader();
                        this.ticking = false;
                    });
                    this.ticking = true;
                }
            });
        }
    }

    toggleHeader() {
        const current_position = window.scrollY
        if (this.last_known_scroll_position < current_position && !document.body.classList.contains('open-menu')) {
            this.header.classList.add('site-header--hide');
        } else if (this.last_known_scroll_position > current_position) {
            this.header.classList.remove('site-header--hide');
        }
        this.last_known_scroll_position = current_position;
    }
}
