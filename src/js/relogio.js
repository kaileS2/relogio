const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
var titulo = document.createElement("title")

document.head.appendChild(titulo);

const relogio = setInterval(function time() {
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let s = dateToday.getSeconds()

    if (hr >= 6 && hr < 12) {
        titulo.textContent = "Bom dia!";
    } else if (hr >= 12 && hr < 17) {
        titulo.textContent = "Boa tarde!";
    } else {
        titulo.textContent = "Boa noite!";
    }

    if (hr < 10) hr = '0' + hr
    if (min < 10) min = '0' + min
    if (s < 10) s = '0' + s

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = s
})

