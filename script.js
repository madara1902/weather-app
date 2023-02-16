// JavaScript Document
const input = document.getElementById('input') 
const text = document.querySelector('.card-text')
const button = document.getElementById('btn')
const icon = document.querySelector('.icon')


header('Access-Control-Allow-Origin: *')
header('Access-Control-Allow-Headers: *')
header('Access-Control-Allow-Methods: GET')
header('Access-Control-Allow-credentials: true')

button.addEventListener('click', function(){
	const key = '4484bf48f3c94a38b0e114536231402'
	fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${input.value}&aqi=yes}`, {
		"method" : "GET",
		"headers" : {
			
		}
	})
	.then(response => response.json())
	.then(displayData)
	.catch(err => alert("Wrong region name!"))
})


const displayData = (weather) => {	
const icons = `<img src="https://img.icons8.com/emoji/96/null/sun-behind-cloud.png"/>`;

icon.innerHTML = `<h2>${icons}</h2>`

	text.innerHTML = `
	<ul> 
		<li> <p class="card-text">Region: ${weather.location.region}</p> </li>
 <li><p class="card-text">Temperature: ${weather.current.temp_c} C</p></li>
 <li><p class="card-text">mph: ${weather.current.wind_mph}</p></li>
 <li><p class="card-text">Time: ${weather.location.localtime}</p></li>
 </ul>
    `
}
