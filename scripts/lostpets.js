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

function dodajOglase(){

    let bodyDiv = $("#body")
    bodyDiv.append( $("<hr>"))
    oglasi = JSON.parse(localStorage.getItem("oglasi"));
    for(let i = oglasi.length - 1; i >= 0; i--){
        let newRow = $("<div></div>").addClass("row")
        let newCol = $("<div></div>").addClass("col-sm-12")
        bodyDiv.append(newRow);
        newRow.append(newCol);
        bodyDiv.append( $("<hr>"))

        let newDiv = $("<div></div>");
        newCol.append(newDiv);
        let newTable = $("<table></table>");

        let newTr = $("<tr></tr>");
        let newTd = $("<td></td>");
        newTd.text("Pet name: ");
        newTr.append(newTd);
        newTd = $("<td></td>");
        newTd.text(oglasi[i]["ime"]);
        newTr.append(newTd);
        newTable.append(newTr);

        newTr = $("<tr></tr>");
        newTd = $("<td></td>");
        newTd.text("Pet description: ");
        newTr.append(newTd);
        newTd = $("<td></td>");
        newTd.text(oglasi[i]["opis"]);
        newTr.append(newTd);
        newTable.append(newTr);

        newTr = $("<tr></tr>");
        newTd = $("<td></td>");
        newTd.text("Contact phone: ");
        newTr.append(newTd);
        newTd = $("<td></td>");
        newTd.text(oglasi[i]["telefon"]);
        newTr.append(newTd);
        newTable.append(newTr);

        newDiv.append(newTable);

        newButton = $("<button></button>").addClass("btn").addClass("btn-warning").text("Details");

        newDiv.append(newButton);

        newButton.click(function(){
            localStorage.setItem("id", oglasi[i]["id"]);
            window.location.href = "ad.html";
        })

       
    }
}

$(document).ready(function(){
    ucitajOglase();
    dodajOglase();
})