let citeis = [
    {
        arName: "مكة المكرمة",
        iso: "Makkah"
    },
    {
        arName: "المدينة المنورة",
        iso: "Medina = Madinah"
    },
    {
        arName: "الرياض",
        iso: "Ar Riyāḑ"
    },
    {
        arName: "ابها",
        iso: "Abha"
    },
    {
        arName: "الباحة",
        iso: "Al Baha"
    },
    {
        arName: "الخبر",
        iso: "Al Khobar "
    },
    {
        arName: "القصيم",
        iso: "Al Qaşīm"
    },
    {
        arName: "جدة",
        iso: "Jeddah "
    },
]
let citySliction = document.getElementById("city")
for(let city of citeis){
    citySliction.innerHTML += `<option>${city.arName}</option>`
}

citySliction.addEventListener("change",function(){
    document.querySelectorAll(".cityname").forEach(name => name.innerHTML = this.value);

    let cityName = ''
    for(let city of citeis){
        if(city.arName == this.value ){
            cityName = city.iso
        }
    }
    athan(cityName)
})
function athan(cityName){
    let pram = {
        country: "SA",
        city: cityName //"Makkah al Mukarramah"
    }
    axios.get('http://api.aladhan.com/v1/timingsByCity', {
        params: pram
    })
    .then(function (response) {
        //Time of Athan
        let timings = response.data.data.timings
        elementId("fajr",timings.Fajr)
        elementId("sunrise",timings.Sunrise)
        elementId("dhuhr",timings.Dhuhr)
        elementId("asr",timings.Asr)
        elementId("maghrib",timings.Maghrib)
        elementId("isaha",timings.Isha)
        // Date
        let date = response.data.data.date.hijri
        let date2 = response.data.data.date
        elementId("weekday", date.weekday.ar)
        elementId("day", date.day)
        elementId("month",date.month.ar)
        elementId("year",date.year)
        // console.log(count(date2.readable,timings.Asr))
    })
    .catch(function (error) {
        console.log(error);
    })
}
athan("	Makkah ")

function elementId(id ,timings){
    document.getElementById(id).innerHTML = `${timings}`
}


// function count(date, timing){
//     let countDown = new Date(date + " " + timing)
//     setInterval(() => {

//     let now = new Date()
//     let diff = countDown - now;

//     let hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 ))
//     let minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60 ))
//     let seconds = Math.floor(diff % (1000 * 60) / 1000)

    
//     elementId("hours",hours)
//     elementId("min",minutes)
//     elementId("sec",seconds)
//     if(now >= countDown){
//     }
//     }, 1000);
    
// }