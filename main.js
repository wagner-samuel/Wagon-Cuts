var delay = 1500;
var timeoutId = setTimeout(function () {
    $(".loadingMessage").text(`We have a great selection of movies!`)
    // $(".loadingMessage").append(${data})
}, delay);

$.get("https://showy-dynamic-icebreaker.glitch.me/movies", {
}).done(function(data) {
    data.forEach(function (obj) {
        $('.movieList').append(movieCards(obj))
    })
    console.log( data);

});

function movieCards(data) {
    let paddy = $(`<div class="card"></div>`);

    paddy.append(
        `<div>
</div>
<hr>
<div class="temperature">Temperature: ${data.temperature} F</div>
<hr>
<div class="description">${data.description}</div>
		<hr>
		<div class="humidity">Humidity: ${data.humidity}</div>
			<hr>
			<div class="countryCode">Country Code: ${data.country}</div>
	</div>`
    )
    return paddy
}


const url = 'https://showy-dynamic-icebreaker.glitch.me/movies';

// // ---- notes
$(".subitBTN").click(makePost);


function getInputVals (){
    let newMovie = {
        title: $(`#inputTitle`).val(),
        rating: $(`#inputRating`).val(),
        poster: $(`#inputPoster`).val(),
        year: $(`#inputYear`).val(),
        genre: $(`#inputGenre`).val(),
        director: $(`#inputDirector`).val(),
        plot: $(`#inputPlot`).val(),
        actors: $(`#inputActors`).val()
    };
    return newMovie;
    // console.log(newMovie)
    // grab all vals of input fields
    // create a new object variable
    // take vals and put them into the object
    // call another function : makePostReq(obj)
}

function makePost(){
    const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(getInputVals()),
};
    console.log(getInputVals())
fetch(url, options)
    .then( response => console.log(response) ) /* review was created successfully */
    .catch( error => console.error(error) ); /* handle errors */
    // post request with the object as the data
    // fetch request
    // .. then ...
}




