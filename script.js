console.log('hello world!');

//Soal no.1

let printGithub = document.getElementById('github')

function getDataGithub () {
    fetch("https://api.github.com/users/aldi-milano")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        printGithub.innerHTML += `
        <div id="card">
            <div class="boxes">
                <h2>Github Profile</h2>
                <img src=${data.avatar_url}>
            </div>
            <div class="boxes">
                <p class="title">Name</p>
                <p>${data.name}</p>
            </div>
            <div class="boxes">
                <p class="title">Bio</p>
                <p>${data.bio}</p>
            </div>
            <div class="boxes">
                <p class="title">Followers</p>
                <p>${data.followers}</p>
            </div>
            <div class="boxes">
                <p class="title">Following</p>
                <p>${data.following}</p>
            </div>
        </div>
        `
        
    })
    .catch(error => console.log(error));
}

getDataGithub()

//Soal no.2

let printCountry = document.getElementById('negara')

function getListCountry () {
    fetch ("https://restcountries.eu/rest/v2/all")
    .then(function (response) {
        return response.json();
    })
    .then(function (country) {
        console.log(country);
        for(let data in country) {
            console.log(country[data].name);
            printCountry.innerHTML += `
            <div id="country">
            <img src=${country[data].flag}>
            <p>${country[data].name}</p>
            </div>
            `  
        }

    })
}

getListCountry()