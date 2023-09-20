
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
    console.log(indivTextareaEl.parentElement.id)
    // displayExisting();
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

// Saving events to local storage
function saveEventEntry(event) {
    event.preventDefault();
    var clickedButton = $(event.target);
    var entryBlock = clickedButton.closest('.time-block');
    var entryTime = entryBlock.attr('id');
    var entryDetails = entryBlock.children().eq(1).val();

    localStorage.setItem(entryTime, JSON.stringify(entryDetails));
}
// Listener for click events on save icons
saveIcons.on('click', saveEventEntry)

// TODO: Persistence of results following refresh for given day
// function displayExisting() {
//     var existingEvents = JSON.parse(localStorage.getItem())
// }

// console.log(indivTextareaEl)
// TODO: Clear local storage and reset calendar display when starting new day


  