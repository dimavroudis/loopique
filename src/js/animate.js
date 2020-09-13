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

export class AnimateOnExit {

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
            if (entry.target.animateOnExit) {
                entry.target.animateOnExit.forEach((element) => {
                    element.style.opacity = Math.pow(entry.intersectionRatio, 4);
                    element.style.transform = 'translateY(-' + (Math.sqrt(1 - entry.intersectionRatio, 2) * 100) + '%)';
                })
            } else {
                entry.target.style.opacity = Math.pow(entry.intersectionRatio, 4);
                entry.target.style.transform = 'translateY(-' + (Math.sqrt(1 - entry.intersectionRatio, 3) * 100) + '%)';
            }
        });
    }
}
