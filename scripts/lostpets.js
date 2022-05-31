let oglasi = null;

function dodajOglase(){

    let bodyDiv = $("#body")
    bodyDiv.append( $("<hr>"))
    oglasi = JSON.parse(localStorage.getItem("oglasi"));
    oglasi.reverse();
    for(let i = 0; i < oglasi.length; i++){
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
    dodajOglase();
})