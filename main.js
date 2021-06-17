var delay = 1500;
var timeoutId = setTimeout(function () {
    $(".loadingMessage").text(`We have a great selection of movies!`)
    // $(".loadingMessage").append(${data})
}, delay);

$.get("https://showy-dynamic-icebreaker.glitch.me/movies", {
}).done(function(data) {
    data.forEach(function (data) {
        $('.movieList').append(movieCards(data))

            })
        }
    )



function movieCards(data) {
    let paddy = $(`<div class="card"></div>`);

    paddy.append(
        `<div>
</div>
<h2 class="title">Title: ${data.title}</h2>
<img src="${data.poster}" alt="">
<div class="rating">Rating: ${data.rating}</div>
<div class="year">Year: ${data.year}</div>
<div class="genre">Genre: ${data.genre}</div>
<div class="genre">Director: ${data.director}</div>
<div class="genre">Plot: ${data.plot}</div>
<div class="genre">Actor: ${data.actors}</div>
<hr>
`
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




