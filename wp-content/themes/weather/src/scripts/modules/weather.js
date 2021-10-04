export default function init() {
    const citi = document.querySelector("#cities");
    const day = document.querySelector(".date");
    const time = document.querySelector(".time");
    const city = document.querySelector(".date");
    const date = document.querySelector(".weather__date");
    const status = document.querySelector(".weather__now");
    const humidity = document.querySelector(".weather__hum");
    const wind = document.querySelector(".wind");
    const currentDeg = document.querySelector(".deg_cur");
    const maxDeg = document.querySelector(".max__deg");
    const img = document.querySelector(".img");
    const de = document.querySelector(".deg");

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    var days = weekday[today.getDay()];

    citi.addEventListener("change", function(e) {
        var value = this.value;
        const apiKey = "337bf8da40547bdab99bdb425c4fa034";

        fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric`
            )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // Work with JSON data here
                if (data.cod != 404) {
                    de.style.display = "block";

                    day.textContent = days;
                    img.src = "";
                    date.textContent =
                        dd + " " + monthNames[today.getMonth()] + " " + yyyy;
                    time.textContent = new Date().toTimeString().split(" ")[0];
                    currentDeg.textContent = Math.round(data.main.temp);
                    status.textContent = data.weather[0].description;
                    humidity.textContent = "Humaidity: " + data.main.humidity + "%";
                    wind.textContent = "Wind: " + data.wind.speed + " km/hr";
                    maxDeg.textContent = Math.round(data.main.temp_max);
                    img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                } else {
                    de.style.display = "none";

                    day.textContent = "";
                    img.src = "";
                    date.textContent = "";
                    time.textContent = "";
                    currentDeg.textContent = "";
                    status.textContent = "";
                    humidity.textContent = "";
                    wind.textContent = "";
                    maxDeg.textContent = "";
                    img.src = "";
                }
            })
            .catch((err) => {
                // Do something for an error here
            });
    });
}