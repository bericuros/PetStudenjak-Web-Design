

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
    
        let bodyDiv = $("#myads")
        bodyDiv.append( $("<hr>"))
        oglasi = JSON.parse(localStorage.getItem("oglasi"));
        for(let i = oglasi.length - 1; i >= 0; i--){
            if(oglasi[i]["korisnik"] != "You") continue;
            let newRow = $("<div></div>").addClass("row")
            let newCol = $("<div></div>").addClass("offset-md-4").addClass("col-md-4").addClass("col-sm-12")
            bodyDiv.append(newRow);
            newRow.append(newCol);
            bodyDiv.append( $("<hr>"))
    
            let newDiv = $("<div></div>");
            newCol.append(newDiv);
            let newTable = $("<table></table>");
    
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
            newTd = $("<td></td>");
    
            newButton = $("<button></button>").addClass("btn").addClass("btn-warning").text("Details");
    
            newTd.append(newButton);
    
            
    
            newTr.append(newTd);
            newTd = $("<td></td>").addClass("deleteClass");
    
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
            newTd.text(komentari[i]["vreme"]).addClass("leftCom");
            newTr.append(newTd);
            newTd = $("<td></td>");
            newTd.text(komentari[i]["tekst"]).addClass("rightCom");
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
            let newCol = $("<div></div>").addClass("offset-md-4").addClass("col-md-4").addClass("col-sm-12")
            bodyDiv.append(newRow);
            newRow.append(newCol);
            // bodyDiv.append( $("<hr>"))
    
            let newDiv = $("<div></div>");
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
    
    
            newTr = $("<tr></tr>");
            newTd = $("<td></td>").attr("colspan", 2);
            newTr.append(newTd);
            newTable.append(newTr);
            newDiv.append(newTable);
    
            newDiv = $("<div></div>");
            newTd.append(newDiv);
            prikaziKomentare(newDiv, oglasi[i]["komentari"], 0);
            bodyDiv.append($("<hr>"));
        }
    }


    ucitajOglase();
    dodajOglase();
    dodajKomentare();
})