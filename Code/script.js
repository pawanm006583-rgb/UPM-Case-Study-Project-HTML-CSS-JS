// Default Preferences

const defaultSettings = {
theme: "light",
fontSize: "16px",
language: "en"
}

let settings = {...defaultSettings}


// DOM Elements

const themeToggle = document.getElementById("themeToggle")
const fontSize = document.getElementById("fontSize")
const language = document.getElementById("language")
const resetBtn = document.getElementById("resetBtn")
const sampleText = document.getElementById("sampleText")
const toast = document.getElementById("toast")



// Toast Notification

const showToast = (msg) => {

toast.textContent = msg
toast.style.opacity = "1"

setTimeout(() => {
toast.style.opacity = "0"
},2000)

}



// Save Preferences

const savePreferences = () => {

localStorage.setItem(
"preferences",
JSON.stringify(settings)
)

}



// Apply Preferences

const applyPreferences = () => {

document.body.className = settings.theme

document.documentElement.style.fontSize = settings.fontSize

themeToggle.checked = settings.theme === "dark"


// Language Logic

if(settings.language === "hi"){

sampleText.textContent =
"यूज़र प्रेफरेंस मैनेजर एप्लिकेशन में आपका स्वागत है"

}
else{

sampleText.textContent =
"Welcome to the User Preference Manager Application"

}

}



// Load Preferences

const loadPreferences = () => {

const savedPreferences = localStorage.getItem("preferences")

if(savedPreferences){

settings = JSON.parse(savedPreferences)

}

applyPreferences()

}



// Theme Toggle Event

themeToggle.addEventListener("change", () => {

settings.theme = themeToggle.checked ? "dark" : "light"

applyPreferences()

savePreferences()

showToast("Theme Updated")

})



// Font Size Event

fontSize.addEventListener("change", (e) => {

settings.fontSize = e.target.value

applyPreferences()

savePreferences()

showToast("Font Size Updated")

})



// Language Event

language.addEventListener("change", (e) => {

settings.language = e.target.value

applyPreferences()

savePreferences()

showToast("Language Changed")

})



// Reset Preferences

resetBtn.addEventListener("click", () => {

localStorage.removeItem("preferences")

settings = {...defaultSettings}

applyPreferences()

showToast("Preferences Reset")

})



// Run On Page Load

window.onload = loadPreferences