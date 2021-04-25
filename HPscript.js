var lang = "";
var intervallo;
var changeText = window.matchMedia("(max-width: 850px)");


function swap_lang(isModal) {

    lang = document.getElementById('lang').textContent == "ITA" ? "ENG" : "ITA";
    document.getElementById('lang').innerText = lang;
    var text = text_array(lang);

    var winWidth = $(window).width();

    if(!isModal){

        document.getElementById('project').innerText = text[1];

        document.getElementById('date').innerText = text[2];
        document.getElementById('novita').innerText = text[3];
        document.getElementById('dati_supporto').innerText = text[4];
        document.getElementById('paragraph-copyright').innerText = text[5];

        if (lang == "ENG"){

            index = 0;
            document.getElementById("intro-title").innerText = " ";
            stringa = "WELCOME TO WHITE SPACE";

            document.getElementById('project-title').innerText = "THE PROJECT";
            document.getElementById('news').innerText = "NEWS";
            document.getElementById('support').innerText = "SUPPORT";
            document.getElementById('title-trailer').innerText = "WATCH THE BETA 0.0.3 TRAILER!";
        }

        else{

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

            $("#swap-lang-modal").css({
                "background-image" : "url(res/italy.png)"
            });

            document.getElementById('modal-body-p').innerText = text[0];
        }

        else{
            document.getElementById('confirm').innerText = "Ho capito";

            $("#swap-lang-modal").css({
                "background-image" : "url(res/english.png)"
            });

            document.getElementById('modal-body-p').innerText = text[0];
        }

    }

    myFunction(changeText);
    changeText.addListener(myFunction);

}

function myFunction(x) {

    var lingua = document.getElementById('lang').textContent;

    if (x.matches) {
        if (lingua == "ENG"){
            document.getElementById('swap-btn').innerText = "CAMBIA LINGUA";
            document.getElementById('btn-swap-lingua').innerText = "CAMBIA LINGUA";
        }else {
            document.getElementById('swap-btn').innerText = "SWAP LANGUAGE";
            document.getElementById('btn-swap-lingua').innerText = "SWAP LANGUAGE";
        }

    } else {
        if (lingua == "ENG"){
            document.getElementById('swap-btn').innerText = "CLICCA QUI PER CAMBIARE LINGUA";
            document.getElementById('btn-swap-lingua').innerText = "CLICCA QUI PER CAMBIARE LINGUA";

        }else {
            document.getElementById('swap-btn').innerText = "CLICK HERE TO CHANGE LANGUAGE";
            document.getElementById('btn-swap-lingua').innerText = "CLICK HERE TO CHANGE LANGUAGE";
        }
    }
}

function load_page() {

    /*CARICA TUTTE LE RISORSE ALL'AVVIO DELLA PAGINA*/

    myFunction(changeText, lang);
    changeText.addListener(myFunction);

    var temp = text_array("ITA");


    document.getElementById('modal-body-p').innerText = temp[0];

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

function isDarkMode() {
    /*SE DARKMODE NON ESISTE, ALLORA SETTALA A NEGATIVO (false)*/
    var savePref = localStorage.getItem('darkMode');

    if (!savePref) {
        localStorage.setItem('darkMode', false);

        return;
    }

    if (savePref == "true") {
        darkMode(true);
    }
}


/*FUNZIONA*/
function darkMode(flag) {

    if (!flag){
        var audio = new Audio('res/sound/drop.mp3');
        audio.play();
    }


    var dm = document.getElementById('lightbulb').className == "dm-off" ? "dm-on" : "dm-off";
    document.getElementById('lightbulb').className = dm;

    if(dm == "dm-on"){

        localStorage.setItem('darkMode', true);

        $("#lightbulb").css({
            "webkit-filter" : "invert(100%)"
        });

        $(".btn:hover").css({
            "box-shadow" : "0.5px 5px 3px 3px #535353"
        });

        $("#lightbulb-mobile").css({
            "webkit-filter" : "invert(100%)"
        });

        $("#btn-swap-lingua").css({
            "border" : "2px solid white",
            "background-color" : "black",
            "color" : "white"
        });

        $("#modal").css({
            "border" : "3px solid white",
            "background-color" : "black",
            "color" : "white"
        });

        $(".modal-header").css({
            "border" : "1px solid white",
        });

        $(".close-button").css({
            "color" : "white"
        });

        $(".close-button:hover").css({
            "background-color": "white"
        });

        $("#confirm").css({
            "border" : "2px solid white",
            "background-color" : "black",
            "color" : "white"
        });

        $("#swap-btn").css({
            "border" : "2px solid white",
            "background-color" : "black",
            "color" : "white"
        });

        $("#big-logo").css({
            "webkit-filter" : "invert(100%)"
        });

        $("#italian").css({
            "webkit-filter" : "invert(100%)"
        });

        $(".container").css({
            "background-color" : "black"
        });

        $(".container-screenshot img").css({
            "border": "3px solid white"
        });

        $(".header").css({
            "background-color" : "black"
        });

        $("#intro-title").css({
            "color" : "white"
        });

        $(".container-button-downloads a").css({
            "color" : "white"
        });

        $(".btn").css({
            "border" : "3px solid white",
            "background-color" : "black"
        });

        $(".container-info").css({
            "border" : "2px solid white",
            "background-color" : "black"
        });

        $(".container-info h1").css({
            "color" : "white"
        });

        $(".container-info h2").css({
            "color" : "white"
        });

        $("#novita").css({
            "color" : "white"
        });

        $("#section-trailer").css({
            "background-color" : "black",
            "border" : "2px solid white"
        });

        $("#title-trailer").css({
            "color" : "white"
        });

        $("#dati_supporto").css({
            "color" : "white"
        });

        $(".container-slider").css({
            "background-color" : "black",
            "border" : "2px solid white"
        });

        $(".container-slider h1").css({
            "color" : "white"
        });

        $("#project").css({
            "color" : "white"
        });

        $(".btn-swap-lingua").css({
            "border" : "3px solid white",
            "background-color" : "black",
            "color" : "white"
        });

        $("#paragraph-copyright").css({
            "color" : "white"
        });

    }

    else{

        localStorage.setItem('darkMode', false);

        $("#lightbulb").css({
            "webkit-filter" : "invert(0%)"
        });

        $("#lightbulb-mobile").css({
            "webkit-filter" : "invert(0%)"
        });

        $("#btn-swap-lingua").css({
            "border" : "2px solid black",
            "background-color" : "white",
            "color" : "black"
        });

        $("#swap-btn").css({
            "border" : "2px solid black",
            "background-color" : "white",
            "color" : "black"
        });

        $("#big-logo").css({
            "webkit-filter" : "invert(0%)"
        });

        $("#italian").css({
            "webkit-filter" : "invert(0%)"
        });

        $(".container").css({
            "background-color" : "white"
        });

        $(".container-screenshot img").css({
            "border": "3px solid black"
        });

        $(".header").css({
            "background-color" : "white"
        });

        $("#intro-title").css({
            "color" : "black"
        });

        $(".container-button-downloads a").css({
            "color" : "black"
        });

        $(".btn").css({
            "border" : "3px solid black",
            "background-color" : "white"
        });

        $(".container-info").css({
            "border" : "2px solid black",
            "background-color" : "white"
        });

        $(".container-info h1").css({
            "color" : "black"
        });

        $(".container-info h2").css({
            "color" : "black"
        });

        $("#novita").css({
            "color" : "black"
        });

        $("#section-trailer").css({
            "background-color" : "white",
            "border" : "2px solid black"
        });

        $("#title-trailer").css({
            "color" : "black"
        });

        $("#dati_supporto").css({
            "color" : "black"
        });

        $(".container-slider").css({
            "background-color" : "white",
            "border" : "2px solid black"
        });

        $(".container-slider h1").css({
            "color" : "black"
        });

        $("#project").css({
            "color" : "black"
        });

        $(".btn-swap-lingua").css({
            "border" : "3px solid black",
            "background-color" : "white",
            "color" : "black"
        });

        $("#paragraph-copyright").css({
            "color" : "black"
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













