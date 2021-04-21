
async function swap_lang() {
    var lang = document.getElementById('lang').textContent;

    if (lang == "ITA"){
        var text = await load_page("ENG");
        document.getElementById('swap-btn').innerText = "CLICCA QUI PER CAMBIARE LINGUA";
        document.getElementById('lang').innerText = "ENG";

        document.getElementById('project-title').innerText = "THE PROJECT";
        document.getElementById('news').innerText = "NEWS";
        document.getElementById('title-trailer').innerText = "WATCH THE BETA 0.0.3 TRAILER!";



        /*Posizione 0 per disclaimer*/
        document.getElementById('disclaimer').innerText = text[0];
        /*Posizione 1 per progetto*/
        document.getElementById('project').innerText = text[1];

        document.getElementById('date').innerText = text[2].split(" - ")[0];
        document.getElementById('novita').innerText = text[2].split(" - ")[1];
    }

    else{
        var text = await load_page("ITA");
        document.getElementById('swap-btn').innerText = "CLICK HERE TO CHANGE LANGUAGE";
        document.getElementById('lang').innerText = "ITA";

        document.getElementById('project-title').innerText = "IL PROGETTO";
        document.getElementById('news').innerText = "AGGIORNAMENTI";
        document.getElementById('title-trailer').innerText = "GUARDA IL TRAILER DELLA BETA 0.0.3!"

        /*Posizione 0 per disclaimer*/
        document.getElementById('disclaimer').innerText = text[0];
        /*Posizione 1 per progetto*/
        document.getElementById('project').innerText = text[1];

        document.getElementById('date').innerText = text[2].split(" - ")[0];
        document.getElementById('novita').innerText = text[2].split(" - ")[1];
    }

}

async function load_page(lang){

    var ita = [];
    var eng = [];

    await $.get('res/paragraph/file_ita_eng.txt', function (file){
       var content_file = file.split("\n");
       var flag_ita = false;
       var flag_eng = false;

       for (var i = 0; i < content_file.length; i++) {
           if(content_file[i] != "\r" && content_file[i] != ""){

               if(content_file[i] == "--ITA--\r"){
                   flag_ita = true;
                   flag_eng = false;
                   continue;
               }

               if(content_file[i] == "--ENG--\r"){
                   flag_eng = true;
                   flag_ita = false;
                   continue;
               }

               if(flag_ita)
                   ita.push(content_file[i]);

               if(flag_eng)
                   eng.push(content_file[i]);

           }
       }
    });

    /*Posizione 0 per disclaimer*/
    document.getElementById('disclaimer').innerText = ita[0];
    /*Posizione 1 per progetto*/
    document.getElementById('project').innerText = ita[1];
    /*Posizione 2 per AGGIORNAMENTI*/
    document.getElementById('date').innerText = ita[2].split(" - ")[0];
    document.getElementById('novita').innerText = ita[2].split(" - ")[1];

    loadImage();

    if( lang == "ITA")
    return ita;

    else
        return eng;

}

function loadImage() {
    var card = document.createElement('div');
    for (var i = 0; i < 6; i++) {
        var img = document.createElement('img');
        img.src = "res/screenshot/Cattura" + i + ".PNG";

        document.getElementById("colonna" + i % 2).appendChild(img);
    }
}

/*DA COMPLETARE PER TORNARE ALLA WHITE MODE MA FUNZIONA*/
function darkMode() {

    $("#lightbulb").attr("src", "res/unnamed.gif");

    $("#italian").css({
        "webkit-filter" : "invert(100%)"
    });

    $("#big-logo").css({
        "webkit-filter" : "invert(100%)"
    });
}

function showDisclaimer() {
    let saveChoice = localStorage.getItem('preference');

    if(!saveChoice){
    /*Se preferenza non c'e', visualizza il modal*/  /*attivo l'opacità'*/

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


