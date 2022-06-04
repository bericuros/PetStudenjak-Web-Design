function download(){
    const element = document.getElementById("ad_ad");
    html2pdf().from(element).save();
}

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
        newTd.text(komentari[i]["korisnik"] + ": ");
        newTr.append(newTd);
        newTd = $("<td></td>");
        newTd.text(komentari[i]["tekst"]);
        newTr.append(newTd);
        newTable.append(newTr);
    }
    komentari.reverse();
}

$(document).ready(function(){

    let oglasi = []
    let id = null
    let oglas = null
    let komentari = []

    initialization()

    function initialization() {
        initializeAd()
        initializeTable()
        initializeComments()
    }

    function initializeAd() {
        oglasi = JSON.parse(localStorage.getItem("oglasi"));
        id = parseInt(localStorage.getItem("id"))
    
        for(let i = 0; i < oglasi.length; i++){
            if(oglasi[i]["id"] == id){
                oglas = oglasi[i];
                break;
            }
        }
    }

    function initializeTable() {
        $("#ad_name_text").text("Pet name:")
        $("#ad_name").text(oglas["ime"])
        $("#ad_description_text").text("Pet description:")
        $("#ad_description").text(oglas["opis"])
        $("#ad_phone_text").text("Contact phone:")
        $("#ad_phone").text(oglas["telefon"])
    }

    function initializeComments() {
        $(".ad_comment").click(function() {
            let tekst = $("#ad_textarea").val()
            if(tekst != ""){
                let today = new Date()
                oglas["komentari"].push({
                    "korisnik" : "You",
                    "tekst" : tekst,
                    "vreme": String(today.getDate()).padStart(2, "0") + "-" + 
                        String(today.getMonth() + 1).padStart(2, "0") + "-" + today.getFullYear() + " " + 
                        String(today.getHours()).padStart(2, "0") + ":" + String(today.getMinutes()).padStart(2, "0") + ":" + 
                        String(today.getSeconds()).padStart(2, "0"),
                })
                localStorage.setItem("oglasi", JSON.stringify(oglasi))
                $("#ad_textarea").val("")
                showComments()
            }
        })
        showComments()
    }

    function showComments() {
        $(".comments_row").remove()
        komentari = oglas["komentari"]

        let table = $("#ad_all_comments")
        for (let i = komentari.length - 1; i >= 0; i --) {
            let row = $("<tr></tr>").addClass("comments_row")
            let col_zero = $("<td></td>").append(komentari[i]["vreme"])
            let col_one = $("<td></td>").append(komentari[i]["korisnik"])
            let col_two = $("<td></td>").append(komentari[i]["tekst"])

            if (komentari[i]["korisnik"] == "You") col_one.addClass("you_korisnik")
            row.append(col_zero)
            row.append(col_one)
            row.append(col_two)
            table.append(row)
        }
    }

    /*

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
  */  

})