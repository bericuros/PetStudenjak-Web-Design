let oglasi = [{
    "ime" : "Dzoni",
    "opis" : "Nestao mi ker",
    "telefon" : "+381/63-566-309",
    "id" : 1,
    "korisnik": "Aki",
    "komentari" : [
        {
            "korisnik" : "koki_bg", 
            "tekst" : "Hhahahhahahahahhah",
            "vreme": "22-05-2022 17:42:17",
        },
        {
            "korisnik" : "_kolja_",
            "tekst" : "najjace hahahha xD",
            "vreme": "22-05-2022 18:00:33",
        }
    ]
}]

let poslId = 2;

function ucitajOglase(){
    if(localStorage.getItem("oglasi") == null){
        localStorage.setItem("poslId", poslId);
        localStorage.setItem("oglasi", JSON.stringify(oglasi));
    }
    else{
        oglasi = JSON.parse(localStorage.getItem("oglasi"));
        poslId = JSON.parse(localStorage.getItem("poslId"));
    }
}

function slusajDugme(){

    $("#submit").click(function(){
        
        let ime = $("#name").val();
        let opis = $("#description").val();
        let telefon = $("#phone").val();

        if(ime == "" || opis == "" || telefon == ""){
            alert("Sva polja moraju biti popunjena!")
            return;
        }

        let noviOglas = {
            "ime" : ime,
            "opis" : opis,
            "telefon" : telefon,
            "id" : poslId,
            "korisnik": "You",
            "komentari" : []
        }

        poslId++;

        localStorage.setItem("poslId", poslId)

        oglasi.push(noviOglas);

        localStorage.setItem("oglasi", JSON.stringify(oglasi));

        window.location.href = "lostpets.html";

    })

}

$(document).ready(function(){
    ucitajOglase();
    slusajDugme();
})