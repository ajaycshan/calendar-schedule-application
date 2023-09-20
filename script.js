
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
    displayExisting();
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

// Persistence of results following refresh for given day
function displayExisting() {
    var existingEvent = JSON.parse(localStorage.getItem(indivTextareaEl.parentElement.id))
    if (existingEvent !== null) {
        indivTextareaEl.textContent = existingEvent
    }
}

// Clear local storage and reset calendar at the end of each day
if (currentHour > 17) {
    localStorage.clear()
}

  