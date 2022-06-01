function prikaziKomentare(td, komentari, novi){

    $(".red").remove();
    let div = $("<div></div>");
    td.append(div);

    let newTable = $("<table></table>");
    div.append(newTable);

    komentari.reverse();
    for(let i = 0; i < komentari.length; i++){
        let newTr = $("<tr></tr>").addClass("red");
        let newTd = $("<td></td>");
        newTd.text(komentari[i]["korisnik"]);
        newTr.append(newTd);
        newTd = $("<td></td>");
        newTd.text(komentari[i]["tekst"]);
        newTr.append(newTd);
        newTable.append(newTr);
    }
    komentari.reverse();
}

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

    newDiv = $("<div></div>");
    


    newDiv.append($("<textarea>").attr("cols", 30).attr("rows", 3).attr("id", "comtext"));
        

    newDiv.append("<br>");

    let newButton = $("<button></button>").text("Add comment").attr("id", "addcomment")
    newDiv.append(newButton);

    newButton.click(function(){
        let korisnik = "You";
        let tekst = $("#comtext").val();
        if(tekst != ""){
            oglas["komentari"].push({
                "korisnik" : korisnik,
                "tekst" : tekst
            });
            localStorage.setItem("oglasi", JSON.stringify(oglasi));
            prikaziKomentare($("#comdiv"), oglas["komentari"], 1);
            $("#comtext").val("");
        }
    })

    bodyDiv.append(newDiv);

    newDiv = $("<div></div>").text("Comments:");
    bodyDiv.append(newDiv);

    newDiv = $("<div></div>").attr("id", "comdiv");
    bodyDiv.append(newDiv);
    prikaziKomentare(newDiv, oglas["komentari"], 0);
    

})