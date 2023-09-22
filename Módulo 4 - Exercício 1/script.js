function load(){
    var message = window.document.getElementById('message')
    var image = window.document.getElementById('image')
    var time_date_now = new Date()
    var hour_now = time_date_now.getHours()
    var minutes_now = time_date_now.getMinutes()
    
    message.innerHTML = `${hour_now} hora(s) e ${minutes_now} minuto(s). `

    if (hour_now >= 6 && hour_now < 12){
        // Casos em que a página é aberta de manhã
        image.src = "images/morning.png"
        document.body.style.background = '#ecb653'
    } else if (hour_now >= 12 && hour_now < 19) {
        // Casos em que a página é aberta a tarde
        image.src = "images/afternoon.png"
        document.body.style.background = '#F88379'
    } else {
        // Casos em que a página é aberta a noite
        image.src = "images/night.png"
        document.body.style.background = '#151a33'
    }
}

