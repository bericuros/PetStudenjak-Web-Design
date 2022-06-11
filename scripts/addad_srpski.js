

$(document).ready(function(){

    let oglasi = []
    let poslId = 0
    
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
                $(".addad_error").text("Treba sva polja da budu popunjena!")
                return
            }
    
            if (opis.length < 20) {
                $(".addad_error").text("Opis mora da sadrži najmanje 20 karaktera!")
                return
            }
    
            if (/^\+[0-9]{11,12}$/.test(document.getElementById("phone").value) == false) {
                $(".addad_error").text("Kontakt telefon nije u ispravnom formatu! [+xxxxxxxxxxx(x)]")
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

            $("#name").val("");
            $("#description").val("");
            $("#phone").val("");
    
            //window.location.href = "lostpets.html";
            $(".addad_success").text("Oglas je uspešno dodat!")
        })
    
    }

    ucitajOglase();
    slusajDugme();
})