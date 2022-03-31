var lang = "";
var intervallo;
var changeText = window.matchMedia("(max-width: 850px)");


function swap_lang(isModal) {

    lang = document.getElementById('lang').textContent == "ITA" ? "ENG" : "ITA";
    document.getElementById('lang').innerText = lang;
    var text = text_array(lang);

    const string_en = ["SUMMARY", "THE PROJECT", "NEWS", "WATCH THE TRAILER OF THE DEFINITIVE VERSION!", "SUPPORT", "What if I want to contact someone?", "SCREENSHOTS"]
    var winWidth = $(window).width();

    if(!isModal){

        document.getElementById('project').innerText = text[1];

        document.getElementById('date').innerText = text[2];
        document.getElementById('novita').innerText = text[3];
        document.getElementById('dati_supporto').innerText = text[4];
        document.getElementById('paragraph-copyright').innerText = text[5];

        for (let i = 1; i < 17; i++){
            document.getElementById("f" + i).innerText = text[i+5];
        }

        if (lang == "ENG"){


            index = 0;
            document.getElementById("intro-title").innerText = " ";
            stringa = "WELCOME TO WHITE SPACE";

            for (let i = 0; i < 7; i++){

                if (i != 3 && i != 5){
                        console.log(document.getElementById("fast-summary").children.item(i).children.item(0))
                        if (document.getElementById("fast-summary").children.item(i).children.item(0) != null)
                        document.getElementById("fast-summary").children.item(i).children.item(0).innerText = string_en[i]
                    }
            }

            document.getElementById('project-title').innerText = string_en[1];
            document.getElementById('news').innerText = string_en[2];
            document.getElementById('support').innerText = "SUPPORT";
            document.getElementById('title-trailer').innerText = string_en[3];
            document.getElementById('form-google').innerText = "CLICK HERE TO REPORT YOUR ERRORS";
            document.getElementById('screen').innerText = string_en[6];
            document.getElementById('contact_people').innerText = string_en[5];


        }

        else{

            index = 0;
            const string_it = ["SOMMARIO", "IL PROGETTO", "AGGIORNAMENTI", "GUARDA IL TRAILER DELLA VERSIONE DEFINITIVA!", "SUPPORTO", "E se volessi contattare qualcuno?", "SCREENSHOT"]

            document.getElementById("intro-title").innerText = " ";
            stringa = "BENVENUTO NELLO SPAZIO BIANCO";

            for (let i = 0; i < 7; i++){

                if (i != 3 && i != 5){
                    console.log(document.getElementById("fast-summary").children.item(i).children.item(0))
                    if (document.getElementById("fast-summary").children.item(i).children.item(0) != null)
                        document.getElementById("fast-summary").children.item(i).children.item(0).innerText = string_it[i]
                }
            }

            document.getElementById('project-title').innerText = string_it[1];
            document.getElementById('news').innerText = string_it[2];
            document.getElementById('support').innerText = "SUPPORTO";
            document.getElementById('title-trailer').innerText = string_it[3];
            document.getElementById('form-google').innerText = "CLICCA QUI PER SEGNALARE I TUOI ERRORI";
            document.getElementById('screen').innerText = string_it[6];
            document.getElementById('contact_people').innerText = string_it[5];
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

    for (let i = 1; i < 17; i++){
        document.getElementById("f" + i).innerText = temp[i+5];
    }


}

//CARICA LE IMMAGINI DELLA SEZIONE SCREENSHOT
function loadImage() {

    var card = document.getElementById("slider-item");
    var insideCard = document.createElement('div');
    insideCard.className = "item active";

    for (var i = 0; i < 18; i++) {
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

        /*DA CANCELLARE POI*/
        $(".modal-body").css({
            "background-color" : "black",
            "color" : "white"
        });

        $(".quest").css({
            "color" : "white"
        });

        $(".ans").css({
            "color" : "white"
        });

        $("#fast-summary").css({
            "background" : "black",
            "color" : "white"
        });

        $("#swap-btn").css({
            "background" : "black",
            "color" : "white",
            "border" : "2px solid white"
        });

        $(".modal-header").css({
            "background-color" : "black",
            "color" : "white",
            "border" : "1px solid white",
        });
        /*DA CANCELLARE POI*/

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

        $(".close-button:hover").css({
            "color" : "black",
            "background-color": "white"

        });

        $(".close-button").css({
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

        $(".section-site").css({
            "border": "1px solid white",
            "color": "white",
            "background": "black"
        });

        $(".text-section").css({
            "color": "white"
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

        $("#credit-site").css({
            "background-color" : "black"
        });

        $("#credit-site-parag").css({
            "color" : "white"
        });

    }

    else{

        localStorage.setItem('darkMode', false);

        /*DA CANCELLARE POI*/
        $(".modal-body").css({
            "background-color" : "white",
            "color" : "black"
        });

        $("#fast-summary").css({
            "background" : "white",
            "color" : "black"
        });

        $(".section-site").css({
            "border": "1px solid black",
            "color": "black",
            "background": "white"
        });

        $(".quest").css({
            "color" : "black"
        });

        $(".ans").css({
            "color" : "black"
        });

        $(".text-section").css({
            "color": "black"
        });

        $(".modal-header").css({
            "background-color" : "white",
            "color" : "black",
            "border" : "1px solid black",
        });
        /*DA CANCELLARE POI*/

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

        $(".close-button").css({
            "color" : "black"
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

        $("#credit-site").css({
            "background-color" : "white"
        });

        $("#credit-site-parag").css({
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
        "Ci sembrava opportuno permettere anche a chi non conosce l'inglese, di godere di questo splendido titolo. Per installare la traduzione, " +
        "basta cliccare sul tasto sopra questa sezione e scegliere l'installer appropriato per il proprio sistema operativo. Se avete dubbi o problemi, " +
        "potete accedere al server discord, oppure consultare la sezione supporto per maggiori delucidazioni!",
        /*QUA CI VANNO LA DATA E POI LA NOVITA'*/
        "31/03/2022",
        "Oggi è stata rilasciata la sezione FAQ! Nel frattempo, anche dopo l'uscita della versione 1.25, " +
        "siamo a lavoro per rilasciare quella che speriamo sia l'ultima versione, riveduta e corretta anche grazie al vostro contributo! " +
        "Grazie per i 2500+ download, ci state ripagando di tutti gli sforzi. <3",
        /*SEZIONE CONTATTI*/
        "Hai riscontrato dei problemi con l'installer, con il sito oppure hai degli errori da riportare? " +
        "Clicca sul pulsante alla fine di questa sezione, per segnalare gli errori tramite un form di Google. " +
        "Per richieste più formali, è disponibile anche la nostra email ufficiale:",

        /*SEZIONE COPYRIGHT*/
        "Tutti i marchi registrati, i nomi relativi a persone, cose o luoghi presenti in qualunque forma all'interno del sito appartengono ai legittimi proprietari (OMOCAT, LLC). " +
        "Questa è una traduzione non ufficiale  e non a scopo di lucro, senza l'intenzione di snaturare o denigrare l'indirizzo originale del brand. " +
        "In seguito a qualsiasi sollecitazione da parte del detentore della proprietà intellettuale siamo disposti ad entrare in contatto.",

        /*FAQ*/
        "La mod è utilizzabile con la versione craccata del gioco?",
        "No, la nostra mod non è compatibile con la versione pirata del gioco. " +
        "Inoltre, non supportiamo in alcun modo la pirateria e non siamo responsabili di malfunzionamenti o danni arrecati alle vostre proprietà.\n\n" ,

        "L'utilizzo della mod altera o esclude l'ottenimento di trofei e obiettivi?" ,
        "No, questa mod non altera in nessun modo l'ottenimento dei trofei, esattamente come non corrompe i salvataggi o altro.\n\n" ,

        "Si possono usare altre mod insieme alla mod di traduzione italiana?",
        "Consigliamo di no. Visto che la nostra mod sostituisce la maggior parte dei file di gioco, potrebbero esserci "+
        "parti non tradotte o altri problemi.\n\n",

        "L'installer non funziona/ da problemi, cosa posso fare?" ,
        "Per qualsiasi malfunzionamento, si prega di contattarci alla nostra mail presente qua sotto, entrare nel nostro server discord, " +
        "oppure mandare una richiesta nel form google, facendo attenzione ad inserire la propria mail (Altrimenti non possiamo ricontattarvi!)\n\n" ,


        "ERRORI DOPO AVER INSTALLATO LA MOD" ,

        "- Errore: Invalid key lengh - " ,
        "È stato avviato il gioco direttamente dall'eseguibile (omori.exe) e non tramite il " +
        "collegamento reso creato da Steam (o tramite la pagina di gioco). In entrambi i casi la soluzione è avviare il gioco da Steam.\n\n" ,

        "- Errore: Invalid IV lengh - " ,
        "Quest'errore è causato da un errore nei file di gioco non meglio specificato. Consigliamo di " +
        "reinstallare il gioco, facendo prima attenzione a fare un backup della cartella \"save\" presente in \"Omori/www/\".\n\n" ,

        "- Errore: ENOENT, no such file or directory - " ,
        "Errore causato dalla mancanza della cartella \"save\"" +
        " all'interno dei file di gioco. Avvia il gioco una prima volta, poi installa la mod e il tutto dovrebbe procedere senza intoppi.\n\n" ,

        "Nel caso in cui le informazioni non siano state molto chiare o aveste bisogno di ulteriore supporto, " +
        "siano sempre disponibili, sia tramite discord, sia tramite email a darvi una mano!" ,

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
        "31/03/2022",
        "Today the FAQ section has been released! Meanwhile, even after the release of version 1.25, " +
        "we are working to release what we hope will be the last version, revised and corrected also thanks to your contribution! " +
        "Thanks for the 2500+ downloads, you are repaying us for all our efforts. <3",

    /*SEZIONE CONTATTI*/
        "Have you encountered problems with the installer, with the site or do you have any errors to report? " +
        "Click on the button at the end of this section, to report errors via a Google form. " +
        "For more formal requests, our official email is also available:",

        /*SEZIONE COPYRIGHT*/
        "All trademarks registered, names of people, thing and places mentioned in the website belong to their lawful owners (OMOCAT, LLC). " +
        "This is an unofficial and non-profit translation, with no intention to change or to put down the brand’s original scope. " +
        "Following any likely suggestion from the holder of the brand’s intellectual property we are willing to be in touch.",

        /*FAQ*/
        "Is the mod usable with the cracked version of the game?",
        "No, our mod is not compatible with the pirated version of the game. " +
        "Also, we do not support piracy in any way and are not responsible for malfunctions or damage done to your property.\n\n",

        "Does using the mod alter or exclude getting trophies and achievements?",
        "No, this mod does not alter in any way the obtaining of trophies, just as it does not corrupt saves or anything else.\n\n",


        "Can other mods be used along with the Italian translation mod?",
        "We recommend no. Since our mod replaces most of the game files, there might be "+
        "untranslated parts or other problems.\n\n",

        "The installer doesn't work/gives me problems, what can I do?",
        "For any malfunction, please contact us at our email below, join our discord server, "+
        "or send a request in the google form, making sure to enter your email (Otherwise we can not contact you!).\n\n",

        "ERRORS AFTER INSTALLING THE MOD",
        "- Error: Invalid key lengh - ",
        "You started the game directly from the executable (omori.exe) and not through the "+
        "link created by Steam (or through the game page). In both cases the solution is to start the game from Steam.\n\n",

        "- Error: Invalid IV lengh - ",
        "This error is caused by an unspecified error in the game files. We recommend that you "+
        "reinstall the game, taking care first to make a backup of the \"save\" folder in \"Omori/www/\".\n\n",

        "- Error: ENOENT: no such file or directory - ",
        "Error caused by the lack of \"save\" folder"+
        " inside the game files. Start the game once, then install the mod and it should run smoothly.\n\n",

        "In case the information was not very clear or you need further support, "+
        "are always available, either via discord or email to help you out!",

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













