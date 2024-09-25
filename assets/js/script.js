document.getElementById("menuBar").addEventListener("click", function() {
    document.getElementById("slider").classList.add("show"); // Show the sidebar by adding the 'show' class
    document.getElementById("menuBar").style.display = "none"; // Hide the menu bar icon
    document.getElementById("closeIcon").style.display = "inline"; // Show the close icon
});

document.getElementById("closeIcon").addEventListener("click", function() {
    document.getElementById("slider").classList.remove("show"); // Hide the sidebar by removing the 'show' class
    document.getElementById("menuBar").style.display = "inline"; // Show the menu bar icon
    document.getElementById("closeIcon").style.display = "none"; // Hide the close icon
});
