"use strict";
exports.__esModule = true;
exports.dateFormat = exports.fullDate = exports.dateTimeForHumans = exports.MONTHS = exports.DAYS = void 0;
var DAYS = [
    "Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday",
    "Saturday"
];
exports.DAYS = DAYS;
var MONTHS = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
];
exports.MONTHS = MONTHS;
function dateTimeForHumans(timeStamp) {
    var date = new Date(timeStamp);
    return {
        year: function () { return date.getFullYear(); },
        month: function () { return MONTHS[date.getMonth()]; },
        dayOfMonth: function () { return date.getDate(); },
        day: function () { return DAYS[date.getDay()]; },
        time: function () {
            var time = {
                hour: function () { return date.getHours(); },
                min: function () { return date.getMinutes(); }
            };
            var meridian = function () {
                var hour = time.hour, min = time.min;
                if (hour() == 12 && min() == 0)
                    return "noon";
                return hour() > 11 ? "pm" : "am";
            };
            var hour = time.hour();
            var min = time.min();
            if (hour == 12 || hour == 0) {
                hour = 12;
            }
            else if (hour > 11) {
                hour -= 12;
            }
            min = min < 10 ? "0".concat(min) : min;
            return meridian() == "noon" ? "".concat(hour, " noon") : "".concat(hour, ":").concat(min, " ").concat(meridian());
        }
    };
}
exports.dateTimeForHumans = dateTimeForHumans;
function fullDate(_a) {
    var dayOfMonth = _a.dayOfMonth, month = _a.month, year = _a.year;
    return "".concat(dayOfMonth(), " ").concat(month(), " ").concat(year());
}
exports.fullDate = fullDate;
function dateFormat(timestamp) {
    if (!isNaN(timestamp)) {
        var today = new Date();
        var todayInMilliSecs = (((today.getHours() * 3600) +
            (today.getMinutes() * 60) +
            today.getSeconds()) * 1000);
        var dayInMilliSecs = 86400000;
        var diff = today.getTime() - timestamp;
        if (diff < todayInMilliSecs) {
            return ("Today");
        }
        else if (diff < (todayInMilliSecs + dayInMilliSecs)) {
            return ("Yesterday");
        }
        else if (diff < (todayInMilliSecs + (dayInMilliSecs * 6))) {
            return dateTimeForHumans(timestamp).day();
        }
        return fullDate(dateTimeForHumans(timestamp));
    }
    return null;
}
exports.dateFormat = dateFormat;
