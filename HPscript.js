var lang = "";
var intervallo;
var changeText = window.matchMedia("(max-width: 850px)");


function swap_lang(isModal) {

    lang = document.getElementById('lang').textContent == "ITA" ? "ENG" : "ITA";
    document.getElementById('lang').innerText = lang;
    var text = text_array(lang);

    const string_en = ["SUMMARY", "THE PROJECT", "NEWS", "WATCH THE TRAILER!", "SUPPORT", "What if I want to contact someone?", "SCREENSHOTS"]
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

                if (i != 3 && i != 5 && i != 0){
                        if (document.getElementById("fast-summary").children.item(i).children.item(0) != null)
                            document.getElementById("fast-summary").children.item(i).children.item(0).innerText = string_en[i];
                    } else if(i == 0){
                    document.getElementById("fast-summary").children.item(i).innerText = string_en[i];
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
            const string_it = ["SOMMARIO", "IL PROGETTO", "AGGIORNAMENTI", "GUARDA IL TRAILER!", "SUPPORTO", "E se volessi contattare qualcuno?", "SCREENSHOT"]

            document.getElementById("intro-title").innerText = " ";
            stringa = "BENVENUTO NELLO SPAZIO BIANCO";

            for (let i = 0; i < 7; i++){

                if (i != 3 && i != 5 && i != 0){
                    if (document.getElementById("fast-summary").children.item(i).children.item(0) != null)
                        document.getElementById("fast-summary").children.item(i).children.item(0).innerText = string_it[i];
                } else if(i == 0){
                    document.getElementById("fast-summary").children.item(i).innerText = string_it[i];
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
            document.getElementById('confirm').innerText = "I understand";

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
    let saveChoice = localStorage.getItem('trans_alert');

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
        "Le versioni console (Switch, PS4 e XBox) e la versione Gamepass non sono compatibili con la traduzione, " +
        "quindi non sono disponibili in alcun modo in italiano. Ci scusiamo per il disagio.",

/*        "OMORI, con tutto il relativo materiale, è di proprietà di OMOCAT e del suo team. " +
        "Questo progetto non è assolutamente a fini di lucro, e il nostro è un team di fan volontari che desidera solamente rendere questo bellissimo gioco più accessibile ad un pubblico italiano.",*/

        /*QUA CI VA IL PROGETTO*/
        "Benvenuti sul sito della traduzione italiana NON ufficiale di OMORI, videogioco di OMOCAT disponibile su Steam. Abbiamo deciso di iniziare questo progetto perché sprovvisto di una localizzazione nella nostra lingua," +
        " e ci sembra opportuno permettere anche a chi non conosce l'inglese di godere di questo splendido titolo. " +
        "Per installare la traduzione basta cliccare sul tasto sopra questa sezione e scegliere l'installer appropriato per il " +
        "proprio sistema operativo. Se avete dubbi o problemi, potete accedere al nostro server Discord o consultare la sezione supporto " +
        "per maggiori delucidazioni!",

        /*QUA CI VANNO LA DATA E POI LA NOVITA'*/
        "01/03/2023",
        "Grazie per il supporto continuo e aver scelto la nostra traduzione! " +
        "Siamo lieti di annunciare l'uscita della nuova versione, la 1.3 che dovrebbe correggere tutti gli " +
        "errori che ci avete segnalato con il tempo! Segnaliamo inoltre che siamo passati ad un altro tipo di " +
        "programma per caricare la traduzione, più leggero e veloce! Tutto quello che dovete fare, è soltanto " +
        "installare la nuova versione, ci penserà l'installer ad aggiornare il tutto! (Senza perdere i salvataggi, ovviamente)" ,

        /*SEZIONE CONTATTI*/
        "Hai riscontrato dei problemi con l'installer, con il sito oppure hai degli errori da riportare? " +
        "Clicca sul pulsante alla fine di questa sezione per segnalare gli errori tramite un form di Google. " +
        "Per richieste più formali è disponibile anche la nostra email ufficiale:",

        /*SEZIONE COPYRIGHT*/
        "Tutti i marchi registrati e i nomi relativi a persone, cose o luoghi presenti in qualunque forma all'interno del sito appartengono" +
        " ai legittimi proprietari (OMOCAT, LLC). Questa è una traduzione non ufficiale senza scopo di lucro. " +
        "I suoi autori non intendono in alcun modo snaturare o denigrare l'indirizzo originale del brand e sono disposti " +
        "ad entrare in contatto in seguito a qualsiasi sollecitazione da parte del detentore della proprietà intellettuale.",

        /*FAQ*/
        "La mod è utilizzabile con versioni piratate del gioco?",
        "No, la nostra mod è compatibile soltanto con il gioco acquistato regolarmente su Steam. " +
        "Inoltre, non supportiamo in alcun modo la pirateria e non siamo responsabili di malfunzionamenti o danni arrecati alle vostre proprietà.\n\n",

        "È possibile ottenere regolarmente gli achievement del gioco utilizzando la mod?" ,
        "Sì, questa mod non altera in nessun modo l'ottenimento degli achievement, esattamente come non corrompe i salvataggi o altro.\n\n" ,

        "Si possono usare altre mod insieme alla traduzione italiana?",
        "Lo sconsigliamo: la nostra mod modifica molti file, quindi è probabile che causi conflitti indesiderati quando combinata con altre.\n\n",

        "L'installer non funziona/dà problemi, cosa posso fare?" ,
        "Per qualsiasi malfunzionamento vi preghiamo di contattarci alla nostra mail presente qua sotto, entrare nel nostro server Discord o mandare una richiesta tramite il form Google, " +
        "facendo attenzione ad inserire la propria mail (altrimenti non possiamo ricontattarvi!)\n\n" ,


        "ERRORI DOPO AVER INSTALLATO LA MOD" ,

        "- Errore: Invalid key lenght - " ,
        "È stato avviato il gioco direttamente dall'eseguibile (OMORI.exe) e non tramite il collegamento creato da Steam o " +
        "dalla pagina di gioco. In entrambi i casi la soluzione è avviare il gioco da Steam.\n\n" ,

        "- Errore: Invalid IV lenght - " ,
        "Si è verificato un comportamento inaspettato. Siccome questo errore può avere diverse origini, consigliamo " +
        "per andare sul sicuro di reinstallare il gioco dopo aver effettuato un backup della cartella \"save\" " +
        "presente in \"OMORI/www/\". Per accedere alla cartella OMORI è possibile cliccare con il tasto destro del mouse sul " +
        "gioco dalla libreria di Steam e selezionare l'opzione \"Sfoglia i file locali\".\n\n",

        "- Errore: ENOENT, no such file or directory - " ,
        "La cartella \"save\" non è presente all'interno dei file di gioco. " +
        "Per risolvere il problema avviate il gioco una prima volta, poi installate la mod.\n\n" ,

        "Nel caso in cui le informazioni non siano state molto chiare o aveste bisogno di ulteriore supporto siamo sempre disponibili," +
        " sia tramite Discord che tramite email a darvi una mano!" ,

    ]


    /*--ENG--*/
    eng_array = [
        /*QUA CI VA IL DISCLAIMER*/

        "The console versions (Switch, PS4 and XBox) and the Gamepass version are not compatible with the translation, " +
        "so they are not available in Italian in any way. We apologize for the inconvenience.",

/*        "OMORI, with all its relative assets, is property of OMOCAT and her team. " +
        "We are absolutely not profiting off of this project, and ours is a team of volunteer fans who just wish to make this beautiful game more accessible to an Italian public.",*/

        /*QUA CI VA IL PROGETTO*/
        "Welcome to the unofficial Italian translation website of OMORI, OMOCAT’s videogame, you can retrieve on Steam. " +
        "We started the translation of this game as the only official versions that have been announced would be the Japanese, Korean and Chinese ones. " +
        "We thought it would be nice to let non-English speakers appreciate this splendid game. " +
        "For installing the translation, you should click on this section button and choose the right installer for your operating system. If you have any doubts or problems, contact us on discord, or consult us on this supporting section for any questions!",


        /*QUA CI VANNO LA DATA E POI LA NOVITA'*/
        "01/03/2023",
        "Thank you for your continued support and for choosing our translation! " +
        "We are pleased to announce the release of the new version, 1.3, which should correct " +
        "all the errors you have reported to us over time! We also report that we have switched to a " +
        "different type of programme to upload the translation, which is lighter and faster! All you have to do," +
        " is just install the new version, the installer will take care of updating everything! (Without losing your saves, of course).",

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
        "- Error: Invalid key lenght - ",
        "You started the game directly from the executable (omori.exe) and not through the "+
        "link created by Steam (or through the game page). In both cases the solution is to start the game from Steam.\n\n",

        "- Error: Invalid IV lenght - ",
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













