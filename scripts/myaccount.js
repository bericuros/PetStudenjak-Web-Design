let oglasi = [{
    "ime" : "Dzoni",
    "opis" : "Nestao mi ker",
    "telefon" : "+381/63-566-309",
    "id" : 1,
    "korisnik" : "Aki",
    "komentari" : [
        {
            "korisnik" : "koki_bg", 
            "tekst" : "Hhahahhahahahahhah"
        },
        {
            "korisnik" : "_kolja_",
            "tekst" : "najjace hahahha xD"
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

    let bodyDiv = $("#myads")
    bodyDiv.append( $("<hr>"))
    oglasi = JSON.parse(localStorage.getItem("oglasi"));
    for(let i = oglasi.length - 1; i >= 0; i--){
        if(oglasi[i]["korisnik"] != "You") continue;
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

        newTr = $("<tr></tr>");
        newTd = $("<td></td>");

        newButton = $("<button></button>").addClass("btn").addClass("btn-warning").text("Details");

        newTd.append(newButton);

        

        newTr.append(newTd);
        newTd = $("<td></td>");

        deleteButton = $("<button></button>").addClass("btn").addClass("btn-warning").text("Delete");

        newTd.append(deleteButton);

        newTr.append(newTd);
        newTable.append(newTr);


        newDiv.append(newTable);
        newDiv.addClass("dugmad");

        

        newButton.click(function(){
            localStorage.setItem("id", oglasi[i]["id"]);
            window.location.href = "ad.html";
        })

        deleteButton.click(function(){
            oglasi.splice(i, 1);
            localStorage.setItem("oglasi", JSON.stringify(oglasi));
            window.location.href = "deletead.html";
        })

       
    }
}

function prikaziKomentare(td, komentari, novi){
    let div = $("<div></div>");
    td.append(div);

    let newTable = $("<table></table>");
    div.append(newTable);

    komentari.reverse();
    for(let i = 0; i < komentari.length; i++){
        if(komentari[i]["korisnik"] != "You") continue;
        let newTr = $("<tr></tr>").addClass("red");
        let newTd = $("<td></td>");
        newTd.text(komentari[i]["korisnik"] + ": ");
        newTr.append(newTd);
        newTd = $("<td></td>");
        newTd.text(komentari[i]["tekst"]);
        newTr.append(newTd);
        newTable.append(newTr);
    }
    komentari.reverse();
}

function legalan(komentari){

    for(let i = 0; i < komentari.length; i++){
        if(komentari[i]["korisnik"] == "You") return true;
    }

    return false;

}

function dodajKomentare(){
    let bodyDiv = $("#mycomms")
    bodyDiv.append( $("<hr>"))
    oglasi = JSON.parse(localStorage.getItem("oglasi"));
    for(let i = oglasi.length - 1; i >= 0; i--){
        if(!legalan(oglasi[i]["komentari"])) continue;
        let newRow = $("<div></div>").addClass("row")
        let newCol = $("<div></div>").addClass("col-sm-12")
        bodyDiv.append(newRow);
        newRow.append(newCol);
        // bodyDiv.append( $("<hr>"))

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

        newDiv = $("<div></div>");
        bodyDiv.append(newDiv);
        prikaziKomentare(newDiv, oglasi[i]["komentari"], 0);
        bodyDiv.append($("<hr>"));
    }
}

$(document).ready(function(){
    ucitajOglase();
    dodajOglase();
    dodajKomentare();
})