console.log('Ajax Method');

// Metoda $.ajax()
// Funkcja $.ajax() daje możliwość pobierania/wysyłania danych w dowolnym formacie, np. JSON lub XML oraz za pomocą dowolnej metody (GET, POST, PUT, DELATE, OPTION).

// Funkcja ta daje duże możliwości dostosowywania jej użycia – można tworzyć obsługę błędów, wykonywać operacje w zależności od zwróconego błędu (np. błąd z kodem 404).

// Pierwszym sposobem użycia $.ajax() jest wywołanie tej funkcji z jednym parametrem – obiektem przechowującym ustawienia połączenia.

// Gdzie:

// url – źródło danych
// statusCode – funkcje wywoływane po otrzymaniu określonego kodu
// success – funkcja wywoływana po prawidłowym otrzymaniu danych
// error – funkcja uruchamiana w momencie pojawienia się błędu

// Drugim sposobem jest użycie metod dostępnych dla obiektu jqXHR
// $.ajax() podobnie jak w metody $.get(), czy $.getJSON() zwraca dane jako obiekt jqXHR. Z tego powodu mamy do dyspozycji metody takie jak .done() czy .fail()

// Więcej na temat $.ajax(): https://api.jquery.com/jquery.ajax/


$(document).ready(function () {

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users/1',
        statusCode: {
            200: function () {
                console.log('OK - wszystko gra!')
            }
        },
        success: function (data) {
            console.log(data);
            console.log(data.name);
            console.log(data.email);
        },
        error: function (error) {
            console.log(error);
        }

    });

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users/1',
        statusCode: {
            200: function () {
                console.log('OK - wszystko gra!')
            }
        },

    })
        .done(function (data) {
            console.log(data);
            console.log(data.name);
            console.log(data.email);
        })
        .fail(function (error) {
            console.log(error);
        })
})