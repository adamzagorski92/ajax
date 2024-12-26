console.log('Send and Get data');

let formCreateUser = document.getElementById('create-user');
let btnGetRandomUser = document.getElementById('get-random-user');

// https://www.w3schools.com/tags/ref_httpmethods.asp

// API do pobierania danych - https://akademia108.pl/api/ajax/get-random-user.php
// - method GET


const getUser = () => {
    fetch('https://akademia108.pl/api/ajax/get-random-user.php', {
        mode: 'cors', //default mode 

        method: 'GET', // allowed
        // method: 'POST', // allowed by CORS, but not allowed bu server
        // method: 'PUT', // NOT allowed on server by CORS
    })
        .then(res => res.json())
        .then(resJSON => {
            console.log(resJSON)
        })
        .catch((error) => {
            console.error('Error:', error)
        });
}

btnGetRandomUser.addEventListener('click', getUser);


// API do wysyłania danych - https://akademia108.pl/api/ajax/post-user.php
// method: POST
// Content-type: application/json

// Send JSON data => POST User

const createUser = () => {
    let errors = [];

    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let occupation = document.getElementById('occupation');
    let company = document.getElementById('company');

    let errorsUl = document.getElementById('errors');
    errorsUl.innerHTML = '';
    let pMsg = document.getElementById('msg');
    pMsg.innerHTML = '';

    if (firstName.value.trim() === '') {
        errors.push('Podaj imię')
    }
    if (lastName.value.trim() === '') {
        errors.push('Podaj nazwisko')
    }
    if (occupation.value.trim() === '') {
        errors.push('Podaj zawód')
    }
    if (company.value.trim() === '') {
        errors.push('Podaj firmę')
    }

    if (errors.length > 0) {
        for (const error of errors) {
            let errorLi = document.createElement('li')
            errorLi.innerText = error;
            errorsUl.appendChild(errorLi)

        }
        return false;
    };

    let user = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        occupation: occupation.value.trim(),
        company: company.value.trim(),
    };

    fetch('https://akademia108.pl/api/ajax/post-user.php', {
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors', //default mode 

        method: 'POST', // allowed
        // method: 'POST', // allowed by CORS, but not allowed bu server
        // method: 'PUT', // NOT allowed on server by CORS

        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(resJSON => {
            console.log(resJSON)

            if(!resJSON.errors) {
                formCreateUser.reset();
                pMsg.innerText= resJSON.messages[0];
            }
        })
        .catch((error) => {
            console.error('Error:', error)
        });
}

formCreateUser.addEventListener('submit', createUser);


