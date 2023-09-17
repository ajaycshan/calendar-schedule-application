
// TODO: Declaring variables
var currentDayEl = $('#currentDay')

var today = dayjs()
var currentDate = today.format('dddd D MMMM, YYYY')
var currentHour = today.format('H')

// Display current day at top of calendar
currentDayEl.text(currentDate);

// TODO: Colour-code past, present, future - 

// TODO: Saving events to local storage
// Listener for click events on save button

// TODO: Persistence of results following refresh for given day

// TODO: Clear local storage and reset calendar display when starting new day


  