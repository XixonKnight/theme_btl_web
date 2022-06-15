$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

async function processLoadingPage(ischangePage) {
    var loading = document.getElementById("loading-page");
    loading.classList.add("active");
    await sleep(2000);
    loading.classList.remove("active");
    if (ischangePage) {
        window.location.replace("http://127.0.0.1:5500/home/home.html");
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}