$(document).ready(function() {

    dodajOglase()

    function dodajOglase(){
        let bodyDiv = $("#body")
        oglasi = JSON.parse(localStorage.getItem("oglasi"));
        for(let i = oglasi.length - 1; i >= oglasi.length - 3; i--){
            bodyDiv = $("#body")
            let newRow = $("<div></div>").addClass("row")
            let newCol = $("<div></div>").addClass("offset-md-4").addClass("col-md-4").addClass("col-sm-12").append("<hr/>")
            bodyDiv.append(newRow);
            newRow.append(newCol);

            let newDiv = $("<div></div>").addClass("tableClass");
            newCol.append(newDiv);
            let newTable = $("<table></table>").addClass("text-center");

            let newTr = $("<tr></tr>");
            let newTd = $("<td></td>");
            newTd.text("Ime: ").addClass("left");
            newTr.append(newTd);
            newTd = $("<td></td>");
            newTd.text(oglasi[i]["ime"]).addClass("right");
            newTr.append(newTd);
            newTable.append(newTr);

            newTr = $("<tr></tr>");
            newTd = $("<td></td>");
            newTd.text("Opis: ").addClass("left");
            newTr.append(newTd);
            newTd = $("<td></td>");
            newTd.text(oglasi[i]["opis"]).addClass("right");
            newTr.append(newTd);
            newTable.append(newTr);

            newTr = $("<tr></tr>");
            newTd = $("<td></td>");
            newTd.text("Kontakt telefon: ").addClass("left");
            newTr.append(newTd);
            newTd = $("<td></td>");
            newTd.text(oglasi[i]["telefon"]).addClass("right");
            newTr.append(newTd);
            newTable.append(newTr);

            newTr = $("<tr></tr>");
            newTd = $("<td></td>");
            newTd.text("Datum: ").addClass("left");
            newTr.append(newTd);
            newTd = $("<td></td>");
            newTd.text(oglasi[i]["datum"]).addClass("right");
            newTr.append(newTd);
            newTable.append(newTr);

            newTr = $("<tr></tr>");
            newTd = $("<td></td>").attr("colspan", 2);
            newButton = $("<button></button>").addClass("btn").addClass("btn-warning").text("Detalji");
            newTr.append(newTd);
            newTd.append(newButton);
            newTable.append(newTr);
            newDiv.append(newTable);


            newButton.click(function(){
                localStorage.setItem("id", oglasi[i]["id"]);
                window.location.href = "ad_srpski.html";
            })
        }
    }
})