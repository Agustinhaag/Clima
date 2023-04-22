let btn= document.getElementById("btn");
btn.addEventListener("click",enviar);

async function enviar(e){
    e.preventDefault();
let input= document.getElementById("text");
let select= document.getElementById("codigo")
let nombre= input.value;
let codigo=  select.value;
let api = "bfe63af478e163961ee2e827a315d3cf"
const clima = `https://api.openweathermap.org/data/2.5/weather?q=${nombre},${codigo}&appid=${api}`
try{
    const response = await fetch(clima);
    const data = await response.json();
    mostrar(data);
}catch(err){
console.log(err);
}
validar();

function mostrar(data){
    let city= document.getElementById("city");
    let date= document.getElementById("date");
    let temperatura= document.getElementById("temp");
    let desc= document.getElementById("desc");
    let tmin= document.getElementById("min");
    let temp = (data.main.temp - 273.15).toFixed(1)
    let min = (data.main.temp_min -273.15).toFixed(1)
    let max = (data.main.temp_max -273.15).toFixed(1)
    temperatura.innerHTML = `${temp}° C`;
    tmin.innerHTML = `${min}°C/${max}°C`;
    city.innerHTML = `${data.name}, ${data.sys.country}`;
    date.innerHTML = (new Date()).toLocaleDateString(); 
    desc.innerHTML= `${data.weather[0].description}`; 
   actualizarimg(data);
}
}

function actualizarimg(data){
    let ico = data.weather[0].icon;
    let img = document.getElementById("img");
    let src;
    switch(ico){
        case "01d":
            src= "img/soleado.png"
            break;
        case "02d":
            src= "img/parcial.png"
            break;
        case "03d":
        case "04d":
        case "03n":
        case "04n":
            src= "img/nublado.png"
            break;
        case "09d":
        case "09n":
            src= "img/chubasco.png"
            break; 
        case "10d":
            src= "img/lluvia-sol.png"
            break;
        case "11d":
        case "11n":
            src= "img/tormenta.png"
            break;
        case "13d":
        case "13n":
            src= "img/nieve.png"
            break; 
        case "01n":
            src= "img/luna.png"
            break;
        case "02n":
            src= "img/luna-nubes.png"
            break;
        case "10n":
            src= "img/luna-lluvia.png"
            break;
    }
     img.src= src;
}

function validar(){
    let selec = document.getElementById("codigo");
    let inpu= document.getElementById("text");
    let nuevoinput = inpu.value.trim();
if(nuevoinput === ""){
    error(inpu);
}else{
    succes(inpu);
}
if(selec.selectedIndex === 0){
    error(selec);
}else{
    succes(selec);
}
function error(i){
    let res = document.getElementById("res");
    let elemenpadre= i.parentElement;    
    elemenpadre.className="mostrar";
    res.style.display = "none"  
}
function succes(i){
    let res = document.getElementById("res");
    let elemenpadre = i.parentElement;
    elemenpadre.className = "container-small";
    res.style.display = "block"
}
}




