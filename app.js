"use strict";
$(document).ready(function () {
    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${$("#myWeather").val()}&appid=18bf37475451448f442e7f86714cd476&units=metric`
            async function myweather() {
                let responce = await fetch(url)
                let data = await responce.json()
                $("#city").html(data.name);
                $("#temp").html(data.main.temp);
                $("#feels").html(data.main.feels_like);
                $("#myWeather").val("");
                console.log(data)
            }
            myweather()
        }
    });

    $("#btn").click(function (e) {
        e.preventDefault();
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${$("#myWeather").val()}&appid=18bf37475451448f442e7f86714cd476&units=metric`
        async function myweather() {
            let responce = await fetch(url)
            let data = await responce.json()
            $("#city").html(data.name);
            $("#temp").html(data.main.temp);
            $("#feels").html(data.main.feels_like);
            $("#myWeather").val("");
            console.log(data)
        }
        myweather()
    });
});

