setInterval(twelveHourFormat, 1000);

function twelveHourFormat(){
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    var AMPM = "AM";
 
    if (hour > 12) {
        hour = hour - 12;
        AMPM = "PM";
    }
    if (hour == 0) {
        hr = 12;
        AMPM = "AM";
    }
    
    if(hour < 10){
        hour = "0" + hour;
    }

    if(minute < 10){
        minute = "0" + minute;
    }

    if(second < 10){
        second = "0" + second;
    }

    let currentTime = hour + ":" + minute + ":" + second + AMPM;
 
    document.getElementById("clock").innerHTML = currentTime;

}
twelveHourFormat()
