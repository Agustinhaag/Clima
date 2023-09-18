const mostrar = (data) => {
  const container = document.querySelector("#res");
  let city = `${data.name}, ${data.sys.country}`;
  let date = new Date().toLocaleDateString();
  let temp = (data.main.temp - 273.15).toFixed(1);
  let desc = `${data.weather[0].description}`;
  let min = (data.main.temp_min - 273.15).toFixed(1);
  let max = (data.main.temp_max - 273.15).toFixed(1);
  let tmin = `${min}°C/${max}°C`;
  const src = actualizarImg(data);
  let info = `<div class="container-city">
                <p id="city">${city}</p>
            </div>
            <div class="container-date">
                <p id="date">${date}</p>
            </div>
            <div class="container-img">
                <img id="img" src="${src}" alt="">
                <p id="temp">${temp}</p>
            </div>
            <div class="container-descripcion">
                <p id="desc">${desc}</p>
            </div>
            <div class="container-temp">
               <p id="min">${tmin}</p> 
            </div>`;
  container.style.display = "block";
  container.innerHTML = info;
};

const enviar = async (e) => {
  let input = document.getElementById("text");
  let select = document.getElementById("codigo");
  let nombre = input.value;
  let codigo = select.value;
  let api = "bfe63af478e163961ee2e827a315d3cf";
  const clima = `https://api.openweathermap.org/data/2.5/weather?q=${nombre},${codigo}&appid=${api}`;
  try {
    const response = await fetch(clima);
    const data = await response.json();
    mostrar(data);
  } catch (err) {
    console.error(err);
  }
};

const actualizarImg = (data) => {
  let ico = data.weather[0].icon;
  let src;
  switch (ico) {
    case "01d":
      src = "img/soleado.png";
      break;
    case "02d":
      src = "img/parcial.png";
      break;
    case "03d":
    case "04d":
    case "03n":
    case "04n":
      src = "img/nublado.png";
      break;
    case "09d":
    case "09n":
      src = "img/chubasco.png";
      break;
    case "10d":
      src = "img/lluvia-sol.png";
      break;
    case "11d":
    case "11n":
      src = "img/tormenta.png";
      break;
    case "13d":
    case "13n":
      src = "img/nieve.png";
      break;
    case "01n":
      src = "img/luna.png";
      break;
    case "02n":
      src = "img/luna-nubes.png";
      break;
    case "10n":
      src = "img/luna-lluvia.png";
      break;
    case "50d":
    case "50n":
      src = "img/niebla.jpg";
      break;
  }
  return src;
};

let btn = document.getElementById("btn");
btn.addEventListener("click", enviar);
