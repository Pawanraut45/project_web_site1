// script.js
function simulatePeopleCount() {
    return Math.floor(Math.random() * 50);
}

function updateCountDisplay(count) {
    document.getElementById('count').textContent = count;
}

function updatePeopleCount() {
    setInterval(function() {
        var peopleCount = simulatePeopleCount();
        updateCountDisplay(peopleCount);
    }, 5000); // Update every 5 seconds (adjust as needed)
}

// Start updating the count when the page loads
window.onload = function() {
    updatePeopleCount();
};
