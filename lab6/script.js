const requestButton = document.getElementById("requestButton");
const successMessage = document.getElementById("successMessage");
const people = document.getElementById("people");

requestButton.addEventListener('click', () => {
    let person = document.createElement("div")
    person.className = "person";
    people.appendChild(person);
    requestPersonFromAPI(person);
});

function requestPersonFromAPI(person) {
    let link = 'https://randomuser.me/api';
    fetch(link)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            addPerson(data, person);
        })
        .catch(() => {
            successMessage.innerText = "Something went wrong!";
        });

}

function addPerson(data, person) {
    let personInfo = data?.results[0];

    let picture = document.createElement("img");
    picture.src = personInfo?.picture?.large;
    person.appendChild(picture);

    let cell = document.createElement("div");
    cell.innerText = `Cell: ${personInfo?.cell}`
    person.appendChild(cell);

    let city = document.createElement("div");
    city.innerText = `City: ${personInfo?.location?.city}`;
    person.appendChild(city);

    let country = document.createElement("div");
    country.innerText = `Country: ${personInfo?.location?.country}`;
    person.appendChild(country);

    let postcode = document.createElement("div");
    postcode.innerText = `Postcode: ${personInfo?.location?.postcode}`;
    person.appendChild(postcode);


    successMessage.innerText = "success!";
}