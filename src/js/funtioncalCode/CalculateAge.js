class CalculateAge {
    constructor(day, month, year, resultDay, resultYear, resultMonth) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.resultDay = resultDay;
        this.resultMonth = resultMonth;
        this.resultYear = resultYear
    }
    calculateYears() {
        const currentYear = new Date().getFullYear();
        return Math.abs(currentYear - this.year) - 1
    }
    calculateMonth() {
        const m1 = 12 - this.month;
        const m2 = new Date().getMonth()
        return m1 + m2
    }
    calculateDays() {
        const currentDate = new Date()
        const d1 = this.month + "/" + this.day + "/" + (currentDate.getFullYear() - 1)
        const d2 = currentDate.getMonth() + "/" + currentDate.getDate() + "/" + currentDate.getFullYear();
        return Math.abs(Math.floor((Date.parse(d1) - Date.parse(d2)) / (1000 * 60 * 60 * 24)));
    }

    renderResult() {
        this.resultYear.innerHTML = this.calculateYears(year)
        this.resultMonth.innerHTML = this.calculateMonth(month)
        this.resultDay.innerHTML = this.calculateDays(day, month)

    }
}

export default CalculateAge;




// export const calculateYears = (year) => {
//     const currentYear = new Date().getFullYear();

//     return Math.abs(currentYear - year) -1
// }

// export const calculateMonth = (month) => {
//     const m1 = 12 - month;
//     const m2 = new Date().getMonth()
//     return m1 + m2
// }

// export const calculateDays = (day, month) => {
//     const currentDate = new Date()
//     const d1 = month + "/" + day + "/" + (currentDate.getFullYear() - 1)
//     const d2 = currentDate.getMonth() + "/" + currentDate.getDate() + "/" + currentDate.getFullYear();
//     return Math.abs(Math.floor((Date.parse(d1) - Date.parse(d2)) / (1000 * 60 * 60 * 24)));

// }


