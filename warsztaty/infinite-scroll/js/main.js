//var wysokoscDokumentu = document.documentElement.offsetHeight;
//var odlegloscOdPoczatku = document.documentElement.scrollTop;
//var wysokoscEkranu = window.innerHeight;

window.addEventListener('scroll', function () {
    //Pobieramy do zmiennej element html
    var doc = document.documentElement;
    //pobieramy wysokosc elementu html
    var docHeight = doc.offsetHeight;
    // pobieramy odleglosc bieżącej pozycji okna względem poczatku dokumentu 
    var top_ = doc.scrollTop;
    // pobieramy wsokość okna przeglądarki
    var windowHeight = window.innerHeight;
    //obliczam biezace położenie okna przeglądarki
    var topOffset = Math.ceil(top_ + windowHeight);

    //jeżeli bieżace położenie okna przeglądarki == wysokośći całego dokumentu, wykonuje zapytanie ajax i dostawia na koncu listy nowe dane
    if (topOffset >= docHeight) {
        $.getJSON('https://jsonplaceholder.typicode.com/users', function (data) {
            var newListElement = " ";
            data.forEach(function (elem, index) {
                newListElement += "<p>" + elem.id + elem.name + elem.website + "</p>";
            })
            document.getElementById('imiona').insertAdjacentHTML('beforeend', newListElement);
        })

    }

})
