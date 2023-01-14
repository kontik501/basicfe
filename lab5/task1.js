let form = document.querySelector(".valid-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    validate();
}

function validate() {
    let data = [
        {
            id: "name",
            regex:
                /^[A-ZА-ЯІЇЄ]{1}[a-zа-яіїє]+ [A-ZА-ЯІЇЄ]{1}[\.][A-ZА-ЯІЇЄ]{1}[\.]$/,
            isValid: false,
        },
        {
            id: "group",
            regex: /^\d{2}$/,
            isValid: false,
        },
        {
            id: "phone",
            regex:
                /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s]{1}[0-9]{3}[-\s]{1}[0-9]{2}[-\s]{1}[0-9]{2}$/,
            isValid: false,
        },
        {
            id: "card",
            regex: /^[A-ZА-ЯІЇЄ]{2} [№]\d{6}$/,
            isValid: false,
        },
        {
            id: "faculty",
            regex: /^[A-ZА-ЯІЇЄ]{4}$/,
            isValid: false,
        },
    ];

    data.map((element) => {
        checkRegex(element);
    });

    let isValidFields = data.every((element) =>
        Object.values(element).every((value) => value)
    );
    reset(data);
    if (isValidFields) {
        console.log(
            "inside validate " + document.querySelector(".info").style.display
        );
        if (document.querySelector(".info").style.display !== "block") {
            displayInputedData(data);
        }
    } else {
        displayError(data);
    }
}

function checkRegex(element) {
    if (element.regex.test(document.getElementById(element.id).value)) {
        element.isValid = true;
    }
}

function displayInputedData(data) {
    document.querySelector(".info").style.display = "block";

    let info = document.querySelector(".info");
    info.style.display = "block";
    let divEl = document.createElement("div");
    divEl.classList.add("border");
    info.appendChild(divEl);

    let textEL = document.createElement("h3");
    textEL.classList.add("form-text");
    textEL.innerHTML = "Entered info";
    divEl.appendChild(textEL);

    let ulEl = document.createElement("ul");
    ulEl.classList.add("inputed");
    divEl.appendChild(ulEl);

    data.map((element) => displayElement(element));
}

function displayElement(element) {
    let ulEl = document.querySelector(".inputed");
    let liElement = document.createElement("li");

    liElement.innerHTML = document.getElementById(element.id).value;
    ulEl.appendChild(liElement);

    document.querySelector(".info").style.display = "block";
}

function displayError(data) {
    document.querySelector(".info").style.display = "none";

    data.map(function (element) {
        if (element.isValid === false) {
            console.log(document.getElementById(element.id));
            document.getElementById(element.id).style.border = "2px solid red";
        }
    });
    while (document.querySelector(".info").firstChild) {
        document.querySelector(".info").firstChild.remove();
    }
}

function reset(data) {
    data.map(function (element) {
        if (element.isValid === true) {
            document.getElementById(element.id).style.border = "1px solid #000475";
        }
    });
}