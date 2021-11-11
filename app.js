

const toggleBtn = document.querySelector('.toggle');
const html = document.querySelector('html');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');

const weekdays = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'];
const months = ['Janaury', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


toggleBtn.addEventListener('click', darkMode);

setInterval(setTime, 1000);

//functions

function setTime() {
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const seconds = time.getSeconds();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const halfDay = hour % 12;
    const amPm = hour <= 12 ? 'AM' : 'PM';

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hour, 0, 12, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;
    timeEl.innerText = `${halfDay<10?`0${halfDay}`: halfDay}:${minute<10? `0${minute}`: minute} ${amPm}`;
    dateEl.innerHTML = `${months[month]}, ${weekdays[day]} <span class="circle">${date<10?`0${date}`: date}</span>`;
}


function scale(num, inMin, inMax, outMin, outMax) {
    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMax;
};

function darkMode() {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        toggleBtn.innerText = 'Dark Mode'
    } else {
        html.classList.add('dark');
        toggleBtn.innerText = 'Light Mode'
    }
}

