console.log('Serwisy do testowania AJAX');


// Serwisy do testowania AJAX
// Podczas pracy nad projektami może się zdarzyć, że nie posiadamy jeszcze API, z którego będziemy pobierać dane. W takiej sytuacji przydatne są serwisy do testowania AJAX, na przykład:

// Najbardziej popularne serwisy do testowania zapytań AJAXowych
// ReqRes – https://reqres.in/
// JSON Placeholder – https://jsonplaceholder.typicode.com/


// reqRes
let user = {
        "name": "Adam",
        "job": "Developer"
    }

fetch ('https://reqres.in/api/users', {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(user),

})
.then(response => response.json())
.then(json=>console.log(json))
.catch((error)=>{
    console.log(error);
});

// fetch('https://jsonplaceholder.typicode.com/photos')
//       .then(response => response.json())
//       .then(json => console.log(json))

