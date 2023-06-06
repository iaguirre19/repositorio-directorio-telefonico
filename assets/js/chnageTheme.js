const themeButton = document.getElementById("theme-button");
const lightMode = "light-theme";
const iconTheme = "bx-moon";
const sunIcon = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () =>
    document.body.classList.contains(lightMode) ? "light" : "dark";
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light theme
    document.body.classList[selectedTheme === "light" ? "add" : "remove"](
    lightMode
  );
    themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the light theme / icon theme
    document.body.classList.toggle(lightMode);
    if (themeButton.classList.contains(iconTheme)) {
        themeButton.classList.replace(iconTheme, sunIcon);
    } else {
        themeButton.classList.replace(sunIcon, iconTheme);
    }
  // We save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

