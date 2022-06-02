$(document).ready(function() {
    let baneri = []
    let banner_count = null
    let max_banner_count = null

    initialization()

    function initialization() {
        initializePictures()
        initializeLocalStorage()
        printBanners()
    }

    function initializePictures() {
        baneri.push("../images/banner_2.png")
        baneri.push("../images/banner_3.png")
        baneri.push("../images/banner_4.png")
        baneri.push("../images/banner_5.png")
        baneri.push("../images/banner_5.jpg")
        baneri.push("../images/banner_6.jpg")
        baneri.push("../images/banner_7.jpg")
        baneri.push("../images/banner_8.jpg")
        baneri.push("../images/banner_9.jpg")
        baneri.push("../images/banner_10.jpg")
        max_banner_count = 10
        banner_count = 0
    }

    function initializeLocalStorage() {
        if (localStorage.getItem("baneri") == null) localStorage.setItem("baneri", baneri)
        if (localStorage.getItem("banner_count") == null) localStorage.setItem("banner_count", banner_count)
        else banner_count = parseInt(localStorage.getItem("banner_count"))

        max_banner_count = baneri.length
        banner_count %= max_banner_count
    }

    function printBanners() {
        $(".baner").attr("src", baneri[banner_count])
        banner_count = (banner_count + 1) % max_banner_count
        localStorage.setItem("banner_count", banner_count)
        setTimeout(function() {
            printBanners()
        }, 2000)
    }

})