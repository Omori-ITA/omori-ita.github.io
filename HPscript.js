var lang = "";
var intervallo;

function swap_lang(isModal) {

    lang = document.getElementById('lang').textContent == "ITA" ? "ENG" : "ITA";
    document.getElementById('lang').innerText = lang;
    var text = text_array(lang);

    if(!isModal){

        document.getElementById('project').innerText = text[1];

        document.getElementById('date').innerText = text[2];
        document.getElementById('novita').innerText = text[3];
        document.getElementById('dati_supporto').innerText = text[4];
        document.getElementById('paragraph-copyright').innerText = text[5];

        if (lang == "ENG"){

            document.getElementById('swap-btn').innerText = "CLICCA QUI PER CAMBIARE LINGUA";
            index = 0;
            document.getElementById("intro-title").innerText = " ";
            stringa = "WELCOME TO WHITE SPACE";

            document.getElementById('project-title').innerText = "THE PROJECT";
            document.getElementById('news').innerText = "NEWS";
            document.getElementById('support').innerText = "SUPPORT";
            document.getElementById('title-trailer').innerText = "WATCH THE BETA 0.0.3 TRAILER!";
        }

        else{
            document.getElementById('swap-btn').innerText = "CLICK HERE TO CHANGE LANGUAGE";

            index = 0;
            document.getElementById("intro-title").innerText = " ";
            stringa = "BENVENUTO NELLO SPAZIO BIANCO";

            document.getElementById('project-title').innerText = "IL PROGETTO";
            document.getElementById('news').innerText = "AGGIORNAMENTI";
            document.getElementById('support').innerText = "SUPPORTO";
            document.getElementById('title-trailer').innerText = "GUARDA IL TRAILER DELLA BETA 0.0.3!"
        }
    }

    else{

        /*Posizione 0 per disclaimer*/


        if(lang == "ENG"){
            document.getElementById('confirm').innerText = "Understand";
            document.getElementById("swap-lang-modal").innerText = "🇬🇧";
            document.getElementById('modal-body').innerText = text[0];
        }

        else{
            document.getElementById('confirm').innerText = "Ho capito";
            document.getElementById("swap-lang-modal").innerText = "🇮🇹";
            document.getElementById('modal-body').innerText = text[0];
        }

    }

}

function load_page() {

    /*CARICA TUTTE LE RISORSE ALL'AVVIO DELLA PAGINA*/

    var temp = text_array("ITA");

    document.getElementById('modal-body').innerText = temp[0];

    /*Posizione 1 per progetto*/
    document.getElementById('project').innerText = temp[1];

    /*Posizione 2 per la data in novità*/
    document.getElementById('date').innerText = temp[2];

    /*Posizione 3 per il testo in novità*/
    document.getElementById('novita').innerText = temp[3];

    /*Posizione 4 per il testo in supporto*/
    document.getElementById('dati_supporto').innerText = temp[4];

    /*Posizione 5 per il testo in copyright*/
    document.getElementById('paragraph-copyright').innerText = temp[5];

}




//CARICA LE IMMAGINI DELLA SEZIONE SCREENSHOT
function loadImage() {

    var card = document.getElementById("slider-item");
    var insideCard = document.createElement('div');
    insideCard.className = "item active";

    for (var i = 0; i < 6; i++) {
        var img = document.createElement('img');
        img.src = "res/screenshot/CATTURA" + i + ".jpg";

        insideCard.appendChild(img);
        card.appendChild(insideCard);

        insideCard = document.createElement('div');
        insideCard.className = "item";
    }

    slides=document.querySelector('.slider-items').children;
    totalSlides=slides.length;
}

var index = 0;
var stringa = "BENVENUTO NELLO SPAZIO BIANCO";

function displayString() {

        if(index >= stringa.length) {
            index = 0;
            document.getElementById("intro-title").innerText = " ";
        }

        document.getElementById("intro-title").append(stringa[index]);

        index++;


}

/*FUNZIONA*/
function darkMode() {

    var audio = new Audio('res/sound/drop.mp3');
    audio.play();

    var dm = document.getElementById('lightbulb').className == "dm-off" ? "dm-on" : "dm-off";
    document.getElementById('lightbulb').className = dm;

    if(dm == "dm-on"){
        $("#lightbulb").attr("src", "res/unnamed.gif");

        $("#twitter").css({
            "webkit-filter" : "invert(100%)"
        });

        $("#trailer-yt").css({
            "webkit-filter" : "invert(100%)"
        });

        $("#gallery").css({
            "webkit-filter" : "invert(100%)"
        });

        $(".container-screenshot img").css({
            "border": "3px solid white"
        });

        $("#discord").css({
            "webkit-filter" : "invert(100%)"
        });

        $(".container").css({
            "webkit-filter" : "invert(100%)"
        });





    }

    else{
        $("#lightbulb").attr("src", "res/lightbulb_Omori.gif");

        $(".container").css({
            "webkit-filter" : "invert(0%)"
        });

        $("#twitter").css({
            "webkit-filter" : "invert(0%)"
        });

        $("#trailer-yt").css({
            "webkit-filter" : "invert(0%)"
        });

        $("#gallery").css({
            "webkit-filter" : "invert(0%)"
        });

        $(".container-screenshot img").css({
            "border": "3px solid black"
        });

        $("#discord").css({
            "webkit-filter" : "invert(0%)"
        });

        $(".container").css({
            "webkit-filter" : "invert(0%)"
        });
    }

}

function showDisclaimer() {
    let saveChoice = localStorage.getItem('preference');

    if(!saveChoice){
        /*Se preferenza non c'e', visualizza il modal*/

        $("#modal").css({
            "transform": "translate(-50%, -50%) scale(1)"
        });

        $("#overlay").css({
            "pointer-events" : "all",
            "opacity": "1"
        });

    }
}

function confirm(flag) {
    if(flag){
        localStorage.setItem('preference', true);
    }

    $("#modal").css({
        "transform": "translate(-50%, -50%) scale(0)"
    });

    $("#overlay").css({
        "pointer-events" : "none",
        "opacity": "0",
        "z-index" : "0"
    });
}

// CONTIENE LE STRINGHE ITALIANE E INGLESI
function text_array(lang) {

    var ita_array = []
    var eng_array = []

    /*--ITA--*/

    ita_array = [
        /*QUA CI VA IL DISCLAIMER*/
        "OMORI, con tutto il relativo materiale, è di proprietà di OMOCAT e del suo team." +
        "Questo progetto non è assolutamente a fini di lucro, e il nostro è un team di fan volontari che desidera solamente rendere questo bellissimo gioco più accessibile ad un pubblico italiano.",

        /*QUA CI VA IL PROGETTO*/
        "Ciao! Questo è un progetto non ufficiale di traduzione in italiano del videogioco OMORI di OMOCAT," +
        " disponibile su Steam. Dato che l'unica localizzazione ufficiale ad essere stata annunciata è quella giapponese," +
        " è sorta una serie di progetti di traduzione in altre lingue fatti dai fan, e questo è uno dei tanti. Di base la traduzione" +
        " è una mod da utilizzare con Gilbert's Mod Loader, anche chiamato GOMORI. (ATTENZIONE: Una volta installato GOMORI, il gioco non sarà più avviabile da OMORI.exe," +
        " ma dovrete aprirlo dalla libreria di Steam. Perciò avrete bisogno di una copia del gioco LEGITTIMA su Steam.)",

        /*QUA CI VANNO LA DATA E POI LA NOVITA'*/
        "22/05/2021",
        "AUGURI CLAUS! Attualmente abbiamo quasi completato l’intera traduzione di OMORI. Mancano infatti solo alcune immagini e varie correzioni per rimuovere definitivamente " +
        "gli errori di scrittura rimasti. Per maggiori informazioni o per qualsiasi domanda vi consigliamo di unirvi al gruppo DISCORD di cui trovate l’invito in fondo alla pagina :)",

        /*SEZIONE CONTATTI*/
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at consectetur delectus dolorem doloremque exercitationem " +
        "laborum minus placeat, provident quas sunt temporibus! Id, praesentium reiciendis?",

        /*SEZIONE COPYRIGHT*/
        "Tutti i diritti riservati (All Rights Reserved in lingua inglese) è una formula con cui il titolare del diritto d'autore dichiara " +
        "che una determinata opera dell'ingegno non è riproducibile senza la sua espressa autorizzazione."

    ]


    /*--ENG--*/
    eng_array = [
        /*QUA CI VA IL DISCLAIMER*/
        "OMORI, with all its relative assets, is property of OMOCAT and her team. " +
        "We are absolutely not profiting off of this project, and ours is a team of volunteer fans who just wish to make this beautiful game more accessible to an Italian public.",

        /*QUA CI VA IL PROGETTO*/
        "Hi! This is an unofficial Italian translation project of the videogame OMORI by OMOCAT, available on Steam. Since the only official localization that got announced is the Japanese one, " +
        "a series of fanmade translation projects popped up, and this is one of many. Our translation is basically a mod to be used with Gilbert's Mod Loader, " +
        "also known as GOMORI. (NOTE: Once you install GOMORI, you won't be able to start the game by opening OMORI.exe anymore, and instead you'll have to open it from your Steam library. " +
        "So, you're going to need a LEGIT copy of the game on Steam.)",

        /*QUA CI VANNO LA DATA E POI LA NOVITA'*/
        "14/04/2021",
        "HAPPY BDAY CLAUS! " +
        "Currently we have almost completed the OMORI translation. In fact, only some images and various corrections to remove writing mistakes are missing. " +
        "For more information or for any question we suggest you to join the DISCORD server of which you find the invite at the end of the page.",

        /*SEZIONE CONTATTI*/
        "Lorem15112651545 ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at consectetur delectus dolorem doloremque exercitationem  " +
        "laborum minus placeat, provident quas sunt temporibus! Id, praesentium reiciendis?",

        /*SEZIONE COPYRIGHT*/
        "All Rights Reserved (All Rights Reserved in English) is a formula with which the copyright holder declares that a certain intellectual work " +
        "cannot be reproduced without his express authorization."
    ]

    if(lang == "ITA"){
        return ita_array;
    }

    else{
        return eng_array;
    }
}



var ind=0;
var totalSlides;
var slides;
document.addEventListener("DOMContentLoaded", function(){

    var nextSlide=document.querySelector(".right-slide");
    var prevSlide=document.querySelector(".left-slide");



    nextSlide.onclick=function () {
        next("next");
    }



    prevSlide.onclick=function () {
        next("prev");
    }

});

function next(direction){

    if(direction=="next"){
        /*clearInterval(intervallo);*/
        ind++;
        if(ind==totalSlides){
            ind=0;
        }
    }



    if(direction=="prev"){
        /*clearInterval(intervallo);*/
        if(ind==0){
            ind=totalSlides-1;
        }
        else{
            ind--;
        }
    }

    if(!direction){
        ind++;
        if(ind==totalSlides){
            ind=0;
        }
    }

    for(i=0;i<slides.length;i++){
        slides[i].classList.remove("active");
    }
    slides[ind].classList.add("active");

}













