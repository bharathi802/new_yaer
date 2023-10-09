function newYearCount(){
    let day=document.getElementById('day')
    let hour=document.getElementById('hour')
    let minute=document.getElementById('minute')
    let second=document.getElementById('second')
const currentYear=new Date().getFullYear();
const newYear=new Date(` ${currentYear+1} `);
const currentDate=new Date();
const longDate=newYear-currentDate;
const d=Math.floor(longDate/1000/60/60/24);
const h=Math.floor((longDate/1000/60/60)%24);
const m=Math.floor((longDate/1000/60)%60);
const s=Math.floor((longDate/1000)%60);
day.innerHTML=d;
hour.innerHTML=h;
minute.innerHTML=m;
second.innerHTML=s;
// console.log(newYear);

}
setInterval(newYearCount,1000)