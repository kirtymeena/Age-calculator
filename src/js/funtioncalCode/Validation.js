
class Validate {
    constructor(dayEle, monthEle, yearEle, dayError, monthError, yearError, title) {
        this.day = dayEle;
        this.month = monthEle;
        this.year = yearEle;
        this.dayError = dayError;
        this.monthError = monthError;
        this.yearError = yearError;
        this.title = title;
        this.monthWith30 = [4, 6, 9, 11];
        this.errorCount = 0;
        this.currentYear = new Date().getFullYear();
    }

    isLeapYear() {
        return year % 4 === 0 && year % 400 === 0
    }
    checkEmptyField() {
        console.log(this.day, this.month, this.year, this.day.value === "", this.day.value.length === 0)
        if (this.day.value === '') {
            this.errorCount += 1
            this.renderErrorMsg("The field is required", this.day, this.dayError, 0)
        }
        else if (this.errorCount === 0) {
            this.removeErrorMsg(this.day, this.dayError, '0')
        }

        if (this.month.value === '') {
            console.log("30th", this.month.value)
            this.errorCount += 1
            this.renderErrorMsg("The field is required", this.month, this.monthError, 1)
        }
        else if (this.errorCount === 0) {
            console.log("errorcount", this.errorCount)
            this.removeErrorMsg(this.month, this.monthError, 1)
        }
        if (this.year.value === '') {
            this.errorCount += 1
            this.renderErrorMsg("The field is required", this.year, this.yearError, 2)
        }
        else if (this.errorCount === 0) {
            this.removeErrorMsg(this.year, this.yearError, 2)
        }
        return this.errorCount > 0
    }

    validateAllFields() {
        if (day === "day") {
            if (isNaN(this.day.value) || this.day === '00' || (Number(this.day.value) > 30 && !this.monthWith30.includes(this.month.value)) || (this.isLeapYear(this.year.value) && Number(this.day.value) > 29) || Number(this.day.value) > 31) {
                this.renderErrorMsg("Must be a valid day", this.day, this.dayError, 0)
                this.errorCount += 1
            } else {
                this.removeErrorMsg(this.day, this.dayError, '0')
            }
        }

        if (Number(this.month.value) > 12 || isNaN(this.month.value) || this.month.value === '000') {
            this.renderErrorMsg("Must be a valid month", this.month, this.monthError, 1)
            this.errorCount += 1
        } else {
            this.removeErrorMsg(this.month, this.monthError, 1)
        }

        if (Number(this.year.value) >= this.currentYear || this.year.value === '0000' || isNaN(this.year.value)) {
            this.renderErrorMsg("Must be in the past", this.year, this.yearError, 2)
            this.errorCount += 1
        }
        else {
            this.removeErrorMsg(this.year, this.yearError, 2)
        }
        return this.errorCount > 0
    }

    renderErrorMsg(msg, field, error, titleIndex) {
        field.style.border = '1px solid #ff5959';
        error.innerText = msg;
        this.title[titleIndex].style.color = '#ff5959'
    }
    removeErrorMsg(field, error, titleIndex) {
        field.style.border = '';
        error.innerText = '';
        this.title[titleIndex].style.color = ''
    }
}

export default Validate
