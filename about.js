// Return a custom greeting based on the time of day
function getGreeting() {
    const now = new Date();
    const hour = now.getHours();

    if (hour < 12) {
        return "Good morning! Hope you have a blessed Moring.";
    } else if (hour < 18) {
        return "Good afternoon! Hope you have a blessed Afternoon.";
    } else {
        return "Good evening! Hope you have a blessed Evening.";
    }
}

// When the page is loaded, put the greeting into the box
document.addEventListener("DOMContentLoaded", function () {
    const box = document.getElementById("greeting-box");
    if (box) {
        box.textContent = getGreeting();
    }
});
