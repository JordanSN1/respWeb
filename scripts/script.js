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

    