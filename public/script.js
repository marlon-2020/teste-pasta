setInterval(() => {
    let data = new Date();
    let hora = Number(data.getHours()) < 10 ? `0${data.getHours()}` : data.getHours();
    let minuto = Number(data.getMinutes()) < 10 ? `0${data.getMinutes()}` : data.getMinutes();
    let segundo = Number(data.getSeconds()) < 10 ? `0${data.getSeconds()}` : data.getSeconds();
    document.querySelector('.relogio').innerHTML = `${hora}:${minuto}:${segundo}`
}, 1000)
