const url = 'https://showy-dynamic-icebreaker.glitch.me/movies';

$(".submitBTN").click(makePost);

function getInputVals() {
    return {
        title: $(`#inputTitle`).val(),
        rating: $(`#inputRating`).val(),
        poster: $(`#inputPoster`).val(),
        year: $(`#inputYear`).val(),
        genre: $(`#inputGenre`).val(),
        director: $(`#inputDirector`).val(),
        plot: $(`#inputPlot`).val(),
        actors: $(`#inputActors`).val()
    };
}

function makePost() {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(getInputVals()),
    };
    console.log(getInputVals())
    fetch(url, options)
        .then(response => console.log(response))
        .catch(error => console.error(error))
        .then(function (html) {
            location.reload();
        });
}

var delay = 1500;
var timeoutId = setTimeout(function () {
    $(".rocketAnimation").fadeOut(3000);
}, delay);

$.get(url, {}).done(function (data) {
    data.forEach(function (data) {
        $('.movieList').append(movieCards(data))
        $(`.delete${data.id}`).click(function () {
            fetch(`https://showy-dynamic-icebreaker.glitch.me/movies/${data.id}`,{
                method: 'DELETE'
            })
                .then(response => console.log(response))
                .then(function (html) {
                    location.reload();
                })
                .catch(error => console.error(error))
        })
        $(`.edit${data.id}`).click(function () {
            fetch(`https://showy-dynamic-icebreaker.glitch.me/movies/${data.id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify ({
                    title: $(`#inputTitle`).val(),
                    rating: $(`#inputRating`).val(),
                    poster: $(`#inputPoster`).val(),
                    year: $(`#inputYear`).val(),
                    genre: $(`#inputGenre`).val(),
                    director: $(`#inputDirector`).val(),
                    plot: $(`#inputPlot`).val(),
                    actors: $(`#inputActors`).val()
                })
            })
                .then(response => console.log(response))
                .then(function (html) {
                    location.reload();
                })
                .catch(error => console.error(error))
        })
    })
})

function movieCards(data) {
    let paddy = $(`<div class="card"></div>`);

    paddy.append(
        `<div d flex>
<h2 class="title">Title: ${data.title}</h2>
<img class="picture text center" src="${data.poster}" alt="" height="350px" width="200px">
<div class="rating">Rating: ${data.rating}</div>
<div class="year">Year: ${data.year}</div>
<div class="genre">Genre: ${data.genre}</div>
<div class="genre">Director: ${data.director}</div>
<div class="genre">Plot: ${data.plot}</div>
<div class="genre">Actor: ${data.actors}</div>
<button class='delete${data.id}'>Delete</button>
<button class="edit${data.id}">Edit</button>
<hr>
</div>

`
    )
    return paddy
}

// // ---- notes

//delete method
// function deletePost(movieid){
//     fetch(`https://showy-dynamic-icebreaker.glitch.me/movies${movieid}`,{
//         method: "DELETE",
//     })
//         .then(response => console.log(response))
//         .then(function (){
//             location.reload()
//         })
//         .catch(error => console.error(error))
// }
//add to movieCards {<button class="deleteBTN" type="button" onclick="deletePost(${data.id}" data-id="${data.id}">Get Out Of Here!</button>




