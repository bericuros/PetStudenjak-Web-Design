$(document).ready(function() {
    
    let birds = []
    let sort_type = null
    let sort_direction = null
    let search_by_name = null
    let search_by_age = null


    initialization()


    function initialization() {
        initializeLocalStorage()
        initializeObjects()
        printData()

        $("#sort_button").on({click: function() {
            $("#birds").remove()

            sort_type = $("#sort_type").val()
            sort_direction = parseInt($("#sort_direction").val())

            sort_birds()

            printData()
        }})

        $("#show_all_button").on({click: function() {
            $("#birds").remove()

            search_by_name = null
            search_by_age = null

            printData()
        }})

        $("#name_search").on({"keydown": function(e) {
            if (e.key === "Enter" || e.keyCode === 13) {
                if (document.getElementById("name_search").value != "") {
                    search_by_name = document.getElementById("name_search").value
                    search_by_age = null
                    $("#birds").remove()
                    printData()
                }
            }
        }})

        $("#age_search").on({"keydown": function(e) {
            if (e.key === "Enter" || e.keyCode === 13) {
                if (document.getElementById("age_search").value != "") {
                    search_by_name = null
                    search_by_age = parseInt(document.getElementById("age_search").value) * 12
                    $("#birds").remove()
                    printData()
                }
            }
        }})
    }


    function initializeObjects() {
        sort_type = $("#sort_type").val()
        sort_direction = parseInt($("#sort_direction").val())
        sort_birds()
    }

    function initializeLocalStorage() {
        birds = JSON.parse(localStorage.getItem("birds"))
    }

    function printData() {
        let row = $("<div></div>").addClass("row").attr("id", "birds")
        for (let i = 0; i < birds.length; i ++) {
            if (search_by_name != null && birds[i]["name"].toLowerCase().indexOf(search_by_name.toLowerCase()) < 0) continue
            if (search_by_age != null && !(search_by_age - 12 <= birds[i]["age"] && birds[i]["age"] <= search_by_age + 12)) continue

            let col = $("<div></div>").addClass("offset-md-2").addClass("col-md-8").addClass("col-sm-12").addClass("text-left")
            let link = $("<a></a>").addClass("link_dizajn_jedan").attr("href", birds[i]["link"])
            let name = $("<h2></h2>").append(birds[i]["name"])
            let paragraph = $("<p></p>").append(birds[i]["description"]).append("<br/>").append("Age: ").append((birds[i]["age"] - birds[i]["age"] % 12) / 12).
                append("y").append(birds[i]["age"] % 12).append("m").append("<br/>")
            let read_more_link = $("<a></a>").addClass("read_more").attr("href", birds[i]["link"]).append("See more")

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

    function sort_birds() {
        birds.sort(compare)
    }

})