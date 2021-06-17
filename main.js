var delay = 1500;
var timeoutId = setTimeout(function () {
    $(".loadingMessage").text("These are our movies")
    // $(".loadingMessage").append(${data})
}, delay);


const url = 'https://showy-dynamic-icebreaker.glitch.me/movies';

function showValues() {
    var str = $( "form" ).serialize();
    console.log(str)
    $( "#results" ).text( str );
}


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

