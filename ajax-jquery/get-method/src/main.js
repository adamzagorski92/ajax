// Biblioteka jQuery ułatwia tworzenie AJAX’owych zapytań – służy do tego metoda $.get()
// Pozwala na pobieranie danych w dowolnym formacie, np. JSON lub XML.

// Metoda $.get() przyjmuje przynajmniej jeden parametr – źródło, z którego pobierane mają być dane.

// Pierwszym sposobem jej użycia jest podanie drugiego parametru, którym jest funkcja anonimowa. Funkcja ta wykona się w chwili, kiedy dane zostaną prawidłowo pobrane.

// Drugi sposób jqXHR
// Więcej na temat obiektu jqXHR: https://api.jquery.com/Types/#jqXHR
// Na tym obiekcie mamy możliwość wywołania kilku metod: .then(), .done(), .fail(), .pipe(), .progress(), .state(), .promise().

// Więcej na temat $.get(): https://api.jquery.com/jQuery.get/

$(document).ready(function () {
    $.get('https://jsonplaceholder.typicode.com/users/1', function (data) {
        console.log(data);
        console.log(data.name);
        console.log(data.email);
    });

    console.log($.get('https://jsonplaceholder.typicode.com/users/1')
        .done(function (data) {
            console.log(data);
            console.log(data.name);
            console.log(data.email);
        })
        .fail(function(error){
            console.error(error);
        })
    );
})