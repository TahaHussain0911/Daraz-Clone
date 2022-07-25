setInterval(()=>{
let mydate=new Date();
document.getElementById('hours').innerHTML=24-mydate.getHours();
document.getElementById('minutes').innerHTML=60-mydate.getMinutes();
document.getElementById('seconds').innerHTML=60-mydate.getSeconds();
},1000);