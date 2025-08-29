document.addEventListener("DOMContentLoaded", () => {
    
    //display nav.html inside a nav-placeholder
    fetch("nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-placeholder").innerHTML = data;

            // show the list when hamburger button is clicked
            const hamburger = document.getElementById("hamburger");
            const navLinks = document.getElementById("nav-links");

            hamburger.addEventListener("click", () => {
                navLinks.classList.toggle("show");
            })
        })
        .catch(err => console.error("Error loading nav:", err));
    

    
})
