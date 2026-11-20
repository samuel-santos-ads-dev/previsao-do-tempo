const key = "c165708e09c4374e0ad5351a228c8c0e"

function clicoucidade(){
    const cidade = document.getElementById("cidade").value
    buscarcidade(cidade)    
}

async function buscarcidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    manipulardados(dados)
}

function manipulardados(dados){
    document.getElementById("titulolocal").innerText = `Tempo em ${dados.name}`

    document.getElementById("temperatura").innerText = Math.floor(dados.main.temp) + " °C"

    document.querySelector(".tempmin").innerText = `${dados.main.temp_min}°C`
    document.querySelector(".tempmax").innerText = `${dados.main.temp_max}°C`

    document.getElementById("textoprevisao").innerText = dados.weather[0].description

    document.getElementById("umidade").innerText = dados.main.humidity + "%"

    document.getElementById("iconeclima").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}



//Ano rodapé
ano = document.getElementById("ano")
anoAtual = new Date().getFullYear()
ano.textContent = anoAtual
