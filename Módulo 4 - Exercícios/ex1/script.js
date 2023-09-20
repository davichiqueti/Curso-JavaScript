function load(){
    var message = window.document.getElementById('message')
    var image = window.document.getElementById('image')
    var time_date_now = new Date()
    var hour_now = time_date_now.getHours()
    var minutes_now = time_date_now.getMinutes()
    
    message.innerHTML = `Agora são ${hour_now} horas. `
    if (6 < hour_now && hour_now < 12){
        // Casos em que a página é aberta de manhã
        image.src = "images/morning.png"
    } else if (12 < hour_now && hour_now < 19) {
        // Casos em que a página é aberta a tarde
        image.src = "images/afternoon.png"
    } else {
        // Casos em que a página é aberta a noite
        image.src = "images/night.png"
    }
}
