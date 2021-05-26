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
            document.getElementById('title-trailer').innerText = "WATCH THE TRAILER OF THE DEFINITIVE VERSION!";
            document.getElementById('form-google').innerText = "CLICK HERE FOR THE GOOGLE FORM";
            document.getElementById('screen').innerText = "SCREENSHOTS";
            document.getElementById('contact_people').innerText = "What if I want to contact someone?"

        }

        else{

            index = 0;
            document.getElementById("intro-title").innerText = " ";
            stringa = "BENVENUTO NELLO SPAZIO BIANCO";

            document.getElementById('project-title').innerText = "IL PROGETTO";
            document.getElementById('news').innerText = "AGGIORNAMENTI";
            document.getElementById('support').innerText = "SUPPORTO";
            document.getElementById('title-trailer').innerText = "GUARDA IL TRAILER DELLA VERSIONE DEFINITIVA!";
            document.getElementById('screen').innerText = "SCREENSHOT";
            document.getElementById('form-google').innerText = "CLICCA QUI PER IL FORM GOOGLE";
            document.getElementById('contact_people').innerText = "E se volessi contattare qualcuno?";
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

        $("#confirm").css({
            "border" : "2px solid white",
            "background-color" : "black",
            "color" : "white"
        });

        $(".support-user").css({
            "border" : "2px solid white",
            "color" : "white"
        });

        $("#contact_people").css({
            "color" : "white"
        });

        $("#form-google").css({
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

        $(".support-user").css({
            "border" : "2px solid black",
            "color" : "black"
        });

        $("#contact_people").css({
            "color" : "black"
        });

        $("#form-google").css({
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
        "OMORI, con tutto il relativo materiale, è di proprietà di OMOCAT e del suo team. " +
        "Questo progetto non è assolutamente a fini di lucro, e il nostro è un team di fan volontari che desidera solamente rendere questo bellissimo gioco più accessibile ad un pubblico italiano.",

        /*QUA CI VA IL PROGETTO*/
        "Benvenuti sul sito della traduzione italiana NON ufficiale di OMORI, videogioco di OMOCAT e disponibile su Steam. Abbiamo deciso di iniziare " +
        "la traduzione di questo gioco perché l'unica localizzazione annunciata ufficialmente è stata quella giapponese, coreana e cinese. " +
        "Ci sembrava oppurtuno permettere anche a chi non conosce l'inglese, di godere di questo splendido titolo. Per installare la traduzione, " +
        "basta cliccare sul tasto sopra questa sezione e scegliere l'installer appropriato per il proprio sistema operativo. Se avete dubbi o problemi, " +
        "potete accedere al server discord, oppure consultare la sezione supporto per maggiori delucidazioni!",
        /*QUA CI VANNO LA DATA E POI LA NOVITA'*/
        "30/05/2021",
        "Abbiamo rilasciato la versione completa con immagini, dialoghi e descrizioni tradotte interamente in italiano. Nel caso riscontriate errori o ci fossero problemi di natura esterna alla traduzione, " +
        "consultate la sezione \"supporto\" disponibile poco più in basso. Speriamo che il nostro lavoro possa aver reso onore alla versione inglese di questo spettacolare gioco!",


        /*SEZIONE CONTATTI*/
        "Hai riscontrato dei problemi con l'installer, hai degli errori da segnalare o domande da fare? " +
        "Qui puoi trovare le risposte che cerchi! Se si hanno richieste un po' più formali, è disponibile anche la nostra email ufficiale:",

        /*SEZIONE COPYRIGHT*/
        "Tutti i marchi registrati, i nomi relativi a persone, cose o luoghi presenti in qualunque forma all'interno del sito appartengono ai legittimi proprietari (OMOCAT, LLC). " +
        "Questa è una traduzione non ufficiale  e non a scopo di lucro, senza l'intenzione di snaturare o denigrare l'indirizzo originale del brand. " +
        "In seguito a qualsiasi sollecitazione da parte del detentore della proprietà intellettuale siamo disposti ad entrare in contratto."

    ]


    /*--ENG--*/
    eng_array = [
        /*QUA CI VA IL DISCLAIMER*/
        "OMORI, with all its relative assets, is property of OMOCAT and her team. " +
        "We are absolutely not profiting off of this project, and ours is a team of volunteer fans who just wish to make this beautiful game more accessible to an Italian public.",

        /*QUA CI VA IL PROGETTO*/
        "Welcome to the unofficial Italian translation website of OMORI, OMOCAT’s videogame, you can retrieve on Steam. " +
        "We started the translation of this game as the only official versions that have been announced would be the Japanese, Korean and Chinese ones. " +
        "We thought it would be nice to let non-English speakers appreciate this splendid game. " +
        "For installing the translation, you should click on this section button and choose the right installer for your operating system. If you have any doubts or problems, contact us on discord, or consult us on this supporting section for any questions!",


        /*QUA CI VANNO LA DATA E POI LA NOVITA'*/
        "30/05/2021",
        "We have released the full Italian translation version with images, dialogues and descriptions. " +
        "In case of occurring mistakes or any problems not related to the translation consult the “support” section below. " +
        "We hope, with our translation, we will do justice to the English version of this spectacular game!",


    /*SEZIONE CONTATTI*/
        "Have you encountered problems with the installer, " +
        "do you have any errors to report or questions to ask? " +
        "Here you can find the answers you are looking for! If you have a bit more formal requests, our official email is also available:",

        /*SEZIONE COPYRIGHT*/

        "All trademarks registered, names of people, thing and places mentioned in the website belong to their lawful owners (OMOCAT, LLC). " +
        "This is an unofficial and non-profit translation, with no intention to change or to put down the brand’s original scope. " +
        "Following any likely suggestion from the holder of the brand’s intellectual property we are willing to be in touch.",

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













