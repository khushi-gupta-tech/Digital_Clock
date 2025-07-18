const clock = document.getElementById('clock')

setInterval(()=>{
   let date = new Date();
   //console.log(date.toLocaleTimeSring());
   clock.innerHTML = date.toLocaleTimeString();
},1000);