
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
    
    function dodajOglase(){
    
        let bodyDiv = $("#body")
        oglasi = JSON.parse(localStorage.getItem("oglasi"));
        for(let i = oglasi.length - 1; i >= 0; i--){
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
            newTd.text("Pet name: ").addClass("left");
            newTr.append(newTd);
            newTd = $("<td></td>");
            newTd.text(oglasi[i]["ime"]).addClass("right");
            newTr.append(newTd);
            newTable.append(newTr);
    
            newTr = $("<tr></tr>");
            newTd = $("<td></td>");
            newTd.text("Pet description: ").addClass("left");
            newTr.append(newTd);
            newTd = $("<td></td>");
            newTd.text(oglasi[i]["opis"]).addClass("right");
            newTr.append(newTd);
            newTable.append(newTr);
    
            newTr = $("<tr></tr>");
            newTd = $("<td></td>");
            newTd.text("Contact phone: ").addClass("left");
            newTr.append(newTd);
            newTd = $("<td></td>");
            newTd.text(oglasi[i]["telefon"]).addClass("right");
            newTr.append(newTd);
            newTable.append(newTr);
    
            newTr = $("<tr></tr>");
            newTd = $("<td></td>");
            newTd.text("Date: ").addClass("left");
            newTr.append(newTd);
            newTd = $("<td></td>");
            newTd.text(oglasi[i]["datum"]).addClass("right");
            newTr.append(newTd);
            newTable.append(newTr);
    
            newTr = $("<tr></tr>");
            newTd = $("<td></td>").attr("colspan", 2);
            newButton = $("<button></button>").addClass("btn").addClass("btn-warning").text("Details");
            newTr.append(newTd);
            newTd.append(newButton);
            newTable.append(newTr);
            newDiv.append(newTable);
    
    
            newButton.click(function(){
                localStorage.setItem("id", oglasi[i]["id"]);
                window.location.href = "ad.html";
            })
    
           
        }
    }

    ucitajOglase();
    dodajOglase();
})