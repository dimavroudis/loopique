export default class Form {
    form;
    inputs;

    constructor(form, endpoint) {
        this.form = form;
        this.inputs = form.querySelectorAll(
            '.form__group input, .form__group textarea'
        )

        this.inputs.forEach((elem) => {
            elem.addEventListener('blur', () => {
                this.setActive(elem, false)
            })
            elem.addEventListener('focus', () => {
                this.setActive(elem, true)
            })
        })
    }

    setActive(el, active) {
        const formGroup = el.parentNode

        if (active) {
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
}