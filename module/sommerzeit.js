"use strict"

function getSwitchDates (year) {

  var date = null;

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

    var day = 31;

    do {
      date = new Date(year, switchDates[index].month, day);
      day--;
    } while (date.getDay() !== 0);

    switchDates[index].date = date;
  }

  return switchDates;
}

function isSwitchDate (date, switchDates) {

  for (var index in switchDates) {
    if (switchDates[index].date.toString() === new Date(date.getFullYear(), date.getMonth(), date.getDate()).toString()) {
      return index + '';
    }
  }

  return null;
}

var switchDates = getSwitchDates(2016);

console.log(isSwitchDate(new Date(2016,9,30), switchDates))
console.log(isSwitchDate(new Date(2016,2,27), switchDates))




