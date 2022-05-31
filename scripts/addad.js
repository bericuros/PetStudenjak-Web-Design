let oglasi = []
let poslId = 1;

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
            alert("All fields must be filled!")
            return;
        }

        let noviOglas = {
            "ime" : ime,
            "opis" : opis,
            "telefon" : telefon,
            "id" : poslId
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