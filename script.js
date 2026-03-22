console.log("Portfolio Website Loaded");

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function() {
        alert("Navigating to " + this.textContent);
    });
});