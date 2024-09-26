document.getElementById("menuBar").addEventListener("click", function () {
    document.getElementById("slider").classList.add("show");
    document.getElementById("menuBar").style.display = "none";
    document.getElementById("closeIcon").style.display = "inline";
});

document.getElementById("closeIcon").addEventListener("click", function () {
    document.getElementById("slider").classList.remove("show");
    document.getElementById("menuBar").style.display = "inline";
    document.getElementById("closeIcon").style.display = "none";
});
