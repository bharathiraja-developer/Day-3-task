let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);

    for (let detail of data) {
       console.log(detail.name);
        console.log(detail.region);
        console.log(detail.subregion);
        console.log(detail.population);
    }
};

xhr.send();