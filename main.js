const url = 'https://showy-dynamic-icebreaker.glitch.me/movies';

firstScript()

function firstScript() {
    var delay = 1000;
    var timeoutId = setTimeout(function () {
        $(".rocketAnimation").fadeOut(1000);
    }, );
}

secondScript()

        function secondScript() {
            var delay = 2000;
            var timeoutId = setTimeout(function () {
                //     $(".rocketAnimation").fadeOut(3000);
                // }, delay);
                $("#myBtn").append(`<button class="btn btn-primary btn-lg btn-block">Post your movie!</button>`)


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


                $.get(url, {}).done(function (data) {
                    data.forEach(function (data) {
                        $('.movieList').append(movieCards(data))
                        $(`.delete${data.id}`).click(function () {
                            fetch(`https://showy-dynamic-icebreaker.glitch.me/movies/${data.id}`, {
                                method: 'DELETE'
                            })
                                .then(response => console.log(response))
                                .then(function (html) {
                                    location.reload();
                                })
                                .catch(error => console.error(error))
                        })
                        $(`.edit${data.id}`).click(function () {
                            fetch(`https://showy-dynamic-icebreaker.glitch.me/movies/${data.id}`, {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
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
                        `<div>
<h2 class="p-3 mb-2 bg-secondary text-white">Title:${data.title}</h2>
<img class="picture text center" src="${data.poster}" alt="" height="350px" width="250px">
<div class="rating ">Rating: ${data.rating}</div>
<div class="year">Year: ${data.year}</div>
<div class="genre">Genre: ${data.genre}</div>
<div class="director">Director: ${data.director}</div>
<div class="plot">Plot: ${data.plot}</div>
<div class="actors">Actor: ${data.actors}</div>
<button class="delete${data.id}">Delete</button>
<button class="edit${data.id}">Edit</button>
<hr>
</div>
`
                    )
                    return paddy
                }

// modal box start
// Get the modal
                var modal = document.getElementById("myModal");

// Get the button that opens the modal
                var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
                var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
                btn.onclick = function () {
                    modal.style.display = "block";
                }

// When the user clicks on <span> (x), close the modal
                span.onclick = function () {
                    modal.style.display = "none";
                }

// When the user clicks anywhere outside of the modal, close it
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
//modal box end
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


            }, delay);
        }