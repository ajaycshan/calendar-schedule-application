
// TODO: Declaring variables
var currentDayEl = $('#currentDay')
var textareaEls = $('textarea')
var saveIcons = $('.fas')


var today = dayjs()
var currentDate = today.format('dddd D MMMM, YYYY')
var currentHour = today.format('H')

// Display current day at top of calendar
currentDayEl.text(currentDate);

// Colour-code past, present, future
for ( var i = 0; i < textareaEls.length; i++) {
    var indivTextareaEl = textareaEls[i];
    colourCode();
}

function colourCode() {
    // Ensures consistent datatypes
    var calHour = parseInt(indivTextareaEl.dataset.hour);
    if (currentHour > calHour) {
        // Adds 'past' class to textarea element for specific hour
        indivTextareaEl.classList.add('past')
    } else if (currentHour === calHour) {
        // Adds 'present class to textarea element for specific hour
        indivTextareaEl.classList.add('present')
    } else if (currentHour < calHour) {
        indivTextareaEl.classList.add('future')
    };
}

// TODO: Saving events to local storage
// console.log(saveIcons[0].parentElement.parentElement.children[1])
function saveEventEntry(event) {
    // event.preventDefault();
    var clickedButton = $(event.target);
    var entryTime = clickedButton.parentElement
    // var selectedTextarea = clickedButton.parentElement.parentElement.children[1];
    // var entryDetails = selectedTextarea.val()

    // localStorage.setItem(entryTime, JSON.stringify(entryDetails))
    console.log(entryTime)
}
// Listener for click events on save button
saveIcons.on('click', saveEventEntry)

// TODO: Persistence of results following refresh for given day

// TODO: Clear local storage and reset calendar display when starting new day


  