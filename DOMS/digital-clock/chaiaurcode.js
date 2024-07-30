const clock = document.querySelector('#clock')

setInterval(function(){
    const date = new Date();
    clock.innerHTML=`<span>${date.toLocaleTimeString()}</span>`
},1000)
