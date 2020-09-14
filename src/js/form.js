export default class Form {
    form;
    inputs;
    messageContainer;

    constructor(form, endpoint) {
        this.form = form;
        this.endpoint = endpoint;

        if (this.form) {

            this.inputs = this.form.querySelectorAll(
                '.form__group input, .form__group textarea'
            )
            this.messageContainer = this.form.querySelector('.form__message');

            Array.prototype.slice.call(this.inputs).forEach((elem) => {
                if (elem.value) {
                    this.setActive(elem, true)
                }
                elem.addEventListener('blur', () => {
                    this.setActive(elem, false)
                })
                elem.addEventListener('focus', () => {
                    this.setActive(elem, true)
                })
            })

            if (this.endpoint) {
                this.form.addEventListener('submit', (event) => {
                    event.preventDefault();
                    this.sendData();
                });
            }
        }
    }

    setActive(el, active) {
        const formGroup = el.parentNode

        if (active) {
            formGroup.classList.add('form__group--touched')
            formGroup.classList.add('form__group--active')
        } else {
            formGroup.classList.remove('form__group--active')

            if (el.value === '') {
                formGroup.classList.remove('form__group--filled')
            } else {
                formGroup.classList.add('form__group--filled')
            }
        }
    }

    sendData() {
        const XHR = new XMLHttpRequest()
        const formData = new FormData(this.form);

        XHR.addEventListener('load', (event) => {
            const jsonResponse = JSON.parse(event.target.responseText);
            this.showMessage(jsonResponse)
        });

        XHR.open('POST', this.endpoint);

        XHR.send(formData);
    }

    showMessage(response) {
        this.messageContainer.innerHTML = response.message;
    }


}