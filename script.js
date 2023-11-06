let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");
setInterval(() => {
let day = new Date();
let hours =  day.getHours() * 30 ;
let minutes =  day.getMinutes() * 6;
let seconds = day.getSeconds() * 6;


hr.style.transform =`rotateZ(${hours + (minutes/12)}deg)`;
mn.style.transform =`rotateZ(${minutes}deg)`;
sc.style.transform =`rotateZ(${seconds}deg)`;

});