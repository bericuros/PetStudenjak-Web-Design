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
        $(".addad_error").text("")
        $(".addad_success").text("")
        
        let ime = $("#name").val();
        let opis = $("#description").val();
        let telefon = $("#phone").val();

        if(ime == "" || opis == "" || telefon == ""){
            //alert("All fields must be filled!")
            $(".addad_error").text("You have to fill out every field!")
            return
        }

        if (opis.length < 20) {
            $(".addad_error").text("The description must have at least 20 characters!")
            return
        }

        if (/^\+[0-9]{11,12}$/.test(document.getElementById("phone").value) == false) {
            $(".addad_error").text("The phone number is not in correct format (+xxxxxxxxxxx(x)")
            return
        }

        let today = new Date()
        let noviOglas = {
            "ime" : ime,
            "opis" : opis,
            "telefon" : telefon,
            "id" : poslId,
            "korisnik": "You",
            "komentari" : [],
            "datum": String(today.getDate()).padStart(2, "0") + "-" + 
                String(today.getMonth() + 1).padStart(2, "0") + "-" + today.getFullYear() + " " + 
                String(today.getHours()).padStart(2, "0") + ":" + String(today.getMinutes()).padStart(2, "0") + ":" + 
                String(today.getSeconds()).padStart(2, "0"),
        }

        poslId++;

        localStorage.setItem("poslId", poslId)

        oglasi.push(noviOglas);

        localStorage.setItem("oglasi", JSON.stringify(oglasi));

        //window.location.href = "lostpets.html";
        $(".addad_success").text("The ad is successfully added!")
    })

}

$(document).ready(function(){
    ucitajOglase();
    slusajDugme();
})