$(document).ready(function() {
    
    let dogs = []
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
        sort_type = $("#sort_type").val()
        sort_direction = parseInt($("#sort_direction").val())
        sort_dogs()
    }

    function initializeLocalStorage() {
        dogs = JSON.parse(localStorage.getItem("dogs"))
    }

    function printData() {
        let row = $("<div></div>").addClass("row").attr("id", "dogs")
        for (let i = 0; i < dogs.length; i ++) {
            if (search_by_name != null && dogs[i]["name"].toLowerCase().indexOf(search_by_name.toLowerCase()) < 0) continue
            if (search_by_age != null && !(search_by_age - 12 <= dogs[i]["age"] && dogs[i]["age"] <= search_by_age + 12)) continue

            let col = $("<div></div>").addClass("offset-md-2").addClass("col-md-8").addClass("col-sm-12").addClass("text-left")
            let link = $("<a></a>").addClass("link_dizajn_jedan").attr("href", dogs[i]["link"])
            let name = $("<h2></h2>").append(dogs[i]["name"])
            let paragraph = $("<p></p>").append(dogs[i]["description"]).append("<br/>").append("Age: ").append((dogs[i]["age"] - dogs[i]["age"] % 12) / 12).
                append("y").append(dogs[i]["age"] % 12).append("m").append("<br/>")
            let read_more_link = $("<a></a>").addClass("read_more").attr("href", dogs[i]["link"]).append("See more")

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