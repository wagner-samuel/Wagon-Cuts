var delay = 1500;
var timeoutId = setTimeout(function () {
    $(".loadingMessage").text("These are our movies")
    // $(".loadingMessage").append(${data})
}, delay);

const newMovie = {
    "title": "Up",
    "rating": "5",
    "poster": "https://m.media-amazon.com/images/M/MV5BYWMwMzQxZjQtODM1YS00YmFiLTk1YjQtNzNiYWY1MDE4NTdiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
    "year": "2010",
    "genre": "Action, Comedy, Drama",
    "director": "Sam Bowcut",
    "plot": "Guy goes up",
    "actors": "Wagner Charles"
};
const url = 'https://showy-dynamic-icebreaker.glitch.me/movies';
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMovie),
};
fetch(url, options)
    .then( response => console.log(response) ) /* review was created successfully */
    .catch( error => console.error(error) ); /* handle errors */
fetch(url)
    .then( response => console.log(response) )

$( ".subitBTN" ).submit(function() {
    types = [];
    $("input[name='additionaltitlename']").each(function() {
        types.push($(this).val());
    });
    console.log(types);
    // alert( "Handler for .click() called." );
});