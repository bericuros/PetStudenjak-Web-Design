$(document).ready(function() {
    let baneri = {}
    let banner_count = null
    let max_banner_count = null

    initialization()

    function initialization() {
        initializeLocalStorage()
        printBanners()
    }

    function initializeLocalStorage() {
        baneri = JSON.parse(localStorage.getItem("baneri"))
        banner_count = parseInt(localStorage.getItem("banner_count"))

        max_banner_count = baneri.length
        banner_count %= max_banner_count
    }

    function printBanners() {
        $(".baner").attr("src", baneri[banner_count]["baner"])
        banner_count = (banner_count + 1) % max_banner_count
        localStorage.setItem("banner_count", banner_count)
        setTimeout(function() {
            printBanners()
        }, 2000)
    }

})