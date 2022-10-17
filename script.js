const clockElement = document.querySelector('#clock');
const timezoneElement = document.querySelector('#timezone');

const currentTime = () => {
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
    const time = new Intl.DateTimeFormat('en-US', options).format(new Date());
    console.log(time);
    clockElement.textContent = time;
    timezoneElement.textContent = options.timezone;
};

currentTime();
setInterval(currentTime, 1000);
