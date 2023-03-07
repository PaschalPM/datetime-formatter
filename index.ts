export {}
const DAYS = [
    "Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday",
    "Saturday"
]

const MONTHS = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
]

type MilliSeconds = number
type DateTimeForHumansType = {
    year:()=>number,
    month:()=>typeof MONTHS[number],
    dayOfMonth:()=>number,
    day:()=>typeof DAYS[number],
    time:()=>string
}
function dateTimeForHumans(timeStamp:MilliSeconds):DateTimeForHumansType {
    const date = new Date(timeStamp)
    
    return {
        year: () => date.getFullYear(),
        month: () => MONTHS[date.getMonth()],
        dayOfMonth: () => date.getDate(),
        day: () => DAYS[date.getDay()],
        time: () => {
            let time = {
                hour: () => date.getHours(),
                min: () => date.getMinutes()
            }

            let meridian = () => {
                let {
                    hour,
                    min
                } = time
                if (hour() == 12 && min() == 0)
                    return "noon"
                return hour() > 11 ? "pm" : "am"
            }
            let hour: number|string = time.hour()
            let min:number|string = time.min()

            if (hour == 12 || hour == 0) {
                hour = 12
            } else if (hour > 11) {
                hour -= 12
            }
            min = min < 10 ? `0${min}` : min

            return meridian() == "noon" ? `${hour} noon` : `${hour}:${min} ${meridian()}`
        }
    }
}

function fullDate({
    dayOfMonth,
    month,
    year
}:DateTimeForHumansType):string {
    return `${dayOfMonth()} ${month()} ${year()}`
}

function dateFormat(timestamp:MilliSeconds) {
    if (!isNaN(timestamp)) {

        const today = new Date()
        const todayInMilliSecs = (((today.getHours() * 3600) +
            (today.getMinutes() * 60) +
            today.getSeconds()) * 1000)
        const dayInMilliSecs = 86400000
        const diff = today.getTime() - timestamp

        if (diff < todayInMilliSecs) {
            return ("Today");
        } else if (diff < (todayInMilliSecs + dayInMilliSecs)) {
            return ("Yesterday");
        } else if (diff < (todayInMilliSecs + (dayInMilliSecs * 5))) {
            return dateTimeForHumans(timestamp).day()
        }

        return fullDate(dateTimeForHumans(timestamp))
    }
    return null
}
export {
    DAYS,
    MONTHS,
    dateTimeForHumans,
    fullDate,
    dateFormat,
}