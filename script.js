document.querySelector(".btn-off").addEventListener("click",
function() {
    document.querySelector(".btn-off").style.background = "red";

    document.querySelector(".btn-on").style.background = "white";

    document.querySelector(".light-wrap img").src = "lampa.png";
});

document.querySelector(".btn-on").addEventListener("click",
function() {
    document.querySelector(".btn-on").style.background = "#00ff00";

    document.querySelector(".btn-off").style.background = "white";

    document.querySelector(".light-wrap img").src = "lampa-2.png";
});