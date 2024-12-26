// Metoda jQuery .getJSON() pozwala na pobieranie danych w formacie JSON.

// Metoda ta działa bardzo podobnie do $.get(), z tą różnicą, że nie mamy możliwości pobrać danych w innym formacie niż JSON.

// Dokładnie tak jak w przypadku metody $.get(), $.getJSON() możemy użyć na dwa sposoby:

// 1. Podając dwa parametry (źródło danych oraz funkcja anonimowa)

// 2. Podając jeden parametr (źródło danych)
//Więcej na temat metody $.getJSON(): https://api.jquery.com/jQuery.getJSON/

$(document).ready(function () {
    $.getJSON('https://jsonplaceholder.typicode.com/users/1', function (data) {
        console.log(data);
        console.log(data.name);
        console.log(data.email);
    })
    
    $.getJSON('https://jsonplaceholder.typicode.com/users/1')
        .done(function (data) {
            console.log(data);
            console.log(data.name);
            console.log(data.email);
        })
        .fail(function (error) {
            console.log(error)
        })

});