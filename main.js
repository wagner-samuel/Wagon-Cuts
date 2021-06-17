var delay = 1500;
var timeoutId = setTimeout(function () {
    $(".loadingMessage").text("These are our movies")
}, delay);

fetch('https://showy-dynamic-icebreaker.glitch.me/movies') // make a request - GET
    .then(response => response.json())
    .then(data => {
        console.log(data); //
    })
    .catch(error => {
        alert(error);
        console.error(error);
    })

// function myLoopFunction(data) {
//     console.log(data)
//     let obj = [];
//     for (let i = 0; i < data.length; i++) {
//         if (i % 4 === 0) {
//             obj.push({
//                 actor: data.actor,
//                 genre: data.genre,
//                 title: data.title,
//                 year: data.year,
//             })
//         }
//     }
//     console.log(obj)
//     return obj
// }


function toTheMoon(data) {
    data.forEach(function (obj) {
        $('.movieList').append(functionForCards(obj))
    })
}

function functionForCards(data) {
    let paddy = $(`<div class="card"></div>`);


    paddy.append(
        `<div>
<div class="poster">${data.poster}><br></div>
<hr><div class="actors">Actor: ${data.actor}</div><hr><div class="genre">${data.genre}</div>
		<hr><div class="title">title: ${data.title}</div>
			<hr><div class="year">year: ${data.year}</div>
	</div>`
    )
    return paddy
}

// $(".movieList").append(`<h5>${data.actors}</h5><hr><h5>${data.genre}</h5><hr><h5>${data.title}</h5><hr><h5>${data.year}</h5><hr><h5>`)

