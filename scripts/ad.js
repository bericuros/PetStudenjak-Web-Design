$(document).ready(function(){
    let bodyDiv = $("#body")
    oglasi = JSON.parse(localStorage.getItem("oglasi"));
    id = parseInt(localStorage.getItem("id"))

    oglas = null;

    for(let i = 0; i < oglasi.length; i++){
        if(oglasi[i]["id"] == id){
            oglas = oglasi[i];
            break;
        }
    }

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
    newTd.text(oglas["ime"]);
    newTr.append(newTd);
    newTable.append(newTr);

    newTr = $("<tr></tr>");
    newTd = $("<td></td>");
    newTd.text("Pet description: ");
    newTr.append(newTd);
    newTd = $("<td></td>");
    newTd.text(oglas["opis"]);
    newTr.append(newTd);
    newTable.append(newTr);

    newTr = $("<tr></tr>");
    newTd = $("<td></td>");
    newTd.text("Contact phone: ");
    newTr.append(newTd);
    newTd = $("<td></td>");
    newTd.text(oglas["telefon"]);
    newTr.append(newTd);
    newTable.append(newTr);

    newDiv.append(newTable);

})