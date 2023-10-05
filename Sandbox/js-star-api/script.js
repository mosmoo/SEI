const url = 'https://swapi.dev/api/people/1'
fetch(url)
    .then(res => {
        return res.json();
    })
    .then(res => {
        console.log("success!", res);
    })
    .catch(err => {
        console.log("something went wrong...", err);
    });

