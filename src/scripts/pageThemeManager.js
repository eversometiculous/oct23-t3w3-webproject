const themes = {
    light: {
        "theme-50":"#edf0fd",
        "theme-100":"#dbe2fc",
        "theme-200":"#b8c5f9",
        "theme-300":"#94a8f6",
        "theme-400":"#708af3",
        "theme-500":"#4d6def",
        "theme-600":"#2149ec",
        "theme-700":"#1237cb",
        "theme-800":"#0e2b9f",
        "theme-900":"#0a1f72",
        "theme-950":"#08195c"
    },
    dark: {
        "theme-50":"#ecedf3",
        "theme-100":"#dadbe7",
        "theme-200":"#000000",
        "theme-300":"#000000",
        "theme-400":"#000000",
        "theme-500":"#000000",
        "theme-600":"#000000",
        "theme-700":"#000000",
        "theme-800":"#000000",
        "theme-900":"#000000",
        "theme-950":"#000000"
    }
}


/*
Light mode blue
{
	--democolor-50: #edf0fd;
	--democolor-100: #dbe2fc;
	--democolor-200: #b8c5f9;
	--democolor-300: #94a8f6;
	--democolor-400: #708af3;
	--democolor-500: #4d6def;
	--democolor-600: #2149ec;
	--democolor-700: #1237cb;
	--democolor-800: #0e2b9f;
	--democolor-900: #0a1f72;
	--democolor-950: #08195c;
}

Dark mode gray
{
	--demogray-50: #ecedf3;
	--demogray-100: #dadbe7;
	--demogray-200: #b5b8cf;
	--demogray-300: #9094b6;
	--demogray-400: #6b719e;
	--demogray-500: #51567b;
	--demogray-600: #474b6c;
	--demogray-700: #3c405d;
	--demogray-800: #32354d;
	--demogray-900: #282b3e;
	--demogray-950: #232536;
}

*/


// Update #pageThemeHeading text
function updatePageThemeHeading(){
	let headingToUpdate = document.getElementById("pageThemeHeading");
	headingToUpdate.textContent = getStoredPageTheme();
}

// Update #pageThemeButton text 
function updatePageThemeButtonText(){
	let buttonToUpdate = document.getElementById("pageThemeButton");

	let textToShow = "";

	if (getStoredPageTheme() == "dark"){
		textToShow = "Toggle To Light Mode";
	} else {
		textToShow = "Toggle to Dark Mode";
	}

	buttonToUpdate.textContent = textToShow;

}

// Add onclick to #pageThemeButton
function togglePageTheme(){
	if (getStoredPageTheme() == "dark"){
		pageTheme = "light";
	} else {
		pageTheme = "dark";
	}
	setPageThemeToStorage();
	
	applySavedTheme();
}


// Apply theme from localstorage
function applySavedTheme(){
	updatePageThemeButtonText();
	updatePageThemeHeading();
	updateCssVariables();
}


// Update CSS variables based on current theme 
function updateCssVariables(){
	let themeName = getStoredPageTheme();
	// for every CSS variable in themes["light"]
	for (const variable in themes[themeName]){
		document.documentElement.style.setProperty(`--${variable}`, themes[themeName][variable]);
		console.log("Updated CSS variable --" + variable);

	}
}


let pageThemeToggleButton = document.getElementById("pageThemeButton");
pageThemeToggleButton.addEventListener("click", togglePageTheme);

applySavedTheme();