//calendar scripts

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const monthDiv = document.querySelector('.month');


function renderCalendar() {

    const start = new Date(year, month, 1).getDay();
    const endDate = new Date(year, month + 1, 0).getDate();
    // const end = new Date(year, month, endDate).getDay();
    const endDatePrev = new Date(year, month, 0).getDate();
    
    let datesHtml = '';

    for (let i = start; i > 0; i--) {
        datesHtml += `<li class="inactive">${endDatePrev - i + 1}</li>`;
    }

    for (let i = 1; i <= endDate; i++) {
        let className = 
            i === date.getDate() &&
            year === date.getFullYear() && 
            month === date.getMonth()
             ? 'class="today"' 
             : "";
        datesHtml += `<li ${className}>${i}</li>`;
            
    }



    const dates = document.querySelector('.dates');
    dates.innerHTML = datesHtml;
    monthDiv.textContent = `${months[month]} ${year}`;
}

function showCalender() {
    const calendar = document.querySelector('.show');
    if (calendar.style.display === 'block') {
        calendar.style.display = 'none';
    } else {
        calendar.style.display = 'block';
    }
}

renderCalendar();


//Popup scripts

// Selecting elements
document.addEventListener('DOMContentLoaded', () => {

const profileButton = document.getElementById('profileButton');
const profilePopup = document.getElementById('profilePopup');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('closeButton');
const topIndicator = document.querySelector('.top-indicator');

// Event listener for opening the profile popup
profileButton.addEventListener('click', () => {
    profilePopup.classList.remove('hidden');
    overlay.classList.remove('hidden');
    profilePopup.classList.remove('expanded');
    profilePopup.style.height = ('152vh');
    document.body.style.overflowY = ('hidden')
});

// Event listener for closing the popup when clicking outside
overlay.addEventListener('click', () => {
    closePopup();
});


// Event listener for clicking the top indicator to move the popup
topIndicator.addEventListener('click', () => {
    profilePopup.style.transition = 'transform 0.5s ease'; 
    profilePopup.style.transform = 'translateY(0)'; 
    profilePopup.style.width = '100%';
    profilePopup.style.marginLeft = '0';
    closeButton.style.display = 'block'; 
    profilePopup.style.height = '100vh'; 
    profilePopup.style.zIndex = '101'; 
});

// Function to close the popup
function closePopup() {
    profilePopup.classList.add('hidden');
    overlay.classList.add('hidden');
    profilePopup.classList.remove('expanded');
    profilePopup.style.transform = 'translateY(50%)';
    profilePopup.style.transition = 'none';
    closeButton.style.display = 'none'
    profilePopup.style = 'initial';
    document.body.style = 'initial'
}

// Event listener for closing the popup when the close button is clicked
closeButton.addEventListener('click', () => {
    closePopup();
});

});

    