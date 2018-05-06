var btn = document.getElementById('oblicz');

btn.addEventListener('click', function (e) {

    e.preventDefault();
    oblicz('wynik');

});

function oblicz(wstawDo) {

    var dane = pobierzDane();
    if (dane.podatek) {
        var oprocentowanieOpodatkowane = dane.oprocentowanie - (dane.oprocentowanie * (19 / 100))
    } else {
        var oprocentowanieOpodatowanie = dane.oprocentowanie;
    }
    var suma = dane.wplata * Math.pow(1 + (oprocentowanieOpodatkowane / dane.okresKapitalizacji), dane.iloscLat * dane.okresKapitalizacji);
    suma = parseFloat(suma).toFixed(2);

    wyswietlWynik(suma, wstawDo);
}

function pobierzDane() {
    var wplata = parseInt(document.getElementById('wplata').value);
    var iloscLat = parseInt(document.getElementById('ilosc-lat').value);
    var oprocentowanie = parseInt(document.getElementById('oprocentowanie').value) / 100;
    var okresKapitalizacji = parseInt(document.getElementById('okres-kapitalizacji').value);
    var podatek = document.getElementById('podatek').checked;

    var data = {
        'wplata': wplata,
        'iloscLat': iloscLat,
        'oprocentowanie': oprocentowanie,
        'okresKapitalizacji': okresKapitalizacji,
        'podatek': podatek,
    }
    return data;

}

function wyswietlWynik(kwotaDoWyswietlenia, idElementu) {
    document.getElementById(idElementu).innerHTML = kwotaDoWyswietlenia;
}
