document.getElementsByTagName("input")[0].onclick = ustawTlo;

function ustawTlo() {
    var pElement = document.body.getElementsByTagName("p");

    //pobierz pierwzy paragraf i ustaw tlo

    var myp1 = pElement[0];
    myp1.style.background = "rgb(255,0,0)";

    var myp2 = pElement[1];
    myp2.style.background = "rgb(255,255,0)";
}
