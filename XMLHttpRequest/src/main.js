console.log('HXMLHttpRequest - obecnie coraz rzadziej się tego używa, ale warto poznać historię');

const getUserData = () => {
// creating new object 
let httpReq = new XMLHttpRequest();




// open - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
httpReq.open('GET', 'https://jsonplaceholder.typicode.com/users/1');


// jeśli status połączenia został zmieniony -> httpReq.readyState
// 0: połączenie nie nawiązane,
// 1: połączenie nawiązane,
// 2: żądanie odebrane,
// 3: przetwarzanie,
// 4: dane zwrócone i gotowe do użycia.
// https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
httpReq.onreadystatechange = () => {

    // 4: dane zwrócone i gotowe do użycia.
    if (httpReq.readyState === 4) {

        // Kody statusu połączenia HTTP - https://pl.wikipedia.org/wiki/Kod_odpowiedzi_HTTP
        if (httpReq.status === 200) {

            let data = httpReq.responseText; // pobranie
            let dataJSON = JSON.parse(data); // zamiana na obiekt JSON
            
            // console.log(data);
            // console.log(dataJSON);
            console.log(dataJSON.name);
            console.log(dataJSON.email);

            httpReq = null; //zwolnij obiekt z pamięci, aby nie utrzymywać niepotrzebnego już połączenia z serwerem
        }

    }

}

httpReq.send();
}

setInterval(getUserData,10000);