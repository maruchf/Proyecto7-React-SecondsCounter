//Mi intento de función para cuenta regresiva--y-- watch?v=ZbF5qomB8XM

const getRamainTime= deadline => {
	let now = new Date(),
	remainTime= (new Date(deadline) - now + 1000)/1000,
	remainSeconds= ('0'+Math.floor(remainTime % 60).slice(-2),
	remainMinutes= ('0'+Math.floor(remainTime / 60 % 60).slice(-2),
	remainHours= ('0'+Math.floor(remainTime / 3600 % 24).slice(-2),
	remainDays= (Math.floor(remainTime / (3600 * 24)),
    remainYears= (Math.floor(remainTime / (3600 * 24)% 365);
    return remainTime,remainSecond
};

const countdown =(deadline,elem)=>{
    const el =document.getElementById(elem);
    const timerUpdate=setInterval(()=>{

    let t = getRemainTime(deadline);
    el.innerHTML=`${t.remainDays} d:${t.remainHours} h:${t.remainMinutes} m: ${t.remainSeconds}s`;
        if(t.remainTime<=1){
            clearInterval(timerUpdate);
            el.innerHTML="Llegó el día";
        }
    },1000)
};