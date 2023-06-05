const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = "bx-moon";

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'


// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";
// console.log(getCurrentIcon)

themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    // localStorage.setItem('selected-theme', getCurrentTheme())
    // localStorage.setItem('selected-icon', getCurrentIcon())
})

