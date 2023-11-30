
const dateInput = prompt('Enter your date of birth. Example: 12/8/1984');
const dateOfBirth = dateInput.split("/").map(Number);
const systemDate = new Date();
const dateToday = [systemDate.getDate(), systemDate.getMonth() + 1, systemDate.getFullYear()];
var years = dateToday[2] - dateOfBirth[2] - 1;
var months = 0;
var days = 0;
var previousMonthDays = 0;
switch (dateToday[1]) {
    case 1: previousMonthDays = 31; break;
    case 2: previousMonthDays = 31; break;
    case 3: {
        // Leap year
        if ((0 == dateToday[2] % 4) && (0 != dateToday[2] % 100) || (0 == dateToday[2] % 400)) {
            previousMonthDays = 29;
        }
        // Not leap year
        else {
            previousMonthDays = 28;
        }
        break;
    }
    case 4: previousMonthDays = 31; break;
    case 5: previousMonthDays = 30; break;
    case 6: previousMonthDays = 31; break;
    case 7: previousMonthDays = 30; break;
    case 8: previousMonthDays = 31; break;
    case 9: previousMonthDays = 31; break;
    case 10: previousMonthDays = 30; break;
    case 11: previousMonthDays = 31; break;
    case 12: previousMonthDays = 30; break;
}
if (dateToday[1] > dateOfBirth[1]) {
    years++;
    if (dateToday[0] >= dateOfBirth[0]) {
        months = dateToday[1] - dateOfBirth[1];
        days = dateToday[0] - dateOfBirth[0];
    }
    else {
        months = dateToday[1] - dateOfBirth[1] - 1;
        days = previousMonthDays - (dateOfBirth[0] - dateToday[0]);
    }
}
else if (dateToday[1] < dateOfBirth[1]) {
    if (dateToday[0] >= dateOfBirth[0]) {
        months = 12 - (dateOfBirth[1] - dateToday[1]);
        days = dateToday[0] - dateOfBirth[0];
    }
    else {
        months = 12 - (dateOfBirth[1] - dateToday[1]) - 1;
        days = previousMonthDays - (dateOfBirth[0] - dateToday[0]);
    }
}
else {
    if (dateToday[0] >= dateOfBirth[0]) {
        years++;
        months = 0;
        days = dateToday[0] - dateOfBirth[0];
    }
    else {
        months = 11;
        days = previousMonthDays - (dateOfBirth[0] - dateToday[0]);
    }
}
console.log("Date Of Birth: " + dateOfBirth);
console.log("Date Today:    " + dateToday);
console.log("Age:-")
console.log("Years:         " + years);
console.log("Months:        " + months);
console.log("Days:          " + days);
alert("Your age is " + years + " years, " + months + " months and " + days + " days.");
