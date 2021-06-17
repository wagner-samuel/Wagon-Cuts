var delay = 2000;
var timeoutId = setTimeout(function () {
    $(".loadingMessage").text("These are our movies")
}, delay);






fetch('https://showy-dynamic-icebreaker.glitch.me/movies') // make a request - GET
    .then(response => response.json())
    .then(data =>{
        console.log(data); //
        return data;
    })
    .then(dataId => {
        fetch(`https://showy-dynamic-icebreaker.glitch.me/movies=${data}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                data.forEach(comment => {
                    console.log(comment);
                    $("#comments").append(`<h4>${comment.title}</h4><hr><p>${comment.genre}</p>`);
                });
            });
    })
    .catch(error => {
        // alert(error);
        console.error(error);
    });