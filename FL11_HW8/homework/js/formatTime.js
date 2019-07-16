const formatTime = minuteNum => {
    const minutes = minuteNum % 60;
    const hours = Math.floor(minuteNum / 60 % 24);
    const day = Math.floor(minuteNum / 1440);

    return `${day} day(s) ${hours} hour(s) ${minutes} minute(s)`;
}

console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));