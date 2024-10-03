setInterval(() =>{
let h = document.getElementById('h');
let m = document.getElementById('m');
let s = document.getElementById('s');
let am = document.getElementById('am');



let hrs = new Date().getHours();
let mins = new Date().getMinutes();
let sec = new Date().getSeconds();
let ampm = (h>= 12)?'AM': 'PM';





hrs = (hrs < 10) ? "0"+ hrs: hrs;
mins = (mins < 10) ? "0"+ mins : mins;
sec = (sec < 10) ? "0"+ sec : sec;


if(hrs>12){
    hrs= hrs-12;
}

h.innerHTML = hrs;
m.innerHTML = mins;
s.innerHTML = sec;
am.innerHTML = ampm},1000)
