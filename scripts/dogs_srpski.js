$(document).ready(function() {
    
    let dogs = []
    let sort_type = null
    let sort_direction = null
    let search_by_name = null
    let search_by_age = null


    initialization()


    function initialization() {
        initializeObjects()
        initializeLocalStorage()
        printData()

        $("#sort_button").on({click: function() {
            $("#dogs").remove()

            sort_type = $("#sort_type").val()
            sort_direction = parseInt($("#sort_direction").val())

            sort_dogs()

            printData()
        }})

        $("#show_all_button").on({click: function() {
            $("#dogs").remove()

            search_by_name = null
            search_by_age = null

            printData()
        }})

        $("#name_search").on({"keydown": function(e) {
            if (e.key === "Enter" || e.keyCode === 13) {
                if (document.getElementById("name_search").value != "") {
                    search_by_name = document.getElementById("name_search").value
                    search_by_age = null
                    $("#dogs").remove()
                    printData()
                }
            }
        }})

        $("#age_search").on({"keydown": function(e) {
            if (e.key === "Enter" || e.keyCode === 13) {
                if (document.getElementById("age_search").value != "") {
                    search_by_name = null
                    search_by_age = parseInt(document.getElementById("age_search").value) * 12
                    $("#dogs").remove()
                    printData()
                }
            }
        }})
    }


    function initializeObjects() {
        dogs.push({
            "name": "Dalmatinac Badi",
            "description": "Dalmatinac je graciozan pas srednje veličine sa glatkim, mišićavim telom. Rep je prilično dugačak i ima blagu krivinu prema gore. Dlaka je kratka i gusta, sa smeđim ili crnim mrljama na belom. Dalmatinac jako linja, iako je dlaka kratka. Za kontrolu linjanja potrebno je često četkanje.",
            "weight": 25,
            "age": 29,
            "link": "dalmatian_srpski.html",
        })
        dogs.push({
            "name": "Korgi Koko",
            "description": "Pembroke velški korgi je pastirski pas male do srednje veličine, niskog rasta i čvrste građe. Poznat po svom nisko postavljenom telu, velikim uspravnim ušima i zdepastom repu, Pembroke takođe ima reputaciju kao divan saputnik. Pembroke velški korgi su ahondroplastični, patuljasta rasa sa skraćenim nogama.",
            "weight": 12,
            "age": 72,
            "link": "corgi_srpski.html",
        })
        dogs.push({
            "name": "Labrador Roki",
            "description": "Labrador retrivere je lako prepoznati po širokoj glavi, spuštenim ušima i velikim, izražajnim očima. Dva zaštitna znaka Lab-a su gusta, ali prilično kratka dvostruka dlaka, koja je veoma vodoodbojna, i dobro poznati „rep vidre“. Rep je debeo i čvrst i skoro ravan se spušta sa gornje linije.",
            "weight": 30,
            "age": 50,
            "link": "labrador_srpski.html",
        })

        sort_type = $("#sort_type").val()
        sort_direction = parseInt($("#sort_direction").val())

        sort_dogs()
    }

    function initializeLocalStorage() {
        if ("localStorage" in window && window.localStorage !== null) {
            ls_dogs = localStorage.getItem("dogs_srpski")
            if (ls_dogs == null) localStorage.setItem("dogs_srpski", JSON.stringify(dogs))
            else dogs = JSON.parse(localStorage.getItem("dogs_srpski"))
        }
    }

    function printData() {
        let row = $("<div></div>").addClass("row").attr("id", "dogs")
        for (let i = 0; i < dogs.length; i ++) {
            if (search_by_name != null && dogs[i]["name"].toLowerCase().indexOf(search_by_name.toLowerCase()) < 0) continue
            if (search_by_age != null && !(search_by_age - 12 <= dogs[i]["age"] && dogs[i]["age"] <= search_by_age + 12)) continue

            let col = $("<div></div>").addClass("offset-md-2").addClass("col-md-8").addClass("col-sm-12").addClass("text-left")
            let link = $("<a></a>").addClass("link_dizajn_jedan").attr("href", dogs[i]["link"])
            let name = $("<h2></h2>").append(dogs[i]["name"])
            let paragraph = $("<p></p>").append(dogs[i]["description"]).append("<br/>").append("Starost: ").append((dogs[i]["age"] - dogs[i]["age"] % 12) / 12).
                append("g").append(dogs[i]["age"] % 12).append("m").append("<br/>")
            let read_more_link = $("<a></a>").addClass("read_more").attr("href", dogs[i]["link"]).append("Vidi više")

            paragraph.append(read_more_link)
            link.append(name)
            col.append(link)
            col.append(paragraph)
            row.append(col)
        }
        $("#body").append(row)
    }

    function compare(a, b) {
        if (a[sort_type] < b[sort_type]) {
            return sort_direction
        }
        else if (a[sort_type] > b[sort_type]) {
            return -sort_direction
        }
        return 0
    }

    function sort_dogs() {
        dogs.sort(compare)
    }

})