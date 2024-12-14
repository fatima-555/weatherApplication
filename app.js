const API_KEYS = "72771c64e60b1d1f00d7cd30d05c2913"
const inputData = document.getElementById("inputField");
const showWeather = document.getElementById("showWeather");

const searchData = async () => {
    showWeather.innerHTML = `<div class=" mt-5 spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;

const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputData.value}&appid=${API_KEYS}&units=metric`;


const fetchData = await fetch(API_URL);
const response = await fetchData.json();

console.log(response);
return showData(response);
};

const showData = (data) => {
    if(data.cod == '404'){
    showWeather.innerHTML = Swal.fire({
    title: data.message,
    icon: "error"
});
    return;
    } else{
        showWeather.innerHTML = `<div class="rounded-5 bg-primary-subtle  card mt-5 p-3" style="width: 18rem;">
        <img src= ${`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}  class="align-self-center w-50 card-img-top" alt="..."><hr>
        <div class="card-body">
        <h1 class="card-text text-center">${data.name} </h1>
        <h3 class="text-center">${data.main.temp} <sup>o</sup>C</h3>
        <h4 class=" text-center d-flex f-wrap">${data.weather[0].main}</h4>
        
        <div class=" d-inline-flex  bg-primary-subtle">
        <h6 style="background-color: rgb(177, 201, 223); padding: 1px; border-radius: 8px; width:89px;" class=" ">Wind speed <br>&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-wind"></i> ${data.wind.speed}</h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>

        <div style=" color: ; background-color: rgb(177, 201, 223);padding: 3px; border-radius:8px; width: 75px;" class="d-inline-flex">
        <h6>Humidity <br>&nbsp&nbsp&nbsp<i class="fa-solid fa-water"></i> ${data.main.humidity}</h6>
        </div>
        </div>
        </div>`;
    }
};