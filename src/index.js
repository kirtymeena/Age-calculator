import "./styles/variables.css"
import "./styles/main.css"
import CalculateAge from "./js/funtioncalCode/CalculateAge"
import Validate from "./js/funtioncalCode/Validation"

class Main {
    constructor() {
        this.dayEle = document.getElementById("day")
        this.monthEle = document.getElementById("month")
        this.yearEle = document.getElementById("year")
        this.btn = document.getElementById("btn")
        this.dayError = document.getElementById('dayError')
        this.monthError = document.getElementById('monthError')
        this.yearError = document.getElementById('yearError')
        this.title = document.querySelectorAll('.title')
        this.resultYear = document.querySelector('.dash-1')
        this.resultMonth = document.querySelector('.dash-2')
        this.resultDay = document.querySelector('.dash-3')
    }
    onBtnClick() {
        this.toggleAria()
        const validate = new Validate(this.dayEle, this.monthEle, this.yearEle, this.dayError, this.monthError, this.yearError, this.title);
        const calculateAge = new CalculateAge(this.dayEle.value, this.monthEle.value, this.yearEle.value, this.resultDay, this.resultYear, this.resultMonth)
        if (!validate.checkEmptyField()) {
            if (!validate.validateAllFields()) {
                calculateAge.renderResult()
            }
        }
    }
    toggleAria() {
        btn.setAttribute('aria-pressed', true)
    }
}

const main = new Main();
btn.addEventListener('click', (e) => {
    main.onBtnClick(e)
})






