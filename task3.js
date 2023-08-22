let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);

    for (let detail of data) {
       console.log('country name : ',detail.name.common);
        console.log('region : ',detail.region);
        console.log('subregion : ',detail.subregion);
        console.log('population : ',detail.population);
    }
};

xhr.send();