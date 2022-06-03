$(document).ready(function() {
    
    let cats = []
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
            $("#cats").remove()

            sort_type = $("#sort_type").val()
            sort_direction = parseInt($("#sort_direction").val())

            sort_cats()

            printData()
        }})

        $("#show_all_button").on({click: function() {
            $("#cats").remove()

            search_by_name = null
            search_by_age = null

            printData()
        }})

        $("#name_search").on({"keydown": function(e) {
            if (e.key === "Enter" || e.keyCode === 13) {
                if (document.getElementById("name_search").value != "") {
                    search_by_name = document.getElementById("name_search").value
                    search_by_age = null
                    $("#cats").remove()
                    printData()
                }
            }
        }})

        $("#age_search").on({"keydown": function(e) {
            if (e.key === "Enter" || e.keyCode === 13) {
                if (document.getElementById("age_search").value != "") {
                    search_by_name = null
                    search_by_age = parseInt(document.getElementById("age_search").value) * 12
                    $("#cats").remove()
                    printData()
                }
            }
        }})
    }


    function initializeObjects() {
        cats.push({
            "name": "Persian Ronnie",
            "description": "Persian cats are medium-sized, usually weigh between seven and 12 pounds, and measure from 10-15 inches tall. They have a rounded head, small, rounded ears, and big eyes. They also typically have a flat and pushed-in looking face with chubby cheeks.",
            "weight": 4.2,
            "age": 37,
            "link": "persian.html",
        })
        cats.push({
            "name": "Bengal Jay",
            "description": "Bengal cats have smallish, round heads, large eyes, and striking facial marking. They have strong muscular bodies and a streamlined appearance much like their Asian Leopard ancestors. Their hind legs are longer than their front legs, which helps give them a powerful but graceful stride.",
            "weight": 3.5,
            "age": 39,
            "link": "bengal.html",
        })
        cats.push({
            "name": "Maine Coon Dexter",
            "description": "The Maine Coon is a large and sociable cat, hence its nickname, \"the gentle giant.\" It is characterized by a prominent ruff along its chest, robust bone structure, rectangular body shape, an uneven two-layered coat with longer guard hairs over a silky satin undercoat, and a long, bushy tail.",
            "weight": 7,
            "age": 98,
            "link": "mainecoon.html",
        })

        sort_type = $("#sort_type").val()
        sort_direction = parseInt($("#sort_direction").val())

        sort_cats()
    }

    function initializeLocalStorage() {
        if ("localStorage" in window && window.localStorage !== null) {
            ls_cats = localStorage.getItem("cats")
            if (ls_cats == null) localStorage.setItem("cats", JSON.stringify(cats))
            else cats = JSON.parse(localStorage.getItem("cats"))
        }
    }

    function printData() {
        let row = $("<div></div>").addClass("row").attr("id", "cats")
        for (let i = 0; i < cats.length; i ++) {
            if (search_by_name != null && cats[i]["name"].toLowerCase().indexOf(search_by_name.toLowerCase()) < 0) continue
            if (search_by_age != null && !(search_by_age - 12 <= cats[i]["age"] && cats[i]["age"] <= search_by_age + 12)) continue

            let col = $("<div></div>").addClass("offset-md-2").addClass("col-md-8").addClass("col-sm-12").addClass("text-left")
            let link = $("<a></a>").addClass("link_dizajn_jedan").attr("href", cats[i]["link"])
            let name = $("<h2></h2>").append(cats[i]["name"])
            let paragraph = $("<p></p>").append(cats[i]["description"]).append("<br/>").append("Age: ").append((cats[i]["age"] - cats[i]["age"] % 12) / 12).
                append("y").append(cats[i]["age"] % 12).append("m").append("<br/>")
            let read_more_link = $("<a></a>").addClass("read_more").attr("href", cats[i]["link"]).append("See more")

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

    function sort_cats() {
        cats.sort(compare)
    }

})