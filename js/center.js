function displayTime() {
    var timer = new Date();
    var hour = timer.getHours();
    var min = timer.getMinutes();
    var sec = timer.getSeconds();
    var glow1 = document.getElementById("glow1");
    var glow2 = document.getElementById("glow2")
    var greet;

    if(hour<10){
        hour = "0" + hour;
    }
    if(min<10){
        min = "0" + min;
    }
    if(sec<10){
        sec = "0" + sec;
    }


    if(hour>=0) {
        greet = 'Good Night, '
        glow1.style.background = 'linear-gradient(to right, rgb(76,66,114), rgb(51,51,86))'
        glow2.style.background = 'linear-gradient(to right, rgb(192, 198, 203), rgb(51,51,86))'
    }
    if(hour>=6) {
        greet = 'Good Morning, '
        glow1.style.background = 'linear-gradient(to right, red, rgb(253, 128, 70))'
        glow2.style.background = 'linear-gradient(to right, red, rgb(253, 128, 70))'
    }
    if(hour>=13) {
        greet = 'Good Afternoon, '
        glow1.style.background = 'linear-gradient(to right, red, mediumpurple)'
        glow2.style.background = 'linear-gradient(to right, rgb(255, 129, 18), red'
    }
    if(hour>=17) {
        greet = 'Good Evening, '
        document.getElementById("glow1").style.background = 'linear-gradient(to right, rgb(87, 49, 112), rgb(128, 69, 101))'
        document.getElementById("glow2").style.background = 'linear-gradient(to right, rgb(45, 29, 122), rgb(253, 128, 70))'
    }
    if(hour>=21) {
        greet = 'Good Night, '
        glow1.style.background = 'linear-gradient(to right, rgb(76,66,114), rgb(51,51,86))'
        glow2.style.background = 'linear-gradient(to right, rgb(192, 198, 203), rgb(51,51,86))'
    }

    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = min;
    document.getElementById('second').innerHTML = sec;
    document.getElementById('searchbox').placeholder = greet + "what do you want to search?";

}
setInterval(displayTime, 10);    