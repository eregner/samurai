"use strict"

function getSwitchDates (year) {

    var date, day;

    var switchDates = {
        'summer': {
            month: 2,
            date: null
        },
        'winter': {
            month: 9,
            date: null
        }
    };

    for (var index in switchDates) {

        day = 31;

        // searching for the last sunday
        do {
            date = new Date(year, switchDates[index].month, day);
            day--;
        } while (date.getDay() !== 0); // 0 is sunday

        switchDates[index].date = date;
    }

    return switchDates;
}

function isSwitchDate (date, switchDates) {

    for (var index in switchDates) {
        var switchDate = switchDates[index].date.toString();
        var checkedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate()).toString();

        if (checkedDate === switchDate) {
            return index;
        }
    }

    return null;
}

var switchDates = getSwitchDates(2016);

console.log(isSwitchDate(new Date(2016,9,30), switchDates))
console.log(isSwitchDate(new Date(2016,2,27), switchDates))

var conf = {
    "timezone": {
        "2013": {
            "from": 1364688000000,
            "to": 1382839200000,
            "offset": 120
        },
        "2014": {
            "from": 1396137600000,
            "to": 1414288800000,
            "offset": 120
        },
        "2015": {
            "from": 1427587200000,
            "to": 1445738400000,
            "offset": 120
        },
        "2016": {
            "from": 1459040400000,
            "to": 1477789200000,
            "offset": 120
        },
        "defaultOffset": 60
    }
};

var d = new Date(1477789200000);
var c = Date.now();
console.log(d)
console.log(new Date(c))

function getSummerTime (year) {

    var date, day;

    var summerTime =  [[2, 3], [9, 2]];

    for (var i = 0; i < summerTime.length; i++) {
        day = 31;

        do {
            date = new Date(year, day, summerTime[i][1]);
            if (date.getDay() === 0) {
                summerTime[i] = date.getTime();
                continue;
            }
        } while (i >= summerTime.length);
    }

    return summerTime;
}

console.log(getSummerTime(2016))

