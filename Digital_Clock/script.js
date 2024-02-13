function updateTime () {
    const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const { style } = document.documentElement;
    style.setProperty('--timer-day', `'${dayOfWeek[day]}`);
    style.setProperty('--timer-hours', `'${hours}'`);
    style.setProperty('--timer-minutes', `'${minutes}'`);
    style.setProperty('--timer-seconds', `'${seconds}'`);
}

setInterval(updateTime, 1000);