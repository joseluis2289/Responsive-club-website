//here I'm applying few lines of JS to toggle the hamburger bar On Click

const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navBarLinks = document.getElementsByClassName("nav-links")[0]

toggleButton.addEventListener("click", () =>{
    // toggle the active class so If the active class does exist it will add it
    navBarLinks.classList.toggle("active")
}
)