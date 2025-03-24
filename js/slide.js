document.getElementById("next").addEventListener("click", function() {
    window.scrollBy({
        left: 300,
        behavior: "smooth"
    });
});

document.getElementById("prev").addEventListener("click", function() {
    window.scrollBy({
        left: -300,
        behavior: "smooth"
    });
});
